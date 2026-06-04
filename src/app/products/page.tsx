import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Ekosistem produk SaaS Giga Vertex — Autonix, Terabyte, Giga, Newton AI, dan Growi untuk konten, video AI, dan CRM.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        badge="Produk"
        title="Produk & Platform SaaS"
        description="Lima platform SaaS dalam satu ekosistem — dirancang untuk skala dari creator hingga tim bisnis."
      />
      <ProductsSection showHeader={false} />
      <FeaturesSection />
      <CTASection />
    </>
  );
}
