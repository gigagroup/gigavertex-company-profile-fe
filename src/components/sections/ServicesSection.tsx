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
import { AnimateIn } from "@/components/ui/AnimateIn";
import { services } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Code2,
  Globe,
  Layers,
  Wrench,
  HeadphonesIcon: Headphones,
};

export function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Layanan"
          title="Solusi Teknologi Lengkap"
          description="Dari ide hingga implementasi — kami menyediakan layanan end-to-end untuk transformasi digital bisnis Anda."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Brain;
            return (
              <AnimateIn key={service.title} delay={i * 80} variant="scale">
              <div
                className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/[0.04]"
              >
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 text-cyan-400 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {service.description}
                  </p>
                </div>
              </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
