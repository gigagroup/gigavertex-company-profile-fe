"use client";

import { ArrowRight, Mail } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/context";

export function CTASection() {
  const { content } = useI18n();
  const { company } = content.constants;
  const { cta } = content.ui;

  return (
    <section className="section-spacing relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateIn variant="scale">
          <div className="glass-card relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/80 via-violet-50/50 to-transparent" />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(124,58,237,0.15) 0%, transparent 50%)",
              }}
            />
            <div className="relative px-8 py-20 text-center sm:px-16 sm:py-24">
              <AnimatedText
                text={cta.headline}
                as="h2"
                className="font-display text-3xl font-normal text-zinc-900 sm:text-4xl lg:text-5xl"
                triggerOnView
              />
              <AnimateIn delay={200}>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed font-light text-zinc-600 lg:text-lg">
                  {cta.body} {company.shortName} {cta.bodySuffix}
                </p>
              </AnimateIn>
              <AnimateIn delay={320}>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button href="/contact" size="lg">
                    {cta.startNow}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href={`mailto:${company.email}`} variant="secondary" size="lg">
                    <Mail className="h-4 w-4" />
                    {company.email}
                  </Button>
                </div>
              </AnimateIn>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
