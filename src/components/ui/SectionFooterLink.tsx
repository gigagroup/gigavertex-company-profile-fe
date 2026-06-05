"use client";

import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { useI18n } from "@/i18n/context";

type SectionFooterLinkProps = {
  href: string;
  label?: string;
};

export function SectionFooterLink({
  href,
  label,
}: SectionFooterLinkProps) {
  const { content } = useI18n();
  const text = label ?? content.ui.common.seeMore;

  return (
    <AnimateIn className="mt-12 flex justify-center">
      <LocalizedLink
        href={href}
        className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium tracking-wide text-zinc-600 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
      >
        {text}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </LocalizedLink>
    </AnimateIn>
  );
}
