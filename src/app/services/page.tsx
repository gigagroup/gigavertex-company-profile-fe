import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ServicesProcessSection } from "@/components/sections/ServicesProcessSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Platform kecerdasan buatan (SaaS) PT Giga Vertex Technology — produk kreatif, automasi sosial media, video AI, CRM, dan multi-model studio.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Platform"
        title="Platform SaaS Kami"
        description="Ekosistem produk kecerdasan buatan berbasis langganan (SaaS) — langsung pakai, bayar bulanan, tanpa setup rumit."
      />
      <ServicesSection showHeader={false} />
      <ServicesProcessSection />
      <FeaturesSection showHeader={false} />
      <CTASection />
    </>
  );
}
