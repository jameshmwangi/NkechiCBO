import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Reveal, SectionHead, ZigZag } from "../ui";
import { IconArrowRight, IconCal, IconCheck, IconSpark } from "./Icons";
import { COHORTS, EVENTS, LGAS, PROGRAMS, TIERS } from "../data";

export function Events() {
  const [held, setHeld] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setHeld((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section id="events" className="scroll-mt-24 bg-bush-850 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          kicker="Mark your calendar"
          lines={[
            <span key="1">Open doors,</span>,
            <span key="2" className="italic font-light text-gold-300">
              open stalls.
            </span>,
          ]}
          note={
            <>
              Everything below is free or nearly free, and visitors are genuinely welcome — the
              gate opens at eight.
            </>
          }
        />

        <div>
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 80}>
              <div
                className={`group -mx-4 grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-4 border-t border-dashed border-cream/15 px-4 py-6 transition-colors duration-300 hover:bg-cream/[0.04] sm:grid-cols-[auto_1fr_auto] ${
                  i === EVENTS.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="w-20 border border-gold-400/40 bg-bush-900 py-3 text-center transition-colors duration-300 group-hover:border-gold-400">
                  <p className="font-display text-3xl leading-none font-black text-gold-300">{e.day}</p>
                  <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.24em] text-cream/60">
                    {e.month}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-cream transition-colors duration-300 group-hover:text-gold-300 sm:text-2xl">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-sm text-cream/55">{e.meta}</p>
                </div>
                <div className="col-span-2 flex items-center gap-3 sm:col-span-1 sm:justify-end">
                  <span className="border border-clay-500/60 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-clay-300">
                    {e.tag}
                  </span>
                  <button
                    onClick={() => toggle(i)}
                    aria-pressed={held.has(i)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] transition-all duration-300 ${
                      held.has(i)
                        ? "cursor-default bg-bush-700 text-gold-300"
                        : "border border-gold-400/60 text-gold-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:text-bush-950"
                    }`}
                  >
                    {held.has(i) ? (
                      <>
                        <IconCheck className="h-4 w-4" /> Seat held
                      </>
                    ) : (
                      "Hold a seat"
                    )}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 flex items-center gap-2.5 text-sm text-cream/60">
            <IconCal className="h-4 w-4 text-gold-400" />
            Group visits and school tours run most Fridays — write to{" "}
            <a
              href="mailto:hello@nkechicentre.org"
              className="font-bold text-gold-300 underline decoration-gold-400/40 underline-offset-4 hover:text-gold-400"
            >
              hello@nkechicentre.org
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function EnrollSupport() {
  const [form, setForm] = useState({ name: "", phone: "", lga: LGAS[0], program: "", cohort: COHORTS[0], note: "" });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; program?: string }>({});
  const [ref, setRef] = useState<string | null>(null);

  const [tier, setTier] = useState<number>(15000);
  const [custom, setCustom] = useState("");
  const [monthly, setMonthly] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 4600);
    return () => window.clearTimeout(id);
  }, [toast]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (form.name.trim().length < 3) errs.name = "Please tell us your full name.";
    if (form.phone.replace(/\D/g, "").length < 7) errs.phone = "A reachable phone number, please.";
    if (!form.program) errs.program = "Choose the trade you'd like to try.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setRef(`NKE-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    }
  };

  const donate = () => {
    const amt = custom ? Number(custom.replace(/\D/g, "")) || 0 : tier;
    if (!amt) return;
    setToast(
      `Daalụ! ₦${amt.toLocaleString("en-NG")}${monthly ? "/month" : ""} pledged — our team will call within 24 hours to complete the transfer.`
    );
  };

  const activeTier = TIERS.find((t) => t.amount === tier);

  return (
    <section id="enroll" className="relative scroll-mt-24 bg-cream pb-28 text-bush-950">
      <ZigZag tone="clay" flip />
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:pt-20">
        <SectionHead
          tone="light"
          kicker="Enroll · Support · Volunteer"
          lines={[
            <span key="1">Your seat is waiting —</span>,
            <span key="2" className="italic font-light text-clay-600">
              and so is somebody&rsquo;s.
            </span>,
          ]}
          note={
            <>
              Apply in two minutes, or fund a month of somebody else&rsquo;s training. Both change
              the ledger you saw above.
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-12">
          {/* application form */}
          <Reveal className="lg:col-span-7">
            <div className="relative border-t-8 border-gold-400 bg-bush-900 p-7 text-cream shadow-2xl shadow-bush-950/30 sm:p-10">
              {!ref ? (
                <>
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                        Apply for a seat
                      </h3>
                      <p className="mt-2 text-sm text-cream/65">
                        Free assessment, scholarship review included. We call every applicant.
                      </p>
                    </div>
                    <IconSpark className="mt-2 h-7 w-7 shrink-0 text-gold-400" />
                  </div>

                  <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="f-name" className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-300">
                        Full name *
                      </label>
                      <input
                        id="f-name"
                        className={`field ${errors.name ? "err" : ""}`}
                        placeholder="e.g. Chinwe Adeyemi"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                      {errors.name && <p className="mt-1.5 text-xs font-bold text-clay-300">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="f-phone" className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-300">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="f-phone"
                        className={`field ${errors.phone ? "err" : ""}`}
                        placeholder="0803 000 0000"
                        inputMode="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                      {errors.phone && <p className="mt-1.5 text-xs font-bold text-clay-300">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="f-lga" className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-300">
                        Local government
                      </label>
                      <select
                        id="f-lga"
                        className="field"
                        value={form.lga}
                        onChange={(e) => setForm({ ...form, lga: e.target.value })}
                      >
                        {LGAS.map((l) => (
                          <option key={l}>{l}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="f-program" className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-300">
                        Trade of interest *
                      </label>
                      <select
                        id="f-program"
                        className={`field ${errors.program ? "err" : ""}`}
                        value={form.program}
                        onChange={(e) => setForm({ ...form, program: e.target.value })}
                      >
                        <option value="">Choose a trade…</option>
                        {PROGRAMS.map((p) => (
                          <option key={p.no} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                        <option>Not sure yet — help me choose</option>
                      </select>
                      {errors.program && <p className="mt-1.5 text-xs font-bold text-clay-300">{errors.program}</p>}
                    </div>

                    <fieldset className="sm:col-span-2">
                      <legend className="mb-2.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-300">
                        Preferred cohort
                      </legend>
                      <div className="flex flex-wrap gap-2.5">
                        {COHORTS.map((c) => (
                          <label
                            key={c}
                            className={`cursor-pointer border px-4 py-2.5 text-sm font-bold transition-all duration-200 ${
                              form.cohort === c
                                ? "border-gold-400 bg-gold-400 text-bush-950 shadow-md"
                                : "border-cream/25 text-cream/75 hover:border-gold-400/60 hover:text-cream"
                            }`}
                          >
                            <input
                              type="radio"
                              name="cohort"
                              value={c}
                              checked={form.cohort === c}
                              onChange={() => setForm({ ...form, cohort: c })}
                              className="sr-only"
                            />
                            {c}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div className="sm:col-span-2">
                      <label htmlFor="f-note" className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-300">
                        Anything we should know?
                      </label>
                      <textarea
                        id="f-note"
                        rows={3}
                        className="field resize-none"
                        placeholder="Childcare needs, previous experience, a question…"
                        value={form.note}
                        onChange={(e) => setForm({ ...form, note: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="group mt-1 inline-flex w-full items-center justify-center gap-3 bg-gold-400 py-4 text-[13px] font-extrabold uppercase tracking-[0.18em] text-bush-950 transition-all duration-300 hover:bg-gold-300 sm:col-span-2"
                    >
                      Send my application
                      <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="toast-in py-6 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-400 text-bush-950">
                    <IconCheck className="h-8 w-8" strokeWidth={2.4} />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
                    Daalụ, {form.name.trim().split(" ")[0]}!
                  </h3>
                  <p className="mx-auto mt-4 max-w-md leading-relaxed text-cream/75">
                    Your application reference is{" "}
                    <strong className="font-bold text-gold-300">{ref}</strong>. Our admissions team
                    will call <strong className="font-bold text-cream">{form.phone}</strong> within
                    three working days to book your free assessment for the{" "}
                    <strong className="font-bold text-cream">{form.cohort}</strong> cohort.
                  </p>
                  <button
                    onClick={() => {
                      setRef(null);
                      setForm({ name: "", phone: "", lga: LGAS[0], program: "", cohort: COHORTS[0], note: "" });
                    }}
                    className="mt-8 border border-cream/30 px-6 py-3 text-[12px] font-extrabold uppercase tracking-[0.16em] text-cream transition-colors hover:border-gold-400 hover:text-gold-300"
                  >
                    Submit another application
                  </button>
                </div>
              )}
            </div>
          </Reveal>

          {/* support panel */}
          <Reveal delay={180} className="lg:col-span-5">
            <div className="flex h-full flex-col bg-clay-600 p-7 text-cream sm:p-9">
              <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Keep a light on
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-cream/85">
                7 in 10 students train on scholarship. Every amount below maps to something real
                you can see on your next visit.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-2.5">
                {TIERS.map((t) => (
                  <button
                    key={t.amount}
                    onClick={() => {
                      setTier(t.amount);
                      setCustom("");
                    }}
                    aria-pressed={tier === t.amount && !custom}
                    className={`px-3 py-3.5 text-left text-sm font-extrabold transition-all duration-200 ${
                      tier === t.amount && !custom
                        ? "bg-cream text-clay-700 shadow-lg"
                        : "border border-cream/35 text-cream hover:border-cream hover:bg-cream/10"
                    }`}
                  >
                    ₦{t.amount.toLocaleString("en-NG")}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label htmlFor="custom-amt" className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-cream/80">
                  Or your own amount
                </label>
                <div className="flex items-center border border-cream/35 bg-clay-700/40 focus-within:border-cream">
                  <span className="pl-3.5 font-display text-lg font-bold text-gold-300">₦</span>
                  <input
                    id="custom-amt"
                    inputMode="numeric"
                    placeholder="25,000"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value.replace(/[^\d,]/g, ""))}
                    className="w-full bg-transparent px-2.5 py-3 text-cream outline-none placeholder:text-cream/40"
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1 border border-cream/35 p-1">
                {["Give once", "Give monthly"].map((label, i) => (
                  <button
                    key={label}
                    onClick={() => setMonthly(i === 1)}
                    aria-pressed={monthly === (i === 1)}
                    className={`flex-1 py-2.5 text-[12px] font-extrabold uppercase tracking-[0.14em] transition-all duration-200 ${
                      monthly === (i === 1) ? "bg-cream text-clay-700" : "text-cream/75 hover:text-cream"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <p className="mt-6 border-l-4 border-gold-300 bg-clay-700/50 p-4 font-display text-[15px] italic leading-snug text-cream/95">
                {custom
                  ? "Every naira buys thread, flour, data — and time to learn."
                  : activeTier?.label}
              </p>

              <button
                onClick={donate}
                className="group mt-7 inline-flex w-full items-center justify-center gap-3 bg-bush-950 py-4 text-[13px] font-extrabold uppercase tracking-[0.18em] text-gold-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-bush-900"
              >
                Pledge ₦{(custom ? Number(custom.replace(/\D/g, "")) || 0 : tier).toLocaleString("en-NG")}
                {monthly ? " / month" : ""}
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <p className="mt-6 text-sm text-cream/80">
                Rather give time?{" "}
                <a
                  href="mailto:hello@nkechicentre.org?subject=Volunteering%20at%20Nkechi"
                  className="font-bold text-gold-300 underline decoration-gold-300/50 underline-offset-4 hover:text-gold-400"
                >
                  Volunteer at Market Day →
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* toast */}
      {toast && (
        <div
          role="status"
          className="toast-in fixed bottom-6 right-6 z-[70] flex max-w-sm items-start gap-3 border-l-4 border-gold-400 bg-bush-950 px-5 py-4 text-sm text-cream shadow-2xl shadow-bush-950/60"
        >
          <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
          <p>{toast}</p>
        </div>
      )}
    </section>
  );
}
