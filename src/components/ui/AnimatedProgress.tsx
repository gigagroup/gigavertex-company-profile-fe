"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedProgressProps = {
  value: number;
  color: string;
  label: string;
  delay?: number;
};

export function AnimatedProgress({ value, color, label, delay = 0 }: AnimatedProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(value), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} className="glass-card rounded-2xl p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm text-zinc-600">{label}</span>
        <span className="text-sm font-bold text-zinc-900">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
        <div
          className={cn("h-full rounded-full transition-all duration-1000 ease-out", color)}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
