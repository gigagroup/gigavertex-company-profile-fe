"use client";

import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionFooterLink } from "@/components/ui/SectionFooterLink";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/context";
import { cn } from "@/lib/utils";

type PricingSectionProps = {
  preview?: boolean;
  showHeader?: boolean;
};

export function PricingSection({
  preview = false,
  showHeader = true,
}: PricingSectionProps) {
  const { content } = useI18n();
  const plans = content.constants.pricingPlans;
  const { pricing } = content.ui;
  const visiblePlans = preview ? plans.slice(0, 3) : plans;

  return (
    <section className={cn("relative", preview ? "py-20 lg:py-24" : "section-spacing")}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-100/50 to-transparent" />
      <div className="site-container relative">
        {showHeader && (
          <SectionHeader
            badge={pricing.badge}
            title={preview ? pricing.previewTitle : pricing.fullTitle}
            description={preview ? pricing.previewDesc : pricing.fullDesc}
          />
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePlans.map((plan, i) => (
            <AnimateIn key={plan.name} delay={i * 80} variant="scale">
              <div className="glass-card relative flex h-full flex-col rounded-2xl border p-6 transition-all hover:border-zinc-200 sm:p-8">
                {"comingSoon" in plan && plan.comingSoon && (
                  <span className="absolute -top-3 right-4 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-bold tracking-wider text-amber-800 uppercase">
                    {pricing.comingSoon}
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-zinc-900">{plan.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>
                </div>
                <div className="mb-8">
                  <span className="font-display text-4xl text-zinc-900">{plan.price}</span>
                  <span className="text-zinc-500">{plan.period}</span>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {(preview ? plan.features.slice(0, 3) : plan.features).map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-zinc-600">
                      <Check className="h-4 w-4 shrink-0 text-indigo-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="outline" className="w-full">
                  {plan.cta}
                </Button>
              </div>
            </AnimateIn>
          ))}
        </div>

        {preview && (
          <>
            <p className="mt-8 text-center text-sm text-zinc-600">{pricing.previewNote}</p>
            <SectionFooterLink href="/pricing" label={pricing.allPlans} />
          </>
        )}
      </div>
    </section>
  );
}
