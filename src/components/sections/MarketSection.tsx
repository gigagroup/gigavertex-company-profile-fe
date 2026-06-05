"use client";

import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { Globe2, MapPin, ArrowRight, Languages, CreditCard, Megaphone, Database } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useI18n } from "@/i18n/context";
import { cn } from "@/lib/utils";

const regionAccent = [
  "from-indigo-500/12 to-violet-500/8 border-indigo-200/80",
  "from-blue-500/12 to-cyan-500/8 border-blue-200/80",
  "from-violet-500/12 to-fuchsia-500/8 border-violet-200/80",
];

const enablerIcons = [CreditCard, Languages, Megaphone, Database];

export function MarketSection() {
  const { content } = useI18n();
  const { marketMeta, marketRegionsDetail, marketExpansionTimeline, marketEnablers } =
    content.markets;

  return (
    <>
      <section className="relative pt-32 pb-12 lg:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/[0.07] blur-[120px] animate-float" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-elegant mb-4 inline-block rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase">
              {marketMeta.badge}
            </span>
            <h1 className="font-display text-4xl font-normal tracking-tight text-zinc-900 sm:text-5xl">
              {marketMeta.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">{marketMeta.intro}</p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {marketRegionsDetail.map((region, i) => {
            const Icon = i === 0 ? MapPin : Globe2;
            return (
              <AnimateIn key={region.id} delay={i * 40}>
                <article
                  className={cn(
                    "glass-card mb-8 overflow-hidden rounded-2xl border bg-gradient-to-br last:mb-0",
                    regionAccent[i]
                  )}
                >
                  <div className="border-b border-zinc-200/60 bg-white/50 px-6 py-6 sm:px-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 shadow-sm">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
                            {region.title}
                          </h2>
                          <p className="mt-1 text-sm font-medium text-indigo-600">
                            {region.phase}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-800">
                        {region.summary}
                      </span>
                    </div>
                    <p className="mt-4 max-w-4xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                      {region.description}
                    </p>
                    <p className="mt-3 text-sm font-medium text-zinc-700">
                      Target: {region.targetAudience}
                    </p>
                  </div>

                  <div className="grid gap-0 lg:grid-cols-2">
                    <div className="border-b border-zinc-200/60 px-6 py-6 sm:px-8 lg:border-b-0 lg:border-r">
                      <h3 className="mb-4 text-sm font-semibold tracking-wide text-zinc-900 uppercase">
                        Negara & fokus
                      </h3>
                      <ul className="space-y-4">
                        {region.countries.map((country) => (
                          <li
                            key={country.name}
                            className="rounded-xl border border-zinc-100 bg-white/80 p-4"
                          >
                            <span className="font-semibold text-zinc-900">
                              {country.name}
                            </span>
                            <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                              {country.highlight}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6 px-6 py-6 sm:px-8">
                      <div>
                        <h3 className="mb-3 text-sm font-semibold tracking-wide text-zinc-900 uppercase">
                          Strategi pasar
                        </h3>
                        <ul className="space-y-2">
                          {region.strategies.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-sm leading-relaxed text-zinc-600"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-3 text-sm font-semibold tracking-wide text-zinc-900 uppercase">
                          Lokalisasi
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {region.localization.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </section>

      <section className="border-y border-zinc-200/80 bg-zinc-50/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Timeline"
            title="Tahapan Ekspansi Pasar"
            description="Perjalanan dari Indonesia hingga pasar global — selaras dengan roadmap 2026+."
            className="mb-14"
          />
          <div className="relative">
            <div
              className="absolute top-0 bottom-0 left-4 hidden w-px bg-indigo-200 lg:left-1/2 lg:block"
              aria-hidden
            />
            <div className="space-y-6">
              {marketExpansionTimeline.map((item, i) => (
                <AnimateIn key={item.period} delay={i * 50}>
                  <div
                    className={cn(
                      "relative lg:grid lg:grid-cols-2 lg:gap-12",
                      i % 2 === 1 && "lg:[&>div:first-child]:order-2"
                    )}
                  >
                    <div className="hidden lg:block" />
                    <div className="glass-card relative rounded-2xl p-6 lg:max-w-md lg:justify-self-start lg:odd:justify-self-end">
                      <span className="absolute -left-1 top-6 hidden h-3 w-3 rounded-full border-2 border-white bg-indigo-500 lg:block ltr:lg:-left-[calc(1.5rem+5px)]" />
                      <p className="text-xs font-semibold tracking-wide text-indigo-600 uppercase">
                        {item.period}
                      </p>
                      <h3 className="mt-1 font-semibold text-zinc-900">{item.focus}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <LocalizedLink
              href="/roadmap"
              className="group inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
            >
              Lihat roadmap lengkap
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </LocalizedLink>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Infrastruktur"
            title="Pendukung Ekspansi Pasar"
            className="mb-12"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {marketEnablers.map((item, i) => {
              const Icon = enablerIcons[i] ?? Globe2;
              return (
                <AnimateIn key={item.title} delay={i * 60} variant="scale">
                  <div className="glass-card h-full rounded-2xl p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <LocalizedLink
              href="/strategi-iklan"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-indigo-300 hover:text-indigo-700"
            >
              Strategi Meta, TikTok & Google Ads
              <ArrowRight className="h-4 w-4" />
            </LocalizedLink>
            <LocalizedLink
              href="/kecerdasan-buatan"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-indigo-300 hover:text-indigo-700"
            >
              Ekosistem AI
              <ArrowRight className="h-4 w-4" />
            </LocalizedLink>
          </div>
        </div>
      </section>
    </>
  );
}
