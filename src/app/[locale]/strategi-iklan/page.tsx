import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getPageMetadata } from "@/lib/metadata";
import { AdsStrategySection } from "@/components/sections/AdsStrategySection";
import { CTASection } from "@/components/sections/CTASection";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getPageMetadata(locale as Locale, "ads");
}

export default function AdsStrategyPage() {
  return (
    <>
      <AdsStrategySection />
      <CTASection />
    </>
  );
}
