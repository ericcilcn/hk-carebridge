import sharp from 'sharp';
import { copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = join(root, 'assets', 'brand', 'hk-carebridge-mark-source.png');
const horizontalSourcePath = join(root, 'assets', 'brand', 'hk-carebridge-logo-horizontal-source.png');
const outputDirectory = join(root, 'public', 'images');
const ink = { r: 32, g: 42, b: 41 };

// The supplied raster contains a pale checkerboard rather than real transparency.
// Convert luminance to alpha so the black mark remains exact while every pale tile
// disappears. The short transition preserves anti-aliased edges without a halo.
const source = sharp(sourcePath).removeAlpha();
const { width, height } = await source.metadata();
const alpha = await source
  .clone()
  .greyscale()
  .linear(-1.275, 280.5)
  .toColourspace('b-w')
  .raw()
  .toBuffer();

const cleanedMark = await sharp({
  create: {
    width,
    height,
    channels: 3,
    background: ink,
  },
})
  .joinChannel(alpha, { raw: { width, height, channels: 1 } })
  .png()
  .trim({ background: { ...ink, alpha: 0 }, threshold: 1 })
  .toBuffer();

const markForSquare = await sharp(cleanedMark)
  .resize({ width: 840, height: 840, fit: 'inside', withoutEnlargement: false })
  .png()
  .toBuffer();
const squareMeta = await sharp(markForSquare).metadata();

const squareCanvas = sharp({
  create: {
    width: 1024,
    height: 1024,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
}).composite([
  {
    input: markForSquare,
    left: Math.round((1024 - squareMeta.width) / 2),
    top: Math.round((1024 - squareMeta.height) / 2),
  },
]);

await Promise.all([
  // The approved horizontal lockup is supplied as a finished transparent PNG.
  // Copy it unchanged so future asset builds cannot alter its type or spacing.
  copyFile(horizontalSourcePath, join(outputDirectory, 'hk-carebridge-logo-horizontal-transparent.png')),
  squareCanvas
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(join(outputDirectory, 'hk-carebridge-mark-transparent.png')),
]);

console.log('Installed the approved horizontal logo and generated the transparent HK mark.');
