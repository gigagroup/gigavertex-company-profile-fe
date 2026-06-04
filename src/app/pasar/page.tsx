import type { Metadata } from "next";
import { MarketSection } from "@/components/sections/MarketSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Pasar",
  description:
    "Jangkauan pasar PT Giga Vertex Technology — Indonesia, Asia Tenggara, Amerika, Oseania, Inggris, dan Eropa.",
};

export default function MarketPage() {
  return (
    <>
      <MarketSection />
      <CTASection />
    </>
  );
}
