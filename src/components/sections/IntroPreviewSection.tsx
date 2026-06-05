import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company } from "@/lib/constants";

export function IntroPreviewSection() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            badge="Tentang Kami"
            title="Penyedia Produk Kecerdasan Buatan untuk Bisnis Modern"
            description={company.description}
            align="left"
            className="mb-0"
          />
          <AnimateIn variant="right" delay={100}>
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <p className="text-sm leading-relaxed text-zinc-500">
                Kami mengembangkan dan mengoperasikan ekosistem produk kecerdasan buatan (AI)
                dan platform berbasis langganan (SaaS) yang membantu pebisnis, UMKM, tim kreatif,
                marketer, perusahaan, dan semua kalangan bekerja lebih cepat dan lebih cerdas.
              </p>
              <ul className="mt-6 space-y-3">
                {["5+ platform SaaS siap pakai", "5.000+ pengguna aktif", "Dukungan 24/7"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-600">
                      <span className="h-1 w-1 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-indigo-600 transition-colors hover:text-indigo-800"
              >
                Pelajari tentang kami
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
