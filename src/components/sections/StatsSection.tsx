import { AnimateIn } from "@/components/ui/AnimateIn";
import { stats } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="border-y border-zinc-200 bg-indigo-50/30 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100} variant="scale">
              <div className="text-center">
                <div className="text-3xl font-bold text-zinc-900 sm:text-4xl lg:text-5xl">
                  <span className="font-display text-gradient-brand text-gradient-animate">
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
