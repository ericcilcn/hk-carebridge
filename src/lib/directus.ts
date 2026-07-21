import { createDirectus, readItems, rest, staticToken } from '@directus/sdk';
import { cancerArticles, drugArticles, type Article } from '../data/content';

type Schema = {
  drug_articles: Article[];
  cancer_articles: Article[];
};

const url = import.meta.env.DIRECTUS_URL;
const token = import.meta.env.DIRECTUS_TOKEN;

const client = url
  ? token
    ? createDirectus<Schema>(url).with(staticToken(token)).with(rest())
    : createDirectus<Schema>(url).with(rest())
  : null;

async function fromDirectus(collection: keyof Schema, fallback: Article[], preserveLocalTitles = false) {
  if (!client) return fallback;
  try {
    const items = await client.request(readItems(collection, {
      filter: { status: { _eq: 'published' } } as never,
      sort: ['title'],
    }));
    if (!items.length) return fallback;
    const remoteItems = items as Partial<Article>[];
    return fallback.map((local) => {
      const remote = remoteItems.find((item) => item.slug === local.slug);
      if (!remote) return local;
      return {
        ...local,
        eyebrow: remote.eyebrow || local.eyebrow,
        title: preserveLocalTitles ? local.title : remote.title || local.title,
        summary: local.summary,
        category: remote.category || local.category,
      };
    });
  } catch {
    return fallback;
  }
}

export const getDrugArticles = () => fromDirectus('drug_articles', drugArticles, true);
export const getCancerArticles = () => fromDirectus('cancer_articles', cancerArticles, true);
