import type { Locale } from "@/i18n/config";
import { about as aboutEn } from "@/i18n/en/about";
import { career as careerEn } from "@/i18n/en/career";
import { adsStrategy as adsEn } from "@/i18n/en/ads-strategy";
import { aiIntelligence as aiEn } from "@/i18n/en/ai-intelligence";
import { constants as constantsEn } from "@/i18n/en/constants";
import { markets as marketsEn } from "@/i18n/en/markets";
import { roadmap as roadmapEn } from "@/i18n/en/roadmap";
import { ui as uiEn } from "@/i18n/en/ui";
import { getAbout } from "@/lib/about";
import { getCareer } from "@/lib/career";
import { getAdsStrategy } from "@/lib/ads-strategy";
import { getAiIntelligence } from "@/lib/ai-intelligence";
import { getConstants } from "@/lib/constants";
import { getComingSoonProducts } from "@/lib/coming-soon-products";
import { getMarkets } from "@/lib/markets";
import { getRoadmap } from "@/lib/roadmap";
import { getUi } from "@/lib/ui";
import { getLegal } from "@/lib/legal";
import { legalEn } from "@/i18n/en/legal";
import { assets } from "@/lib/assets";

const { products: productImages } = assets.images;
const pillarImages = [
  productImages.autonix,
  productImages.terabyte,
  productImages.giga,
  productImages.newtonAi,
  productImages.growi,
];

function buildEnglishContent() {
  const ai = {
    ...aiEn,
    aiEcosystemPillars: aiEn.aiEcosystemPillars.map((pillar, index) => ({
      ...pillar,
      image: pillarImages[index],
    })),
  };

  const constants = {
    ...constantsEn,
    products: ai.aiEcosystemPillars.map((pillar) => ({
      icon: pillar.icon,
      image: pillar.image,
      name: pillar.name,
      category: pillar.focus,
      summary: pillar.summary,
      description: pillar.description,
      features: pillar.features,
      badge: pillar.badge,
      users: pillar.users,
    })),
    comingSoonProducts: getComingSoonProducts("en"),
  };

  return {
    constants,
    about: {
      ...aboutEn,
      aboutFounder: {
        ...aboutEn.aboutFounder,
        image: assets.images.founderCeo,
      },
    },
    ai,
    roadmap: {
      ...roadmapEn,
      roadmapFounder: {
        ...roadmapEn.roadmapFounder,
        image: assets.images.founderCeo,
      },
    },
    markets: marketsEn,
    ads: adsEn,
    career: careerEn,
    legal: legalEn,
    ui: uiEn,
  };
}

export function getContent(locale: Locale) {
  if (locale === "en") {
    return buildEnglishContent();
  }

  return {
    constants: getConstants(),
    about: getAbout(),
    ai: getAiIntelligence(),
    roadmap: getRoadmap(),
    markets: getMarkets(),
    ads: getAdsStrategy(),
    career: getCareer(),
    legal: getLegal(),
    ui: getUi(),
  };
}

export type Content = ReturnType<typeof getContent>;
