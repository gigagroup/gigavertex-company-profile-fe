import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PricingSection } from "@/components/sections/PricingSection";
import { PricingFaqSection } from "@/components/sections/PricingFaqSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Harga",
  description:
    "Paket subscription fleksibel Giga Vertex — Starter, Professional, dan Enterprise untuk setiap kebutuhan.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        badge="Harga"
        title="Paket & Harga"
        description="Pilih paket yang tepat. Upgrade atau downgrade kapan saja."
      />
      <PricingSection showHeader={false} />
      <PricingFaqSection />
      <CTASection />
    </>
  );
}
