"use client";

import { AnimatedText } from "@/components/ui/AnimatedText";

type PageHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px] animate-float" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="animate-on-load">
          <span className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            {badge}
          </span>
        </div>
        <AnimatedText
          text={title}
          as="h1"
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          delay={120}
        />
        <p
          className="animate-on-load mx-auto mt-4 max-w-2xl text-lg text-zinc-400"
          style={{ animationDelay: "400ms" }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
