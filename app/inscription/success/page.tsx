import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Gift Confirmed — CEO OF MY LIFE",
  description: "Your gift is ready. Download it now.",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white flex flex-col items-center justify-center px-4 py-16 relative">
      {/* ─── Background glows ─── */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#cfab4a]/8 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#d4a853]/6 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        {/* Header */}
        <p className="text-[#cfab4a] uppercase tracking-[0.25em] text-xs font-bold mb-10">
          TON CADEAU EST PRÊT!
        </p>

        <h1 className="playfair-display-regular text-4xl sm:text-5xl font-light text-center mb-4">
          Ton guide stratégique est disponible. Télécharge le dès maintenant.
        </h1>
        <p className="text-white/70 text-center mb-12">
          Les 8 erreurs structurelles qui détruisent une entreprise avant même que vous le voyiez.
        </p>

        {/* Card 1: Download Plan */}
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-6 mb-6 backdrop-blur-sm relative overflow-hidden shadow-2xl">
          {/* Top highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#cfab4a]/80 to-transparent opacity-50" />
          
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
               <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
               </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-0.5">Ton Guide Ultime </h3>
              <p className="text-white/50 text-xs sm:text-sm">14-pages pour accélérer ton business</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Francais
            </div>
            <a 
              href="/conference/pdf/LEADMAGNET.pdf" 
              download 
              className="flex-1 sm:flex-none flex uppercase items-center justify-center gap-2 bg-white text-black px-6 py-3.5 rounded-full font-bold text-xs tracking-[0.1em] transition-all hover:bg-white/90 hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Je télécharge mon guide
            </a>
          </div>
        </div>

        {/* Informational Text block */}
        <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm mt-8 shadow-xl">
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
            Un guide direct et opérationnel de <span className="text-[#cfab4a] font-semibold">14 pages</span> pour identifier les failles invisibles qui fragilisent la plupart des entreprises et comprendre :
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[#cfab4a] mt-1 shrink-0">❖</span>
              <span className="text-white/70 text-sm sm:text-base">Pourquoi la faillite est presque toujours progressive et structurelle</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#cfab4a] mt-1 shrink-0">❖</span>
              <span className="text-white/70 text-sm sm:text-base">Les 8 erreurs invisibles qui détruisent les entreprises</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#cfab4a] mt-1 shrink-0">❖</span>
              <span className="text-white/70 text-sm sm:text-base">Comment évaluer la solidité réelle de ton business</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#cfab4a] mt-1 shrink-0">❖</span>
              <span className="text-white/70 text-sm sm:text-base">Et mesurer ton niveau de risque avec le <strong className="text-white font-medium">Score FAILLITE™</strong></span>
            </li>
          </ul>

          <div className="pt-6 border-t border-white/10">
            <p className="text-white/80 text-sm sm:text-base text-center italic">
              À la fin, tu sauras si ton entreprise est :<br />
              <span className="text-white font-semibold mt-2 block not-italic">
                Stable — Fragile — ou à risque.
              </span>
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
