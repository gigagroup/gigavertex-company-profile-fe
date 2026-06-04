"use client";

import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <AnimateIn>
          <span className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            {badge}
          </span>
        </AnimateIn>
      )}
      <AnimateIn delay={80}>
        <AnimatedText
          text={title}
          as="h2"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          triggerOnView
        />
      </AnimateIn>
      {description && (
        <AnimateIn delay={160}>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">{description}</p>
        </AnimateIn>
      )}
    </div>
  );
}
