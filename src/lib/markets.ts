import type { Locale } from "@/i18n/config";
import { markets as marketsEn } from "@/i18n/en/markets";

export type MarketCountry = {
  name: string;
  highlight: string;
};

export type MarketRegionDetail = {
  id: string;
  title: string;
  phase: string;
  summary: string;
  description: string;
  targetAudience: string;
  countries: MarketCountry[];
  strategies: string[];
  localization: string[];
};

const marketsId = {
  marketMeta: {
    badge: "Pasar",
    title: "Jangkauan Pasar Lokal & Global",
    intro:
      "PT Giga Vertex Technology menjalankan ekspansi bertahap — memperkuat fondasi di Indonesia dan Asia Tenggara, lalu merambah pasar berbahasa Inggris serta Eropa Barat dengan produk kecerdasan buatan dan platform berbasis langganan (SaaS) yang siap dilokalisasi.",
  },
  marketRegions: [
    {
      title: "Indonesia & Asia Tenggara",
      description:
        "Fondasi pasar utama — dari Indonesia ke negara tetangga di kawasan ASEAN.",
      countries: [
        "Indonesia",
        "Singapura",
        "Malaysia",
        "Thailand",
        "Vietnam",
        "Filipina",
      ],
    },
    {
      title: "Amerika, Oseania & Inggris",
      description:
        "Ekspansi ke pasar berbahasa Inggris dengan potensi SaaS dan tools AI global.",
      countries: [
        "Amerika Serikat",
        "Australia",
        "Inggris (UK)",
        "Selandia Baru",
        "Kanada",
      ],
    },
    {
      title: "Eropa",
      description:
        "Jangkauan ke pasar Eropa Barat dengan landing multi-bahasa dan pembayaran internasional.",
      countries: ["Jerman", "Prancis", "Italia", "Belanda"],
    },
  ],
  marketRegionsDetail: [
    {
      id: "asean",
      title: "Indonesia & Asia Tenggara",
      phase: "Fase utama · 2026",
      summary: "Pasar inti untuk peluncuran, validasi produk, dan skala iklan Meta Ads.",
      description:
        "Indonesia menjadi basis operasi, branding, dan pengembangan produk. Ekspansi ke negara ASEAN dilakukan dengan landing page berbahasa lokal, creative iklan yang disesuaikan, dan payment gateway yang mendukung transaksi regional.",
      targetAudience: "UMKM, pebisnis, individu, dan pemilik bisnis kecil di kawasan ASEAN.",
      countries: [
        {
          name: "Indonesia",
          highlight:
            "Pasar domestik — fokus individual, UMKM, winning creative, CRM Scalev, dan pendirian PT Giga Vertex Technology.",
        },
        {
          name: "Singapura",
          highlight: "Hub bisnis & SaaS — audiens premium, bahasa Inggris, entry point ASEAN global.",
        },
        {
          name: "Malaysia",
          highlight: "Ekspansi awal ASEAN — materi iklan dwi-bahasa (Melayu/Inggris) dan Xendit regional.",
        },
        {
          name: "Thailand",
          highlight: "Pasar kreatif & UGC — tools video/photo AI dan konten sosial media lokal.",
        },
        {
          name: "Vietnam",
          highlight: "Pertumbuhan digital cepat — fokus UMKM dan produk produktivitas berbahasa Vietnam.",
        },
        {
          name: "Filipina",
          highlight: "Audiens English-friendly — cocok untuk tools subscription dan social scheduler.",
        },
      ],
      strategies: [
        "Dominasi Meta Ads sebagai kanal akuisisi utama di setiap negara target.",
        "Landing page & ad creative dalam bahasa negara terkait.",
        "Produk kecerdasan buatan multi-bahasa dengan dukungan lokal payment (Xendit ASEAN).",
        "CRM & auto follow-up (email, WhatsApp) untuk pipeline penjualan regional.",
        "Otoritas niche AI & otomatisasi di Indonesia sebelum scale agresif ke luar.",
      ],
      localization: [
        "Bahasa Indonesia, Inggris, Melayu, Thai, Vietnam, Filipina",
        "Harga & mata uang lokal via payment gateway",
        "Dukungan pelanggan sesuai zona waktu ASEAN",
      ],
    },
    {
      id: "anglo",
      title: "Amerika, Oseania & Inggris",
      phase: "Ekspansi · 2027",
      summary: "Pasar berbahasa Inggris dengan potensi SaaS global dan ARPU lebih tinggi.",
      description:
        "Setelah fondasi ASEAN kokoh, kami masuk pasar Inggris, Amerika, Kanada, Australia, dan Selandia Baru dengan positioning tools AI untuk kreator, marketer, dan bisnis kecil—memanfaatkan iklan global, mitra, dan afiliasi.",
      targetAudience:
        "Kreator, agency, startup, dan SMB di pasar berbahasa Inggris yang mencari tools AI terjangkau.",
      countries: [
        {
          name: "Amerika Serikat",
          highlight:
            "Pasar terbesar — TikTok & Google Ads, targeting global, mitra & afiliasi internasional.",
        },
        {
          name: "Kanada",
          highlight: "Ekspansi paralel Amerika Utara — billing multi-mata uang & compliance data.",
        },
        {
          name: "Inggris (UK)",
          highlight: "Gateway Eropa berbahasa Inggris — GDPR-aware onboarding & support.",
        },
        {
          name: "Australia",
          highlight: "Oseania premium — SaaS subscription & tools kreatif untuk agency lokal.",
        },
        {
          name: "Selandia Baru",
          highlight: "Pasar niche berkualitas — community-driven growth & konten organik.",
        },
      ],
      strategies: [
        "Ekspansi TikTok Ads & Google Ads secara terukur setelah Meta stabil di ASEAN.",
        "Landing multi-bahasa Inggris + varian regional (US vs UK spelling & offer).",
        "Storefront internasional (Shopify + payment gateway terintegrasi) untuk checkout global.",
        "Iklan targeting global, lookalike purchaser, dan program afiliasi luar negeri.",
        "Portofolio 10+ web tools dalam satu ekosistem subscription.",
      ],
      localization: [
        "Inggris (US / UK / AU / NZ / CA)",
        "USD, GBP, AUD, CAD, NZD",
        "SLA support & dokumentasi bahasa Inggris",
      ],
    },
    {
      id: "europe",
      title: "Eropa",
      phase: "Penguatan global · 2027–2028",
      summary: "Eropa Barat dengan landing multi-bahasa dan kepatuhan data yang ketat.",
      description:
        "Jerman, Prancis, Italia, dan Belanda menjadi prioritas awal Eropa dengan halaman produk berbahasa lokal, kampanye iklan tersegmentasi, dan infrastruktur pembayaran internasional yang sudah mapan.",
      targetAudience:
        "Bisnis kecil, kreator, dan tim marketing di Eropa Barat yang membutuhkan tools AI compliant.",
      countries: [
        {
          name: "Jerman",
          highlight: "Pasar enterprise & SMB — fokus kepercayaan, keamanan data, dan bahasa Jerman.",
        },
        {
          name: "Prancis",
          highlight: "Kreatif & lifestyle niche — konten iklan dan UI berbahasa Prancis penuh.",
        },
        {
          name: "Italia",
          highlight: "UMKM & kreator — tools sosial media dan video AI untuk pasar lokal.",
        },
        {
          name: "Belanda",
          highlight: "Hub tech Eropa — English-friendly entry + ekspansi ke Benelux.",
        },
      ],
      strategies: [
        "Landing & materi iklan per bahasa (DE, FR, IT, NL/EN).",
        "Penguatan CRM untuk penjualan lintas negara Eropa.",
        "Kepatuhan privasi (GDPR) dan transparansi penggunaan data AI.",
        "Payment multi-mata uang EUR + metode populer di Eropa Barat.",
        "Brand authority di niche AI & otomatisasi melalui konten organik & komunitas.",
      ],
      localization: [
        "Jerman, Prancis, Italia, Belanda, Inggris",
        "EUR + payment internasional",
        "Kebijakan privasi & consent sesuai GDPR",
      ],
    },
  ] as MarketRegionDetail[],
  marketExpansionTimeline: [
    {
      period: "2026 · Kuartal I–II",
      focus: "Indonesia",
      detail: "PT, produk inti, Meta Ads bertahap, CRM internal, winning creative.",
    },
    {
      period: "2026 · Kuartal III",
      focus: "ASEAN",
      detail: "Malaysia, Singapura, Thailand, Vietnam, Filipina — Xendit & multi-bahasa.",
    },
    {
      period: "2026 · Kuartal IV",
      focus: "ASEAN + brand",
      detail: "100+ winning creatives, otoritas AI Indonesia, CRM regional.",
    },
    {
      period: "2027 · H1",
      focus: "Global Inggris",
      detail: "Amerika, UK, Australia, Kanada, NZ — TikTok & Google Ads, Shopify stack.",
    },
    {
      period: "2027 · H2",
      focus: "Eropa Barat",
      detail: "Jerman, Prancis, Italia, Belanda — mobile app & paket all-in-one AI.",
    },
    {
      period: "2028+",
      focus: "B2B Enterprise",
      detail: "Infrastruktur AI khusus untuk korporat & skala enterprise global.",
    },
  ],
  marketEnablers: [
    {
      title: "Pembayaran internasional",
      description: "Xendit untuk ASEAN; Shopify + gateway global untuk US, Eropa, dan Oseania.",
    },
    {
      title: "Bahasa & konten",
      description: "Landing, UI produk, dan ad creative disesuaikan per negara dan budaya.",
    },
    {
      title: "Mesin iklan",
      description: "Meta Ads (utama), TikTok Ads & Google Ads saat ekspansi 2027.",
    },
    {
      title: "Data & CRM",
      description: "Pipeline terpusat dari klik iklan hingga follow-up otomatis multi-kanal.",
    },
  ],
};

export function getMarkets(locale?: Locale) {
  return locale === "en" ? marketsEn : marketsId;
}

export const marketMeta = marketsId.marketMeta;
export const marketRegions = marketsId.marketRegions;
export const marketRegionsDetail = marketsId.marketRegionsDetail;
export const marketExpansionTimeline = marketsId.marketExpansionTimeline;
export const marketEnablers = marketsId.marketEnablers;
