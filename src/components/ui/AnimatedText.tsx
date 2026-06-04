"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "p" | "h1" | "h2" | "h3";
  /** Mulai animasi saat elemen terlihat di viewport */
  triggerOnView?: boolean;
};

export function AnimatedText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 55,
  as: Tag = "span",
  triggerOnView = false,
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(!triggerOnView);
  const words = text.split(" ");

  useEffect(() => {
    if (!triggerOnView) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={cn("max-w-full break-words", className)}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn(
            "inline-block max-w-full",
            active ? "animate-word" : "opacity-0",
            wordClassName
          )}
          style={active ? { animationDelay: `${delay + i * stagger}ms` } : undefined}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
