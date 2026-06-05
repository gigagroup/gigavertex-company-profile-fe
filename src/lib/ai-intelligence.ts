import { assets } from "@/lib/assets";
import type { Locale } from "@/i18n/config";
import { aiIntelligence as aiEn } from "@/i18n/en/ai-intelligence";

const { products: productImages } = assets.images;

const pillarImages = [
  productImages.autonix,
  productImages.terabyte,
  productImages.giga,
  productImages.newtonAi,
  productImages.growi,
];

const aiId = {
  aiMeta: {
    badge: "Kecerdasan Buatan",
    title: "Ekosistem Kecerdasan Buatan & Platform SaaS Giga Vertex",
    intro:
      "Sebagai penyedia produk kecerdasan buatan (AI) dan platform berbasis langganan (SaaS), kami mengoperasikan rangkaian solusi digital — dari produksi konten kreatif hingga automasi bisnis dan CRM — agar UMKM, kreator, dan perusahaan di Indonesia serta pasar global dapat memanfaatkan AI secara praktis dan terukur.",
  },
  aiCapabilities: [
    {
      title: "Generative AI",
      description:
        "Teks, gambar, video, dan audio — model generatif terkini untuk produksi konten skala besar dengan kontrol kreatif.",
    },
    {
      title: "Large Language Models (LLM)",
      description:
        "Integrasi multi-model, RAG, chatbot cerdas, dan agent AI untuk dukungan pelanggan serta produktivitas internal.",
    },
    {
      title: "Computer Vision",
      description:
        "Analisis gambar & video, deteksi objek, auto-clipping, dan quality control otomatis untuk workflow media.",
    },
    {
      title: "Speech & Bahasa",
      description:
        "Speech-to-text, text-to-speech, terjemahan, dan tutor bahasa AI untuk produk edukasi dan komunikasi global.",
    },
    {
      title: "Workflow Automation",
      description:
        "Otomatisasi proses bisnis — dari follow-up penjualan, scheduling sosial media, hingga pipeline data terintegrasi CRM.",
    },
    {
      title: "Enterprise & Paket Khusus",
      description:
        "Paket SaaS enterprise dengan API privat, dashboard analytics, isolasi data, dan opsi deployment on-premise atau cloud.",
    },
  ],
  aiEcosystemPillars: [
    {
      name: "Autonix",
      icon: "Share2",
      focus: "Konten video & distribusi otomatis",
      summary:
        "Buat video, susun konten, dan publikasikan ke berbagai platform sosial secara otomatis dari satu dashboard.",
      description:
        "Autonix adalah platform SaaS berbasis AI yang membantu creator, bisnis, dan agency membuat video, menyusun konten, serta mendistribusikannya ke berbagai platform media sosial secara otomatis dari satu dashboard. Dengan dukungan berbagai model AI dan fitur multi-platform publishing, Autonix memungkinkan pengguna memproduksi dan mengelola konten dengan lebih cepat, mudah, dan efisien.",
      features: ["Multi-platform", "AI video", "Distribusi otomatis"],
      badge: "Popular" as const,
      users: "1.200+",
    },
    {
      name: "Terabyte",
      icon: "Calendar",
      focus: "Media sosial & AI Autopilot",
      summary:
        "Buat, jadwalkan, dan publikasikan konten sosial dengan AI Autopilot, smart scheduler, dan multi-akun.",
      description:
        "Terabyte adalah platform SaaS berbasis AI yang membantu bisnis, creator, dan agency membuat, menjadwalkan, serta mempublikasikan konten ke berbagai platform media sosial dari satu dashboard. Dengan fitur AI Autopilot, smart scheduler, dan multi-account management, Terabyte memungkinkan pengguna mengelola konten secara konsisten dengan lebih cepat, mudah, dan efisien.",
      features: ["AI Autopilot", "Smart scheduler", "Multi-akun"],
      badge: "Popular" as const,
      users: "1.500+",
    },
    {
      name: "Giga",
      icon: "Video",
      focus: "Video AI generatif unlimited",
      summary:
        "Video AI dari teks atau gambar tanpa batas token — text-to-video dan image-to-video dalam satu dashboard.",
      description:
        "Giga adalah platform SaaS berbasis AI yang memungkinkan pengguna membuat video AI dari teks maupun gambar secara unlimited dalam satu dashboard. Dengan teknologi text-to-video dan image-to-video, Giga membantu bisnis, creator, dan agency menghasilkan konten video berkualitas secara cepat, mudah, dan efisien tanpa batasan token atau kredit.",
      features: ["Text-to-video", "Image-to-video", "Unlimited"],
      badge: "New" as const,
      users: "800+",
    },
    {
      name: "Newton AI",
      icon: "Brain",
      focus: "Multi-model AI studio",
      summary:
        "Berbagai model AI dalam satu dashboard untuk video, gambar, teks, storyboard, dan konten digital.",
      description:
        "Newton AI adalah platform SaaS berbasis AI yang menyediakan berbagai model kecerdasan buatan dalam satu dashboard untuk menghasilkan video, gambar, teks, storyboard, dan konten digital lainnya. Dengan dukungan multi-model AI, antarmuka yang mudah digunakan, serta proses generasi yang cepat, Newton AI membantu bisnis, creator, dan agency meningkatkan produktivitas dan kreativitas secara lebih efisien.",
      features: ["Multi-model AI", "Storyboard", "Generasi cepat"],
      badge: null,
      users: "600+",
    },
    {
      name: "Growi",
      icon: "LineChart",
      focus: "CRM & manajemen penjualan",
      summary:
        "Kelola prospek, pelanggan, order, dan follow-up dalam satu dashboard CRM terpusat.",
      description:
        "Growi adalah platform SaaS CRM yang membantu bisnis mengelola prospek, pelanggan, order, dan aktivitas follow-up dalam satu dashboard terpusat. Dengan fitur manajemen database pelanggan, pelacakan penjualan, dan otomatisasi follow-up, Growi membantu tim meningkatkan produktivitas, menjaga hubungan pelanggan, dan mempercepat pertumbuhan bisnis.",
      features: ["CRM terpusat", "Follow-up otomatis", "Pipeline penjualan"],
      badge: null,
      users: "900+",
    },
  ],
  aiUseCases: [
    {
      audience: "UMKM & bisnis kecil",
      items: [
        "Konten iklan & sosial media otomatis",
        "Chatbot penjualan & FAQ pelanggan",
        "Laporan & ringkasan operasional harian",
      ],
    },
    {
      audience: "Kreator & agency",
      items: [
        "Video & foto generatif untuk kampanye",
        "Auto clipper untuk konten viral",
        "Jadwal multi-platform & analytics",
      ],
    },
    {
      audience: "Perusahaan & enterprise",
      items: [
        "Dashboard AI & otomatisasi operasi",
        "Integrasi LLM ke sistem internal",
        "Keamanan data & compliance terukur",
      ],
    },
    {
      audience: "Individu & freelancer",
      items: [
        "Paket tools AI terjangkau (subscription)",
        "Belajar bahasa dengan AI tutor",
        "Produktivitas menulis & riset",
      ],
    },
  ],
  aiTechStack: [
    {
      title: "Multi-model architecture",
      description:
        "Tidak terikat satu vendor — kami memilih model terbaik per use case (kecepatan, biaya, kualitas).",
    },
    {
      title: "API-first & scalable",
      description:
        "Arsitektur microservices di cloud dengan autoscaling untuk ribuan hingga jutaan request.",
    },
    {
      title: "RAG & knowledge base",
      description:
        "Jawaban AI berbasis dokumen dan data perusahaan Anda — lebih akurat dan dapat diaudit.",
    },
    {
      title: "MLOps & monitoring",
      description:
        "Evaluasi kualitas output, A/B testing prompt, dan pemantauan drift model secara berkala.",
    },
  ],
  aiProcess: [
    {
      step: "01",
      title: "Pilih Platform",
      description: "Tentukan tools AI yang sesuai kebutuhan — konten, video, sosial media, atau CRM.",
    },
    {
      step: "02",
      title: "Trial & Evaluasi",
      description: "Coba fitur dasar secara gratis dan evaluasi nilai platform sebelum berlangganan penuh.",
    },
    {
      step: "03",
      title: "Berlangganan & Aktivasi",
      description: "Pilih paket subscription, aktivasi akun, dan mulai produksi dari dashboard.",
    },
    {
      step: "04",
      title: "Optimasi & Scale",
      description: "Manfaatkan update fitur rutin, analytics, dan dukungan untuk memaksimalkan hasil.",
    },
  ],
  aiDifferentiators: [
    "5+ platform kecerdasan buatan siap pakai dalam satu ekosistem berlangganan",
    "Penyedia produk AI dari Indonesia, diperluas ke ASEAN & pasar global",
    "5.000+ pengguna aktif di seluruh platform SaaS kami",
    "Model bisnis SaaS — bayar bulanan, langsung pakai, tanpa setup rumit",
    "Update fitur rutin dan dukungan 24/7 untuk semua pelanggan berlangganan",
  ],
  aiEthics: {
    title: "Etika, privasi & keamanan data",
    description:
      "Kami menerapkan prinsip transparansi penggunaan data, enkripsi, kontrol akses, dan kepatuhan terhadap kebijakan platform AI serta regulasi yang berlaku. Data pelanggan tidak dijual; penggunaan model mengikuti kebijakan privasi yang jelas.",
    points: [
      "Enkripsi data in-transit dan at-rest",
      "Opsi isolasi data untuk klien enterprise",
      "Audit trail untuk akses dan inferensi sensitif",
      "Human-in-the-loop untuk keputusan kritis",
    ],
  },
};

function attachImages<T extends { aiEcosystemPillars: Array<Record<string, unknown>> }>(data: T) {
  return {
    ...data,
    aiEcosystemPillars: data.aiEcosystemPillars.map((pillar, index) => ({
      ...pillar,
      image: pillarImages[index],
    })),
  };
}

export function getAiIntelligence(locale?: Locale) {
  return attachImages(locale === "en" ? aiEn : aiId);
}

export const aiMeta = aiId.aiMeta;
export const aiCapabilities = aiId.aiCapabilities;
export const aiEcosystemPillars = attachImages(aiId).aiEcosystemPillars;
export const aiUseCases = aiId.aiUseCases;
export const aiTechStack = aiId.aiTechStack;
export const aiProcess = aiId.aiProcess;
export const aiDifferentiators = aiId.aiDifferentiators;
export const aiEthics = aiId.aiEthics;
