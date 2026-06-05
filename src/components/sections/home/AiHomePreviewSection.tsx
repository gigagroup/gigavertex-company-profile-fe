import { Brain } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionFooterLink } from "@/components/ui/SectionFooterLink";
import { aiMeta, aiEcosystemPillars, aiCapabilities } from "@/lib/ai-intelligence";

export function AiHomePreviewSection() {
  const capabilities = aiCapabilities.slice(0, 3);

  return (
    <section className="relative border-y border-zinc-200/80 bg-indigo-50/20 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge={aiMeta.badge}
          title="Ekosistem AI untuk Semua Kalangan"
          description="Platform berbasis langganan (SaaS) untuk generative AI, LLM, automasi, dan CRM — Autonix, Terabyte, Giga, Newton AI, dan Growi dengan ribuan pengguna aktif."
        />

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiEcosystemPillars.map((pillar, i) => (
            <AnimateIn key={pillar.name} delay={i * 60} variant="scale">
              <div className="glass-card h-full rounded-2xl p-6 text-center">
                <div className="font-display text-2xl text-gradient-brand">{pillar.name}</div>
                <p className="mt-1 text-[10px] font-semibold tracking-wide text-indigo-600 uppercase">
                  {pillar.focus}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {pillar.summary}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map((item, i) => (
            <AnimateIn key={item.title} delay={120 + i * 50}>
              <div className="flex gap-3 rounded-xl border border-zinc-200/80 bg-white p-5">
                <Brain className="h-5 w-5 shrink-0 text-indigo-600" />
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <SectionFooterLink href="/kecerdasan-buatan" label="Pelajari kecerdasan buatan" />
      </div>
    </section>
  );
}
