import { assets } from "@/lib/assets";

export const roadmapMeta = {
  badge: "Growth Ecosystem",
  title: "Roadmap Growth Ecosystem 2026+",
  intro:
    "PT Giga Vertex Technology menyediakan rangkaian produk berupa tools digital — mulai dari AI, otomatisasi, hingga pendukung pemasaran dan operasional — untuk membantu UMKM dan perusahaan bekerja lebih cepat, rapi, dan terukur. Roadmap pertumbuhan kami dirangkum dari fondasi di dalam negeri hingga visi pasar global.",
  footer: "Giga Vertex Technology • Roadmap 2026+",
};

export const roadmapFounder = {
  name: "Muhamad Aziz",
  role: "Founder & CEO",
  since: "2020",
  image: assets.images.founderCeo,
  bio: "Memimpin visi Giga Vertex Technology dan Growth Ecosystem menuju ekosistem tools AI & otomatisasi untuk pelaku bisnis.",
};

export type RoadmapPhase = {
  step: number;
  period: string;
  quarter: string;
  badge?: string;
  revenueTarget: string;
  items: string[];
};

export const roadmapPhases: RoadmapPhase[] = [
  {
    step: 1,
    period: "Januari – Juni 2026",
    quarter: "Kuartal I–II 2026",
    badge: "posisi saat ini",
    revenueTarget:
      "Target omzet: saat ini 100–170 juta · target 170–200 juta per bulan",
    items: [
      "Proses pembangunan atau pendirian Perseroan Terbatas (PT) dengan nama PT Giga Vertex Technology, pada bulan Mei 2026.",
      "Fokus bangun tiga pilar produk: Autonix, Terabyte, dan Giga.",
      "Sedang mengembangkan produk baru Seedance Generate AI.",
      "Pasar utama tetap Indonesia — pengguna individual dan UMKM.",
      "Arah branding: ekosistem alat AI & perusahaan otomatisasi.",
      "Perkuat fondasi teknis & operasi sebelum iklan dan skala besar — scale budget Meta Ads secara bertahap sambil memantau hasil dan batas aman spend.",
      "Mulai membangun sistem CRM sendiri sebagai pondasi data pelanggan, pipeline penjualan, dan otomatisasi internal.",
      "Saat ini CRM operasional masih memakai Scalev selagi CRM internal dikembangkan.",
      "Tetap mengembangkan winning creatives (stok materi juara) agar siap dipakai saat kampanye dan budget meningkat.",
    ],
  },
  {
    step: 2,
    period: "Juli – September 2026",
    quarter: "Kuartal III 2026",
    revenueTarget: "Target omzet: 200–300 juta per bulan",
    items: [
      "Dominasi ekosistem Meta Ads sebagai kanal utama pembelian pelanggan.",
      "Rapikan pipeline penjualan pakai CRM Scalev.",
      "Masih dalam tahap pengembangan CRM sendiri.",
      "Sistem auto follow-up yang terstruktur lewat email dan WhatsApp.",
      "Pengembangan produk baru seperti Auto Clipper dan belajar bahasa dengan AI.",
      "Menambahkan pembayaran lewat payment gateway Xendit yang mendukung negara di Asia Tenggara.",
      "Landing page dan materi iklan (ad creative) dalam bahasa negara terkait.",
      "Software tools yang mendukung multi-bahasa.",
      "Ekspansi ke pengguna individual atau pemilik bisnis kecil di Malaysia, Singapura, Thailand, Vietnam, dan Filipina.",
    ],
  },
  {
    step: 3,
    period: "Oktober – Desember 2026",
    quarter: "Kuartal IV 2026 · akhir Fase 1",
    revenueTarget: "Target omzet: 300 juta ke atas per bulan",
    items: [
      "Bangun “Winning Creative System”: target 100+ materi iklan unggul.",
      "Basis data creative internal + produksi dibantu AI.",
      "Punya framework hook & angle sendiri + rutinitas tes creative harian.",
      "Kuatkan branding personal & perusahaan; konten organik & komunitas.",
      "Bangun otoritas di niche AI & otomatisasi di Indonesia.",
      "Penambahan produk tools/software di berbagai niche populer — kesehatan, parenting, dan sejenisnya.",
      "Penguatan sistem CRM untuk penjualan di Asia Tenggara.",
    ],
  },
  {
    step: 4,
    period: "Januari – Juni 2027",
    quarter: "Kuartal I–II 2027 · Fase 1 — ekspansi internasional & infrastruktur",
    revenueTarget: "Target omzet: 300–500 juta per bulan",
    items: [
      "Lanjut ekspansi ke TikTok Ads dan Google Ads secara terukur.",
      "Bangun sistem akuisisi multi-platform yang satu tim bisa jalankan.",
      "Target portofolio: 10+ alat berbasis web.",
      "Rangkai ekosistem: otomatisasi AI, konten & growth, sosmed, produktivitas, otomatisasi bisnis.",
      "Ekspansi geografis: Amerika dan Eropa.",
      "Landing page multi-bahasa, pembayaran multi-mata uang, dukungan internasional — memakai stack komersial (misalnya Shopify + payment gateway terintegrasi).",
      "Iklan dengan targeting global + mitra & afiliasi luar negeri.",
    ],
  },
  {
    step: 5,
    period: "Januari – Desember 2027",
    quarter: "Kuartal I–IV 2027 · Fase dua · Penguatan pasar global",
    revenueTarget: "Target omzet: 500 juta ke atas per bulan",
    items: [
      "Penguatan pasar global di Asia Tenggara, Amerika, dan Eropa.",
      "Miliki CRM sendiri, dashboard analitik internal, alur kerja otomatis.",
      "Layanan pelanggan & afiliasi dikelola internal.",
      "AI untuk pemasaran, layanan pelanggan, konten; mesin pelacakan data & optimasi.",
      "Alihkan fokus besar dari web menuju ekosistem aplikasi Android & iOS.",
      "Kembangkan asisten AI & paket “semua dalam satu” untuk kreator & bisnis.",
    ],
  },
  {
    step: 6,
    period: "Januari 2028 ke depan",
    quarter: "Next journey · B2B & infrastruktur AI",
    revenueTarget:
      "Target omzet: skala enterprise & pasar global (peninjauan berkala)",
    items: [
      "Solusi B2B: AI untuk UMKM, otomatisasi operasi, dashboard enterprise.",
      "Infrastruktur pemasaran AI & otomatisasi khusus sesuai kebutuhan klien.",
      "Klien sasaran: UMKM, agensi, startup, korporat, dan perusahaan besar.",
    ],
  },
];

export const roadmapPillars = [
  {
    title: "Mesin iklan",
    items: ["Meta Ads", "TikTok Ads", "Google Ads"],
  },
  {
    title: "Produk AI",
    items: ["Autonix, Terabyte, Giga", "Ekosistem alat AI masa depan"],
  },
  {
    title: "Mesin kreatif",
    items: [
      "100+ winning creatives",
      "Sistem kreatif berbasis AI",
      "Kerangka konten viral",
    ],
  },
  {
    title: "Infrastruktur",
    items: ["CRM sendiri", "Sistem otomatisasi", "Mesin analitik & data"],
  },
  {
    title: "Ekspansi global",
    items: ["Indonesia & Asia Tenggara", "Amerika & Eropa"],
  },
];

export const roadmapVision = {
  description:
    "Membangun ekosistem AI & otomatisasi terbesar dari Indonesia untuk pasar global — multi-produk, SaaS global, infrastruktur AI, ekosistem web & mobile, dan posisi pemimpin pasar AI automation di Indonesia serta Asia Tenggara.",
  tags: [
    "Ekosistem AI multi-produk",
    "Perusahaan SaaS global",
    "Perusahaan infrastruktur AI",
    "Pemimpin pasar regional",
  ],
};
