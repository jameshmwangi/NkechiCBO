import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LogoMark(props: P) {
  return (
    <svg viewBox="0 0 40 40" {...props}>
      <path d="M20 2 38 20 20 38 2 20Z" fill="currentColor" opacity="0.16" />
      <path d="M20 2 38 20 20 38 2 20Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M13 27V13l14 14V13" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSewing(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 18h16v2.5H4z" />
      <path d="M6 18v-6.5A3.5 3.5 0 0 1 9.5 8H18v6" />
      <path d="M18 8V5.5h2V8" />
      <path d="M12 8v4" />
      <circle cx="12" cy="13.6" r="0.4" />
      <path d="M8 18v-2.5h4V18" />
      <path d="M18 14v4" />
    </svg>
  );
}

export function IconMonitor(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
      <path d="m7 8 2.5 2L7 12M12 12h4" />
    </svg>
  );
}

export function IconPot(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 10h14v5a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5z" />
      <path d="M3 10h18M8 10V8m8 2V8" />
      <path d="M9 4.5c0 1-1.5 1-1.5 2M14 4.5c0 1-1.5 1-1.5 2" />
    </svg>
  );
}

export function IconShears(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="6.5" cy="17.5" r="2.5" />
      <path d="M8.8 8 20 19M8.8 16 20 5" />
      <path d="m13.2 12-1.4 1.4" />
    </svg>
  );
}

export function IconSprout(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21v-8" />
      <path d="M12 13c0-4-3-7-8-7 0 5 3 7 8 7z" />
      <path d="M12 10c0-3 2.5-6 8-6 0 4.5-2.5 7-8 7" />
      <path d="M7 21h10" />
    </svg>
  );
}

export function IconBook(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 6.5C10 4.8 7 4.5 4 4.5v13c3 0 6 .3 8 2 2-1.7 5-2 8-2v-13c-3 0-6 .3-8 2z" />
      <path d="M12 6.5v13" />
      <path d="M6.5 8.5c1.5 0 2.5.2 3.5.5M6.5 11.5c1.5 0 2.5.2 3.5.5" />
    </svg>
  );
}

export function IconArrowRight(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 12h16m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

export function IconArrowUpRight(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M7 17 17 7m0 0H8.5M17 7v8.5" />
    </svg>
  );
}

export function IconArrowDown(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 4v16m0 0 6-6m-6 6-6-6" />
    </svg>
  );
}

export function IconAsterisk(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
    </svg>
  );
}

export function IconSpark(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2c.8 5.5 4.5 9.2 10 10-5.5.8-9.2 4.5-10 10-.8-5.5-4.5-9.2-10-10 5.5-.8 9.2-4.5 10-10z" />
    </svg>
  );
}

export function IconPin(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconPhone(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 4h4l1.5 4.5-2.2 1.6a12 12 0 0 0 5.6 5.6l1.6-2.2L20 15v4a1.5 1.5 0 0 1-1.7 1.5C10 19.6 4.4 14 3.5 5.7A1.5 1.5 0 0 1 5 4z" />
    </svg>
  );
}

export function IconMail(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconClock(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconCal(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="M8 13.5h3M8 17h6" />
    </svg>
  );
}

export function IconUsers(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="9" cy="8.5" r="3.5" />
      <path d="M3 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5" />
      <path d="M15.5 5.6a3.5 3.5 0 0 1 0 5.8M17.5 14.9c1.9.8 3.1 2.5 3.5 5.1" />
    </svg>
  );
}

export function IconCheck(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconInsta(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconFb(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M14.5 21v-7h2.6l.4-3h-3V9.1c0-.9.3-1.6 1.7-1.6h1.4V4.8c-.6-.1-1.5-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.2V11H8.4v3H11v7z" />
    </svg>
  );
}

export function IconWa(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5z" />
      <path d="M9 8.8c-.3 2.9 3.3 6.5 6.2 6.2l.8-1.6-2-1.2-1 .9c-1-.4-1.8-1.2-2.2-2.2l.9-1-1.2-2z" />
    </svg>
  );
}

export function IconYt(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="6" width="18" height="12.5" rx="3.5" />
      <path d="m10.2 9.5 4.5 2.7-4.5 2.7z" fill="currentColor" />
    </svg>
  );
}
