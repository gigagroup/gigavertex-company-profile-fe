import { getAiIntelligence } from "@/lib/ai-intelligence";
import { getComingSoonProducts } from "@/lib/coming-soon-products";
import type { Locale } from "@/i18n/config";
import { constants as constantsEn } from "@/i18n/en/constants";

const constantsId = {
  company: {
    name: "PT Giga Vertex Technology",
    shortName: "Giga Vertex",
    tagline: "Membangun Masa Depan dengan Kecerdasan Buatan",
    description:
      "Penyedia produk kecerdasan buatan (AI), perangkat lunak, dan platform berbasis langganan (SaaS) untuk bisnis, kreator, dan individu.",
    email: "support@gigavertex.com",
    phone: "+62 812-2852-2550",
    phoneTel: "+6281228522550",
    whatsapp: "https://wa.me/6281228522550",
    address: "Bogor, Indonesia",
    founded: "2024",
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
      youtube: "#",
    },
  },
  navLinks: [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang Kami" },
    { href: "/kecerdasan-buatan", label: "Kecerdasan Buatan" },
    { href: "/services", label: "Platform" },
    { href: "/strategi-iklan", label: "Strategi Iklan" },
    { href: "/products", label: "Produk" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/pasar", label: "Pasar" },
    { href: "/career", label: "Karier" },
    { href: "/contact", label: "Kontak" },
  ],
  services: [
    {
      icon: "Brain",
      title: "Tools AI Kreatif",
      description:
        "Platform SaaS generatif untuk teks, gambar, video, dan audio — siap pakai dengan model AI terkini.",
    },
    {
      icon: "Code2",
      title: "Automasi Media Sosial",
      description:
        "Tools berlangganan untuk membuat, menjadwalkan, dan mempublikasikan konten ke berbagai platform sosial.",
    },
    {
      icon: "Globe",
      title: "Video AI Generatif",
      description:
        "Produksi video AI unlimited dari teks atau gambar — tanpa batas token, langsung dari dashboard.",
    },
    {
      icon: "Layers",
      title: "CRM & Penjualan",
      description:
        "Platform SaaS CRM untuk mengelola prospek, pelanggan, order, dan follow-up dalam satu dashboard.",
    },
    {
      icon: "Wrench",
      title: "Multi-Model AI Studio",
      description:
        "Berbagai model AI dalam satu dashboard subscription — video, gambar, teks, dan storyboard.",
    },
    {
      icon: "HeadphonesIcon",
      title: "Dukungan & Onboarding",
      description:
        "Panduan aktivasi, onboarding pengguna baru, dan dukungan teknis berkelanjutan 24/7.",
    },
  ],
  stats: [
    { value: "5+", label: "Produk AI" },
    { value: "5K+", label: "Pengguna Aktif" },
    { value: "24/7", label: "Support" },
  ],
  features: [
    {
      title: "Teknologi Terdepan",
      description:
        "Menggunakan model AI dan infrastruktur cloud terbaru untuk performa optimal.",
    },
    {
      title: "Keamanan Enterprise",
      description:
        "Enkripsi end-to-end, compliance standar industri, dan proteksi data pengguna.",
    },
    {
      title: "Skalabilitas Tanpa Batas",
      description:
        "Arsitektur cloud-native yang tumbuh bersama kebutuhan bisnis Anda.",
    },
    {
      title: "UI/UX Premium",
      description:
        "Desain intuitif dan modern yang membuat setiap interaksi terasa mulus.",
    },
  ],
  pricingPlans: [
    {
      name: "Starter",
      price: "Rp 99.000",
      period: "/bulan",
      description: "Ideal untuk individu dan freelancer yang baru memulai.",
      features: [
        "5 produk AI dasar",
        "100 generasi/bulan",
        "1 user",
        "Email support",
        "Community access",
      ],
      highlighted: false,
      cta: "Mulai Gratis",
    },
    {
      name: "Professional",
      price: "Rp 299.000",
      period: "/bulan",
      description: "Untuk profesional kreatif dan tim kecil yang butuh lebih.",
      features: [
        "Semua produk AI",
        "Unlimited generasi",
        "5 users",
        "Priority support",
        "API access",
        "Custom branding",
      ],
      highlighted: true,
      cta: "Pilih Professional",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Paket khusus untuk perusahaan dengan kebutuhan skala besar dan multi-tim.",
      features: [
        "Semua fitur Professional",
        "Unlimited users",
        "Dedicated account manager",
        "SLA guarantee",
        "On-premise option",
        "Integrasi kustom",
      ],
      highlighted: false,
      cta: "Hubungi Sales",
    },
  ],
  testimonials: [
    {
      quote:
        "Giga Vertex mengubah cara tim kami membuat konten. Produktivitas naik 3x lipat sejak menggunakan platform mereka.",
      author: "Sarah Wijaya",
      role: "Head of Marketing, TechCorp",
    },
    {
      quote:
        "Auto Clipper mereka luar biasa! Video podcast kami otomatis jadi 10+ clip viral setiap minggu.",
      author: "Budi Santoso",
      role: "Content Creator",
    },
    {
      quote:
        "Growi CRM dan Newton AI mengubah cara tim kami bekerja. Satu subscription, semua tools yang kami butuhkan.",
      author: "Diana Putri",
      role: "CTO, FinStart Indonesia",
    },
  ],
  team: [
    {
      name: "Founder & CEO",
      role: "Vision & Strategy",
      bio: "Memimpin visi Giga Vertex dalam democratisasi AI untuk semua.",
    },
    {
      name: "CTO",
      role: "Technology",
      bio: "Arsitek teknologi di balik semua produk AI dan platform kami.",
    },
    {
      name: "Head of Product",
      role: "Product Design",
      bio: "Merancang pengalaman produk yang intuitif dan impactful.",
    },
    {
      name: "Head of Engineering",
      role: "Engineering",
      bio: "Mengoperasikan infrastruktur cloud yang menopang ribuan pengguna aktif di seluruh platform.",
    },
  ],
  serviceProcess: [
    {
      step: "01",
      title: "Daftar & Trial",
      description: "Buat akun gratis dan coba fitur dasar platform pilihan Anda.",
    },
    {
      step: "02",
      title: "Pilih Paket",
      description: "Pilih paket subscription yang sesuai — Starter, Professional, atau Enterprise.",
    },
    {
      step: "03",
      title: "Aktivasi & Setup",
      description: "Akses dashboard, konfigurasi akun, dan mulai produksi konten dalam hitungan menit.",
    },
    {
      step: "04",
      title: "Dukungan Berkelanjutan",
      description: "Update fitur rutin, dukungan teknis 24/7, dan optimasi penggunaan platform.",
    },
  ],
  pricingFaqs: [
    {
      question: "Apakah bisa upgrade paket kapan saja?",
      answer:
        "Ya. Anda dapat upgrade atau downgrade paket subscription kapan saja melalui dashboard atau menghubungi tim support kami.",
    },
    {
      question: "Apakah ada trial gratis?",
      answer:
        "Paket Starter menyediakan periode trial untuk mencoba fitur dasar sebelum berlangganan penuh.",
    },
    {
      question: "Bagaimana pembayaran Enterprise?",
      answer:
        "Paket Enterprise menggunakan penawaran custom dengan invoice, SLA, dan opsi pembayaran sesuai kebutuhan perusahaan.",
    },
    {
      question: "Apakah data saya aman?",
      answer:
        "Kami menerapkan enkripsi, kontrol akses, dan praktik keamanan standar industri untuk melindungi data pengguna.",
    },
  ],
  values: [
    {
      title: "Inovasi",
      description: "Terus mendorong batas teknologi AI untuk solusi yang lebih baik.",
    },
    {
      title: "Integritas",
      description: "Transparansi dan kejujuran dalam setiap produk dan platform kami.",
    },
    {
      title: "Excellence",
      description: "Standar kualitas tertinggi dalam setiap produk dan pengalaman pengguna platform.",
    },
    {
      title: "Impact",
      description: "Memberikan dampak nyata bagi bisnis dan individu di Indonesia.",
    },
  ],
};

export function getConstants(locale?: Locale) {
  const base = locale === "en" ? constantsEn : constantsId;
  const ai = getAiIntelligence(locale);
  return {
    ...base,
    products: ai.aiEcosystemPillars.map((pillar) => ({
      icon: pillar.icon,
      image: (pillar as (typeof pillar & { image: string })).image,
      name: pillar.name,
      category: pillar.focus,
      summary: pillar.summary,
      description: pillar.description,
      features: pillar.features,
      badge: pillar.badge,
      users: pillar.users,
    })),
    comingSoonProducts: getComingSoonProducts(locale),
  };
}

// Default exports for backward compatibility during build
export const company = constantsId.company;
export const navLinks = constantsId.navLinks;
export const services = constantsId.services;
export const stats = constantsId.stats;
export const features = constantsId.features;
export const pricingPlans = constantsId.pricingPlans;
export const testimonials = constantsId.testimonials;
export const team = constantsId.team;
export const serviceProcess = constantsId.serviceProcess;
export const pricingFaqs = constantsId.pricingFaqs;
export const values = constantsId.values;

export { getMarkets, marketRegions } from "@/lib/markets";
