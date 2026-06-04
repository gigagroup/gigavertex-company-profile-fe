import { AnimateIn } from "@/components/ui/AnimateIn";
import { stats } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="border-y border-white/5 bg-white/[0.01] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100} variant="scale">
              <div className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent text-gradient-animate">
                    {stat.value}
                  </span>
                </div>
                <div className="mt-2 text-sm text-zinc-500">{stat.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
