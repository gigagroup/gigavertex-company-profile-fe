import {
  Sparkles,
  Video,
  Image,
  Palette,
  Calendar,
  Languages,
  Scissors,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Video,
  Image,
  Palette,
  Calendar,
  Languages,
  Scissors,
  Plus,
};

type ProductsSectionProps = {
  showAll?: boolean;
};

export function ProductsSection({ showAll = false }: ProductsSectionProps) {
  const displayProducts = showAll ? products : products.slice(0, 6);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Produk"
          title="Ekosistem Tools AI Kami"
          description="Suite lengkap tools AI untuk kreator, marketer, dan bisnis — dari generate video hingga social media scheduler."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayProducts.map((product, i) => {
            const Icon = iconMap[product.icon] || Sparkles;
            return (
              <AnimateIn key={product.name} delay={i * 70} variant="scale">
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#111118] transition-all duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                {product.badge && (
                  <span
                    className={cn(
                      "absolute top-4 right-4 z-10 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                      product.badge === "Popular" && "bg-cyan-500/20 text-cyan-400",
                      product.badge === "New" && "bg-emerald-500/20 text-emerald-400",
                      product.badge === "Soon" && "bg-violet-500/20 text-violet-400"
                    )}
                  >
                    {product.badge}
                  </span>
                )}
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 text-cyan-400 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-medium tracking-wider text-zinc-600 uppercase">
                    {product.category}
                  </span>
                  <h3 className="mt-1 mb-2 text-lg font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-500">
                    {product.description}
                  </p>
                  <ul className="space-y-1.5">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-zinc-400"
                      >
                        <span className="h-1 w-1 rounded-full bg-cyan-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto border-t border-white/5 p-4">
                  <button className="w-full rounded-lg py-2 text-sm font-medium text-cyan-400 transition-colors hover:bg-cyan-500/10">
                    Pelajari Lebih Lanjut →
                  </button>
                </div>
              </div>
              </AnimateIn>
            );
          })}
        </div>

        {!showAll && (
          <AnimateIn className="mt-12 text-center">
            <Button href="/products" variant="outline">
              Lihat Semua Produk
            </Button>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
