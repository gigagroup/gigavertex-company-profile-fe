import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "hero-ghost" | "hero-outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants = {
  primary: "btn-primary-glow text-white hover:brightness-105",
  secondary:
    "bg-white text-zinc-700 border border-zinc-200 shadow-sm hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-300",
  outline:
    "border border-zinc-300 text-zinc-700 bg-white hover:bg-zinc-50 hover:border-indigo-300 hover:text-indigo-700",
  ghost: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100",
  "hero-ghost": "text-white/90 hover:text-white hover:bg-white/10",
  "hero-outline":
    "border border-white/50 text-white bg-white/5 backdrop-blur-sm hover:border-white hover:bg-white/15",
};

const sizes = {
  sm: "px-4 py-2 text-sm tracking-wide",
  md: "px-6 py-2.5 text-sm tracking-wide",
  lg: "px-8 py-3.5 text-[15px] tracking-wide",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
