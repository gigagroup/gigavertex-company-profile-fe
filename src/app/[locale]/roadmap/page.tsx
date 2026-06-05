import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getPageMetadata } from "@/lib/metadata";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { CTASection } from "@/components/sections/CTASection";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getPageMetadata(locale as Locale, "roadmap");
}

export default function RoadmapPage() {
  return (
    <>
      <RoadmapSection />
      <CTASection />
    </>
  );
}
