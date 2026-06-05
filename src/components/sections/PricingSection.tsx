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

  return (
    <section className={cn("relative", preview ? "py-20 lg:py-24" : "section-spacing")}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-100/50 to-transparent" />
      <div className="site-container relative">
        {showHeader && (
          <SectionHeader
            badge="Harga"
            title={preview ? "Paket Berlangganan" : "Paket Subscription Fleksibel"}
            description={
              preview
                ? "Mulai dari paket Starter hingga Enterprise. Detail perbandingan di halaman Harga."
                : "Pilih paket yang sesuai kebutuhan — upgrade atau downgrade kapan saja tanpa komitmen jangka panjang."
            }
          />
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <AnimateIn key={plan.name} delay={i * 120} variant="scale">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-8 transition-all",
                  plan.highlighted
                    ? "glass-card border-indigo-300 bg-gradient-to-b from-indigo-50 to-white shadow-lg shadow-indigo-200/40"
                    : "glass-card hover:border-zinc-200"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full btn-primary-glow px-4 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                    Paling Populer
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
                  {(preview ? plan.features.slice(0, 4) : plan.features).map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-zinc-600">
                      <Check className="h-4 w-4 shrink-0 text-indigo-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={plan.highlighted ? "primary" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </AnimateIn>
          ))}
        </div>

        {preview && (
          <>
            <p className="mt-8 text-center text-sm text-zinc-600">
              Paket Starter & Enterprise tersedia — lihat perbandingan lengkap.
            </p>
            <SectionFooterLink href="/pricing" label="Lihat semua paket" />
          </>
        )}
      </div>
    </section>
  );
}
