import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionFooterLink } from "@/components/ui/SectionFooterLink";
import { roadmapMeta, roadmapPhases } from "@/lib/roadmap";

export function RoadmapHomePreviewSection() {
  const phases = roadmapPhases.slice(0, 3);

  return (
    <section className="relative border-y border-zinc-200/80 bg-zinc-50/50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge={roadmapMeta.badge}
          title="Roadmap Growth Ecosystem 2026+"
          description="Dari fondasi Indonesia & ASEAN hingga ekspansi global — perkiraan fase dan target omzet."
        />

        <div className="space-y-4">
          {phases.map((phase, i) => (
            <AnimateIn key={phase.step} delay={i * 60}>
              <div className="glass-card flex flex-col gap-3 rounded-2xl p-6 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-indigo-500 bg-indigo-600 text-sm font-semibold text-white">
                  {phase.step}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-zinc-900">{phase.period}</h3>
                    {phase.badge && (
                      <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-700 uppercase">
                        {phase.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-indigo-600">{phase.quarter}</p>
                  <p className="mt-2 text-sm text-zinc-600">{phase.revenueTarget}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <SectionFooterLink href="/roadmap" label="Lihat roadmap lengkap" />
      </div>
    </section>
  );
}
