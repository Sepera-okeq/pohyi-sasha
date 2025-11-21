export const locales = ['en', 'ru', 'kz'] as const;
export const defaultLocale = 'ru' as const;
export type Locale = (typeof locales)[number];
