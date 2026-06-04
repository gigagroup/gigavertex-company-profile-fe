import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan PT Tera Vertex Technology — solusi AI, pengembangan software, website, SaaS, dan konsultasi teknologi.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Layanan"
        title="Layanan Kami"
        description="Solusi teknologi end-to-end untuk membantu bisnis Anda tumbuh di era digital."
      />
      <ServicesSection />
      <FeaturesSection />
      <CTASection />
    </>
  );
}
