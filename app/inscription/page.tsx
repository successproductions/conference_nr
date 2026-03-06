import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Inscription — CEO OF MY LIFE",
  description:
    "Rejoins la liste exclusive CEO OF MY LIFE et sois informée en priorité avant l'annonce officielle.",
  openGraph: {
    title: "Inscription — CEO OF MY LIFE",
    description:
      "Rejoins la liste exclusive CEO OF MY LIFE et sois informée en priorité avant l'annonce officielle.",
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
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden flex flex-col items-center justify-center px-4 py-16">

      {/* ─── Ambient glow ─────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[500px] rounded-full bg-[#ff8bcc]/6 blur-[120px]" />
      </div>

      {/* ─── Header ───────────────────────────────────────────── */}
      <div className="relative z-10 text-center mb-10 max-w-2xl">
        <p className="text-[#ff8bcc] uppercase tracking-widest text-xs font-semibold mb-4">
          CEO OF MY LIFE
        </p>
        <h1 className="playfair-display-regular uppercase text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-4">
          Rejoins la liste privée
        </h1>
        <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
          Sois informée avant tout le monde de la prochaine annonce.
        </p>
      </div>

      {/* ─── Brevo iframe ─────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-2xl rounded-sm border border-white/8 bg-white/3 backdrop-blur-sm overflow-hidden">
        <iframe
          width="540"
          height="305"
          src="https://ccd16224.sibforms.com/serve/MUIFAC2VuRp4vBJFM3TtsJpYE7kxFQB_or5A18fJzWlDQ65mJjbTwJ1S5fDoW2HSp29Nl06FCxmWDe1mp3Afyg0lbhgG2rJ0zN-nB3gMqbJyAm9qg8lYp7LegBMY3TatRTF07LwZqC_78W0ya_kHFR5RYIKuaje8duzss3c1SAF5_dOckBwlu8BxtIAUmbt0dZY6HVj0Yi_ySjD9"
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          title="Formulaire d'inscription CEO OF MY LIFE"
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '100%',
            width: '100%',
            minHeight: '320px',
          }}
        />
      </div>

      {/* ─── Footer note ──────────────────────────────────────── */}
      <p className="relative z-10 mt-8 text-center text-xs text-white/30 tracking-wide">
        © {new Date().getFullYear()} CEO OF MY LIFE. Tous droits réservés.
      </p>
    </main>
  );
}
