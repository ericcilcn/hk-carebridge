import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const drugDir = path.join(root, 'public/images/drugs');

const jobs = [
  {
    slug: 'pembrolizumab',
    input: path.join(drugDir, 'sources/pembrolizumab-source.jpg'),
  },
  {
    slug: 'osimertinib',
    input: path.join(drugDir, 'sources/osimertinib-source.jpg'),
  },
  {
    slug: 'cyclophosphamide',
    input: path.join(drugDir, 'sources/cyclophosphamide-source.jpg'),
    crop: { left: 80, top: 80, width: 840, height: 840 },
  },
];

const sourcePreservingJobs = [
  {
    slug: 'tamoxifen',
    input: path.join(drugDir, 'sources/tamoxifen-nolvadex-source.jpg'),
    maxWidth: 1040,
    maxHeight: 610,
  },
  {
    slug: 'anastrozole',
    input: path.join(drugDir, 'sources/anastrozole-arimidex-source.png'),
    maxWidth: 1040,
    maxHeight: 620,
  },
  {
    slug: 'capivasertib',
    input: path.join(drugDir, 'sources/capivasertib-truqap-source.jpg'),
    maxWidth: 980,
    maxHeight: 700,
  },
  {
    slug: 'zolbetuximab',
    input: path.join(drugDir, 'sources/zolbetuximab-vyloy-source.jpeg'),
    maxWidth: 920,
    maxHeight: 690,
  },
];

for (const job of jobs) {
  let image = sharp(job.input, { failOn: 'warning' }).rotate();
  const metadata = await image.metadata();

  if (metadata.width !== metadata.height && !job.crop) {
    throw new Error(`${job.slug}: source must be square or have an explicit square crop`);
  }

  if (job.crop) image = image.extract(job.crop);

  const square = await image
    .resize(1000, 1000, {
      fit: 'fill',
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
    })
    .removeAlpha()
    .toBuffer();

  const output = path.join(drugDir, `${job.slug}-package-3x2-native.webp`);
  await sharp(square)
    .extend({
      left: 250,
      right: 250,
      top: 0,
      bottom: 0,
      extendWith: 'copy',
    })
    .webp({ lossless: true, effort: 6 })
    .toFile(output);

  const result = await sharp(output).metadata();
  if (result.width !== 1500 || result.height !== 1000 || result.hasAlpha) {
    throw new Error(`${job.slug}: invalid output ${result.width}x${result.height}, alpha=${result.hasAlpha}`);
  }

  console.log(`${job.slug}: ${path.relative(root, output)} (${result.width}x${result.height})`);
}

for (const job of sourcePreservingJobs) {
  const product = await sharp(job.input, { failOn: 'warning' })
    .rotate()
    .trim({ background: '#ffffff', threshold: 8 })
    .resize({
      width: job.maxWidth,
      height: job.maxHeight,
      fit: 'inside',
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
    })
    .removeAlpha()
    .toBuffer();

  const productMeta = await sharp(product).metadata();
  const output = path.join(drugDir, `${job.slug}-package-3x2-native.webp`);
  await sharp({
    create: {
      width: 1500,
      height: 1000,
      channels: 3,
      background: '#ffffff',
    },
  })
    .composite([{
      input: product,
      left: Math.round((1500 - productMeta.width) / 2),
      top: Math.round((1000 - productMeta.height) / 2),
    }])
    .webp({ lossless: true, effort: 6 })
    .toFile(output);

  const result = await sharp(output).metadata();
  if (result.width !== 1500 || result.height !== 1000 || result.hasAlpha) {
    throw new Error(`${job.slug}: invalid output ${result.width}x${result.height}, alpha=${result.hasAlpha}`);
  }

  console.log(`${job.slug}: ${path.relative(root, output)} (${result.width}x${result.height})`);
}
