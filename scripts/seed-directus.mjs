const base = process.env.DIRECTUS_URL || 'http://localhost:8055';
const email = process.env.DIRECTUS_ADMIN_EMAIL || 'admin@example.local';
const password = process.env.DIRECTUS_ADMIN_PASSWORD || 'change-me-before-use';

async function request(path, init = {}, token) {
  const response = await fetch(`${base}${path}`, {
    ...init,
    headers: { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}), ...init.headers },
  });
  if (!response.ok) throw new Error(`${response.status} ${path}: ${await response.text()}`);
  return response.json();
}

const login = await request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
const token = login.data.access_token;

const collections = [
  ['drug_articles', '药物资料'],
  ['cancer_articles', '癌症知识'],
  ['consultation_entries', '咨询记录'],
  ['site_settings', '网站设置'],
];

const existing = await request('/collections?limit=-1', {}, token);
for (const [collection, note] of collections) {
  if (!existing.data.some((item) => item.collection === collection)) {
    await request('/collections', { method: 'POST', body: JSON.stringify({ collection, meta: { note }, schema: {} }) }, token);
  }
}

const articleFields = [
  ['status', 'string'], ['slug', 'string'], ['eyebrow', 'string'], ['title', 'string'], ['summary', 'text'],
  ['category', 'string'], ['updatedAt', 'date'], ['readingTime', 'string'], ['intro', 'text'], ['sections', 'json'], ['sources', 'json'],
];
for (const collection of ['drug_articles', 'cancer_articles']) {
  const fields = await request(`/fields/${collection}`, {}, token);
  for (const [field, type] of articleFields) {
    if (!fields.data.some((item) => item.field === field)) {
      await request(`/fields/${collection}`, { method: 'POST', body: JSON.stringify({ field, type, meta: { interface: type === 'json' ? 'input-code' : type === 'text' ? 'input-multiline' : 'input' } }) }, token);
    }
  }
}
console.log('Directus collections are ready. Add or import content in the Directus studio.');
