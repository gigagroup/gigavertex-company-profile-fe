import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { pricingPlans } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PricingSectionProps = {
  showAll?: boolean;
};

export function PricingSection({ showAll = true }: PricingSectionProps) {
  const plans = showAll ? pricingPlans : pricingPlans;

  return (
    <section className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Harga"
          title="Paket Subscription Fleksibel"
          description="Pilih paket yang sesuai kebutuhan — upgrade atau downgrade kapan saja tanpa komitmen jangka panjang."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <AnimateIn key={plan.name} delay={i * 120} variant="scale">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-8 transition-all",
                  plan.highlighted
                    ? "border-cyan-500/30 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-lg shadow-cyan-500/10"
                    : "border-white/5 bg-[#111118] hover:border-white/10"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-1 text-xs font-bold text-white">
                    Paling Populer
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-zinc-500">{plan.period}</span>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-zinc-400">
                      <Check className="h-4 w-4 shrink-0 text-cyan-500" />
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
      </div>
    </section>
  );
}
