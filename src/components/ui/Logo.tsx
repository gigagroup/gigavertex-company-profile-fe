import Image from "next/image";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";

type LogoProps = {
  size?: "sm" | "md";
  className?: string;
};

export function Logo({ size = "md", className }: LogoProps) {
  return (
    <Image
      src={assets.images.logoNavbar}
      alt="Giga Vertex Technology"
      width={200}
      height={size === "sm" ? 40 : 48}
      className={cn(
        "relative z-10 h-auto w-auto object-contain object-left",
        size === "sm" ? "max-h-9 min-w-[140px]" : "max-h-11 min-w-[180px]",
        className
      )}
      priority
      unoptimized
    />
  );
}
