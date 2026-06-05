import type { Metadata } from "next";
import { ArtificialIntelligenceSection } from "@/components/sections/ArtificialIntelligenceSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Kecerdasan Buatan",
  description:
    "Ekosistem kecerdasan buatan PT Giga Vertex Technology — generative AI, LLM, automasi, dan platform berbasis langganan (SaaS) untuk semua kalangan.",
};

export default function ArtificialIntelligencePage() {
  return (
    <>
      <ArtificialIntelligenceSection />
      <CTASection />
    </>
  );
}
