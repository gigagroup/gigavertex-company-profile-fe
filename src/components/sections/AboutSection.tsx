import { Target, Eye, Heart } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { company, values, team } from "@/lib/constants";

export function AboutSection() {
  return (
    <>
      <section className="relative pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] animate-float" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-on-load">
              <span className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                Tentang Kami
              </span>
            </div>
            <AnimatedText
              text={company.name}
              as="h1"
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              delay={120}
            />
            <p
              className="animate-on-load mt-6 text-lg leading-relaxed text-zinc-400"
              style={{ animationDelay: "450ms" }}
            >
              {company.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Misi",
                text: "Demokratisasi teknologi AI dan software premium agar dapat diakses oleh setiap individu dan bisnis di Indonesia.",
              },
              {
                icon: Eye,
                title: "Visi",
                text: "Menjadi platform teknologi AI terdepan di Asia Tenggara yang mendorong inovasi dan produktivitas.",
              },
              {
                icon: Heart,
                title: "Passion",
                text: "Passion kami adalah menciptakan tools yang benar-benar membantu — bukan sekadar hype teknologi.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 100} variant="scale">
                <div className="h-full rounded-2xl border border-white/5 bg-[#111118] p-8 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 text-cyan-400">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500">{item.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Nilai"
            title="Nilai-Nilai Kami"
            description="Prinsip yang memandu setiap keputusan dan produk yang kami bangun."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <AnimateIn key={value.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/20">
                  <h3 className="mb-2 font-semibold text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500">{value.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Tim"
            title="Leadership Team"
            description="Tim passionate yang membangun masa depan teknologi AI di Indonesia."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <AnimateIn key={member.name} delay={i * 90} variant="scale">
                <div className="group h-full overflow-hidden rounded-2xl border border-white/5 bg-[#111118] transition-all hover:border-cyan-500/20">
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-cyan-500/10 to-violet-600/10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 text-2xl font-bold text-white transition-transform group-hover:scale-105">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-white">{member.name}</h3>
                    <p className="text-xs font-medium text-cyan-400">{member.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">{member.bio}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
