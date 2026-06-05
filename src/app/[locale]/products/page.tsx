import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getPageMetadata } from "@/lib/metadata";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CTASection } from "@/components/sections/CTASection";
import { ProductsPageHeader } from "@/components/pages/PageHeaders";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getPageMetadata(locale as Locale, "products");
}

export default function ProductsPage() {
  return (
    <>
      <ProductsPageHeader />
      <ProductsSection showHeader={false} />
      <FeaturesSection />
      <CTASection />
    </>
  );
}
