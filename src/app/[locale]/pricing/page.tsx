import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getPageMetadata } from "@/lib/metadata";
import { PricingSection } from "@/components/sections/PricingSection";
import { PricingFaqSection } from "@/components/sections/PricingFaqSection";
import { CTASection } from "@/components/sections/CTASection";
import { PricingPageHeader } from "@/components/pages/PageHeaders";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getPageMetadata(locale as Locale, "pricing");
}

export default function PricingPage() {
  return (
    <>
      <PricingPageHeader />
      <PricingSection showHeader={false} />
      <PricingFaqSection />
      <CTASection />
    </>
  );
}
