import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  aboutIllustrationAssets,
  type AboutIllustrationVariant,
} from "@/lib/about-illustrations";

type AboutIllustrationProps = {
  variant: AboutIllustrationVariant;
  className?: string;
  label?: string;
};

const SKY = "#D9EDF8";
const HILL = "#B8DBB0";
const HILL2 = "#9CCF94";

function Cloud({ x, y, w }: { x: number; y: number; w: number }) {
  return (
    <ellipse cx={x} cy={y} rx={w} ry={w * 0.35} fill="#fff" opacity="0.85" />
  );
}

function Person({
  x,
  body,
  head,
  shirt,
  pants,
}: {
  x: number;
  body: string;
  head: string;
  shirt: string;
  pants: string;
}) {
  return (
    <g transform={`translate(${x}, 0)`}>
      <rect x="18" y="118" width="44" height="10" rx="3" fill={body} />
      <rect x="22" y="88" width="36" height="34" rx="8" fill={shirt} />
      <rect x="26" y="122" width="14" height="38" rx="4" fill={pants} />
      <rect x="40" y="122" width="14" height="38" rx="4" fill={pants} />
      <circle cx="40" cy="72" r="18" fill={head} />
    </g>
  );
}

function IconBadge({
  cx,
  cy,
  r,
  fill,
  children,
}: {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  children: ReactNode;
}) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} opacity="0.95" />
      {children}
    </g>
  );
}

function GrowthSceneSvg() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden>
      <rect width="400" height="280" fill={SKY} />
      <Cloud x={80} y={48} w={52} />
      <Cloud x={300} y={36} w={64} />
      <path d="M0 200 Q100 170 200 190 T400 185 L400 280 L0 280 Z" fill={HILL} />
      <path d="M0 215 Q150 195 280 210 T400 205 L400 280 L0 280 Z" fill={HILL2} opacity="0.7" />
      <rect x="168" y="168" width="64" height="52" rx="4" fill="#2D6A4F" />
      <ellipse cx="200" cy="168" rx="48" ry="12" fill="#8B5E3C" />
      <path
        d="M200 155 Q175 120 185 95 Q200 70 200 55 Q215 70 220 95 Q230 120 200 155"
        fill="#40916C"
      />
      <path d="M185 100 Q200 85 215 100 Q200 115 185 100" fill="#52B788" />
      <rect x="95" y="148" width="36" height="72" rx="6" fill="#F4D35E" />
      <rect x="269" y="148" width="36" height="72" rx="6" fill="#EE6C4D" />
      <Person x={72} body="#F4D35E" head="#F4A261" shirt="#90BE6D" pants="#264653" />
      <Person x={246} body="#EE6C4D" head="#F4A261" shirt="#F9C74F" pants="#264653" />
      <ellipse cx="115" cy="118" rx="14" ry="8" fill="#F497B8" opacity="0.8" />
      <ellipse cx="285" cy="118" rx="14" ry="8" fill="#F497B8" opacity="0.8" />
      <IconBadge cx={95} cy={62} r={22} fill="#4CC9F0">
        <text x={95} y={68} textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700">
          $
        </text>
      </IconBadge>
      <IconBadge cx={310} cy={78} r={20} fill="#80ED99">
        <circle cx={310} cy={78} r={10} fill="none" stroke="#fff" strokeWidth="2" />
        <ellipse cx={310} cy={78} rx={14} ry={6} fill="none" stroke="#fff" strokeWidth="2" />
      </IconBadge>
      <IconBadge cx={200} cy={42} r={18} fill="#FFB703">
        <circle cx={200} cy={42} r={7} fill="none" stroke="#fff" strokeWidth="2.5" />
        <circle cx={200} cy={42} r={3} fill="#fff" />
      </IconBadge>
      <rect x="318" y="188" width="8" height="48" fill="#E9ECEF" />
      <circle cx="322" cy="178" r="16" fill="none" stroke="#E9ECEF" strokeWidth="3" />
    </svg>
  );
}

function MissionSceneSvg() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden>
      <rect width="400" height="280" fill={SKY} />
      <Cloud x={60} y={40} w={48} />
      <rect x="48" y="72" width="304" height="148" rx="12" fill="#fff" />
      <rect x="68" y="168" width="36" height="72" rx="4" fill="#4361EE" opacity="0.85" />
      <rect x="116" y="148" width="36" height="92" rx="4" fill="#4CC9F0" />
      <rect x="164" y="128" width="36" height="112" rx="4" fill="#4361EE" />
      <rect x="212" y="158" width="36" height="82" rx="4" fill="#7209B7" opacity="0.7" />
      <rect x="260" y="138" width="36" height="102" rx="4" fill="#4CC9F0" opacity="0.8" />
      <path d="M88 92 L312 92" stroke="#E9ECEF" strokeWidth="2" />
      <Person x={28} body="#E9ECEF" head="#F4A261" shirt="#4895EF" pants="#264653" />
      <Person x={300} body="#E9ECEF" head="#F4A261" shirt="#F72585" pants="#264653" />
      <IconBadge cx={330} cy={55} r={20} fill="#4361EE">
        <path d="M322 55 L328 61 L342 47" stroke="#fff" strokeWidth="3" fill="none" />
      </IconBadge>
    </svg>
  );
}

