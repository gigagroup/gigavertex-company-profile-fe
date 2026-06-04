import { Shield, Rocket, Palette, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { AnimatedProgress } from "@/components/ui/AnimatedProgress";
import { features } from "@/lib/constants";

const icons = [Rocket, Shield, TrendingUp, Palette];

export function FeaturesSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              badge="Keunggulan"
              title="Mengapa Memilih Tera Vertex?"
              description="Kami menggabungkan teknologi AI terdepan dengan desain premium untuk memberikan pengalaman terbaik."
              align="left"
              className="mb-10"
            />

            <div className="space-y-6">
              {features.map((feature, i) => {
                const Icon = icons[i] || Rocket;
                return (
                  <AnimateIn key={feature.title} delay={i * 90} variant="left">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{feature.title}</h3>
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
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-violet-600/10 blur-2xl" />
              <div className="relative space-y-4">
                {[
                  { label: "AI Processing", value: 94, color: "bg-cyan-500" },
                  { label: "User Satisfaction", value: 98, color: "bg-violet-500" },
                  { label: "Platform Uptime", value: 99, color: "bg-emerald-500" },
                ].map((metric, i) => (
                  <AnimatedProgress
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    color={metric.color}
                    delay={i * 150}
                  />
                ))}

                <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 p-6">
                  <p className="text-sm leading-relaxed text-zinc-300">
                    &ldquo;Platform kami dirancang untuk skala — dari startup hingga enterprise,
                    dengan infrastruktur yang handal dan support yang responsif.&rdquo;
                  </p>
                  <p className="mt-3 text-xs font-medium text-cyan-400">
                    — Engineering Team, Tera Vertex
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
