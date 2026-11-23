export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];
export type LocalizedText = Record<Locale, string>;

export const pages = ['home', 'ecosystem', 'activities'] as const;
export type Page = (typeof pages)[number];

export function pagePath(locale: Locale, page: Page = 'home') {
  const prefix = locale === 'id' ? '/id' : '';
  return page === 'home' ? `${prefix}/` : `${prefix}/${page}/`;
}
