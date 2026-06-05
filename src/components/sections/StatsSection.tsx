"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { useI18n } from "@/i18n/context";

export function StatsSection() {
  const { content } = useI18n();
  const { stats } = content.constants;

  return (
    <section className="relative border-y border-zinc-200/80 bg-white py-14 lg:py-16">
      <div className="site-container">
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 80} variant="scale">
              <div className="text-center">
                <div className="font-display text-4xl font-normal text-gradient-brand lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium tracking-wide text-zinc-500 uppercase">
                  {stat.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
