import type { ReactNode } from "react";
import {
  IconSewing,
  IconMonitor,
  IconPot,
  IconShears,
  IconSprout,
  IconBook,
} from "./components/Icons";

export const IMG = {
  heroSewing:
    "https://image.qwenlm.ai/generated-images/f999f809-c784-4b5a-88f1-992008381c0f/_result.png",
  ictClass:
    "https://image.qwenlm.ai/generated-images/6083478e-237f-4770-9b6e-bc92166cadfd/_result.png",
  gradAdaeze:
    "https://image.qwenlm.ai/generated-images/d634f125-a5fa-4abc-b6e4-4bdd42117a1a/_result.png",
  gradChiamaka:
    "https://image.qwenlm.ai/generated-images/4e7f6256-b003-475c-95d0-9af6f1f477d3/_result.png",
  gradNgozi:
    "https://image.qwenlm.ai/generated-images/03a6564e-67fc-48c7-b2d7-20fdb4fbc60e/_result.png",
  catering:
    "https://image.qwenlm.ai/generated-images/67975410-4c52-4f6f-bc4f-3df625125c10/_result.png",
  beauty:
    "https://image.qwenlm.ai/generated-images/200a95b3-67a3-4e09-90d9-667c8ef1a3b9/_result.png",
  beads:
    "https://image.qwenlm.ai/generated-images/243f4f71-2e42-4644-8426-d5780c8aea54/_result.png",
};

export type Program = {
  no: string;
  title: string;
  igbo: string;
  desc: string;
  duration: string;
  intake: string;
  seats: string;
  icon: ReactNode;
};

export const PROGRAMS: Program[] = [
  {
    no: "01",
    title: "Fashion & Tailoring",
    igbo: "Ịkwa ákwà",
    desc: "From first stitch to finished ankara sets — pattern drafting, machine mastery and live client fittings, crowned by a graduate runway show.",
    duration: "9 months",
    intake: "Jan · Apr · Sep",
    seats: "40 seats",
    icon: <IconSewing className="h-7 w-7" />,
  },
  {
    no: "02",
    title: "ICT & Digital Skills",
    igbo: "Nkà kọmpụta",
    desc: "Computer fundamentals, spreadsheets, online selling and digital office work — the exact skills Awka's employers ask for first.",
    duration: "6 months",
    intake: "Feb · Jun · Oct",
    seats: "36 seats",
    icon: <IconMonitor className="h-7 w-7" />,
  },
  {
    no: "03",
    title: "Catering & Hospitality",
    igbo: "Isi nri",
    desc: "Local and continental menus, event service, costing and food safety — trained inside a working kitchen that feeds 300 people weekly.",
    duration: "6 months",
    intake: "Mar · Jul · Nov",
    seats: "30 seats",
    icon: <IconPot className="h-7 w-7" />,
  },
  {
    no: "04",
    title: "Beauty & Cosmetology",
    igbo: "Ịchọ mma",
    desc: "Braiding, natural-hair care, makeup artistry and salon management, practised daily on real clients in the Nkechi salon studio.",
    duration: "9 months",
    intake: "Jan · May · Sep",
    seats: "32 seats",
    icon: <IconShears className="h-7 w-7" />,
  },
  {
    no: "05",
    title: "Agro-Processing & Trade",
    igbo: "Ọrụ ugbo",
    desc: "Garri, palm oil and groundnut processing with hygiene-grade packaging, pricing and market-day strategy run through our trade co-op.",
    duration: "4 months",
    intake: "Feb · Aug",
    seats: "45 seats",
    icon: <IconSprout className="h-7 w-7" />,
  },
  {
    no: "06",
    title: "Adult Literacy & Business Basics",
    igbo: "Ịgụ na ide",
    desc: "Reading, numeracy and record-keeping for women who missed school — the foundation every other trade at Nkechi is built on.",
    duration: "5 months",
    intake: "Rolling, monthly",
    seats: "50 seats",
    icon: <IconBook className="h-7 w-7" />,
  },
];

export const TICKER_TRADES = [
  "Fashion & Tailoring",
  "ICT & Digital Skills",
  "Catering & Hospitality",
  "Beauty & Cosmetology",
  "Agro-Processing & Trade",
  "Adult Literacy",
];

export const TICKER_NEWS = [
  "Next intake — April 6, 2026",
  "180 seats · free for qualifying applicants",
  "Co-op Market Day — April 3",
  "Scholarships cover 7 in 10 students",
  "Awka · Anambra State · Nigeria",
];

export const STATS = [
  { value: 2340, suffix: "+", label: "Women trained since 2012", note: "across six trades" },
  { value: 87, suffix: "%", label: "Earning within 6 months", note: "of the 2024 cohort" },
  { value: 34, suffix: "", label: "Village savings groups", note: "federated under Nkechi" },
  { value: 96, suffix: "", label: "Alumni businesses trading", note: "launched by graduates" },
];

