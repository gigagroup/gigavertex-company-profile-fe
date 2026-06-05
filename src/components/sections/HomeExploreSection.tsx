import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Package,
  CreditCard,
  Mail,
  Users,
  Map,
  Megaphone,
  Globe2,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const pages = [
  {
    href: "/about",
    icon: Users,
    title: "Tentang Kami",
    description: "Visi, misi, nilai, dan tim di balik Giga Vertex.",
  },
  {
    href: "/kecerdasan-buatan",
    icon: Brain,
    title: "Kecerdasan Buatan",
    description: "Generative AI, LLM, automasi, ekosistem Autonix · Terabyte · Giga.",
  },
  {
    href: "/services",
    icon: Brain,
    title: "Platform",
    description: "Ekosistem produk kecerdasan buatan (SaaS) — kreatif, sosial media, video AI, CRM, dan multi-model studio.",
  },
  {
    href: "/strategi-iklan",
    icon: Megaphone,
    title: "Strategi Iklan",
    description: "Meta Ads, TikTok Ads, dan Google Ads — mesin akuisisi pelanggan.",
  },
  {
    href: "/products",
    icon: Package,
    title: "Produk",
    description: "Tools AI untuk video, foto, sosial media, dan lainnya.",
  },
  {
    href: "/roadmap",
    icon: Map,
    title: "Roadmap",
    description: "Growth Ecosystem 2026+ — timeline, pilar, dan visi global.",
  },
  {
    href: "/pasar",
    icon: Globe2,
    title: "Pasar",
    description: "Indonesia, ASEAN, Amerika, Oseania, Inggris, dan Eropa.",
  },
  {
    href: "/pricing",
    icon: CreditCard,
    title: "Harga",
    description: "Paket subscription fleksibel untuk setiap kebutuhan.",
  },
  {
    href: "/contact",
    icon: Mail,
    title: "Kontak",
    description: "Hubungi tim kami untuk demo, kerjasama, atau dukungan.",
  },
];

export function HomeExploreSection() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Jelajahi"
          title="Temukan Halaman Kami"
          description="Setiap bagian memiliki halaman khusus dengan informasi lengkap."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, i) => (
            <AnimateIn key={page.href} delay={i * 60} variant="scale">
              <Link
                href={page.href}
                className="glass-card group flex h-full flex-col rounded-2xl p-6 transition-all duration-500"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-indigo-50 text-indigo-600 transition-transform duration-500 group-hover:scale-105">
                  <page.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-semibold text-zinc-900">{page.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-zinc-500">
                  {page.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-indigo-600 transition-colors group-hover:text-indigo-600">
                  Buka halaman
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
