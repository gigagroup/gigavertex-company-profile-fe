import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getPageMetadata } from "@/lib/metadata";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactPageHeader } from "@/components/pages/PageHeaders";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getPageMetadata(locale as Locale, "contact");
}

export default function ContactPage() {
  return (
    <>
      <ContactPageHeader />
      <ContactSection showHeader={false} />
      <CTASection />
    </>
  );
}
