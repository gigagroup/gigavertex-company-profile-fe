import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getPageMetadata } from "@/lib/metadata";
import { TermsOfServicePage } from "@/components/pages/LegalPages";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getPageMetadata(locale as Locale, "termsOfService");
}

export default function Page() {
  return <TermsOfServicePage />;
}
