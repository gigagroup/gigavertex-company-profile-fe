import type { Locale } from "@/i18n/config";
import { career as careerEn } from "@/i18n/en/career";

const careerId = {
  careerMeta: {
    badge: "Karier",
    title: "Bergabung dengan Giga Vertex",
    intro:
      "Kami membangun ekosistem produk kecerdasan buatan (AI) dan platform berbasis langganan (SaaS). Jika Anda ingin berkontribusi pada produk yang dipakai ribuan pengguna — dari engineering hingga growth — mari tumbuh bersama kami.",
  },
  careerWhyJoin: {
    title: "Mengapa Bergabung?",
    description:
      "Lingkungan kerja yang gesit, berorientasi produk, dan berfokus pada dampak nyata di pasar Indonesia maupun global.",
    items: [
      "Bekerja langsung pada produk AI & SaaS yang aktif digunakan",
      "Tim kecil, keputusan cepat, dan ruang untuk berinovasi",
      "Pertumbuhan bersama ekosistem multi-produk (Autonix, Terabyte, Giga, dll.)",
      "Kesempatan belajar teknologi AI, cloud, dan growth terkini",
    ],
  },
  careerBenefits: {
    title: "Yang Kami Tawarkan",
    items: [
      { title: "Kerja Fleksibel", description: "Remote-friendly & jam kerja yang mendukung produktivitas." },
      { title: "Pertumbuhan Karier", description: "Akses ke proyek lintas disiplin — product, engineering, growth." },
      { title: "Budaya Produk", description: "Setiap anggota tim dekat dengan pengguna dan hasil bisnis." },
      { title: "Teknologi Terkini", description: "Bekerja dengan stack AI, cloud-native, dan tools modern." },
    ],
  },
  careerOpenings: {
    title: "Posisi Terbuka",
    description: "Saat ini belum ada lowongan aktif.",
    emptyNote: "Tetap kirim CV Anda melalui halaman kontak — kami selalu terbuka untuk talenta terbaik.",
    positions: [] as {
      title: string;
      department: string;
      type: string;
      location: string;
    }[],
  },
  careerProcess: {
    title: "Proses Rekrutmen",
    steps: [
      { step: "01", title: "Lamaran", description: "Kirim CV & portofolio melalui form kontak atau email." },
      { step: "02", title: "Screening", description: "Review singkat profil dan kesesuaian dengan posisi." },
      { step: "03", title: "Interview", description: "Sesi teknis/kultur dengan tim terkait." },
      { step: "04", title: "Offer", description: "Penawaran resmi dan onboarding ke tim." },
    ],
  },
};

export function getCareer(locale?: Locale) {
  return locale === "en" ? careerEn : careerId;
}

export const careerMeta = careerId.careerMeta;
export const careerWhyJoin = careerId.careerWhyJoin;
export const careerBenefits = careerId.careerBenefits;
export const careerOpenings = careerId.careerOpenings;
export const careerProcess = careerId.careerProcess;
