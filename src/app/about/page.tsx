import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Pelajari lebih lanjut tentang PT Giga Vertex Technology — penyedia produk kecerdasan buatan (AI), perangkat lunak, dan platform berbasis langganan (SaaS).",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <StatsSection />
      <CTASection />
    </>
  );
}
