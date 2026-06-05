import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getPageMetadata } from "@/lib/metadata";
import { MarketSection } from "@/components/sections/MarketSection";
import { CTASection } from "@/components/sections/CTASection";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getPageMetadata(locale as Locale, "market");
}

export default function MarketPage() {
  return (
    <>
      <MarketSection />
      <CTASection />
    </>
  );
}
