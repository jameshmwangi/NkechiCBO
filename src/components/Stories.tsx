import type { CSSProperties } from "react";
import { Reveal, SectionHead, Tape } from "../ui";
import { IconArrowRight, IconSpark } from "./Icons";
import { GALLERY, STORIES } from "../data";

const OFFSETS = ["lg:mt-0", "lg:mt-14", "lg:mt-4"];

export default function Stories() {
  return (
    <section id="stories" className="relative scroll-mt-24 overflow-hidden bg-bush-900 py-24 lg:py-32">
      <div className="diamond-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          kicker="Graduate stories"
          lines={[
            <span key="1">Postcards from the</span>,
            <span key="2" className="italic font-light text-gold-300">
              other side of the classroom.
            </span>,
          ]}
          note={
            <>
              2,340 graduates and counting. These three wrote back first — we keep their notes
              pinned to the notice board by the gate.
            </>
          }
        />

        {/* scattered postcards */}
        <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-14 lg:gap-x-5">
          {STORIES.map((s, i) => (
            <Reveal key={s.name} delay={i * 140} className={OFFSETS[i]}>
              <article
                className="group relative w-[300px] bg-cream pb-6 text-bush-950 shadow-xl shadow-bush-950/50 transition-transform duration-500 hover:z-10 hover:rotate-0 hover:-translate-y-2 sm:w-[330px]"
                style={{ transform: `rotate(${s.rot}deg)` } as CSSProperties}
              >
                <Tape />
                <figure className="overflow-hidden">
                  <img
                    src={s.img}
                    alt={`Portrait of ${s.name}, Nkechi graduate`}
                    className="kb-img h-72 w-full object-cover sm:h-80"
                    loading="lazy"
                  />
                </figure>
                <div className="px-6 pt-5">
                  <p className="font-display text-[17px] italic leading-snug text-bush-900">
                    “{s.quote}”
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-[0.12em]">{s.name}</p>
                      <p className="mt-0.5 text-xs text-bush-900/60">{s.role}</p>
                    </div>
                    <span className="shrink-0 bg-bush-900 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-gold-300">
                      {s.cohort}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* stat postcard */}
          <Reveal delay={420} className="lg:mt-20">
            <article
              className="group relative w-[300px] rotate-[4deg] bg-clay-500 p-8 text-cream shadow-xl shadow-bush-950/50 transition-transform duration-500 hover:z-10 hover:rotate-0 hover:-translate-y-2 sm:w-[300px]"
            >
              <Tape className="bg-cream/80" />
              <p className="font-display text-[84px] leading-none font-black tracking-tight">
                87<span className="text-gold-300">%</span>
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-cream/90">
                of last year&rsquo;s graduates report a steady income within six months — verified
                in the December audit.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="inline-block h-14 w-14 rounded-full border-2 border-dashed border-cream/50 p-2 text-center text-[8px] leading-[1.1] font-extrabold uppercase tracking-widest text-cream/80 [display:grid;place-items:center]">
                  Verified 12·25
                </span>
                <IconSpark className="h-6 w-6 text-gold-300 transition-transform duration-500 group-hover:rotate-90" />
              </div>
            </article>
          </Reveal>
        </div>

        {/* gallery rail */}
        <div className="mt-24 lg:mt-28">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-400">
                <span className="h-px w-10 bg-gold-400" />
                From the workshop floor
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
                A Tuesday, in five frames<span className="text-clay-400">.</span>
              </h3>
            </div>
            <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-cream/50">
              Scroll the rail <IconArrowRight className="h-4 w-4 text-gold-400" />
            </p>
          </div>

          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8">
            {GALLERY.map((g, i) => (
              <figure
                key={g.caption}
                className="group relative w-[280px] shrink-0 snap-start overflow-hidden border border-cream/15 sm:w-[380px]"
              >
                <img
                  src={g.img}
                  alt={g.caption}
                  className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07] sm:h-72"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-bush-950/80 px-2.5 py-1 font-display text-sm font-bold italic text-gold-300 backdrop-blur-sm">
                  0{i + 1}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bush-950/95 via-bush-950/60 to-transparent px-5 pt-12 pb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-cream/90">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
