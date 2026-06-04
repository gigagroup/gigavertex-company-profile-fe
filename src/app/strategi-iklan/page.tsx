import type { Metadata } from "next";
import { AdsStrategySection } from "@/components/sections/AdsStrategySection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Strategi Iklan",
  description:
    "Strategi Meta Ads, TikTok Ads, dan Google Ads PT Giga Vertex Technology — mesin akuisisi pelanggan dalam Growth Ecosystem.",
};

export default function AdsStrategyPage() {
  return (
    <>
      <AdsStrategySection />
      <CTASection />
    </>
  );
}
