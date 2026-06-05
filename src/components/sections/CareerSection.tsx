"use client";

import { Briefcase, Heart, Rocket, Users, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { useI18n } from "@/i18n/context";

const benefitIcons = [Rocket, Heart, Users, Briefcase];

export function CareerSection() {
  const { content } = useI18n();
  const { careerMeta, careerWhyJoin, careerBenefits, careerOpenings, careerProcess } =
    content.career;
  const { career: careerUi } = content.ui;

  return (
    <>
      <section className="relative pt-32 pb-12 lg:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600/[0.07] blur-[120px] animate-float" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-elegant mb-4 inline-block rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase">
              {careerMeta.badge}
            </span>
            <h1 className="font-display text-4xl font-normal tracking-tight text-zinc-900 sm:text-5xl">
              {careerMeta.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-600 lg:text-lg">
              {careerMeta.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateIn variant="left">
              <SectionHeader
                badge={careerUi.whyBadge}
                title={careerWhyJoin.title}
                description={careerWhyJoin.description}
                align="left"
                className="mb-8"
              />
              <ul className="space-y-3">
                {careerWhyJoin.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-zinc-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn variant="right" delay={100}>
              <SectionHeader
                badge={careerUi.benefitsBadge}
                title={careerBenefits.title}
                align="left"
                className="mb-8"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {careerBenefits.items.map((item, i) => {
                  const Icon = benefitIcons[i] ?? Briefcase;
                  return (
                    <div key={item.title} className="glass-card rounded-2xl p-5">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-indigo-50 text-indigo-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200/80 bg-zinc-50/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge={careerUi.openingsBadge}
            title={careerOpenings.title}
            description={careerOpenings.description}
            className="mb-12"
          />
          <div className="space-y-4">
            {careerOpenings.positions.map((position, i) => (
              <AnimateIn key={position.title} delay={i * 60}>
                <div className="glass-card flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">{position.title}</h3>
                    <p className="mt-1 text-sm text-indigo-600">{position.department}</p>
                    <p className="mt-2 text-sm text-zinc-500">
                      {position.type} · {position.location}
                    </p>
                  </div>
                  <LocalizedLink
                    href="/contact"
                    className="btn-primary-glow inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white"
                  >
                    {careerUi.applyNow}
                    <ArrowRight className="h-4 w-4" />
                  </LocalizedLink>
                </div>
              </AnimateIn>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-zinc-500">{careerOpenings.emptyNote}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge={careerUi.processBadge}
            title={careerProcess.title}
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careerProcess.steps.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 70} variant="scale">
                <div className="glass-card h-full rounded-2xl p-6 text-center">
                  <span className="font-display text-3xl text-indigo-200">{step.step}</span>
                  <h3 className="mt-2 font-semibold text-zinc-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{step.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
