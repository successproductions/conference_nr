import type { Metadata } from 'next';
import Image from 'next/image';
import ListeAttenteForm from './components/ListeAttenteForm';

export const metadata: Metadata = {
  title: "Liste d'Attente — CEO OF MY LIFE",
  description:
    "Inscris-toi sur la liste d'attente exclusive et sois prévenue en priorité avant l'annonce officielle.",
};

const lines = [
  'Depuis des semaines, je te parle de devenir CEO of my life.',
  'Arrêter de subir.',
  'Décider.',
  'Sortir de la stagnation.',
];

export default function ListeAttentePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden flex flex-col">

      {/* ─── BANNER ───────────────────────────────────────────── */}
      <div className="relative w-full h-72 sm:h-96 md:h-112 overflow-hidden">
        {/* Background image */}
        <Image
          src="/conference/images/liste-attente/SCREAN.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient fade to page background */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-[#0a0a0f]" />
        {/* Nahed portrait — centered, anchored to bottom of the banner */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end
                        w-72 sm:w-80 md:w-[420px]
                        h-[90%] sm:h-[92%] md:h-full">
          <Image
            src="/conference/images/liste-attente/NAHED.png"
            alt="Nahed Rachad"
            fill
            priority
            className="object-contain object-bottom drop-shadow-2xl"
          />
        </div>
      </div>

      {/* ─── CONTENT ──────────────────────────────────────────── */}
      <section className="flex-1 flex items-start justify-center px-4 pb-16 pt-4 md:pt-8">
        <div className="w-full max-w-2xl relative">

          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-20 flex items-center justify-center"
          >
            <div className="w-[500px] h-[400px] rounded-full bg-gold/8 blur-[100px]" />
          </div>

          <div className="relative z-10 space-y-10">

            {/* ── Hook copy ─────── */}
            <div className="space-y-1">
              {lines.map((line) => (
                <p
                  key={line}
                  className="text-lg sm:text-xl font-semibold text-white leading-snug"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* ── Teaser ─────────── */}
            <div className="space-y-3 border-l-2 border-gold/40 pl-5">
              <p className="font-semibold text-white">
                La prochaine étape arrive.
              </p>
              <p className="font-semibold text-white">
                Ce sera différent de tout ce que j'ai proposé jusque-là.
              </p>
              <p className="font-semibold text-white">Ce ne sera pas public.</p>
              <p className="font-semibold text-white">Ce sera limité.</p>
              <p className="font-semibold text-white">
                Les premières inscriptions passeront par cette liste.
              </p>
            </div>

            {/* ── CTA intro ──────── */}
            <p className="font-semibold text-white">
              Si tu veux être informée avant l'annonce officielle et avoir accès
              avant tout le monde 
            </p>

            {/* ── Divider ────────── */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-white/8" />
              <span className="tracking-widest text-gold/80 uppercase font-semibold">
                Réserve ta place
              </span>
              <div className="flex-1 h-px bg-white/8" />
            </div>

            {/* ── Form card ─────── */}
            <div className="rounded-sm border border-white/8 bg-white/3 backdrop-blur-sm p-7 sm:p-9">
              <ListeAttenteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-6 px-6 text-center text-xs text-white/20 tracking-wide">
        © {new Date().getFullYear()} CEO OF MY LIFE. Tous droits réservés.
      </footer>
    </main>
  );
}
