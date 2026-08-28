import { useState } from "react";
import type { FormEvent } from "react";
import { LogoMark, IconArrowRight, IconCheck, IconClock, IconFb, IconInsta, IconMail, IconPhone, IconPin, IconWa, IconYt } from "./Icons";
import { usePrefersReducedMotion } from "../hooks";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", Icon: IconInsta },
  { label: "Facebook", href: "https://facebook.com", Icon: IconFb },
  { label: "WhatsApp", href: "https://wa.me/2348032147761", Icon: IconWa },
  { label: "YouTube", href: "https://youtube.com", Icon: IconYt },
];

export default function Footer() {
  const reduced = usePrefersReducedMotion();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [err, setErr] = useState(false);

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr(true);
      return;
    }
    setErr(false);
    setSubscribed(true);
  };

  return (
    <footer id="visit" className="relative scroll-mt-24 overflow-hidden bg-bush-950">
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:pt-20">
        <div className="grid gap-12 pb-14 lg:grid-cols-12">
          {/* identity */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-3">
              <LogoMark className="h-11 w-11 text-gold-400" />
              <span className="leading-none">
                <span className="block font-display text-2xl font-bold tracking-wide text-cream">NKECHI</span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.3em] text-gold-300/80">
                  Empowerment Centre
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs leading-relaxed text-cream/65">
              A women&rsquo;s skills, mentorship and enterprise centre serving Anambra State since
              2012. <em className="font-display text-cream/85">Nkechi</em> — “God&rsquo;s gift.”
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border border-cream/20 text-cream/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:bg-gold-400 hover:text-bush-950"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* visit */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-gold-400">Visit</h4>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-cream/70">
              <li className="flex gap-3">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>
                  14 Zik Avenue, Awka
                  <br />
                  Anambra State, Nigeria
                </span>
              </li>
              <li className="flex gap-3">
                <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>
                  Mon–Sat, 8:00–17:00
                  <br />
                  Market Day: first Friday
                </span>
              </li>
            </ul>
          </div>

          {/* talk */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-gold-400">Talk</h4>
            <ul className="mt-5 space-y-4 text-sm text-cream/70">
              <li>
                <a href="tel:+2348032147761" className="group flex items-center gap-3 transition-colors hover:text-gold-300">
                  <IconPhone className="h-4 w-4 shrink-0 text-gold-400" />
                  +234 803 214 7761
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348032147761" target="_blank" rel="noreferrer" className="group flex items-center gap-3 transition-colors hover:text-gold-300">
                  <IconWa className="h-4 w-4 shrink-0 text-gold-400" />
                  WhatsApp the admissions desk
                </a>
              </li>
              <li>
                <a href="mailto:hello@nkechicentre.org" className="group flex items-center gap-3 transition-colors hover:text-gold-300">
                  <IconMail className="h-4 w-4 shrink-0 text-gold-400" />
                  hello@nkechicentre.org
                </a>
              </li>
            </ul>
          </div>

          {/* newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-gold-400">The Friday Note</h4>
            <p className="mt-5 text-sm leading-relaxed text-cream/65">
              One short letter a week — cohort news, graduate wins and the audit when it lands.
            </p>
            {!subscribed ? (
              <form onSubmit={subscribe} className="mt-4" noValidate>
                <div className={`flex border bg-bush-900 transition-colors ${err ? "border-clay-500" : "border-cream/25 focus-within:border-gold-400"}`}>
                  <label htmlFor="nl-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="nl-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent px-4 py-3 text-sm text-cream outline-none placeholder:text-cream/35"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="bg-gold-400 px-4 text-bush-950 transition-colors hover:bg-gold-300"
                  >
                    <IconArrowRight className="h-4 w-4" />
                  </button>
                </div>
                {err && <p className="mt-2 text-xs font-bold text-clay-400">That email doesn&rsquo;t look right — try again?</p>}
              </form>
            ) : (
              <p className="toast-in mt-4 flex items-center gap-2.5 border border-gold-400/40 bg-bush-900 px-4 py-3 text-sm text-gold-300">
                <IconCheck className="h-4 w-4 shrink-0" /> You&rsquo;re on the list — daalụ!
              </p>
            )}
          </div>
        </div>

        {/* giant wordmark */}
        <div aria-hidden="true" className="select-none overflow-hidden">
          <p className="word-outline -mb-[0.16em] text-center font-display text-[24vw] leading-[0.8] font-black tracking-tight opacity-80 lg:text-[19vw]">
            NKECHI
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-dashed border-cream/15 py-6 text-[11px] uppercase tracking-[0.18em] text-cream/45 sm:flex-row">
          <p>© 2026 Nkechi Empowerment Centre · RC 4471-B</p>
          <p className="font-display text-[13px] normal-case italic tracking-normal text-cream/55">
            “Onye aghana nwanne ya” — be your brother&rsquo;s keeper
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })}
            className="group inline-flex items-center gap-2 font-bold text-gold-300 transition-colors hover:text-gold-400"
          >
            Back to top
            <IconArrowRight className="h-3.5 w-3.5 -rotate-90 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
