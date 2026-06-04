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
        "inline-flex shrink-0 items-center transition-opacity hover:opacity-90",
        className
      )}
    >
      <Logo size={size} />
    </Link>
  );
}
