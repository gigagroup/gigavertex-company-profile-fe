import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

type LogoLinkProps = {
  size?: "sm" | "md";
  className?: string;
};

export function LogoLink({ size = "sm", className }: LogoLinkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "logo-wrap inline-flex shrink-0 items-center rounded-xl px-3 py-2 transition-opacity hover:opacity-95",
        className
      )}
    >
      <Logo size={size} />
    </Link>
  );
}
