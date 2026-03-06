import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Un cadeau pour toi — CEO OF MY LIFE",
  description:
    "Nahed Rachad t'a réservé un cadeau exclusif. Inscris-toi pour le recevoir.",
  openGraph: {
    title: "Un cadeau pour toi — CEO OF MY LIFE",
    description:
      "Nahed Rachad t'a réservé un cadeau exclusif. Inscris-toi pour le recevoir.",
    url: 'https://nahedrachad.com/conference/inscription',
    siteName: 'CEO OF MY LIFE',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://nahedrachad.com/conference/inscription',
  },
};

export default function InscriptionPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden flex flex-col items-center justify-center px-4 py-16 relative">

      {/* ─── Background glows ─────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#ff8bcc]/8 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#d4a853]/6 blur-[100px]" />
      </div>

      {/* ─── Gift icon ────────────────────────────────────────── */}
      <div className="relative z-10 mb-6 flex flex-col items-center gap-3">
        {/* Animated gift box */}
        <div className="relative animate-bounce" style={{ animationDuration: '2.5s' }}>
          <div className="text-7xl select-none">🎁</div>
        </div>

        {/* Sparkle dots */}
        <div className="flex gap-1.5">
          {['bg-[#ff8bcc]', 'bg-[#d4a853]', 'bg-[#ff8bcc]'].map((color, i) => (
            <span
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${color} opacity-70`}
            />
          ))}
        </div>
      </div>

      {/* ─── Heading ──────────────────────────────────────────── */}
      <div className="relative z-10 text-center mb-10 max-w-xl px-2">
        <p className="text-[#ff8bcc] uppercase tracking-[0.25em] text-xs font-semibold mb-4">
          Un cadeau de Nahed Rachad
        </p>
        <h1 className="playfair-display-regular text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-5">
          Quelque chose de spécial<br />
          <span className="text-[#d4a853] italic">t&apos;attend.</span>
        </h1>
        <p className="text-white/55 text-base md:text-lg font-light leading-relaxed">
          Remplis le formulaire ci-dessous pour recevoir{' '}
          <span className="text-white font-medium">ton cadeau exclusif</span>{' '}
          — réservé aux personnes qui comptent le plus.
        </p>
      </div>

      {/* ─── Divider ──────────────────────────────────────────── */}
      <div className="relative z-10 flex items-center gap-4 w-full max-w-lg mb-8">
        <div className="flex-1 h-px bg-white/8" />
        <span className="text-[#ff8bcc] text-lg">✦</span>
        <div className="flex-1 h-px bg-white/8" />
      </div>

      {/* ─── Brevo iframe card ────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-2xl rounded-sm border border-white/8 bg-white/3 backdrop-blur-sm overflow-hidden shadow-xl shadow-[#ff8bcc]/5">
        {/* Top accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#ff8bcc]/60 to-transparent" />

        <iframe
          src="https://ccd16224.sibforms.com/serve/MUIFAC2VuRp4vBJFM3TtsJpYE7kxFQB_or5A18fJzWlDQ65mJjbTwJ1S5fDoW2HSp29Nl06FCxmWDe1mp3Afyg0lbhgG2rJ0zN-nB3gMqbJyAm9qg8lYp7LegBMY3TatRTF07LwZqC_78W0ya_kHFR5RYIKuaje8duzss3c1SAF5_dOckBwlu8BxtIAUmbt0dZY6HVj0Yi_ySjD9"
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          title="Formulaire cadeau CEO OF MY LIFE"
          style={{
            display: 'block',
            width: '100%',
            minHeight: '340px',
            background: 'transparent',
          }}
        />
      </div>

      {/* ─── Reassurance note ─────────────────────────────────── */}
      <p className="relative z-10 mt-6 text-center text-xs text-white/30 tracking-wide max-w-sm leading-relaxed">
        🔒 Tes informations restent privées. Aucun spam. Juste ce qui compte vraiment.
      </p>

      {/* ─── Footer ───────────────────────────────────────────── */}
      <p className="relative z-10 mt-8 text-center text-xs text-white/20 tracking-wide">
        © {new Date().getFullYear()} CEO OF MY LIFE. Tous droits réservés.
      </p>
    </main>
  );
}
