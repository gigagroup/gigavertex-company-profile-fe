import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Video,
  Calendar,
  Share2,
  Brain,
  LineChart,
  ArrowRight,
  Check,
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

type Product = (typeof products)[number];

type ProductsSectionProps = {
  preview?: boolean;
  showHeader?: boolean;
};

type ProductBadge = NonNullable<Product["badge"]>;

function previewBadgeClass(badge: ProductBadge) {
  if (badge === "Popular") return "bg-indigo-500/20 text-indigo-600";
  return "bg-emerald-500/20 text-emerald-400";
}

function showcaseBadgeClass(badge: ProductBadge) {
  if (badge === "Popular") return "bg-indigo-600 text-white shadow-sm";
  return "bg-emerald-600 text-white shadow-sm";
}

function ProductPreviewCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const Icon = iconMap[product.icon] || Sparkles;

  return (
    <AnimateIn delay={index * 70} variant="scale">
      <div className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500">
        {product.badge && (
          <span
            className={cn(
              "absolute top-4 right-4 z-10 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase",
              previewBadgeClass(product.badge)
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
          {product.users && (
            <p className="mb-2 text-xs font-medium text-indigo-600">
              {product.users} pengguna aktif
            </p>
          )}
          <p className="mb-4 text-sm leading-relaxed text-zinc-500">{product.summary}</p>
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
}

function ProductShowcaseCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const Icon = iconMap[product.icon] || Sparkles;
  const imageFirst = index % 2 === 0;

  return (
    <AnimateIn delay={index * 80}>
      <article className="overflow-hidden rounded-3xl border border-zinc-200/90 bg-white shadow-[0_8px_40px_-12px_rgba(15,23,42,0.12)] transition-shadow duration-300 hover:shadow-[0_16px_48px_-12px_rgba(79,70,229,0.15)]">
        <div
          className={cn(
            "grid lg:grid-cols-2 lg:items-stretch",
            !imageFirst && "lg:[&>*:first-child]:order-2"
          )}
        >
          <div className="relative flex min-h-[220px] items-center justify-center bg-gradient-to-br from-zinc-950 via-slate-900 to-indigo-950 p-6 sm:min-h-[280px] lg:min-h-[340px] lg:p-8">
            {product.badge && (
              <span
                className={cn(
                  "absolute top-5 right-5 z-10 rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase",
                  showcaseBadgeClass(product.badge)
                )}
              >
                {product.badge}
              </span>
            )}
            <div className="relative h-full w-full max-w-lg">
              <Image
                src={product.image}
                alt={`Antarmuka ${product.name}`}
                width={960}
                height={600}
                className="h-auto w-full rounded-lg object-contain shadow-2xl ring-1 ring-white/10"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index < 2}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-10 xl:p-12">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-semibold tracking-[0.14em] text-indigo-600 uppercase">
                {product.category}
              </span>
            </div>

            <h2 className="font-display text-3xl font-normal tracking-tight text-zinc-900 sm:text-4xl">
              {product.name}
            </h2>

            {product.users && (
              <p className="mt-2 text-sm font-medium text-indigo-600">
                {product.users} pengguna aktif
              </p>
            )}

            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              {product.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700"
                >
                  <Check className="h-3.5 w-3.5 text-indigo-500" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-primary-glow inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-all hover:brightness-110"
              >
                Mulai dengan {product.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/kecerdasan-buatan"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800"
              >
                Lihat ekosistem AI
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </AnimateIn>
  );
}

export function ProductsSection({
  preview = false,
  showHeader = true,
}: ProductsSectionProps) {
  return (
    <section
      className={cn(
        "relative",
        preview ? "py-20 lg:py-24" : "pb-20 pt-6 lg:pb-28 lg:pt-8"
      )}
    >
      {!preview && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50/30 via-transparent to-transparent" />
      )}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {showHeader && (
          <SectionHeader
            badge="Produk"
            title={preview ? "Portofolio Produk SaaS" : "Ekosistem Produk SaaS AI"}
            description={
              preview
                ? "Autonix, Terabyte, Giga, Newton AI, dan Growi — platform SaaS andalan kami dengan ribuan pengguna aktif."
                : "Lima platform SaaS AI & CRM untuk creator, bisnis, dan agency — dari konten, video, hingga penjualan. Sudah dipercaya ribuan pengguna."
            }
            className={preview ? undefined : "mb-12 lg:mb-16"}
          />
        )}

        {preview ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <ProductPreviewCard key={product.name} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-10 lg:gap-14">
            {products.map((product, i) => (
              <ProductShowcaseCard key={product.name} product={product} index={i} />
            ))}
          </div>
        )}

        {preview && <SectionFooterLink href="/products" label="Semua produk" />}
      </div>
    </section>
  );
}
