import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { IntroPreviewSection } from "@/components/sections/IntroPreviewSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { HomeExploreSection } from "@/components/sections/HomeExploreSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <IntroPreviewSection />
      <ServicesSection preview />
      <ProductsSection preview />
      <HomeExploreSection />
      <CTASection />
    </>
  );
}
