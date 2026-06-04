export const adsStrategyMeta = {
  badge: "Mesin Iklan",
  title: "Strategi Meta Ads, TikTok Ads & Google Ads",
  intro:
    "Tiga kanal utama akuisisi pelanggan dalam Growth Ecosystem Giga Vertex — masing-masing punya peran, fase, dan cara optimasi yang berbeda agar spend iklan terukur dan scalable.",
};

export type AdsChannel = {
  id: string;
  name: string;
  platform: string;
  phase: string;
  summary: string;
  role: string;
  strategies: string[];
  focus: string[];
};

export const adsChannels: AdsChannel[] = [
  {
    id: "meta",
    name: "Meta Ads",
    platform: "Facebook & Instagram",
    phase: "Fase utama · 2026",
    summary:
      "Kanal pembelian pelanggan utama — dari fondasi brand di Indonesia hingga dominasi funnel di Asia Tenggara.",
    role: "Akuisisi & konversi utama untuk UMKM, individual, dan produk subscription.",
    strategies: [
      "Scale budget Meta Ads secara bertahap dengan batas aman spend dan monitoring ROAS harian.",
      "Bangun Winning Creative System: 100+ materi juara, hook & angle sendiri, tes creative rutin.",
      "Segmentasi audiens: lookalike, retargeting, dan interest stack untuk produk Autonix, Terabyte, Giga.",
      "Landing page & ad creative disesuaikan bahasa pasar (ID, EN, dll.) saat ekspansi ASEAN.",
      "Integrasi pipeline CRM (Scalev → CRM internal) untuk follow-up otomatis pasca-klik iklan.",
      "Kampanye prospecting vs retargeting terpisah agar CPA dan LTV terukur per produk.",
    ],
    focus: [
      "Feed & Reels creative",
      "Catalog & conversion API",
      "A/B testing angle & offer",
      "Budget pacing & learning phase",
    ],
  },
  {
    id: "tiktok",
    name: "TikTok Ads",
    platform: "TikTok For Business",
    phase: "Ekspansi terukur · 2027",
    summary:
      "Kanal growth untuk konten pendek, awareness cepat, dan audiens muda — diluncurkan setelah fondasi Meta stabil.",
    role: "Top-of-funnel & viral discovery untuk tools AI dan produk kreatif.",
    strategies: [
      "Mulai dengan Spark Ads dan In-Feed video yang mengadaptasi winning creative dari Meta.",
      "Fokus pada hook 3 detik pertama dan demo produk langsung di video (show, don’t tell).",
      "Targeting interest + behavioral untuk kreator, marketer, dan UMKM digital.",
      "Uji CPA per negara ASEAN sebelum scale ke pasar global.",
      "Sinkronkan dengan konten organik TikTok untuk menurunkan biaya creative production.",
      "Satu tim multi-platform menjalankan TikTok + Meta dengan dashboard performa terpadu.",
    ],
    focus: [
      "Short-form video ads",
      "Creator-style UGC",
      "Traffic & app install",
      "Lookalike dari purchaser Meta",
    ],
  },
  {
    id: "google",
    name: "Google Ads",
    platform: "Search, YouTube & Display",
    phase: "Ekspansi terukur · 2027",
    summary:
      "Menangkap intent pencarian tinggi — pengguna yang sudah mencari solusi AI, otomatisasi, atau tools SaaS.",
    role: "Demand capture & retargeting lintas web untuk konversi berkualitas tinggi.",
    strategies: [
      "Search campaign pada keyword branded + kategori (AI tools, video generator, CRM otomatisasi).",
      "Performance Max & Display retargeting untuk visitor landing page yang belum convert.",
      "YouTube in-stream untuk edukasi produk panjang (demo Giga AI Studio, dll.).",
      "Landing multi-bahasa dan struktur URL per negara untuk Quality Score lebih baik.",
      "Negative keyword & exclusion list agar tidak bersaing dengan trafik organik brand sendiri.",
      "Attribution cross-channel: Google sebagai assist, Meta/TikTok sebagai first touch — laporan unified.",
    ],
    focus: [
      "Search & brand defense",
      "YouTube consideration",
      "Remarketing RLSA",
      "Global intent keywords",
    ],
  },
];

export const adsStrategyPrinciples = [
  {
    title: "Satu mesin, tiga kanal",
    description:
      "Meta untuk volume & konversi, TikTok untuk discovery, Google untuk intent — bukan tiga strategi terpisah tanpa data.",
  },
  {
    title: "Creative adalah produk",
    description:
      "Stok winning creative, produksi dibantu AI, dan framework hook/angle menjadi aset jangka panjang, bukan sekadar biaya iklan.",
  },
  {
    title: "Scale dengan guardrail",
    description:
      "Budget naik hanya saat ROAS, CPA, dan pipeline CRM memenuhi ambang — selaras roadmap omzet bulanan.",
  },
];
