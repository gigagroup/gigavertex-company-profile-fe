"use client";

import { Search, PenTool, Rocket, Headphones } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { useI18n } from "@/i18n/context";

const icons = [Search, PenTool, Rocket, Headphones];

export function ServicesProcessSection() {
  const { content } = useI18n();
  const { serviceProcess } = content.constants;
  const { servicesProcess } = content.ui;

  return (
    <section className="relative border-t border-zinc-200 py-20 lg:py-28">
      <div className="site-container">
        <SectionHeader
          badge={servicesProcess.badge}
          title={servicesProcess.title}
          description={servicesProcess.description}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {serviceProcess.map((step, i) => {
            const Icon = icons[i] || Search;
            return (
              <AnimateIn key={step.title} delay={i * 80}>
                <div className="relative text-center">
                  <span className="font-display text-5xl text-indigo-100">{step.step}</span>
                  <div className="mx-auto -mt-6 mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-indigo-50 text-indigo-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold text-zinc-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500">{step.description}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
