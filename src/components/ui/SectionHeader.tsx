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
        "mb-20 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <AnimateIn>
          <span className="badge-elegant mb-5 inline-block rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase">
            {badge}
          </span>
        </AnimateIn>
      )}
      <AnimateIn delay={80}>
        <AnimatedText
          text={title}
          as="h2"
          className="font-display text-3xl font-normal tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          triggerOnView
        />
      </AnimateIn>
      {description && (
        <AnimateIn delay={160}>
          <p className="mt-5 text-base leading-relaxed font-light text-zinc-600 lg:text-lg">
            {description}
          </p>
        </AnimateIn>
      )}
    </div>
  );
}
