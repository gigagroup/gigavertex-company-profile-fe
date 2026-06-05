export const locales = ["id", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "id";

export const localeNames: Record<Locale, string> = {
  id: "ID",
  en: "EN",
};

export const localeLabels: Record<Locale, string> = {
  id: "Indonesia",
  en: "English",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
