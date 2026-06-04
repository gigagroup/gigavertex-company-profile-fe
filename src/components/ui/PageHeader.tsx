"use client";

import { AnimatedText } from "@/components/ui/AnimatedText";

type PageHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-20 lg:pt-40 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[280px] w-[480px] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-[100px] animate-float" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="animate-on-load">
          <span className="badge-elegant inline-block rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase">
            {badge}
          </span>
        </div>
        <AnimatedText
          text={title}
          as="h1"
          className="font-display mt-6 text-4xl font-normal tracking-tight text-zinc-900 sm:text-5xl"
          delay={120}
        />
        <p
          className="animate-on-load mx-auto mt-6 max-w-2xl text-base leading-relaxed font-light text-zinc-600 lg:text-lg"
          style={{ animationDelay: "420ms" }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
