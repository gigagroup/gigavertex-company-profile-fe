"use client";

import { LocalizedLink } from "@/components/ui/LocalizedLink";
import Image from "next/image";
import {
  Brain,
  Sparkles,
  Video,
  Calendar,
  Share2,
  LineChart,
  ArrowRight,
  Cpu,
  Shield,
  Users,
  Building2,
  User,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { assets } from "@/lib/assets";
import { useI18n } from "@/i18n/context";

const productIcons: Record<string, LucideIcon> = {
  Sparkles,
  Video,
  Calendar,
  Share2,
  Brain,
  LineChart,
};

const useCaseIcons = [Building2, Sparkles, Cpu, User];

export function ArtificialIntelligenceSection() {
  const { content } = useI18n();
  const aiProducts = content.constants.products;
  const {
    aiMeta,
    aiCapabilities,
    aiEcosystemPillars,
    aiUseCases,
    aiTechStack,
    aiProcess,
    aiDifferentiators,
    aiEthics,
  } = content.ai;
  const { ai: aiUi, common } = content.ui;

  return (
    <div className="overflow-x-hidden">
      <section className="relative overflow-hidden pt-24 pb-6 sm:pt-28 lg:pt-32 lg:pb-8">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto w-full min-w-0 max-w-2xl overflow-hidden rounded-2xl bg-zinc-900 shadow-md ring-1 ring-zinc-200/60 lg:max-w-3xl">
            <video
              className="aspect-video w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label={aiUi.videoAriaLabel}
            >
              <source src={assets.videos.aiEcosystem} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pb-12 lg:pb-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 h-[280px] w-[min(100%,36rem)] max-w-full -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[100px] animate-float sm:h-[420px]" />
        </div>
        <div className="relative mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full min-w-0 max-w-3xl text-center">
            <span className="badge-elegant mb-4 inline-block rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase">
              {aiMeta.badge}
            </span>
            <h1 className="font-display text-[1.75rem] leading-[1.15] font-normal tracking-tight text-balance text-zinc-900 sm:text-4xl lg:text-5xl">
              {aiMeta.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg">
              {aiMeta.intro}
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <LocalizedLink
                href="/products"
                className="btn-primary-glow inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white sm:w-auto"
              >
                {aiUi.viewProducts}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </LocalizedLink>
              <LocalizedLink
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-indigo-300 hover:text-indigo-700 sm:w-auto"
              >
                {aiUi.tryFree}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={aiUi.capabilitiesBadge}
            title={aiUi.capabilitiesTitle}
            description={aiUi.capabilitiesDesc}
            className="mb-14"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aiCapabilities.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 50} variant="scale">
                <div className="glass-card h-full rounded-2xl p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-indigo-50 text-indigo-600">
                    <Brain className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold text-zinc-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-600">{item.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200/80 bg-indigo-50/25 py-16 lg:py-20">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={aiUi.ecosystemBadge}
            title={aiUi.ecosystemTitle}
            description={aiUi.ecosystemDesc}
            className="mb-14"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiEcosystemPillars.map((pillar, i) => (
              <AnimateIn key={pillar.name} delay={i * 70}>
                <div className="glass-card h-full min-w-0 rounded-2xl border-indigo-100/80 p-5 text-left sm:p-8">
                  <div className="font-display text-2xl break-words text-gradient-brand sm:text-3xl">
                    {pillar.name}
                  </div>
                  <p className="mt-2 text-xs font-semibold tracking-wide text-indigo-600 uppercase">
                    {pillar.focus}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                    {pillar.summary}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={aiUi.useCaseBadge}
            title={aiUi.useCaseTitle}
            description={aiUi.useCaseDesc}
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {aiUseCases.map((block, i) => {
              const Icon = useCaseIcons[i] ?? Users;
              return (
                <AnimateIn key={block.audience} delay={i * 60}>
                  <div className="glass-card rounded-2xl p-6 sm:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-zinc-900">{block.audience}</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-zinc-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
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

      <section className="py-12 lg:py-16">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={aiUi.techBadge}
            title={aiUi.techTitle}
            className="mb-14"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {aiTechStack.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 50}>
                <div className="flex gap-4 rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                  <Cpu className="h-6 w-6 shrink-0 text-indigo-600" />
                  <div>
                    <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200/80 py-16 lg:py-20">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={aiUi.productsBadge}
            title={aiUi.productsTitle}
            description={aiUi.productsDesc}
            className="mb-14"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aiProducts.map((product, i) => {
              const Icon = productIcons[product.icon] ?? Sparkles;
              return (
                <AnimateIn key={product.name} delay={i * 40} variant="scale">
                  <div className="glass-card h-full min-w-0 overflow-hidden rounded-2xl">
                    <div className="relative aspect-[16/10] w-full min-w-0 bg-zinc-50">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="min-w-0 p-5 sm:p-6">
                    <div className="mb-3 flex min-w-0 items-center gap-2">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-indigo-50 text-indigo-600">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-wide text-indigo-600 uppercase">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-zinc-900">{product.name}</h3>
                    {product.users && (
                      <p className="mt-1 text-xs font-medium text-indigo-600">
                        {product.users} {common.activeUsers}
                      </p>
                    )}
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                      {product.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {product.features.map((f) => (
                        <li
                          key={f}
                          className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-600"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <LocalizedLink
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
            >
              {content.ui.products.allProducts}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </LocalizedLink>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50/80 py-16 lg:py-20">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={aiUi.processBadge}
            title={aiUi.processTitle}
            className="mb-14"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aiProcess.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 60} variant="scale">
                <div className="glass-card h-full rounded-2xl p-6">
                  <span className="font-display text-3xl text-indigo-200">{step.step}</span>
                  <h3 className="mt-2 font-semibold text-zinc-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {step.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimateIn className="min-w-0">
              <SectionHeader
                badge={aiUi.whyBadge}
                title={aiUi.whyTitle}
                align="left"
                className="mb-8 !max-w-none"
              />
              <ul className="space-y-3">
                {aiDifferentiators.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-zinc-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <LocalizedLink
                href="/roadmap"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-indigo-600"
              >
                {aiUi.viewRoadmap}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </LocalizedLink>
            </AnimateIn>
            <AnimateIn delay={100} variant="right">
              <div className="glass-card rounded-2xl p-8">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">{aiEthics.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {aiEthics.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {aiEthics.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-zinc-600">
                      <span className="text-indigo-500">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}
