import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { testimonials } from "@/lib/constants";

type TestimonialsSectionProps = {
  showHeader?: boolean;
};

export function TestimonialsSection({ showHeader = true }: TestimonialsSectionProps) {
  return (
    <section className="section-spacing relative">
      <div className="site-container">
        {showHeader && (
          <SectionHeader
            badge="Testimoni"
            title="Dipercaya oleh Profesional"
            description="Dengar langsung dari klien dan pengguna yang telah merasakan manfaat platform kami."
          />
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <AnimateIn key={testimonial.author} delay={i * 100} variant="up">
              <div className="glass-card relative h-full rounded-2xl p-8 transition-all duration-500">
                <Quote className="mb-5 h-7 w-7 text-indigo-400/25" />
                <p className="mb-6 text-sm leading-relaxed text-zinc-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-zinc-900">{testimonial.author}</div>
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
