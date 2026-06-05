import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { IntroPreviewSection } from "@/components/sections/IntroPreviewSection";
import { AiHomePreviewSection } from "@/components/sections/home/AiHomePreviewSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AdsStrategyHomePreviewSection } from "@/components/sections/home/AdsStrategyHomePreviewSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { RoadmapHomePreviewSection } from "@/components/sections/home/RoadmapHomePreviewSection";
import { MarketReachSection } from "@/components/sections/MarketReachSection";
import { ContactHomePreviewSection } from "@/components/sections/home/ContactHomePreviewSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <IntroPreviewSection />
      <AiHomePreviewSection />
      <ServicesSection preview />
      <AdsStrategyHomePreviewSection />
      <ProductsSection preview />
      <RoadmapHomePreviewSection />
      <MarketReachSection />
      <ContactHomePreviewSection />
      <CTASection />
    </>
  );
}
