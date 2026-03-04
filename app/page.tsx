import type { Metadata } from "next";
import RegisterForm from "./components/RegisterForm";

export const metadata: Metadata = {
  title: "CEO OF MY LIFE — The Conference",
  description:
    "Join the most transformative leadership conference of the year. CEO OF MY LIFE empowers you to take full ownership of your story, your decisions, and your future.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white font-[var(--font-sans)] overflow-x-hidden">
      {/* ─── NAV ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
        <span className="text-sm font-semibold tracking-[0.25em] uppercase text-gold">
          CEO OF MY LIFE
        </span>
        <a
          href="#register"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold text-[#0a0a0f] text-sm font-bold tracking-wide transition-transform hover:scale-105 active:scale-95"
        >
          Reserve Your Seat
        </a>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24 pb-20 overflow-hidden"
        aria-label="Hero banner"
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[700px] h-[700px] rounded-full bg-gold/10 blur-[120px]" />
        </div>

        <p className="mb-4 text-xs tracking-[0.35em] uppercase text-gold/80 font-semibold">
          The Premier Leadership Experience · 2026
        </p>

        <h1 className="relative z-10 text-5xl sm:text-6xl md:text-8xl font-extrabold leading-none tracking-tight mb-6">
          <span className="block text-white">CEO OF</span>
          <span className="block bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent animate-shimmer">
            MY LIFE
          </span>
        </h1>

        <p className="relative z-10 max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed mb-10">
          A one-of-a-kind conference designed for visionary leaders ready to
          own their narrative, master their decisions, and build an extraordinary
          life—on their own terms.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#register"
            className="px-8 py-4 rounded-full bg-gold text-[#0a0a0f] font-bold text-sm tracking-wide shadow-lg shadow-gold/30 transition-all hover:scale-105 hover:shadow-gold/50 active:scale-95"
          >
            Secure Your Spot →
          </a>
          <a
            href="#speakers"
            className="px-8 py-4 rounded-full border border-white/20 text-white/70 font-semibold text-sm tracking-wide transition-all hover:border-gold/50 hover:text-white"
          >
            Meet the Speakers
          </a>
        </div>

        {/* Event meta */}
        <div className="relative z-10 mt-16 flex flex-wrap justify-center gap-8 text-sm text-white/40">
          <span>Coming Soon — 2026</span>
          <span>Location TBA</span>
          <span>Limited Seats</span>
        </div>
      </section>

      {/* ─── SPEAKERS ────────────────────────────────────────── */}
      <section
        id="speakers"
        className="py-24 px-6 md:px-16 max-w-6xl mx-auto"
        aria-label="Speaker Information"
      >
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold/70 font-semibold mb-3">
            World-Class Speakers
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Learn from the{" "}
            <span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">
              Best
            </span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Our curated lineup brings together entrepreneurs, coaches, and
            thought leaders who have mastered the art of self-leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.name}
              className="group relative rounded-2xl border border-white/8 bg-white/3 p-8 backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-white/5 hover:-translate-y-1"
            >
              {/* Avatar placeholder */}
              <div className="mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-gold/40 to-amber-600/20 flex items-center justify-center text-2xl font-bold text-gold">
                {speaker.initials}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {speaker.name}
              </h3>
              <p className="text-xs text-gold/70 font-semibold tracking-wide uppercase mb-3">
                {speaker.title}
              </p>
              <p className="text-sm text-white/50 leading-relaxed">
                {speaker.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── REGISTRATION CTA ────────────────────────────────── */}
      <section
        id="register"
        className="relative py-28 px-6 text-center overflow-hidden"
        aria-label="Registration call to action"
      >
        {/* Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[600px] h-[400px] rounded-full bg-gold/8 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase text-gold/70 font-semibold mb-4">
            Ready to Take Over?
          </p>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
            Become the{" "}
            <span className="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
              CEO
            </span>{" "}
            of Your Life
          </h2>
          <p className="text-white/50 text-base mb-10 leading-relaxed">
            Seats are strictly limited. Register your interest now and be the
            first to receive event details, early-bird pricing, and exclusive
            pre-conference resources.
          </p>

          <RegisterForm />

          <p className="mt-4 text-xs text-white/25">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-xs text-white/25 tracking-wide">
        © {new Date().getFullYear()} CEO OF MY LIFE Conference. All rights reserved.
      </footer>
    </main>
  );
}

/* ─── DATA ──────────────────────────────────────────────────── */
const SPEAKERS = [
  {
    name: "Speaker One",
    initials: "S1",
    title: "Executive Coach & Best-Selling Author",
    bio: "Placeholder bio — a visionary who helps high-achievers unlock their full leadership potential across every domain of life.",
  },
  {
    name: "Speaker Two",
    initials: "S2",
    title: "Entrepreneur & Mindset Expert",
    bio: "Placeholder bio — an entrepreneur who built multiple 7-figure ventures by building relentless self-belief and strategic clarity.",
  },
  {
    name: "Speaker Three",
    initials: "S3",
    title: "Peak Performance Strategist",
    bio: "Placeholder bio — a peak performance expert whose frameworks have been adopted by Fortune 500 leaders and Olympic athletes alike.",
  },
];
