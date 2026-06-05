"use client";

import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { useI18n } from "@/i18n/context";

export function IntroPreviewSection() {
  const { content } = useI18n();
  const { company } = content.constants;
  const { intro } = content.ui;

  return (
    <section className="relative py-20 lg:py-24">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            badge={intro.badge}
            title={intro.title}
            description={company.description}
            align="left"
            className="mb-0"
          />
          <AnimateIn variant="right" delay={100}>
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <p className="text-sm leading-relaxed text-zinc-500">{intro.body}</p>
              <ul className="mt-6 space-y-3">
                {intro.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-600">
                    <span className="h-1 w-1 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <LocalizedLink
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-indigo-600 transition-colors hover:text-indigo-800"
              >
                {intro.learnMore}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </LocalizedLink>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
