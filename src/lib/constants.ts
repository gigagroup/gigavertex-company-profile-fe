import { aiEcosystemPillars } from "@/lib/ai-intelligence";

export const company = {
  name: "PT Giga Vertex Technology",
  shortName: "Giga Vertex",
  tagline: "Membangun Masa Depan dengan Kecerdasan Buatan",
  description:
    "Perusahaan teknologi yang berfokus pada pengembangan solusi AI, perangkat lunak, aplikasi, dan platform digital berbasis subscription untuk bisnis dan individu.",
  email: "hello@gigavertex.com",
  phone: "+62 812-3456-7890",
  address: "Jakarta, Indonesia",
  founded: "2024",
  social: {
    linkedin: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
};

export const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/kecerdasan-buatan", label: "Kecerdasan Buatan" },
  { href: "/services", label: "Layanan" },
  { href: "/strategi-iklan", label: "Strategi Iklan" },
  { href: "/products", label: "Produk" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/pasar", label: "Pasar" },
  { href: "/contact", label: "Kontak" },
];

export const services = [
  {
    icon: "Brain",
    title: "Solusi AI",
    description:
      "Pengembangan model AI, chatbot, automasi cerdas, dan integrasi LLM untuk transformasi digital bisnis Anda.",
  },
  {
    icon: "Code2",
    title: "Pengembangan Software",
    description:
      "Aplikasi desktop, mobile, dan enterprise yang scalable, aman, dan dirancang sesuai kebutuhan bisnis.",
  },
  {
    icon: "Globe",
    title: "Website & Platform",
    description:
      "Website corporate, landing page, dan platform web modern dengan performa tinggi dan UX premium.",
  },
  {
    icon: "Layers",
    title: "SaaS & Subscription",
    description:
      "Platform berlangganan dengan billing terintegrasi, dashboard analytics, dan manajemen pengguna.",
  },
  {
    icon: "Wrench",
    title: "AI Tools Development",
    description:
      "Pembuatan tools AI khusus — dari generator konten hingga workflow automation untuk tim kreatif.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Konsultasi & Support",
    description:
      "Konsultasi teknologi, implementasi, maintenance, dan dukungan teknis berkelanjutan 24/7.",
  },
];

export const products = aiEcosystemPillars.map((pillar) => ({
  icon: pillar.icon,
  image: pillar.image,
  name: pillar.name,
  category: pillar.focus,
  summary: pillar.summary,
  description: pillar.description,
  features: pillar.features,
  badge: pillar.badge,
}));

export const stats = [
  { value: "5+", label: "AI Tools" },
  { value: "5K+", label: "Pengguna Aktif" },
  { value: "24/7", label: "Support" },
];

export { marketRegions } from "@/lib/markets";

export const features = [
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
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "Rp 99.000",
    period: "/bulan",
    description: "Ideal untuk individu dan freelancer yang baru memulai.",
    features: [
      "5 AI tools dasar",
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
      "Semua AI tools",
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
    description: "Solusi khusus untuk perusahaan dengan kebutuhan skala besar.",
    features: [
      "Semua fitur Professional",
      "Unlimited users",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise option",
      "Custom development",
    ],
    highlighted: false,
    cta: "Hubungi Sales",
  },
];

export const testimonials = [
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
      "Solusi AI custom yang mereka kembangkan untuk perusahaan kami presisi dan scalable. Partner teknologi terbaik.",
    author: "Diana Putri",
    role: "CTO, FinStart Indonesia",
  },
];

export const team = [
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
    bio: "Membangun infrastruktur scalable untuk jutaan pengguna.",
  },
];

export const serviceProcess = [
  {
    step: "01",
    title: "Konsultasi",
    description: "Memahami kebutuhan bisnis, target, dan tantangan teknologi Anda.",
  },
  {
    step: "02",
    title: "Perancangan",
    description: "Merancang solusi, arsitektur, dan roadmap implementasi yang jelas.",
  },
  {
    step: "03",
    title: "Implementasi",
    description: "Pengembangan, integrasi, testing, dan deployment ke production.",
  },
  {
    step: "04",
    title: "Dukungan",
    description: "Maintenance, monitoring, dan optimasi berkelanjutan pasca-launch.",
  },
];

export const pricingFaqs = [
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
];

export const values = [
  {
    title: "Inovasi",
    description: "Terus mendorong batas teknologi AI untuk solusi yang lebih baik.",
  },
  {
    title: "Integritas",
    description: "Transparansi dan kejujuran dalam setiap produk dan layanan kami.",
  },
  {
    title: "Excellence",
    description: "Standar kualitas tertinggi dalam setiap baris kode dan desain.",
  },
  {
    title: "Impact",
    description: "Memberikan dampak nyata bagi bisnis dan individu di Indonesia.",
  },
];
