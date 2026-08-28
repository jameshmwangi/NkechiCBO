import { MaskLines, Reveal, SectionHead, ZigZag } from "../ui";
import { IconArrowRight, IconAsterisk, IconCheck, IconUsers } from "./Icons";
import { PROGRAMS, STEPS } from "../data";

export function Programs() {
  return (
    <section id="programs" className="relative scroll-mt-24 bg-bush-850 py-24 lg:py-32">
      <div className="dot-field absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* sticky intro */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-400">
                <span className="h-px w-10 bg-gold-400" />
                What we teach
              </p>
              <h2 className="font-display text-4xl leading-[1.04] font-semibold tracking-tight text-cream sm:text-5xl">
                <MaskLines
                  lines={[
                    <span key="1">Six trades.</span>,
                    <span key="2" className="italic font-light text-gold-300">
                      One promise —
                    </span>,
                    <span key="3">work that pays.</span>,
                  ]}
                />
              </h2>
              <Reveal delay={200}>
                <p className="mt-6 max-w-md leading-relaxed text-cream/70">
                  Every trade at Nkechi was chosen for one reason: women in Anambra are already
                  earning from it. We teach the craft, the costing and the customers — in that
                  order.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-8 border-l-4 border-gold-400 bg-bush-800 p-5">
                  <p className="font-display text-lg italic leading-snug text-cream">
                    “Every program includes a stipend review, an alumna mentor and a starter
                    toolkit. No student pays more than she can.”
                  </p>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">
                    — The Nkechi Charter, clause one
                  </p>
                </div>
              </Reveal>
              <Reveal delay={420}>
                <dl className="mt-8 grid grid-cols-2 gap-4">
                  <div className="border border-cream/15 p-4">
                    <dt className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cream/55">
                      <IconUsers className="h-4 w-4 text-gold-400" /> Avg. class size
                    </dt>
                    <dd className="mt-2 font-display text-3xl font-bold text-cream">18</dd>
                  </div>
                  <div className="border border-cream/15 p-4">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-cream/55">
                      Attendance, 2025
                    </dt>
                    <dd className="mt-2 font-display text-3xl font-bold text-cream">
                      93<span className="text-clay-400">%</span>
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>

          {/* trade rows */}
          <div className="lg:col-span-8">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.no} delay={i * 60}>
                <article
                  className={`group relative -mx-4 grid grid-cols-[52px_1fr] items-start gap-x-5 gap-y-3 border-t border-dashed border-cream/15 px-4 py-8 transition-colors duration-300 hover:bg-cream/[0.04] sm:grid-cols-[52px_64px_1fr] ${
                    i === PROGRAMS.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="pt-1 font-display text-xl font-bold italic text-gold-400/70">
                    {p.no}
                  </span>
                  <span className="hidden h-14 w-14 items-center justify-center border border-gold-400/40 text-gold-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-bush-950 sm:flex">
                    {p.icon}
                  </span>
                  <div className="pr-8">
                    <div className="flex flex-wrap items-baseline gap-x-4">
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-cream transition-colors duration-300 group-hover:text-gold-300 sm:text-[1.65rem]">
                        {p.title}
                      </h3>
                      <span className="font-display text-base italic text-cream/40">{p.igbo}</span>
                    </div>
                    <p className="mt-2.5 max-w-xl leading-relaxed text-cream/65">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[p.duration, `Intake: ${p.intake}`, p.seats].map((m) => (
                        <span
                          key={m}
                          className="border border-cream/20 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-cream/60 transition-colors duration-300 group-hover:border-gold-400/40 group-hover:text-cream/80"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <IconArrowRight className="absolute top-1/2 right-2 h-5 w-5 -translate-y-1/2 -translate-x-2 text-gold-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </article>
              </Reveal>
            ))}
            <Reveal delay={120}>
              <p className="mt-8 flex flex-wrap items-center gap-2 text-sm text-cream/60">
                <IconAsterisk className="h-4 w-4 text-clay-400" />
                Can&rsquo;t decide? Come to{" "}
                <a
                  href="#events"
                  className="font-bold text-gold-300 underline decoration-gold-400/40 underline-offset-4 transition-colors hover:text-gold-400"
                >
                  Open Assessment Day — March 9
                </a>{" "}
                and try every workshop in one morning.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ThePath() {
  return (
    <section id="path" className="relative scroll-mt-24 bg-bush-900 py-24 lg:py-32">
      <ZigZag tone="clay" flip />
      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
        <SectionHead
          kicker="The Nkechi path"
          lines={[
            <span key="1">From first day</span>,
            <span key="2" className="italic font-light text-gold-300">
              to first invoice.
            </span>,
          ]}
          note={
            <>
              Four stages, fourteen months on average. The path is the same whether you are
              nineteen or fifty-nine.
            </>
          }
        />

        <div className="relative">
          <div
            className="absolute top-9 right-[8%] left-[8%] hidden border-t-2 border-dashed border-gold-400/25 xl:block"
            aria-hidden="true"
          />
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.no} delay={i * 130}>
                <div className="group relative">
                  <span className="word-outline font-display text-[72px] leading-none font-black transition-transform duration-500 group-hover:-translate-y-1.5 inline-block">
                    {s.no}
                  </span>
                  <h3 className="mt-4 flex items-center gap-2.5 font-display text-2xl font-semibold text-cream">
                    <IconAsterisk className="h-4 w-4 text-clay-400 transition-transform duration-500 group-hover:rotate-90" />
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream/65">{s.copy}</p>
                  <ul className="mt-5 space-y-2">
                    {s.gets.map((g) => (
                      <li key={g} className="flex items-center gap-2.5 text-[13px] text-cream/75">
                        <IconCheck className="h-4 w-4 shrink-0 text-gold-400" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
