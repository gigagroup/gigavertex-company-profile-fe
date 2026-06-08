import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getContent } from "@/i18n/get-content";

type PageMetaKey =
  | "about"
  | "contact"
  | "services"
  | "products"
  | "ai"
  | "pricing"
  | "roadmap"
  | "market"
  | "ads"
  | "career"
  | "termsOfService"
  | "privacyPolicy"
  | "refundPolicy";

export function getPageMetadata(locale: Locale, key: PageMetaKey): Metadata {
  const { ui } = getContent(locale);
  const page = ui.pages[key] as { title: string; description: string };
  return {
    title: page.title,
    description: page.description,
  };
}
