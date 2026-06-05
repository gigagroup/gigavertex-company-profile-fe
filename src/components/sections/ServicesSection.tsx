"use client";

import {
  Brain,
  Code2,
  Globe,
  Layers,
  Wrench,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionFooterLink } from "@/components/ui/SectionFooterLink";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { useI18n } from "@/i18n/context";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Code2,
  Globe,
  Layers,
  Wrench,
  HeadphonesIcon: Headphones,
};

type ServicesSectionProps = {
  preview?: boolean;
  showHeader?: boolean;
};

export function ServicesSection({
  preview = false,
  showHeader = true,
}: ServicesSectionProps) {
  const { content } = useI18n();
  const { services } = content.constants;
  const { services: servicesUi } = content.ui;
  const items = preview ? services.slice(0, 3) : services;

  return (
    <section className={cn("relative", preview ? "py-20 lg:py-24" : "section-spacing")}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {showHeader && (
          <SectionHeader
            badge={servicesUi.badge}
            title={preview ? servicesUi.previewTitle : servicesUi.fullTitle}
            description={preview ? servicesUi.previewDesc : servicesUi.fullDesc}
          />
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, i) => {
            const Icon = iconMap[service.icon] || Brain;
            return (
              <AnimateIn key={service.title} delay={i * 80} variant="scale">
                <div className="glass-card group relative h-full overflow-hidden rounded-2xl p-8 transition-all duration-500">
                  <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-indigo-50 text-indigo-600 transition-transform duration-500 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-zinc-900">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        {preview && <SectionFooterLink href="/services" label={servicesUi.allPlatforms} />}
      </div>
    </section>
  );
}