function InnovationSceneSvg() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden>
      <rect width="400" height="280" fill={SKY} />
      <rect x="70" y="56" width="260" height="170" rx="16" fill="#fff" />
      <rect x="90" y="76" width="220" height="120" rx="8" fill="#E0E7FF" />
      <circle cx="200" cy="130" r="40" fill="#6366F1" opacity="0.2" />
      <text x={200} y={138} textAnchor="middle" fill="#4338CA" fontSize="28" fontWeight="700">
        AI
      </text>
      <rect x="110" y="200" width="180" height="10" rx="4" fill="#C7D2FE" />
      <circle cx="130" cy="82" r="6" fill="#22C55E" />
      <circle cx={155} cy="82" r="6" fill="#F59E0B" />
      <circle cx={180} cy="82" r="6" fill="#3B82F6" />
      <Person x={8} body="#E9ECEF" head="#F4A261" shirt="#818CF8" pants="#264653" />
      <IconBadge cx={340} cy={70} r={22} fill="#8B5CF6">
        <text x={340} y={76} textAnchor="middle" fill="#fff" fontSize="16">
          ✦
        </text>
      </IconBadge>
    </svg>
  );
}

function IntegritySceneSvg() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden>
      <rect width="400" height="280" fill={SKY} />
      <path
        d="M200 50 L290 95 L290 175 Q290 230 200 250 Q110 230 110 175 L110 95 Z"
        fill="#fff"
        stroke="#0891B2"
        strokeWidth="4"
      />
      <path
        d="M165 145 L188 168 L248 108"
        stroke="#0891B2"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />
      <Person x={32} body="#E9ECEF" head="#F4A261" shirt="#22D3EE" pants="#264653" />
      <Person x={300} body="#E9ECEF" head="#F4A261" shirt="#06B6D4" pants="#264653" />
      <IconBadge cx={70} cy={60} r={18} fill="#0891B2">
        <text x={70} y={66} textAnchor="middle" fill="#fff" fontSize="14">
          🔒
        </text>
      </IconBadge>
    </svg>
  );
}

function CollaborationSceneSvg() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden>
      <rect width="400" height="280" fill={SKY} />
      <rect x="100" y="88" width="200" height="110" rx="12" fill="#fff" />
      <rect x="120" y="108" width="160" height="70" rx="6" fill="#EDE9FE" />
      <Person x={48} body="#A78BFA" head="#F4A261" shirt="#7C3AED" pants="#264653" />
      <Person x={268} body="#C4B5FD" head="#F4A261" shirt="#8B5CF6" pants="#264653" />
      <path d="M128 148 L272 148" stroke="#7C3AED" strokeWidth="3" strokeDasharray="6 4" />
      <IconBadge cx={200} cy={52} r={20} fill="#7C3AED">
        <text x={200} y={58} textAnchor="middle" fill="#fff" fontSize="14">
          👥
        </text>
      </IconBadge>
    </svg>
  );
}

