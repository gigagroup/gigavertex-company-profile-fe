import Image from "next/image";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";

type LogoProps = {
  size?: "sm" | "md";
  className?: string;
  /** Panel gradasi gelap di belakang logo (mis. halaman Tentang Kami) */
  variant?: "plain" | "brand";
  wrapperClassName?: string;
};

export function Logo({
  size = "md",
  className,
  variant = "plain",
  wrapperClassName,
}: LogoProps) {
  const image = (
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

  if (variant === "brand") {
    return (
      <div
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-black via-slate-950 to-indigo-950 px-8 py-6 shadow-lg shadow-black/40 ring-1 ring-indigo-500/20",
          wrapperClassName
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(99,102,241,0.4),transparent)]"
          aria-hidden
        />
        {image}
      </div>
    );
  }

  return image;
}
