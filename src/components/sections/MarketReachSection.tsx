"use client";

import { Globe2, MapPin } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionFooterLink } from "@/components/ui/SectionFooterLink";
import { useI18n } from "@/i18n/context";

const regionAccent = [
  "from-indigo-500/15 to-violet-500/10 border-indigo-200/80",
  "from-blue-500/15 to-cyan-500/10 border-blue-200/80",
  "from-violet-500/15 to-fuchsia-500/10 border-violet-200/80",
];

export function MarketReachSection() {
  const { content } = useI18n();
  const { marketRegions } = content.markets;
  const { market: marketUi } = content.ui;

  return (
    <section className="relative border-y border-zinc-200/80 bg-zinc-50/50 py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/2 h-[320px] w-[480px] -translate-y-1/2 rounded-full bg-indigo-500/[0.06] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge={marketUi.badge}
          title={marketUi.title}
          description={marketUi.description}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {marketRegions.map((region, i) => (
            <AnimateIn key={region.title} delay={i * 80} variant="scale">
              <article
                className={`glass-card flex h-full flex-col rounded-2xl border bg-gradient-to-br p-6 sm:p-8 ${regionAccent[i]}`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 shadow-sm">
                    {i === 0 ? (
                      <MapPin className="h-5 w-5" />
                    ) : (
                      <Globe2 className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">{region.title}</h3>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-zinc-600">
                  {region.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span
                      key={country}
                      className="rounded-full border border-zinc-200/90 bg-white/90 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        <SectionFooterLink href="/pasar" label={marketUi.detailLink} />
      </div>
    </section>
  );
}
