import {
  Sparkles,
  Video,
  Calendar,
  Share2,
  Brain,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionFooterLink } from "@/components/ui/SectionFooterLink";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { products } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Video,
  Calendar,
  Share2,
  Brain,
  LineChart,
};

type ProductsSectionProps = {
  preview?: boolean;
  showHeader?: boolean;
};

export function ProductsSection({
  preview = false,
  showHeader = true,
}: ProductsSectionProps) {
  const displayProducts = products;

  return (
    <section className={cn("relative", preview ? "py-20 lg:py-24" : "section-spacing")}>
      {!preview && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-100/40 to-transparent" />
      )}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {showHeader && (
          <SectionHeader
            badge="Produk"
            title={preview ? "Portofolio Produk SaaS" : "Ekosistem Produk SaaS AI"}
            description={
              preview
                ? "Autonix, Terabyte, Giga, Newton AI, dan Growi — platform andalan kami."
                : "Lima platform SaaS AI & CRM untuk creator, bisnis, dan agency — dari konten, video, hingga penjualan."
            }
          />
        )}

        <div
          className={cn(
            "grid gap-6",
            preview
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          )}
        >
          {displayProducts.map((product, i) => {
            const Icon = iconMap[product.icon] || Sparkles;
            return (
              <AnimateIn key={product.name} delay={i * 70} variant="scale">
                <div className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500">
                  {product.badge && (
                    <span
                      className={cn(
                        "absolute top-4 right-4 z-10 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase",
                        product.badge === "Popular" && "bg-indigo-500/20 text-indigo-600",
                        product.badge === "New" && "bg-emerald-500/20 text-emerald-400",
                        product.badge === "Soon" && "bg-violet-500/20 text-violet-400"
                      )}
                    >
                      {product.badge}
                    </span>
                  )}
                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-indigo-50 text-indigo-600 transition-transform duration-500 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium tracking-wider text-zinc-600 uppercase">
                      {product.category}
                    </span>
                    <h3 className="mt-1 mb-2 text-lg font-semibold text-zinc-900">{product.name}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-zinc-500">
                      {preview ? product.summary : product.description}
                    </p>
                    <ul className="space-y-1.5">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs text-zinc-600"
                        >
                          <span className="h-1 w-1 rounded-full bg-indigo-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        {preview && <SectionFooterLink href="/products" label="Semua produk" />}
      </div>
    </section>
  );
}
