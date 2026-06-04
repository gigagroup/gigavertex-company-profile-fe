import type { Metadata } from "next";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Roadmap Growth Ecosystem 2026+ PT Giga Vertex Technology — dari fondasi Indonesia hingga ekspansi global.",
};

export default function RoadmapPage() {
  return (
    <>
      <RoadmapSection />
      <CTASection />
    </>
  );
}
