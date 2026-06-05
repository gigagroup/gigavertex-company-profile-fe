"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { useI18n } from "@/i18n/context";

export function PricingFaqSection() {
  const { content } = useI18n();
  const { pricingFaqs } = content.constants;
  const { pricing } = content.ui;

  return (
    <section className="relative border-t border-zinc-200 py-20 lg:py-28">
      <div className="site-container max-w-3xl">
        <SectionHeader
          badge={pricing.faqBadge}
          title={pricing.faqTitle}
          description={pricing.faqDesc}
        />
        <div className="space-y-4">
          {pricingFaqs.map((faq, i) => (
            <AnimateIn key={faq.question} delay={i * 60}>
              <div className="glass-card rounded-2xl px-6 py-5">
                <h3 className="font-medium text-zinc-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{faq.answer}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
