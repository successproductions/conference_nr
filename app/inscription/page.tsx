import type { Metadata } from 'next';
import RegisterForm from './components/RegisterForm';

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
    <main className="min-h-screen bg-[#000000] text-white overflow-x-hidden flex flex-col items-center justify-center px-4 py-16 relative">

      {/* ─── Background glows ─────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#cfab4a]/8 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#d4a853]/6 blur-[100px]" />
      </div>

      {/* ─── Heading ──────────────────────────────────── */}
      <div className="relative z-10 text-center mb-10 max-w-xl px-2">
        <p className="text-white uppercase tracking-[0.25em] text-xs font-semibold mb-4">
          Quelque chose de spécial t’attend.
        </p>
        <h1 className="playfair-display-regular text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-5">
          Je suis Nahed Rachad,<br />
          <span className="text-white italic">et j’ai préparé ce premier cadeau pour toi.</span>
        </h1>
        <p className="text-white text-base md:text-lg font-light leading-relaxed">
          Un contenu que je partage avec celles et ceux qui veulent comprendre, anticiper et construire plus intelligemment.
{' '}
          <span className="text-white font-medium">Remplis simplement le formulaire </span>{' '}
          ci-dessous pour recevoir ton accès.
        </p>
      </div>


      {/* ─── Divider ──────────────────────────────────────────── */}
      <div className="relative z-10 flex items-center gap-4 w-full max-w-lg mb-8">
        <div className="flex-1 h-px bg-white/8" />
        <span className="text-[#cfab4a] text-lg">✦</span>
        <div className="flex-1 h-px bg-white/8" />
      </div>

      {/* ─── Form Card ────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-2xl rounded-sm border border-white/8 bg-white/3 backdrop-blur-sm overflow-hidden shadow-xl shadow-[#cfab4a]/5">
        {/* Top accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#cfab4a]/60 to-transparent" />

        <RegisterForm />
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
