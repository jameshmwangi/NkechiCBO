import { useEffect, useState } from "react";
import { LogoMark, IconArrowUpRight } from "./Icons";

const LINKS = [
  { href: "#programs", label: "Programs" },
  { href: "#path", label: "The Path" },
  { href: "#impact", label: "Impact" },
  { href: "#stories", label: "Stories" },
  { href: "#events", label: "Events" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-gold-400/15 bg-bush-950/92 shadow-lg shadow-bush-950/40 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <LogoMark className="h-10 w-10 text-gold-400 transition-transform duration-300 group-hover:rotate-90" />
            <span className="leading-none">
              <span className="block font-display text-xl font-bold tracking-wide text-cream">
                NKECHI
              </span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.3em] text-gold-300/80">
                Empowerment Centre
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[13px] font-bold uppercase tracking-[0.18em] text-cream/75 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold-400 after:transition-transform after:duration-300 hover:text-gold-300 hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#enroll"
              className="group hidden items-center gap-2 bg-gold-400 px-5 py-2.5 text-[12px] font-extrabold uppercase tracking-[0.16em] text-bush-950 transition-colors hover:bg-gold-300 sm:inline-flex"
            >
              Enroll now
              <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-cream/25 text-cream transition-colors hover:border-gold-400 lg:hidden"
            >
              <span
                className={`h-[2px] w-5 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span className={`h-[2px] w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-[2px] w-5 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-bush-950/97 px-6 pt-28 pb-10 backdrop-blur-sm transition-all duration-400 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {[...LINKS, { href: "#enroll", label: "Enroll / Support" }].map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`group flex items-baseline justify-between border-b border-dashed border-cream/15 py-4 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${80 + i * 60}ms` }}
            >
              <span className="font-display text-3xl font-semibold text-cream group-hover:text-gold-300">
                {l.label}
              </span>
              <span className="font-display text-lg italic text-gold-400/70">0{i + 1}</span>
            </a>
          ))}
        </nav>
        <div className="text-sm text-cream/60">
          <p className="font-bold uppercase tracking-[0.22em] text-gold-300">Visit us</p>
          <p className="mt-2">14 Zik Avenue, Awka · Mon–Sat, 8:00–17:00</p>
          <p className="mt-1">+234 803 214 7761 · hello@nkechicentre.org</p>
        </div>
      </div>
    </>
  );
}
