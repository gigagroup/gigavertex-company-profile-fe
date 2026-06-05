"use client";

import { Shield, Rocket, Palette, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { AnimatedProgress } from "@/components/ui/AnimatedProgress";
import { useI18n } from "@/i18n/context";

const icons = [Rocket, Shield, TrendingUp, Palette];

type FeaturesSectionProps = {
  showHeader?: boolean;
};

export function FeaturesSection({ showHeader = true }: FeaturesSectionProps) {
  const { content } = useI18n();
  const { features } = content.constants;
  const { features: featuresUi } = content.ui;

  return (
    <section className="section-spacing relative">
      <div className="site-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            {showHeader && (
              <SectionHeader
                badge={featuresUi.badge}
                title={featuresUi.title}
                description={featuresUi.description}
                align="left"
                className="mb-10"
              />
            )}

            <div className="space-y-6">
              {features.map((feature, i) => {
                const Icon = icons[i] || Rocket;
                return (
                  <AnimateIn key={feature.title} delay={i * 90} variant="left">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-indigo-50 text-indigo-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-900">{feature.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>

          <AnimateIn variant="right" delay={100}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/10 to-violet-600/10 blur-2xl" />
              <div className="relative space-y-4">
                {[
                  { label: featuresUi.metrics.aiProcessing, value: 94, color: "bg-indigo-500" },
                  { label: featuresUi.metrics.userSatisfaction, value: 98, color: "bg-violet-500" },
                  { label: featuresUi.metrics.platformUptime, value: 99, color: "bg-emerald-500" },
                ].map((metric, i) => (
                  <AnimatedProgress
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    color={metric.color}
                    delay={i * 150}
                  />
                ))}

                <div className="glass-card rounded-2xl p-6">
                  <p className="text-sm leading-relaxed text-zinc-700">
                    &ldquo;{featuresUi.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-xs font-medium tracking-wide text-indigo-600">
                    {featuresUi.quoteAttribution}
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
