import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Merci pour ton inscription — MONEY RESET",
  description: "Ta place sur la liste d'attente est confirmée.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden flex flex-col items-center justify-center p-4">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <div className="w-[500px] h-[400px] rounded-full bg-[#ff8bcc]/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl text-center space-y-6">
        <h1 className="playfair-display-regular uppercase tracking-wide text-4xl md:text-5xl font-light text-white leading-snug">
          Merci ! 🎉
        </h1>
        <p className="text-xl md:text-2xl font-light leading-snug">
          Tu es officiellement sur la liste d&apos;attente.
        </p>
        <p className="text-lg md:text-xl font-light text-white/70">
          Garde un œil sur tes emails, tu seras prévenue en priorité avant l&apos;annonce officielle.
        </p>
        
        <div className="pt-8">
          <Link
            href="/liste-attente"
            className="inline-block px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase text-sm hover:bg-white/10 hover:border-[#ff8bcc]/50 transition-all"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
