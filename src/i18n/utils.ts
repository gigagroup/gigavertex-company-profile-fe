import { type Locale, locales } from "@/i18n/config";

export function getLocalizedHref(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

export function pathnameWithoutLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname;
}

export function switchLocalePath(pathname: string, newLocale: Locale): string {
  const path = pathnameWithoutLocale(pathname);
  return getLocalizedHref(path, newLocale);
}
