import { assets } from "@/lib/assets";

const { products: productImages } = assets.images;

export const aiMeta = {
  badge: "Kecerdasan Buatan",
  title: "Ekosistem Kecerdasan Buatan Giga Vertex",
  intro:
    "Kami membangun dan mengoperasikan rangkaian solusi AI — dari tools kreatif berbasis subscription hingga automasi bisnis dan infrastruktur enterprise — agar UMKM, kreator, dan perusahaan di Indonesia serta pasar global bisa berinovasi lebih cepat.",
};

export const aiCapabilities = [
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
    title: "Custom AI & Enterprise",
    description:
      "Solusi AI khusus per industri: fine-tuning, API privat, dashboard analytics, dan deployment on-premise atau cloud.",
  },
];

export const aiEcosystemPillars = [
  {
    name: "Autonix",
    image: productImages.autonix,
    icon: "Share2",
    focus: "Konten video & distribusi otomatis",
    summary:
      "Buat video, susun konten, dan publikasikan ke berbagai platform sosial secara otomatis dari satu dashboard.",
    description:
      "Autonix adalah platform SaaS berbasis AI yang membantu creator, bisnis, dan agency membuat video, menyusun konten, serta mendistribusikannya ke berbagai platform media sosial secara otomatis dari satu dashboard. Dengan dukungan berbagai model AI dan fitur multi-platform publishing, Autonix memungkinkan pengguna memproduksi dan mengelola konten dengan lebih cepat, mudah, dan efisien.",
    features: ["Multi-platform", "AI video", "Distribusi otomatis"],
    badge: "Popular" as const,
  },
  {
    name: "Terabyte",
    image: productImages.terabyte,
    icon: "Calendar",
    focus: "Media sosial & AI Autopilot",
    summary:
      "Buat, jadwalkan, dan publikasikan konten sosial dengan AI Autopilot, smart scheduler, dan multi-akun.",
    description:
      "Terabyte adalah platform SaaS berbasis AI yang membantu bisnis, creator, dan agency membuat, menjadwalkan, serta mempublikasikan konten ke berbagai platform media sosial dari satu dashboard. Dengan fitur AI Autopilot, smart scheduler, dan multi-account management, Terabyte memungkinkan pengguna mengelola konten secara konsisten dengan lebih cepat, mudah, dan efisien.",
    features: ["AI Autopilot", "Smart scheduler", "Multi-akun"],
    badge: "Popular" as const,
  },
  {
    name: "Giga",
    image: productImages.giga,
    icon: "Video",
    focus: "Video AI generatif unlimited",
    summary:
      "Video AI dari teks atau gambar tanpa batas token — text-to-video dan image-to-video dalam satu dashboard.",
    description:
      "Giga adalah platform SaaS berbasis AI yang memungkinkan pengguna membuat video AI dari teks maupun gambar secara unlimited dalam satu dashboard. Dengan teknologi text-to-video dan image-to-video, Giga membantu bisnis, creator, dan agency menghasilkan konten video berkualitas secara cepat, mudah, dan efisien tanpa batasan token atau kredit.",
    features: ["Text-to-video", "Image-to-video", "Unlimited"],
    badge: "New" as const,
  },
  {
    name: "Newton AI",
    image: productImages.newtonAi,
    icon: "Brain",
    focus: "Multi-model AI studio",
    summary:
      "Berbagai model AI dalam satu dashboard untuk video, gambar, teks, storyboard, dan konten digital.",
    description:
      "Newton AI adalah platform SaaS berbasis AI yang menyediakan berbagai model kecerdasan buatan dalam satu dashboard untuk menghasilkan video, gambar, teks, storyboard, dan konten digital lainnya. Dengan dukungan multi-model AI, antarmuka yang mudah digunakan, serta proses generasi yang cepat, Newton AI membantu bisnis, creator, dan agency meningkatkan produktivitas dan kreativitas secara lebih efisien.",
    features: ["Multi-model AI", "Storyboard", "Generasi cepat"],
    badge: null,
  },
  {
    name: "Growi",
    image: productImages.growi,
    icon: "LineChart",
    focus: "CRM & manajemen penjualan",
    summary:
      "Kelola prospek, pelanggan, order, dan follow-up dalam satu dashboard CRM terpusat.",
    description:
      "Growi adalah platform SaaS CRM yang membantu bisnis mengelola prospek, pelanggan, order, dan aktivitas follow-up dalam satu dashboard terpusat. Dengan fitur manajemen database pelanggan, pelacakan penjualan, dan otomatisasi follow-up, Growi membantu tim meningkatkan produktivitas, menjaga hubungan pelanggan, dan mempercepat pertumbuhan bisnis.",
    features: ["CRM terpusat", "Follow-up otomatis", "Pipeline penjualan"],
    badge: null,
  },
];

export const aiUseCases = [
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
];

export const aiTechStack = [
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
];

export const aiProcess = [
  {
    step: "01",
    title: "Discovery",
    description: "Memetakan kebutuhan bisnis, data tersedia, dan KPI yang ingin dicapai dengan AI.",
  },
  {
    step: "02",
    title: "Proof of Concept",
    description: "Pilot cepat dengan subset data untuk validasi nilai sebelum investasi skala penuh.",
  },
  {
    step: "03",
    title: "Build & Integrate",
    description: "Pengembangan produk, integrasi API, CRM, dan kanal iklan sesuai roadmap Anda.",
  },
  {
    step: "04",
    title: "Deploy & Optimize",
    description: "Go-live, pelatihan tim, monitoring performa, dan iterasi model berkelanjutan.",
  },
];

export const aiDifferentiators = [
  "5+ tools AI siap pakai dalam satu ekosistem subscription",
  "Produk dikembangkan di Indonesia, diperluas ke ASEAN & global",
  "Winning creative & growth terintegrasi dengan strategi Meta, TikTok, Google Ads",
  "Roadmap jelas dari UMKM lokal hingga infrastruktur B2B enterprise",
  "Tim engineering + product yang memahami pasar Indonesia",
];

export const aiEthics = {
  title: "Etika, privasi & keamanan data",
  description:
    "Kami menerapkan prinsip transparansi penggunaan data, enkripsi, kontrol akses, dan kepatuhan terhadap kebijakan platform AI serta regulasi yang berlaku. Data pelanggan tidak dijual; penggunaan model mengikuti kebijakan privasi yang jelas.",
  points: [
    "Enkripsi data in-transit dan at-rest",
    "Opsi isolasi data untuk klien enterprise",
    "Audit trail untuk akses dan inferensi sensitif",
    "Human-in-the-loop untuk keputusan kritis",
  ],
};
