import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Ekosistem produk AI Tera Vertex — video generator, photo generator, social media scheduler, auto clipper, dan lebih banyak lagi.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        badge="Produk"
        title="Produk & Tools AI"
        description="Suite lengkap tools AI untuk kreator, marketer, dan bisnis modern."
      />
      <ProductsSection showAll />
      <CTASection />
    </>
  );
}
