import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  Sparkles,
  Shield,
  Users,
  Leaf,
  Zap,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Logo } from "@/components/ui/Logo";
import {
  AboutIllustration,
  getValueIllustration,
} from "@/components/illustrations/AboutIllustration";
import {
  aboutIntro,
  aboutVision,
  aboutMission,
  aboutValuesIntro,
  aboutCoreValues,
  aboutJourney,
  aboutFounder,
} from "@/lib/about";
import { cn } from "@/lib/utils";

const valueIcons: LucideIcon[] = [Sparkles, Shield, Users, Leaf, Zap];

export function AboutSection() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-[360px] w-[480px] rounded-full bg-indigo-500/[0.06] blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateIn variant="left">
              <AboutIllustration
                variant="intro"
                label="Growth Ecosystem — video pertumbuhan bisnis"
                className="aspect-[4/3] w-full lg:aspect-auto lg:min-h-[400px]"
              />
            </AnimateIn>
            <div>
              <div className="mb-6 flex flex-col items-start gap-3">
                <Logo
                  size="md"
                  variant="brand"
                  className="max-h-10 w-auto min-w-[160px]"
                />
                <span className="badge-elegant inline-block rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase">
                  {aboutIntro.badge}
                </span>
              </div>
              <AnimatedText
                text={aboutIntro.headline}
                as="h1"
                className="font-display text-3xl font-normal tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
                delay={100}
              />
              <AnimateIn delay={200}>
                <p className="mt-6 text-base leading-relaxed text-zinc-600 lg:text-lg">
                  {aboutIntro.narrative}
                </p>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
                {aboutVision.title}
              </p>
              <h2 className="font-display mt-4 text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
                {aboutVision.tagline}
              </h2>
            </div>
          </AnimateIn>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {aboutVision.pillars.map((pillar, i) => (
              <AnimateIn key={pillar.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-indigo-400/40 hover:bg-white/[0.07]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/30 text-indigo-200">
                    {i === 0 ? (
                      <Eye className="h-5 w-5" />
                    ) : i === 1 ? (
                      <Target className="h-5 w-5" />
                    ) : (
                      <Sparkles className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {pillar.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
            <AnimateIn>
              <h2 className="font-display text-3xl text-zinc-900 sm:text-4xl">
                {aboutMission.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                {aboutMission.intro}
              </p>
              <AboutIllustration
                variant="mission"
                label="Ilustrasi misi perusahaan"
                className="mt-10 aspect-[16/10] w-full"
              />
            </AnimateIn>
            <AnimateIn delay={100} variant="right">
              <ul className="space-y-4">
                {aboutMission.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-zinc-700 lg:text-base">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50/80 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Nilai"
            title={aboutValuesIntro.title}
            description={aboutValuesIntro.description}
            className="mb-16"
          />

          <div className="space-y-6">
            {aboutCoreValues.map((value, i) => {
              const Icon = valueIcons[i] ?? Sparkles;
              const isEven = i % 2 === 0;
              const illustration = getValueIllustration(i);
              return (
                <AnimateIn key={value.title} delay={i * 40}>
                  <div
                    className={cn(
                      "grid overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm lg:grid-cols-2",
                      !isEven && "lg:[&>*:first-child]:order-2"
                    )}
                  >
                    <div
                      className={cn(
                        "flex flex-col justify-center p-8 lg:p-12",
                        isEven ? "lg:pr-8" : "lg:pl-8"
                      )}
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-2xl text-zinc-900 sm:text-3xl">
                        {value.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                        {value.description}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "relative min-h-[220px] lg:min-h-[280px]",
                        isEven
                          ? "border-t border-zinc-100 lg:border-t-0 lg:border-l"
                          : "border-t border-zinc-100 lg:border-t-0 lg:border-r"
                      )}
                    >
                      <AboutIllustration
                        variant={illustration}
                        label={`Ilustrasi nilai ${value.title}`}
                        className="h-full min-h-[220px] rounded-none lg:min-h-[280px]"
                      />
                      <span className="absolute bottom-4 left-4 z-10 rounded-md bg-white/90 px-2 py-1 font-display text-sm text-indigo-800 shadow-sm backdrop-blur-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateIn>
              <SectionHeader
                badge="Perjalanan"
                title={aboutJourney.title}
                description={aboutJourney.subtitle}
                align="left"
                className="mb-0"
              />
              <Link
                href="/roadmap"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-indigo-600"
              >
                Roadmap 2026+
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </AnimateIn>
            <div className="relative space-y-0">
              <div
                className="absolute top-4 bottom-4 left-[1.35rem] w-px bg-indigo-200"
                aria-hidden
              />
              {aboutJourney.milestones.map((m, i) => (
                <AnimateIn key={m.year} delay={i * 70}>
                  <div className="relative flex gap-6 pb-10 last:pb-0">
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-indigo-500 bg-white text-xs font-bold text-indigo-700">
                      {m.year.slice(2)}
                    </div>
                    <div className="pt-1">
                      <span className="text-xs font-semibold tracking-wide text-indigo-600">
                        {m.year}
                      </span>
                      <h3 className="mt-1 font-semibold text-zinc-900">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-indigo-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Kepemimpinan"
            title="Founder & CEO"
            description="Visi dan arah penyedia produk kecerdasan buatan dan platform SaaS Giga Vertex Technology."
          />

          <AnimateIn>
            <div className="glass-card mx-auto max-w-4xl overflow-hidden rounded-2xl lg:grid lg:grid-cols-[minmax(0,300px)_1fr]">
              <div className="flex items-center justify-center bg-zinc-100 px-6 py-8 lg:px-8 lg:py-10">
                <Image
                  src={aboutFounder.image}
                  alt={`${aboutFounder.name}, ${aboutFounder.role} Giga Vertex Technology`}
                  width={400}
                  height={500}
                  className="h-auto max-h-[min(520px,70vh)] w-auto max-w-full object-contain"
                  sizes="300px"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <span className="text-xs font-semibold tracking-wide text-indigo-600 uppercase">
                  {aboutFounder.role}
                </span>
                <h3 className="font-display mt-2 text-2xl text-zinc-900 sm:text-3xl">
                  {aboutFounder.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{aboutFounder.since}</p>
                <p className="mt-4 text-base leading-relaxed text-zinc-600">
                  {aboutFounder.bio}
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
