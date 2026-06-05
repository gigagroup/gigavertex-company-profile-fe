import { assets } from "@/lib/assets";
import type { Locale } from "@/i18n/config";
import { about as aboutEn } from "@/i18n/en/about";

const aboutId = {
  aboutIntro: {
    badge: "Tentang Kami",
    headline: "Penyedia Produk Kecerdasan Buatan & Platform SaaS untuk Indonesia dan Dunia",
    narrative:
      "PT Giga Vertex Technology adalah penyedia produk kecerdasan buatan (AI), perangkat lunak, dan platform berbasis langganan (SaaS). Kami merancang, mengembangkan, dan mengoperasikan rangkaian solusi digital — dari produksi konten kreatif hingga automasi bisnis dan CRM — yang membantu pebisnis, UMKM, kreator, dan perusahaan mengakses teknologi AI terkini secara praktis dan terukur.",
  },
  aboutVision: {
    title: "Visi Giga Vertex",
    tagline: "Menyediakan ekosistem produk kecerdasan buatan dan platform SaaS yang demokratis, inovatif, dan berdampak global",
    pillars: [
      {
        title: "AI untuk Semua",
        description:
          "Tools AI terjangkau bagi individu, UMKM, dan enterprise — bukan hanya untuk perusahaan besar.",
      },
      {
        title: "Pertumbuhan Terukur",
        description:
          "Growth ecosystem dengan produk, iklan, dan infrastruktur data yang saling mendukung secara berkelanjutan.",
      },
      {
        title: "Jangkauan Global",
        description:
          "Dari Indonesia dan ASEAN menuju pasar berbahasa Inggris dan Eropa dengan lokalisasi yang matang.",
      },
    ],
  },
  aboutMission: {
    title: "Misi Kami",
    intro: "Langkah strategis yang kami jalankan setiap hari untuk mewujudkan visi bersama.",
    items: [
      "Mengembangkan dan merilis produk kecerdasan buatan (AI) serta platform berbasis langganan (SaaS) yang relevan untuk pasar Indonesia dan global.",
      "Memberdayakan UMKM, pebisnis, dan tim kreatif dengan tools subscription yang mudah dipakai.",
      "Menyediakan infrastruktur data, CRM, dan automasi sebagai bagian dari ekosistem tools berlangganan.",
      "Menerapkan strategi akuisisi pelanggan terukur melalui Meta, TikTok, dan Google Ads.",
      "Menjaga standar keamanan data, etika AI, dan kualitas produk tertinggi.",
      "Berkolaborasi dengan mitra, kreator, dan komunitas untuk inovasi berkelanjutan.",
    ],
  },
  aboutValuesIntro: {
    title: "Tata Nilai Kami",
    description:
      "Cara kami membangun produk sama pentingnya dengan apa yang kami rilis. Nilai-nilai ini memandu setiap keputusan — dari desain fitur hingga hubungan dengan pelanggan — agar Giga Vertex tetap tepercaya, gesit, dan berorientasi hasil.",
  },
  aboutCoreValues: [
    {
      title: "Inovasi",
      description:
        "Terus mengeksplorasi model AI, arsitektur produk, dan pengalaman pengguna baru agar selalu unggul di setiap rilis.",
    },
    {
      title: "Integritas",
      description:
        "Transparan dalam privasi data, pricing, dan janji layanan — membangun kepercayaan jangka panjang dengan pengguna.",
    },
    {
      title: "Kolaborasi",
      description:
        "Bekerja sama dengan tim internal, mitra, dan komunitas pengguna untuk solusi yang benar-benar dibutuhkan pasar.",
    },
    {
      title: "Keberlanjutan",
      description:
        "Pertumbuhan bisnis yang sehat: produk bernilai, operasi efisien, dan dampak positif bagi pelaku usaha Indonesia.",
    },
    {
      title: "Agilitas",
      description:
        "Cepat belajar, cepat iterasi, dan tangguh menghadapi perubahan teknologi maupun kebutuhan pasar.",
    },
  ],
  aboutJourney: {
    title: "Jejak Langkah",
    subtitle: "Perjalanan mengembangkan dan mengoperasikan Growth Ecosystem dari fondasi lokal menuju visi global.",
    milestones: [
      {
        year: "2020",
        title: "Awal perjalanan",
        description:
          "Founder memulai visi menyediakan ekosistem produk kecerdasan buatan berbasis langganan untuk pelaku bisnis Indonesia.",
      },
      {
        year: "2024",
        title: "Giga Vertex Technology",
        description:
          "Peluncuran produk berbasis langganan (SaaS) awal, validasi pasar, dan fondasi brand sebagai penyedia produk kecerdasan buatan.",
      },
      {
        year: "2026",
        title: "Pendirian PT & scale",
        description:
          "Pendirian PT Giga Vertex Technology, tiga pilar produk (Autonix, Terabyte, Giga), dan ekspansi ASEAN.",
      },
      {
        year: "2027+",
        title: "Global & mobile",
        description:
          "Ekspansi pasar internasional, aplikasi mobile, dan paket enterprise untuk pengguna B2B skala besar.",
      },
    ],
  },
  aboutFounder: {
    name: "Muhamad Aziz",
    role: "Founder & CEO",
    since: "Memimpin sejak 2020",
    image: assets.images.founderCeo,
    bio: "Memimpin visi Giga Vertex Technology sebagai penyedia produk kecerdasan buatan (AI) dan platform berbasis langganan (SaaS) untuk pelaku bisnis di Indonesia dan pasar global.",
  },
};

export function getAbout(locale?: Locale) {
  if (locale === "en") {
    return {
      ...aboutEn,
      aboutFounder: {
        ...aboutEn.aboutFounder,
        image: assets.images.founderCeo,
      },
    };
  }
  return aboutId;
}

export const aboutIntro = aboutId.aboutIntro;
export const aboutVision = aboutId.aboutVision;
export const aboutMission = aboutId.aboutMission;
export const aboutValuesIntro = aboutId.aboutValuesIntro;
export const aboutCoreValues = aboutId.aboutCoreValues;
export const aboutJourney = aboutId.aboutJourney;
export const aboutFounder = aboutId.aboutFounder;