export const STEPS = [
  {
    no: "01",
    title: "Enroll",
    copy: "Walk in, call, or apply below. A free assessment places you in the trade that fits your hands and your plans — fees are never the barrier; 7 in 10 students study on scholarship.",
    gets: ["Free skills assessment", "Scholarship review", "Cohort placement"],
  },
  {
    no: "02",
    title: "Train",
    copy: "Small classes of never more than twenty, taught by master trainers who run real businesses. Transport and lunch stipends keep attendance above 90%.",
    gets: ["Stipend support", "Master trainers", "Real client work"],
  },
  {
    no: "03",
    title: "Mentor",
    copy: "From month three you are paired with an alumna mentor. Financial literacy, bookkeeping and confidence circles run every Friday afternoon.",
    gets: ["1-to-1 alumna mentor", "Friday money circles", "Co-op membership"],
  },
  {
    no: "04",
    title: "Launch",
    copy: "Graduation means a starter toolkit, a stall at Market Day, and twelve months of follow-up visits until your work pays for itself.",
    gets: ["Starter toolkit grant", "Market Day stall", "12-month follow-up"],
  },
];

export const GOALS = [
  { label: "Women trained toward the 2030 goal", current: 2340, target: 5000 },
  { label: "Alumni-led businesses trading", current: 96, target: 120 },
  { label: "Village savings groups federated", current: 34, target: 40 },
];

export const LEDGER = [
  { amount: "₦41.6M", text: "Recorded graduate earnings, audited for 2025" },
  { amount: "1,240", text: "School kits distributed to graduates' children" },
  { amount: "₦6.2M", text: "Co-op micro-loans issued — repaid in full" },
  { amount: "3", text: "New village classrooms opened in 2024" },
];

export const STORIES = [
  {
    name: "Adaeze Okafor",
    cohort: "Fashion ’23",
    role: "Founder, Adaeze Stitches",
    quote:
      "I walked in with two children and no income. I walked out with a machine, four apprentices and an order book full till December.",
    img: IMG.gradAdaeze,
    rot: -5,
  },
  {
    name: "Chiamaka Eze",
    cohort: "ICT ’24",
    role: "Payroll assistant & online vendor",
    quote:
      "The computer class felt like a locked door opening. Now I run payroll for a pharmacy by day and sell wigs online at night.",
    img: IMG.gradChiamaka,
    rot: 3,
  },
  {
    name: "Ngozi Umeh",
    cohort: "Catering ’22",
    role: "Owner, Umeh Kitchens",
    quote:
      "Our training kitchen fed 300 people a week — by graduation day I had already catered my first wedding.",
    img: IMG.gradNgozi,
    rot: -2,
  },
];

export const GALLERY = [
  { img: IMG.catering, caption: "The training kitchen feeds 300 every week" },
  { img: IMG.beads, caption: "Coral beadwork, afternoon session" },
  { img: IMG.beauty, caption: "Braiding practice, salon studio" },
  { img: IMG.heroSewing, caption: "The cutting room, Block B" },
  { img: IMG.ictClass, caption: "Tuesday's computer fundamentals class" },
];

export const EVENTS = [
  {
    day: "09",
    month: "Mar",
    title: "April Cohort — Open Assessment Day",
    meta: "Main hall · 9:00–15:00 · walk-ins welcome",
    tag: "Open day",
  },
  {
    day: "21",
    month: "Mar",
    title: "Ankara Masterclass with Adaeze Stitches",
    meta: "Block B studio · 10:00 · ₦2,000, free for alumni",
    tag: "Alumni class",
  },
  {
    day: "03",
    month: "Apr",
    title: "Co-op Market Day — 14th edition",
    meta: "Centre grounds · from 8:00 · 60+ graduate stalls",
    tag: "Market day",
  },
  {
    day: "16",
    month: "Apr",
    title: "Digital Skills info evening — bring a friend",
    meta: "ICT lab · 17:30 · light refreshments",
    tag: "Info night",
  },
];

export const TIERS = [
  { amount: 5000, label: "Fabric & thread for one tailor's month" },
  { amount: 15000, label: "A full month of materials for one student" },
  { amount: 50000, label: "One graduate's complete starter toolkit" },
  { amount: 100000, label: "Keeps a village classroom open for a term" },
];

export const LGAS = [
  "Awka North",
  "Awka South",
  "Idemili North",
  "Idemili South",
  "Njikoka",
  "Anambra East",
  "Anambra West",
  "Oyi",
  "Orumba North",
  "Other / outside Anambra",
];

export const COHORTS = ["April 2026", "June 2026", "September 2026"];