function SustainabilitySceneSvg() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden>
      <rect width="400" height="280" fill={SKY} />
      <Cloud x={70} y={44} w={46} />
      <Cloud x={280} y={32} w={56} />
      <circle cx="320" cy="58" r="28" fill="#FDE68A" opacity="0.9" />
      <circle cx="320" cy="58" r="22" fill="#FBBF24" />
      <path d="M0 210 Q120 185 220 200 T400 195 L400 280 L0 280 Z" fill="#86EFAC" />
      <path d="M0 225 Q160 205 300 218 T400 212 L400 280 L0 280 Z" fill="#4ADE80" opacity="0.75" />
      <rect x="52" y="178" width="72" height="44" rx="6" fill="#1E3A5F" opacity="0.15" />
      <rect x="58" y="184" width="24" height="32" rx="2" fill="#0EA5E9" opacity="0.85" />
      <rect x="86" y="184" width="24" height="32" rx="2" fill="#0EA5E9" opacity="0.7" />
      <rect x="114" y="184" width="24" height="32" rx="2" fill="#0EA5E9" opacity="0.55" />
      <rect x="298" y="168" width="8" height="72" fill="#E9ECEF" />
      <circle cx="302" cy="158" r="18" fill="none" stroke="#E9ECEF" strokeWidth="3" />
      <path
        d="M302 140 L318 158 L286 158 Z"
        fill="#94A3B8"
        opacity="0.5"
      />
      <path
        d="M188 175 Q188 95 200 72 Q212 95 212 175"
        fill="#166534"
      />
      <path
        d="M200 72 Q160 88 172 118 Q188 100 200 72 Q212 100 228 118 Q240 88 200 72"
        fill="#22C55E"
      />
      <ellipse cx="200" cy="175" rx="36" ry="10" fill="#14532D" opacity="0.5" />
      <rect x="168" y="188" width="64" height="8" rx="3" fill="#15803D" />
      <path
        d="M248 120 Q268 100 288 115 Q275 135 248 120"
        fill="#4ADE80"
        opacity="0.8"
      />
      <path
        d="M112 125 Q92 108 72 122 Q88 140 112 125"
        fill="#4ADE80"
        opacity="0.8"
      />
      <rect x="228" y="198" width="100" height="56" rx="10" fill="#fff" />
      <rect x="244" y="214" width="68" height="8" rx="3" fill="#BBF7D0" />
      <rect x="244" y="228" width="52" height="8" rx="3" fill="#86EFAC" />
      <rect x="244" y="242" width="36" height="8" rx="3" fill="#4ADE80" />
      <Person x={20} body="#E9ECEF" head="#F4A261" shirt="#10B981" pants="#264653" />
      <IconBadge cx={88} cy={68} r={20} fill="#059669">
        <text x={88} y={74} textAnchor="middle" fill="#fff" fontSize="16">
          ♻
        </text>
      </IconBadge>
      <IconBadge cx={200} cy={48} r={18} fill="#16A34A">
        <path
          d="M200 38 Q210 48 200 58 Q190 48 200 38"
          fill="#fff"
          opacity="0.9"
        />
      </IconBadge>
    </svg>
  );
}

function AgilitySceneSvg() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden>
      <rect width="400" height="280" fill={SKY} />
      <path d="M60 200 L200 70 L340 200" stroke="#FDBA74" strokeWidth="4" fill="none" opacity="0.5" />
      <path
        d="M200 90 L220 150 L185 150 Z"
        fill="#EA580C"
      />
      <rect x="188" y="150" width="24" height="50" rx="4" fill="#EA580C" />
      <circle cx="200" cy="205" r="28" fill="#FED7AA" opacity="0.6" />
      <Person x={40} body="#E9ECEF" head="#F4A261" shirt="#FB923C" pants="#264653" />
      <IconBadge cx={320} cy={80} r={22} fill="#F97316">
        <text x={320} y={86} textAnchor="middle" fill="#fff" fontSize="18">
          ⚡
        </text>
      </IconBadge>
    </svg>
  );
}

const sceneMap: Record<
  Exclude<AboutIllustrationVariant, "intro">,
  () => ReactNode
> = {
  mission: MissionSceneSvg,
  innovation: InnovationSceneSvg,
  integrity: IntegritySceneSvg,
  collaboration: CollaborationSceneSvg,
  sustainability: SustainabilitySceneSvg,
  agility: AgilitySceneSvg,
};

export function getValueIllustration(index: number): AboutIllustrationVariant {
  const variants: AboutIllustrationVariant[] = [
    "innovation",
    "integrity",
    "collaboration",
    "sustainability",
    "agility",
  ];
  return variants[index] ?? "innovation";
}

export function AboutIllustration({
  variant,
  className,
  label,
}: AboutIllustrationProps) {
  const asset = aboutIllustrationAssets[variant];

  if (asset) {
    const ariaLabel = label ?? asset.alt;

    if (asset.media === "video") {
      return (
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl bg-zinc-900",
            className
          )}
          role="img"
          aria-label={ariaLabel}
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={ariaLabel}
          >
            <source src={asset.src} type="video/mp4" />
          </video>
        </div>
      );
    }

    return (
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#E8F4FC]",
          className
        )}
        role="img"
        aria-label={ariaLabel}
      >
        <Image
          src={asset.src}
          alt={asset.alt}
          width={800}
          height={600}
          className="h-auto w-full object-contain p-4"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    );
  }

  const Scene = sceneMap[variant as keyof typeof sceneMap] ?? GrowthSceneSvg;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#E8F4FC]",
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="relative h-full w-full p-4">
        <Scene />
      </div>
    </div>
  );
}

/** @deprecated Gunakan AboutIllustration saja */
export function AboutIllustrationWithCaption({
  variant,
  className,
  title,
  subtitle,
}: {
  variant: AboutIllustrationVariant;
  className?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      <AboutIllustration variant={variant} label={title} className="min-h-[280px] w-full" />
      <div className="rounded-xl border border-zinc-200/80 bg-white px-5 py-4">
        <p className="font-display text-xl text-zinc-900 lg:text-2xl">{title}</p>
        {subtitle && <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>}
      </div>
    </div>
  );
}
