import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Pelajari lebih lanjut tentang PT Giga Vertex Technology — visi, misi, nilai, dan tim di balik platform AI kami.",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
