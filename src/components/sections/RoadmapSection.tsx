import Image from "next/image";
import {
  Megaphone,
  Sparkles,
  Palette,
  Server,
  Globe2,
  Target,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  roadmapMeta,
  roadmapFounder,
  roadmapPhases,
  roadmapPillars,
  roadmapVision,
} from "@/lib/roadmap";
import { cn } from "@/lib/utils";

const pillarIcons = [Megaphone, Sparkles, Palette, Server, Globe2];

export function RoadmapSection() {
  return (
    <>
      <section className="relative pt-32 pb-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/[0.08] blur-[120px] animate-float" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-on-load">
              <span className="badge-elegant mb-4 inline-block rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase">
                {roadmapMeta.badge}
              </span>
            </div>
            <AnimatedText
              text={roadmapMeta.title}
              as="h1"
              className="font-display text-4xl font-normal tracking-tight text-zinc-900 sm:text-5xl"
              delay={120}
            />
            <p
              className="animate-on-load mt-6 text-lg leading-relaxed text-zinc-600"
              style={{ animationDelay: "450ms" }}
            >
              {roadmapMeta.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="glass-card mx-auto max-w-2xl rounded-2xl p-8 text-center lg:max-w-3xl">
              <div className="relative mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border-4 border-indigo-100 shadow-md">
                <Image
                  src={roadmapFounder.image}
                  alt={`${roadmapFounder.name}, ${roadmapFounder.role}`}
                  fill
                  className="object-cover object-top"
                  sizes="112px"
                />
              </div>
              <span className="badge-elegant mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase">
                {roadmapFounder.role}
              </span>
              <h2 className="font-display text-2xl text-zinc-900 sm:text-3xl">
                {roadmapFounder.name}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                {roadmapFounder.bio}
              </p>
              <p className="mt-4 text-xs font-medium tracking-wide text-indigo-600 uppercase">
                Start pada tahun {roadmapFounder.since}
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Timeline"
            title="Fase Pertumbuhan 2026+"
            description="Perkiraan bulan dan tahun agar mudah dibaca — dari fondasi domestik hingga visi global."
            className="mb-14"
          />

          <div className="relative space-y-8">
            <div
              className="absolute top-0 bottom-0 left-[1.15rem] hidden w-px bg-gradient-to-b from-indigo-300 via-indigo-200 to-transparent lg:left-8 lg:block"
              aria-hidden
            />

            {roadmapPhases.map((phase, i) => (
              <AnimateIn key={phase.step} delay={i * 50}>
                <article className="relative lg:pl-20">
                  <div
                    className={cn(
                      "absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-semibold lg:left-4 lg:h-11 lg:w-11 lg:text-base",
                      phase.badge
                        ? "border-indigo-500 bg-indigo-600 text-white shadow-md shadow-indigo-500/30"
                        : "border-indigo-200 bg-white text-indigo-700"
                    )}
                  >
                    {phase.step}
                  </div>

                  <div className="glass-card ml-12 rounded-2xl p-6 sm:p-8 lg:ml-0">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 sm:text-xl">
                          {phase.period}
                        </h3>
                        <p className="mt-1 text-sm text-indigo-600">{phase.quarter}</p>
                      </div>
                      {phase.badge && (
                        <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[10px] font-semibold tracking-wide text-indigo-700 uppercase">
                          {phase.badge}
                        </span>
                      )}
                    </div>

                    <ul className="mt-6 space-y-3">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-zinc-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader badge="Pilar inti" title="Pilar Inti" className="mb-14" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roadmapPillars.map((pillar, i) => {
              const Icon = pillarIcons[i] ?? Target;
              return (
                <AnimateIn key={pillar.title} delay={i * 60} variant="scale">
                  <div className="glass-card h-full rounded-2xl p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-indigo-50 text-indigo-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-4 font-semibold text-zinc-900">{pillar.title}</h3>
                    <ul className="space-y-2">
                      {pillar.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-relaxed text-zinc-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="relative overflow-hidden rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-950 px-8 py-12 text-center sm:px-12 lg:py-16">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(129,140,248,0.25),transparent)]" />
              <div className="relative">
                <span className="badge-hero mb-5 inline-block rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase">
                  Visi jangka panjang
                </span>
                <h2 className="font-display text-2xl text-white sm:text-3xl lg:text-4xl">
                  Visi Jangka Panjang
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80 lg:text-lg">
                  {roadmapVision.description}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-2">
                  {roadmapVision.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-10 text-xs tracking-[0.2em] text-white/50 uppercase">
                  {roadmapMeta.footer}
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
