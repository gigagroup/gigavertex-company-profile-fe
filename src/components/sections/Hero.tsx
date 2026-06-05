"use client";

import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { assets } from "@/lib/assets";
import { useI18n } from "@/i18n/context";

export function Hero() {
  const { content } = useI18n();
  const { company } = content.constants;
  const { hero, common } = content.ui;

  const taglineStart = company.tagline.split(" ").slice(0, 3).join(" ");
  const taglineEnd = company.tagline.split(" ").slice(3).join(" ");

  return (
    <section
      id="home-hero"
      className="relative h-svh min-h-[640px] w-full overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={assets.videos.beranda} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/70"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent"
        aria-hidden
      />

      <div className="relative flex h-full flex-col justify-end pb-20 pt-28 lg:pb-28 lg:pt-32">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="animate-on-load badge-hero mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase">
              <span className="h-1 w-1 rounded-full bg-white" />
              {hero.badge}
            </div>

            <h1 className="font-display text-4xl leading-[1.08] font-normal tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              <AnimatedText text={taglineStart} delay={200} stagger={60} />
              <br />
              <AnimatedText text={taglineEnd} delay={400} stagger={60} wordClassName="text-white/95" />
            </h1>

            <p
              className="animate-on-load mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
              style={{ animationDelay: "550ms" }}
            >
              {company.name} — {company.description.replace(/\.$/, "")} {hero.subtitleSuffix}
            </p>

            <div
              className="animate-on-load mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "650ms" }}
            >
              <LocalizedLink
                href="/products"
                className="btn-primary-glow inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-all hover:brightness-110"
              >
                {hero.exploreProducts}
                <ArrowRight className="h-4 w-4" />
              </LocalizedLink>
              <LocalizedLink
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/5 px-8 py-3.5 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/15"
              >
                {hero.contactUs}
                <ArrowRight className="h-4 w-4" />
              </LocalizedLink>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 lg:flex"
        aria-hidden
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">{common.scroll}</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
