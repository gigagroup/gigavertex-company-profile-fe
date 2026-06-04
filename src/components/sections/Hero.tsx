import { ArrowRight, Play, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { company } from "@/lib/constants";

export function Hero() {
  const taglineStart = company.tagline.split(" ").slice(0, 3).join(" ");
  const taglineEnd = company.tagline.split(" ").slice(3).join(" ");

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px] animate-float" />
        <div
          className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px] animate-float delay-300"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-on-load mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">
              Platform AI & Software Terdepan di Indonesia
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <AnimatedText text={taglineStart} delay={200} stagger={60} />
            <br className="hidden sm:block" />
            <AnimatedText
              text={taglineEnd}
              className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent text-gradient-animate"
              delay={450}
              stagger={60}
            />
          </h1>

          <p className="animate-on-load delay-500 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            {company.name} — pengembang solusi AI, tools kreatif, software, aplikasi,
            dan platform subscription untuk mempercepat inovasi bisnis Anda.
          </p>

          <div className="animate-on-load delay-600 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/products" size="lg">
              Jelajahi Produk
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              <Play className="h-4 w-4" />
              Hubungi Kami
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "AI Tools", value: "50+" },
              { label: "Pengguna", value: "10K+" },
              { label: "Produk", value: "15+" },
              { label: "Uptime", value: "99.9%" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="animate-on-load rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm"
                style={{ animationDelay: `${700 + i * 100}ms` }}
              >
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="animate-on-load relative mx-auto mt-20 max-w-5xl"
          style={{ animationDelay: "1100ms" }}
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-violet-600/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111118] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-zinc-600">Tera Vertex Dashboard</span>
            </div>
            <div className="grid gap-px bg-white/5 p-6 sm:grid-cols-3">
              {[
                { title: "Video Gen", color: "from-cyan-500/20 to-cyan-500/5" },
                { title: "Photo Gen", color: "from-violet-500/20 to-violet-500/5" },
                { title: "Auto Clipper", color: "from-emerald-500/20 to-emerald-500/5" },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`animate-on-load rounded-xl bg-gradient-to-br ${item.color} p-6`}
                  style={{ animationDelay: `${1300 + i * 120}ms` }}
                >
                  <div className="mb-3 h-2 w-16 rounded-full bg-white/20" />
                  <div className="mb-2 h-2 w-full rounded-full bg-white/10" />
                  <div className="mb-2 h-2 w-3/4 rounded-full bg-white/10" />
                  <div className="mt-4 text-sm font-medium text-white/80">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
