import { ArrowRight, Mail } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateIn variant="scale">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-violet-600/20 to-cyan-600/20" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(6,182,212,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139,92,246,0.3) 0%, transparent 50%)",
              }}
            />
            <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
              <AnimatedText
                text="Siap Transformasi Digital?"
                as="h2"
                className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
                triggerOnView
              />
              <AnimateIn delay={200}>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
                  Bergabung dengan ribuan profesional yang sudah mempercayai{" "}
                  {company.shortName} untuk solusi AI dan software mereka.
                </p>
              </AnimateIn>
              <AnimateIn delay={320}>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button href="/contact" size="lg">
                    Mulai Sekarang
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
