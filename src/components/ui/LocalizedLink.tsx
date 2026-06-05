"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useI18n } from "@/i18n/context";
import { getLocalizedHref } from "@/i18n/utils";

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { locale } = useI18n();
  return <Link href={getLocalizedHref(href, locale)} {...props} />;
}
