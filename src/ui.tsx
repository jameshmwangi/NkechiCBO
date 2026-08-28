import type { CSSProperties, ReactNode } from "react";
import { useInView } from "./hooks";
import { IconAsterisk } from "./components/Icons";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ "--rd": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function MaskLines({
  lines,
  className = "",
  stagger = 110,
  startDelay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  stagger?: number;
  startDelay?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.3);
  return (
    <span ref={ref} className={`block ${inView ? "in" : ""} ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="mask-line">
          <span
            className="mask-inner"
            style={{ "--rd": `${startDelay + i * stagger}ms` } as CSSProperties}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}

export function SectionHead({
  kicker,
  lines,
  note,
  tone = "dark",
}: {
  kicker: string;
  lines: ReactNode[];
  note?: ReactNode;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-12 md:items-end">
      <div className="md:col-span-8">
        <p
          className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] ${
            light ? "text-clay-600" : "text-gold-400"
          }`}
        >
          <span className={`h-px w-10 ${light ? "bg-clay-600" : "bg-gold-400"}`} />
          {kicker}
        </p>
        <h2
          className={`font-display text-4xl leading-[1.04] font-semibold tracking-tight sm:text-5xl lg:text-6xl ${
            light ? "text-bush-950" : "text-cream"
          }`}
        >
          <MaskLines lines={lines} />
        </h2>
      </div>
      {note && (
        <div
          className={`md:col-span-4 md:pb-2 ${
            light ? "text-bush-900/80" : "text-cream/70"
          } md:text-right text-base leading-relaxed`}
        >
          {note}
        </div>
      )}
    </div>
  );
}

export function Ticker({
  items,
  tone = "gold",
  reverse = false,
  dur = 34,
  className = "",
}: {
  items: string[];
  tone?: "gold" | "clay" | "ink";
  reverse?: boolean;
  dur?: number;
  className?: string;
}) {
  const bg =
    tone === "gold"
      ? "bg-gold-400 text-bush-950"
      : tone === "clay"
        ? "bg-clay-500 text-cream"
        : "bg-bush-950 text-gold-300 border-y border-gold-400/25";
  const Row = () => (
    <>
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 text-sm font-extrabold uppercase tracking-[0.22em] whitespace-nowrap sm:text-base">
            {t}
          </span>
          <IconAsterisk className="h-4 w-4 shrink-0 opacity-70" />
        </span>
      ))}
    </>
  );
  return (
    <div className={`marquee ${bg} ${className}`} aria-hidden="true">
      <div
        className={`marquee-track py-3 ${reverse ? "reverse" : ""}`}
        style={{ "--dur": `${dur}s` } as CSSProperties}
      >
        <Row />
        <Row />
      </div>
    </div>
  );
}

export function RotBadge({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 140 140" className="spin-slow h-full w-full drop-shadow-lg">
        <defs>
          <path
            id="badge-circle"
            d="M70,70 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
          />
        </defs>
        <circle cx="70" cy="70" r="69" fill="#e4572e" />
        <circle cx="70" cy="70" r="34" fill="none" stroke="#f5edd9" strokeOpacity="0.55" strokeDasharray="3 4" />
        <text
          fill="#f5edd9"
          fontSize="11"
          fontWeight="800"
          letterSpacing="1.9"
          style={{ fontFamily: "Karla, sans-serif" }}
        >
          <textPath href="#badge-circle">
            LEARN · EARN · GROW · NKECHI · EST 2012 ·
          </textPath>
        </text>
        <g stroke="#f5edd9" strokeWidth="2.4" strokeLinecap="round">
          <path d="M70 56v28M57.9 63l24.2 14M82.1 63l-24.2 14" />
        </g>
      </svg>
    </div>
  );
}

export function ZigZag({ tone = "gold", flip = false }: { tone?: "gold" | "clay"; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`h-3 w-full ${tone === "gold" ? "zigzag-gold" : "zigzag-clay"} ${
        flip ? "rotate-180" : ""
      }`}
    />
  );
}

export function Tape({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rotate-[-4deg] bg-gold-300/80 shadow-sm ${className}`}
      style={{ clipPath: "polygon(3% 0, 97% 6%, 100% 94%, 0 100%)" }}
    />
  );
}
