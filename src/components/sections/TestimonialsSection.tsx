import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { testimonials } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Testimoni"
          title="Dipercaya oleh Profesional"
          description="Dengar langsung dari klien dan pengguna yang telah merasakan manfaat platform kami."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <AnimateIn key={testimonial.author} delay={i * 100} variant="up">
              <div className="relative h-full rounded-2xl border border-white/5 bg-[#111118] p-8 transition-all hover:border-cyan-500/20">
                <Quote className="mb-4 h-8 w-8 text-cyan-500/30" />
                <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-xs text-zinc-600">{testimonial.role}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
