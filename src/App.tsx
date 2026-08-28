import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { Programs, ThePath } from "./components/Programs";
import Impact from "./components/Impact";
import Stories from "./components/Stories";
import { EnrollSupport, Events } from "./components/Engage";
import Footer from "./components/Footer";
import { Ticker } from "./ui";
import { TICKER_NEWS, TICKER_TRADES } from "./data";

export default function App() {
  return (
    <div className="relative min-h-screen bg-bush-900 font-body text-cream">
      <Nav />
      <main>
        <Hero />
        <div className="relative z-10 mt-px">
          <Ticker items={TICKER_TRADES} tone="gold" dur={30} />
          <Ticker items={TICKER_NEWS} tone="clay" reverse dur={40} />
        </div>
        <Programs />
        <ThePath />
        <Impact />
        <Stories />
        <Events />
        <EnrollSupport />
      </main>
      <Footer />
      <div className="noise-overlay" aria-hidden="true" />
    </div>
  );
}
