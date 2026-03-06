import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ListeAttenteForm from './components/ListeAttenteForm';

export const metadata: Metadata = {
  title: "Liste d'Attente — CEO OF MY LIFE",
  description:
    "Inscris-toi sur la liste d'attente exclusive et sois prévenue en priorité avant l'annonce officielle de la prochaine étape CEO OF MY LIFE.",
  openGraph: {
    title: "Liste d'Attente — CEO OF MY LIFE",
    description:
      "Inscris-toi sur la liste d'attente exclusive et sois prévenue en priorité avant l'annonce officielle.",
    url: 'https://nahedrachad.com/conference/liste-attente',
    siteName: 'CEO OF MY LIFE',
    images: [
      {
        url: 'https://nahedrachad.com/conference/images/liste-attente/imagewebnr.jpeg',
        width: 1200,
        height: 630,
        alt: "CEO OF MY LIFE — Liste d'Attente",
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Liste d'Attente — CEO OF MY LIFE",
    description:
      "Inscris-toi sur la liste d'attente exclusive et sois prévenue en priorité avant l'annonce officielle.",
    images: ['https://nahedrachad.com/conference/images/liste-attente/imagewebnr.jpeg'],
  },
  alternates: {
    canonical: 'https://nahedrachad.com/conference/liste-attente',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'CEO OF MY LIFE — La prochaine étape',
  description:
    "Inscris-toi sur la liste d'attente exclusive et sois prévenue en priorité avant l'annonce officielle.",
  organizer: {
    '@type': 'Person',
    name: 'Nahed Rachad',
    url: 'https://nahedrachad.com/conference',
  },
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
  url: 'https://nahedrachad.com/conference/liste-attente',
};

const lines = [
  'Depuis des semaines, je te parle de devenir CEO OF YOUR LIFE .',
  'Ne plus subir.',
  'Décider.',
  'Sortir de la stagnation.',
];

export default function ListeAttentePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden flex flex-col">

      {/* ─── Schema.org JSON-LD ──────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── BANNER ───────────────────────────────────────────── */}
      <div className="relative w-full h-72 sm:h-96 md:h-112 overflow-hidden">
        {/* Mobile image */}
        <div className="block md:hidden">
          <Image
            src="/conference/images/liste-attente/imageNR.jpeg"
            alt="CEO OF MY LIFE - Nahed Rachad"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Desktop image */}
        <div className="hidden md:block">
          <Image
            src="/conference/images/liste-attente/imagewebnr.jpeg"
            alt="CEO OF MY LIFE - Nahed Rachad"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* Gradient fade to page background */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-[#0a0a0f]" />
      </div>

      {/* ─── CONTENT ──────────────────────────────────────────── */}
      <section className="flex-1 flex items-start justify-center px-4 pb-16 pt-4 md:pt-8">
        <div className="w-full max-w-4xl relative">

          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-20 flex items-center justify-center"
          >
            <div className="w-[500px] h-[400px] rounded-full bg-[#ff8bcc]/8 blur-[100px]" />
          </div>

          <div className="relative z-10 space-y-4 md:space-y-10">

            {/* ── Hook copy ─────── */}
            <div className="space-y-1">
              {lines.map((line, idx) =>
                idx === 0 ? (
                  <h1
                    key={line}
                    className="playfair-display-regular uppercase tracking-wide text-[28px] md:text-4xl font-light text-white leading-snug"
                  >
                    {line}
                  </h1>
                ) : (
                  <p
                    key={line}
                    className="text-lg md:text-2xl font-light text-white leading-snug"
                  >
                    {line}
                  </p>
                )
              )}
            </div>

            {/* ── Teaser ─────────── */}
            <div className="space-y-0 md:space-y-2 text-lg md:text-2xl ">
              <p className="font-light text-white">
                La prochaine étape arrive.
              </p>
              <p className="font-light text-white">
                Mais cette fois-ci, ce sera différent.
              </p>
              <p className="font-light text-white">Les premières places passeront par cette liste privée.</p>
              <p className="font-light text-white">Si tu veux être informée avant l&apos;annonce officielle</p>
              <p className="font-light text-white">
                et accéder aux inscriptions avant tout le monde :
              </p>
            </div>

            {/* ── CTA intro ──────── */}
            <p className="font-light text-lg md:text-2xl text-white">
              Si tu veux être informée avant l&apos;annonce officielle et avoir accès
              avant tout le monde.
            </p>

            {/* ── Form card ─────── */}
            <div className="rounded-sm border border-white/8 bg-white/3 backdrop-blur-sm p-7 sm:p-9">
              <ListeAttenteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-6 px-6 text-center text-xs text-white tracking-wide">
        © {new Date().getFullYear()} CEO OF MY LIFE. Tous droits réservés.
        {' — '}
        <Link href="/conference" className="underline underline-offset-2 hover:text-[#ff8bcc] transition-colors">
          Retour à l&apos;accueil
        </Link>
      </footer>
    </main>
  );
}
