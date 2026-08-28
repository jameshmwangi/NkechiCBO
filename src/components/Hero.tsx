import type { CSSProperties } from "react";
import { useCountUp, useInView, useScramble } from "../hooks";
import { MaskLines, Reveal, RotBadge } from "../ui";
import { IconArrowDown, IconArrowRight, IconSpark } from "./Icons";
import { IMG, STATS } from "../data";

function Stat({
  value,
  suffix,
  label,
  note,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  note: string;
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const n = useCountUp(value, inView);
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in" : ""} px-6 py-7 sm:px-8`}
      style={{ "--rd": `${delay}ms` } as CSSProperties}
    >
      <p className="font-display text-5xl font-bold tracking-tight text-gold-300 sm:text-6xl">
        {n.toLocaleString("en-NG")}
        <span className="text-clay-400">{suffix}</span>
      </p>
      <p className="mt-3 text-[13px] font-bold uppercase tracking-[0.16em] text-cream">{label}</p>
      <p className="mt-1 font-display text-sm italic text-cream/55">{note}</p>
    </div>
  );
}

export default function Hero() {
  const title = useScramble("NKECHI", true, 46);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* layered ambient background */}
      <div className="diamond-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full opacity-[0.13]"
        style={{ background: "radial-gradient(circle, #f2b23e 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-[-15%] h-[480px] w-[480px] rounded-full opacity-[0.1]"
        style={{ background: "radial-gradient(circle, #e4572e 0%, transparent 60%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-24 right-[-140px] h-[420px] w-[420px] rounded-full border border-dashed border-gold-400/20"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-[-70px] h-[280px] w-[280px] rounded-full border border-gold-400/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-24 sm:px-8 lg:pt-28">
        {/* masthead strip */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cream/15 pb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-cream/55 sm:text-[11px]">
            <p>Est. 2012 — Awka, Anambra State, Nigeria</p>
            <p className="hidden md:block">
              “Onye aghana nwanne ya” — be your brother&rsquo;s keeper
            </p>
          </div>
        </Reveal>

        <div className="grid gap-14 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-14">
          {/* left — the word */}
          <div className="lg:col-span-7">
            <Reveal delay={60}>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
                <IconSpark className="h-4 w-4 text-clay-400" />
                A women&rsquo;s skills &amp; enterprise centre
              </p>
            </Reveal>

            <h1 className="mt-5 font-display font-black leading-[0.82] tracking-[-0.03em]">
              <span className="block text-[clamp(4.2rem,13.5vw,11.5rem)] text-cream" aria-label="NKECHI">
                {title}
              </span>
              <span className="mt-2 block font-light italic text-[clamp(2rem,5.4vw,4.4rem)] tracking-tight">
                <MaskLines
                  lines={[
                    <span key="a" className="text-gold-300">
                      Empowerment
                    </span>,
                    <span key="b" className="text-cream">
                      Centre<span className="text-clay-400">.</span>
                    </span>,
                  ]}
                  stagger={130}
                  startDelay={500}
                />
              </span>
            </h1>

            <Reveal delay={750}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75">
                Since 2012, Nkechi has trained more than{" "}
                <strong className="font-bold text-gold-300">2,300 women</strong> across Anambra in
                six trades — pairing every student with a mentor, a starter toolkit and a route to
                her first paying work. <em className="font-display text-cream">Nkechi</em> means{" "}
                <em className="font-display text-cream/90">“God&rsquo;s gift”</em> — and that is
                exactly what we believe every woman&rsquo;s hands are.
              </p>
            </Reveal>

            <Reveal delay={880}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#enroll"
                  className="group inline-flex items-center gap-3 bg-gold-400 px-7 py-4 text-[13px] font-extrabold uppercase tracking-[0.18em] text-bush-950 shadow-[0_10px_30px_-12px_rgba(242,178,62,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300"
                >
                  Apply for the April cohort
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
                <a
                  href="#stories"
                  className="group inline-flex items-center gap-3 border border-cream/30 px-7 py-4 text-[13px] font-extrabold uppercase tracking-[0.18em] text-cream transition-colors duration-300 hover:border-gold-400 hover:text-gold-300"
                >
                  Meet the graduates
                  <IconArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={990}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-cream/60">
                <span className="flex items-center gap-2.5">
                  <span className="pulse-dot inline-block h-2.5 w-2.5 rounded-full bg-gold-400" />
                  Next intake — <strong className="text-cream">April 6, 2026</strong>
                </span>
                <span>180 seats · scholarships for 7 in 10 students</span>
              </div>
            </Reveal>
          </div>

          {/* right — image stack */}
          <div className="relative lg:col-span-5">
            <Reveal delay={250} className="relative ml-4 sm:ml-10 lg:ml-6">
              <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-gold-400/60" aria-hidden="true" />
              <figure className="relative overflow-hidden border border-cream/20">
                <img
                  src={IMG.heroSewing}
                  alt="Nkechi students at sewing machines, working with ankara fabric"
                  className="kb-img h-[340px] w-full object-cover sm:h-[430px] lg:h-[500px]"
                  loading="eager"
                />
                <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 bg-bush-950/85 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-cream/90 backdrop-blur-sm">
                  <IconSpark className="h-3 w-3 text-gold-400" />
                  The cutting room — Tuesday, 10:00
                </figcaption>
              </figure>

              <figure className="absolute -bottom-12 -left-6 w-40 rotate-[-5deg] overflow-hidden border-4 border-bush-950 shadow-2xl shadow-bush-950/70 transition-transform duration-500 hover:rotate-0 sm:-left-14 sm:w-52 lg:-left-10">
                <img
                  src={IMG.ictClass}
                  alt="Students learning computer skills in the ICT lab"
                  className="kb-img h-40 w-full object-cover sm:h-52"
                  loading="lazy"
                />
              </figure>

              <RotBadge className="absolute -top-12 -right-4 h-28 w-28 float-y sm:-right-8 lg:h-36 lg:w-36" />
            </Reveal>
          </div>
        </div>

        {/* stat ledger */}
        <div className="mt-24 border-y border-dashed border-cream/20 lg:mt-28">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => {
              const borders = [
                "",
                "border-l border-dashed border-cream/15",
                "border-t border-dashed border-cream/15 lg:border-t-0 lg:border-l",
                "border-l border-t border-dashed border-cream/15 lg:border-t-0",
              ][i];
              return (
                <div key={s.label} className={borders}>
                  <Stat {...s} delay={i * 110} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
