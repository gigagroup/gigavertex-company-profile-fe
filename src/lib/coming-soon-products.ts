import { assets } from "@/lib/assets";
import type { Locale } from "@/i18n/config";

const { intervoAi, lingoraAi, slimoraAi, viraloAi } = assets.images.products;

const comingSoonProductsId = [
  {
    name: "Intervo AI",
    icon: "Brain",
    image: intervoAi,
    category: "Interview berbasis AI",
    summary:
      "Software simulasi interview — semua pertanyaan dan jawaban interview dijawab oleh AI.",
    description:
      "Intervo AI adalah platform berbasis AI yang membantu kandidat berlatih interview kerja. AI mensimulasikan sesi wawancara lengkap, memberikan jawaban cerdas, dan membantu Anda lebih percaya diri sebelum hari H.",
    features: ["Simulasi interview", "Jawaban AI", "Persiapan karier"],
    badge: "Segera Hadir",
    comingSoon: true as const,
  },
  {
    name: "Lingora AI",
    icon: "Sparkles",
    image: lingoraAi,
    category: "Belajar bahasa & percakapan",
    summary:
      "Software belajar semua bahasa — latihan speaking dan conversation dengan AI.",
    description:
      "Lingora AI adalah platform pembelajaran bahasa berbasis AI untuk latihan speaking dan percakapan sehari-hari. Pilih bahasa apa pun, berdialog dengan tutor AI, dan tingkatkan kefasihan berbicara kapan saja.",
    features: ["Speaking practice", "Percakapan AI", "Multi-bahasa"],
    badge: "Segera Hadir",
    comingSoon: true as const,
  },
  {
    name: "Slimora AI",
    icon: "LineChart",
    image: slimoraAi,
    category: "Asisten diet & nutrisi",
    summary:
      "Software AI yang membantu orang yang sedang diet — rencana makan, tracking, dan motivasi harian.",
    description:
      "Slimora AI membantu perjalanan diet Anda dengan rekomendasi nutrisi personal, tracking kalori, dan panduan harian dari AI. Tetap konsisten dan capai target berat badan dengan lebih terstruktur.",
    features: ["Rencana diet AI", "Tracking nutrisi", "Motivasi harian"],
    badge: "Segera Hadir",
    comingSoon: true as const,
  },
  {
    name: "Viralo AI",
    icon: "Video",
    image: viraloAi,
    category: "Auto clipper video short",
    summary:
      "Software AI untuk auto clipper — ubah video panjang menjadi klip short viral secara otomatis.",
    description:
      "Viralo AI menganalisis video panjang Anda dan memotong momen terbaik menjadi klip short siap publikasi. Hemat waktu editing dan tingkatkan reach di platform short-form video.",
    features: ["Auto clipping", "Deteksi momen viral", "Format short video"],
    badge: "Segera Hadir",
    comingSoon: true as const,
  },
];

const comingSoonProductsEn = [
  {
    name: "Intervo AI",
    icon: "Brain",
    image: intervoAi,
    category: "AI-powered interviews",
    summary:
      "Interview simulation software — AI handles every interview question and answer.",
    description:
      "Intervo AI is an AI-powered platform that helps candidates practice job interviews. AI simulates full interview sessions, provides smart answers, and builds confidence before the big day.",
    features: ["Interview simulation", "AI answers", "Career prep"],
    badge: "Coming Soon",
    comingSoon: true as const,
  },
  {
    name: "Lingora AI",
    icon: "Sparkles",
    image: lingoraAi,
    category: "Language learning & conversation",
    summary:
      "Learn any language — speaking practice and conversation with AI.",
    description:
      "Lingora AI is an AI language learning platform for daily speaking and conversation practice. Choose any language, chat with an AI tutor, and improve fluency anytime.",
    features: ["Speaking practice", "AI conversation", "Multi-language"],
    badge: "Coming Soon",
    comingSoon: true as const,
  },
  {
    name: "Slimora AI",
    icon: "LineChart",
    image: slimoraAi,
    category: "Diet & nutrition assistant",
    summary:
      "AI software that helps people on a diet — meal plans, tracking, and daily motivation.",
    description:
      "Slimora AI supports your diet journey with personalized nutrition recommendations, calorie tracking, and daily AI guidance. Stay consistent and reach your weight goals more structured.",
    features: ["AI meal plans", "Nutrition tracking", "Daily motivation"],
    badge: "Coming Soon",
    comingSoon: true as const,
  },
  {
    name: "Viralo AI",
    icon: "Video",
    image: viraloAi,
    category: "Short video auto clipper",
    summary:
      "AI software for auto clipping — turn long videos into viral short clips automatically.",
    description:
      "Viralo AI analyzes your long-form videos and cuts the best moments into publish-ready short clips. Save editing time and boost reach on short-form video platforms.",
    features: ["Auto clipping", "Viral moment detection", "Short-form format"],
    badge: "Coming Soon",
    comingSoon: true as const,
  },
];

export function getComingSoonProducts(locale?: Locale) {
  return locale === "en" ? comingSoonProductsEn : comingSoonProductsId;
}

export type ComingSoonProduct = (typeof comingSoonProductsId)[number];
