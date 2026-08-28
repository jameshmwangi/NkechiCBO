import { useState } from "react";
import type { CSSProperties } from "react";
import { useInView } from "../hooks";
import { Reveal, SectionHead, ZigZag } from "../ui";
import { IconCheck, IconMail, IconSpark } from "./Icons";
import { GOALS, LEDGER } from "../data";

function GoalBar({
  label,
  current,
  target,
  index,
  inView,
}: {
  label: string;
  current: number;
  target: number;
  index: number;
  inView: boolean;
}) {
  const pct = Math.round((current / target) * 100);
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-cream">{label}</p>
        <p className="font-display text-sm italic text-gold-300">
          {current.toLocaleString("en-NG")} / {target.toLocaleString("en-NG")}{" "}
          <span className="not-italic font-bold text-clay-400">({pct}%)</span>
        </p>
      </div>
      <div className="mt-2.5 h-3 border border-cream/20 bg-cream/[0.06] p-[2px]">
        <div
          className="grow-bar h-full bg-gradient-to-r from-gold-500 to-gold-300"
          style={
            {
              width: inView ? `${pct}%` : "0%",
              "--rd": `${index * 160}ms`,
            } as CSSProperties
          }
        />
      </div>
    </div>
  );
}

export default function Impact() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const [asked, setAsked] = useState(false);

  return (
    <section id="impact" className="relative scroll-mt-24 bg-bush-950 py-24 lg:py-32">
      <ZigZag tone="gold" />
      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
        <SectionHead
          kicker="The ledger · audited every December"
          lines={[
            <span key="1">Impact you can</span>,
            <span key="2" className="italic font-light text-gold-300">
              count in naira.
            </span>,
          ]}
          note={
            <>
              An independent auditor reviews our books each December, and the 2030 goals below are
              tracked in public — good quarter or bad.
            </>
          }
        />

        <div ref={ref} className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* goals */}
          <div className="space-y-9 lg:col-span-5">
            {GOALS.map((g, i) => (
              <GoalBar key={g.label} {...g} index={i} inView={inView} />
            ))}

            <Reveal delay={200}>
              <div className="border border-cream/15 bg-bush-900/70 p-6">
                <p className="text-sm leading-relaxed text-cream/70">
                  Want the full numbers? The 2025 audit runs 38 pages — earnings by trade,
                  scholarship spend, co-op loan book and all.
                </p>
                {!asked ? (
                  <button
                    onClick={() => setAsked(true)}
                    className="group mt-4 inline-flex items-center gap-2.5 text-[13px] font-extrabold uppercase tracking-[0.16em] text-gold-300 transition-colors hover:text-gold-400"
                  >
                    <IconMail className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    Request the audit summary
                  </button>
                ) : (
                  <p className="toast-in mt-4 flex items-start gap-2.5 text-sm text-gold-300">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0" />
                    The summary goes out with our December newsletter — pop your email in the
                    footer below and it&rsquo;s on its way. Daalụ!
                  </p>
                )}
              </div>
            </Reveal>
          </div>

          {/* the receipt */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <div className="group relative mx-auto max-w-xl rotate-[1.2deg] bg-cream text-bush-950 shadow-2xl shadow-bush-950/60 transition-transform duration-500 hover:rotate-0">
                <div className="zigzag-gold h-3 w-full" aria-hidden="true" />
                <div className="px-8 py-9 sm:px-10">
                  <header className="text-center">
                    <p className="flex items-center justify-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.3em] text-clay-600">
                      <IconSpark className="h-3 w-3" /> Official receipt of a good year
                      <IconSpark className="h-3 w-3" />
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-black tracking-tight">
                      NKECHI — 2025 IN REVIEW
                    </h3>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.24em] text-bush-900/50">
                      14 Zik Avenue, Awka · RC 4471-B
                    </p>
                  </header>

                  <div className="my-7 border-t-2 border-dashed border-bush-900/25" />

                  <dl className="space-y-4">
                    {LEDGER.map((row) => (
                      <div key={row.text} className="flex items-baseline gap-3">
                        <dt className="w-24 shrink-0 font-display text-2xl font-black text-clay-600">
                          {row.amount}
                        </dt>
                        <span
                          className="mb-1 flex-1 border-b-2 border-dotted border-bush-900/30"
                          aria-hidden="true"
                        />
                        <dd className="max-w-[55%] text-right text-[13px] font-semibold leading-snug text-bush-900/80">
                          {row.text}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="my-7 border-t-2 border-dashed border-bush-900/25" />

                  {/* barcode */}
                  <div className="flex items-end justify-center gap-[3px]" aria-hidden="true">
                    {[3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 3, 1, 2, 2, 1, 3, 1, 2, 1, 1, 3, 2].map(
                      (w, i) => (
                        <span
                          key={i}
                          className="bg-bush-950/85"
                          style={{ width: `${w * 2}px`, height: `${18 + ((i * 7) % 14)}px` }}
                        />
                      )
                    )}
                  </div>
                  <p className="mt-4 text-center text-[10px] font-extrabold uppercase tracking-[0.3em] text-bush-900/60">
                    Daalụ — thank you for keeping the lights on
                  </p>
                </div>
                <div className="zigzag-gold h-3 w-full rotate-180" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
