import { Megaphone, Music2, Search, Layers3, Target, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  adsStrategyMeta,
  adsChannels,
  adsStrategyPrinciples,
} from "@/lib/ads-strategy";
import { cn } from "@/lib/utils";

const channelIcons: Record<string, LucideIcon> = {
  meta: Megaphone,
  tiktok: Music2,
  google: Search,
};

const channelAccent: Record<string, string> = {
  meta: "from-blue-500/12 to-indigo-500/8 border-blue-200/70",
  tiktok: "from-zinc-800/8 to-zinc-600/5 border-zinc-300/80",
  google: "from-emerald-500/12 to-teal-500/8 border-emerald-200/70",
};

type AdsStrategySectionProps = {
  showHeader?: boolean;
};

export function AdsStrategySection({ showHeader = true }: AdsStrategySectionProps) {
  return (
    <>
      {showHeader && (
        <section className="relative pt-32 pb-4 lg:pt-36">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-[360px] w-[560px] -translate-x-1/2 rounded-full bg-indigo-600/[0.07] blur-[120px] animate-float" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="badge-elegant mb-4 inline-block rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase">
                {adsStrategyMeta.badge}
              </span>
              <h1 className="font-display text-4xl font-normal tracking-tight text-zinc-900 sm:text-5xl">
                {adsStrategyMeta.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                {adsStrategyMeta.intro}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className={cn(showHeader ? "pb-12" : "section-spacing")}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {!showHeader && (
            <SectionHeader
              badge={adsStrategyMeta.badge}
              title="Meta, TikTok & Google Ads"
              description={adsStrategyMeta.intro}
              className="mb-14"
            />
          )}

          <div className="grid gap-6 lg:gap-8">
            {adsChannels.map((channel, i) => {
              const Icon = channelIcons[channel.id] ?? Target;
              return (
                <AnimateIn key={channel.id} delay={i * 60}>
                  <article
                    className={cn(
                      "glass-card overflow-hidden rounded-2xl border bg-gradient-to-br",
                      channelAccent[channel.id]
                    )}
                  >
                    <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-10 lg:p-10">
                      <div>
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-indigo-600 shadow-sm">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h2 className="text-2xl font-semibold text-zinc-900">
                          {channel.name}
                        </h2>
                        <p className="mt-1 text-sm font-medium text-indigo-600">
                          {channel.platform}
                        </p>
                        <span className="mt-4 inline-block rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-[10px] font-semibold tracking-wide text-zinc-600 uppercase">
                          {channel.phase}
                        </span>
                        <p className="mt-5 text-sm leading-relaxed text-zinc-600">
                          {channel.summary}
                        </p>
                        <p className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/50 px-4 py-3 text-xs leading-relaxed font-medium text-indigo-900">
                          {channel.role}
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-900">
                            <Layers3 className="h-4 w-4 text-indigo-600" />
                            Strategi utama
                          </h3>
                          <ul className="space-y-2.5">
                            {channel.strategies.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 text-sm leading-relaxed text-zinc-600"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-900">
                            <LineChart className="h-4 w-4 text-indigo-600" />
                            Fokus kampanye
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {channel.focus.map((tag) => (
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
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Prinsip"
            title="Cara Kami Menjalankan Mesin Iklan"
            className="mb-12"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {adsStrategyPrinciples.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 70} variant="scale">
                <div className="glass-card h-full rounded-2xl p-6">
                  <h3 className="mb-3 font-semibold text-zinc-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
