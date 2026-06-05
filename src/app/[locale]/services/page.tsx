import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getPageMetadata } from "@/lib/metadata";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ServicesProcessSection } from "@/components/sections/ServicesProcessSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServicesPageHeader } from "@/components/pages/PageHeaders";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getPageMetadata(locale as Locale, "services");
}

export default function ServicesPage() {
  return (
    <>
      <ServicesPageHeader />
      <ServicesSection showHeader={false} />
      <ServicesProcessSection />
      <FeaturesSection showHeader={false} />
      <CTASection />
    </>
  );
}
