import { assets } from "@/lib/assets";

export type AboutIllustrationVariant =
  | "intro"
  | "mission"
  | "innovation"
  | "integrity"
  | "collaboration"
  | "sustainability"
  | "agility";

type AboutIllustrationAsset = {
  src: string;
  alt: string;
  media?: "image" | "video";
};

/** Ilustrasi flat vector — intro memakai video Growth Ecosystem */
export const aboutIllustrationAssets: Partial<
  Record<AboutIllustrationVariant, AboutIllustrationAsset>
> = {
  intro: {
    src: assets.videos.growthEcosystem,
    alt: "Growth Ecosystem — pertumbuhan bisnis dan ekosistem digital",
    media: "video",
  },
};

export const aboutIllustrationLabels: Record<AboutIllustrationVariant, string> = {
  intro: "Growth Ecosystem",
  mission: "Misi dan strategi",
  innovation: "Inovasi AI",
  integrity: "Integritas",
  collaboration: "Kolaborasi",
  sustainability: "Keberlanjutan",
  agility: "Agilitas",
};

export { assets };
