import type { Metadata } from 'next';
import Image from 'next/image';
import FaqAccordion from './components/FaqAccordion';
import ConferenceForm from './components/ConferenceForm';

export const metadata: Metadata = {
  title: 'MONEY RESET — Conférence avec Nahed Rachad · Casablanca 10 Mai',
  description:
    "Reprogrammez votre rapport à l'argent et reprenez le contrôle de vos décisions financières. Conférence présentielle à Casablanca le 10 mai.",
  openGraph: {
    title: 'MONEY RESET — Conférence Nahed Rachad',
    description:
      "Reprogrammez votre rapport à l'argent et reprenez le contrôle de vos décisions financières.",
    url: 'https://nahedrachad.com/conference',
    siteName: 'MONEY RESET',
    locale: 'fr_FR',
    type: 'website',
  },
};

/* ─── CTA button shared style ───────────────────────────────── */
const CTA = ({ href = '#register', label = 'JE RÉSERVE MA PLACE' }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#cfab4a] text-white
               font-bold text-sm md:text-base tracking-widest uppercase
               shadow-xl shadow-[#cfab4a]/30 hover:shadow-[#cfab4a]/50
               hover:scale-[1.03] active:scale-95 transition-all"
  >
    👉 {label}
  </a>
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          1 · HERO
      ══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-5 pt-16 md:pb-0 overflow-hidden"
      >
        {/* Background glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[700px] rounded-full bg-[##cfab4a]/8 blur-[140px]" />
        </div>

        {/* Date badge */}
        <div className="relative z-10 mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-sm border border-[#cfab4a]/90 bg-[#cfab4a]/8 text-white text-sm md:text-lg font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-[#eb0629] animate-pulse" />
          CONFÉRENCE LIVE | 10 Mai @ 16:00 
        </div>

        <div className='z-10 '>
        <Image src="/conference/images/liste-attente/MONEYRESET2.png" alt="Hero" width={1920} height={580}  className=" object-cover  h-[290px] w-full md:h-[600px] z-10" />

        </div>

       

        {/* Body copy */}
        <div className="relative z-10 md:w-[80%] text-white text-lg md:text-2xl leading-loose space-y-0 mb-5 md:mb-12 font-light">
        <p>Reprogrammez votre rapport à l&apos;argent et reprenez le contrôle de vos décisions financières</p>
          <p>Reprogrammez votre rapport l’argent et reprenez le contrôle de vos décisions financières Votre vrai problème n’est pas le montant que vous gagnez, mais l’identité avec laquelle vous décidez.</p>
          <p>Les mêmes peurs, les mêmes histoires,les mêmes réflexes… produisent toujours les mêmes résultats. Tant que votre système intérieur n’est pas reset, </p>
          <ul> vous pouvez travailler plus, gagner plus, lire tous les livres :
            <li>Votre niveau de vie restera bloquéM Money Reset est là pour couper ce cycle, réinitialiser votre rapport à l’argent et vous remettre aux commandes de vos choix, sans excuses et sans auto-sabotage.</li>
          </ul>
        </div>

        <div className="relative z-10">
          <CTA />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2 · VIDÉO
      ══════════════════════════════════════════════════════ */}
      <section id="video" className="relative py-16 px-5 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[500px] rounded-full bg-[#cfab4a]/6 blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-4xl 2xl:max-w-5xl mx-auto text-center">
          {/* Pre-video copy */}
          <p className="text-[#cfab4a] uppercase tracking-widest text-xs font-bold mb-5">Avant de réserver</p>
          <h2 className="playfair-display-regular text-3xl md:text-5xl uppercase text-white mb-6 leading-tight">
            Regardez cette vidéo.
          </h2>
          <p className="text-white text-lg md:text-2xl leading-relaxed mb-10 font-light max-w-2xl mx-auto">
            Vous allez comprendre pourquoi le problème n&apos;est pas l&apos;argent que vous gagnez…
            mais <span className="text-white font-light">l&apos;identité financière</span> avec laquelle vous prenez vos décisions.
          </p>

          {/* Video card */}
          <div className="relative rounded-sm overflow-hidden border border-[#cfab4a]/40 shadow-2xl shadow-[#cfab4a]/15 mb-10">
            {/* Pink top glow bar */}
            <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#cfab4a] to-transparent" />
            {/* VIDEO PLACEHOLDER — replace src with actual video embed URL */}
            <div className="aspect-video w-full bg-black">
              <iframe
                src="https://player.vimeo.com/video/1171043937?h=07184e896e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#cfab4a] to-transparent" />
          </div>

          {/* Post-video copy */}
          <p className="text-white text-lg md:text-2xl font-light leading-relaxed mb-8">
            Suivie par plus de <span className="text-white font-light">3,4 millions de personnes</span>,<br />
            Nahed Rachad aborde pour la première fois en présentiel<br />
            le sujet de l&apos;identité financière.
          </p>

          <CTA />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3 · TRANSFORMATIONS
      ══════════════════════════════════════════════════════ */}
      <section id="transformations" className="relative py-10 md:py-24 px-2 md:px-5 bg-white/[0.015]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="playfair-display-regular text-3xl md:text-5xl uppercase text-white mb-4 leading-tight">
            80 % des gens travaillent plus…<br />
            <span className="text-[#cfab4a]">mais restent au même niveau financier</span><br />
            pendant des années.
          </h2>
          <p className="text-white text-lg md:text-2xl mt-4 mb-6 font-light">Pourquoi ?</p>
          <p className="text-white text-lg md:text-2xl font-light mb-16">
            Parce qu&apos;un <span className="text-[#d4a853]">plafond invisible</span> dirige leurs décisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
            
            <div className="text-left w-full order-2 md:order-1">
              <p className="text-[#cfab4a] font-bold text-lg md:text-2xl mb-8">
                Le <strong className="text-white">10 mai</strong>, vous allez voir en face :
              </p>

              <ul className="space-y-6 mb-12">
                {[
                  'Le plafond financier que vous protégez inconsciemment.',
                  'Le pacte invisible qui vous maintient juste "assez"… mais jamais libre.',
                  'Pourquoi votre intelligence ne vous protège pas de la stagnation.',
                  'Pourquoi vous prenez des décisions depuis la peur… sans le voir.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 ">
                    <span className="shrink-0 mt-1 w-6 h-6 rounded-full border border-[#cfab4a]/60 flex items-center justify-center text-[#cfab4a] text-xs font-bold">•</span>
                    <span className="text-white text-lg md:text-xl font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white text-lg md:text-xl font-light mb-2">
                Le 10 Mai, vous ne viendrez pas chercher de la motivation.
              </p>
              <p className="text-[#cfab4a] font-light text-xl md:text-3xl">
                Vous viendrez appuyer sur <strong className="font-bold">RESET</strong>.
              </p>
            </div>

            {/* Image 1 - Transformation */}
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-[#cfab4a]/20 shadow-2xl shadow-[#cfab4a]/10 order-1 md:order-2">
              <Image 
                src="/conference/images/confernce1.jpg" 
                alt="Transformation" 
                fill 
                className="object-cover object-center hover:scale-105 transition-transform duration-1000 ease-in-out" 
              />
            </div>
            
          </div>

          <CTA />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4 · PHRASE SIGNATURE
      ══════════════════════════════════════════════════════ */}
      <section className="relative md:py-20 px-5 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[900px] h-[200px] rounded-full bg-[#d4a853]/8 blur-[80px]" />
        </div>
        <div className="relative z-10 uppercase max-w-5xl mx-auto text-center border-y border-[#d4a853]/20 py-5 md:py-16">
          <p className="playfair-display-regular text-3xl md:text-5xl text-white leading-tight">
            Arrêtez de blâmer les circonstances.
          </p>
          <p className="playfair-display-regular text-3xl md:text-5xl text-[#d4a853] leading-tight mt-2">
            Votre programmation financière dirige votre vie.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5 · POURQUOI CETTE CONFÉRENCE
      ══════════════════════════════════════════════════════ */}
      <section id="pourquoi" className="py-10 md:py-24 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Image 2 - Pourquoi */}
          <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-[#cfab4a]/20 shadow-[-20px_20px_60px_rgba(207,171,74,0.08)] order-2 md:order-1">
            <Image 
              src="/conference/images/confernce2.jpg" 
              alt="Pourquoi cette conférence" 
              fill 
              className="object-cover object-top hover:scale-105 transition-transform duration-1000 ease-in-out" 
            />
          </div>

          <div className="text-left order-1 md:order-2">
            <p className="text-[#cfab4a] uppercase tracking-widest text-xs font-bold mb-5">Pourquoi cette conférence</p>
            <h2 className="playfair-display-regular text-3xl md:text-5xl uppercase text-white mb-10 leading-tight">
              La réalité que personne ne dit
            </h2>
            <div className="space-y-6 text-white text-lg md:text-xl font-light leading-relaxed">
              <p>
                Après des années d&apos;entrepreneuriat et des milliers de modélisations de femmes et d&apos;hommes qui ont réussi,
                Nahed a compris une chose.
              </p>
              <p className="text-white font-light text-xl md:text-2xl">
                Les gens ne manquent pas d&apos;intelligence.<br />
                Ils manquent d&apos;un <span className="text-[#d4a853]">reset financier intérieur</span>.
              </p>
              <p>
                Sans ce reset, les mêmes décisions produisent invariablement les mêmes résultats.
              </p>
              <div className="border-l-2 border-[#cfab4a] pl-5 mt-8">
                <p className="text-white/80 font-light italic">
                  Money Reset est né de cette réalité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6 · PRICING
      ══════════════════════════════════════════════════════ */}
      <section id="pricing" className="relative md:py-24 py-5 px-5 bg-white/[0.015] overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[400px] rounded-full bg-[#cfab4a]/6 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-[#cfab4a] uppercase tracking-widest text-xs font-bold mb-5">Tarifs</p>
          <h2 className="playfair-display-regular text-3xl uppercase md:text-5xl text-white mb-4 leading-tight">
            Plus vous attendez,<br />moins il reste de choix.
          </h2>
          <p className="text-white text-lg md:text-xl mb-12 font-light">Quand une catégorie est complète, elle disparaît automatiquement.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Balcon */}
            <div className="rounded-sm border border-white bg-white/3 backdrop-blur-sm p-8 flex flex-col items-center gap-4">
              <p className="text-white uppercase tracking-widest text-xs font-semibold">Balcon</p>
              <p className="bebas-neue-regular text-6xl text-white">390</p>
              <p className="text-white text-sm -mt-3">MAD</p>
              <a href="#register" className="mt-auto w-full py-3 rounded-sm border border-white/20 text-white/70 hover:border-[#cfab4a]/60 hover:text-white text-sm font-semibold tracking-wide transition-all text-center">
                Réserver
              </a>
            </div>

            {/* Standard */}
            <div className="rounded-sm border border-white/15 bg-white/4 backdrop-blur-sm p-8 flex flex-col items-center gap-4">
              <p className="text-white/50 uppercase tracking-widest text-xs font-semibold">Standard</p>
              <p className="bebas-neue-regular text-6xl text-white">470</p>
              <p className="text-white/40 text-sm -mt-3">MAD</p>
              <a href="#register" className="mt-auto w-full py-3 rounded-sm border border-white/20 text-white/70 hover:border-[#cfab4a]/60 hover:text-white text-sm font-semibold tracking-wide transition-all text-center">
                Réserver
              </a>
            </div>

            {/* VIP */}
            <div className="rounded-sm border border-[#d4a853]/50 bg-[#d4a853]/5 backdrop-blur-sm p-8 flex flex-col items-center gap-4 relative overflow-hidden shadow-xl shadow-[#d4a853]/10">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />
              <p className="text-[#d4a853] uppercase tracking-widest text-xs font-bold">VIP</p>
              <p className="bebas-neue-regular text-6xl text-[#d4a853]">750</p>
              <p className="text-[#d4a853]/60 text-sm -mt-3">MAD</p>
              <p className="text-white/40 text-xs text-center">Places très limitées.</p>
              <a href="#register" className="mt-auto w-full py-3 rounded-sm bg-[#d4a853] text-[#0a0a0f] font-bold text-sm tracking-wide hover:scale-[1.02] transition-all text-center">
                Réserver VIP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7 · URGENCE
      ══════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-24 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="text-left space-y-6 md:pr-10 order-2 md:order-1">
            <h2 className="playfair-display-regular uppercase text-3xl md:text-5xl text-white leading-tight">
              Les places sont<br />
              <span className="text-[#cfab4a]">limitées.</span>
            </h2>
            <div className="flex flex-col gap-5 text-md md:text-xl text-white py-4">
              <span className="flex items-center gap-3"><span className="text-[#cfab4a] font-light md:font-bold border border-[#cfab4a]/40 rounded-full w-8 h-8 flex items-center justify-center shrink-0">✕</span> Aucun replay</span>
              <span className="flex items-center gap-3"><span className="text-[#cfab4a] font-light md:font-bold border border-[#cfab4a]/40 rounded-full w-8 h-8 flex items-center justify-center shrink-0">✕</span> Aucune seconde date annoncée</span>
            </div>
            <p className="text-white/70 text-sm md:text-xl pb-4 font-light leading-relaxed">
              Quand la salle est complète, les inscriptions ferment définitivement. L&apos;expérience reste intimiste.
            </p>
            <CTA />
          </div>

          {/* Image 3 - Urgence */}
          <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-[#cfab4a]/20 shadow-2xl shadow-[#cfab4a]/10 order-1 md:order-2">
             <Image 
               src="/conference/images/confernce3.jpg" 
               alt="Urgence" 
               fill 
               className="object-cover object-center hover:scale-105 transition-transform duration-1000 ease-in-out" 
             />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8 · FORMULAIRE
      ══════════════════════════════════════════════════════ */}
      <section id="register" className="relative py-5 md:py-24 px-5 overflow-hidden bg-white/[0.015]">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[500px] rounded-full bg-[#cfab4a]/7 blur-[130px]" />
        </div>

        <div className="relative z-10 max-w-xl mx-auto text-center">
          <p className="text-[#cfab4a] uppercase tracking-widest text-xs font-bold mb-5">Inscription</p>
          <h2 className="playfair-display-regular text-3xl uppercase md:text-5xl text-white mb-4 leading-tight">
            Réserver ma place
          </h2>
          <div className="rounded-sm border border-white/10 bg-white/3 backdrop-blur-sm p-8">
            <ConferenceForm />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          9 · FAQ
      ══════════════════════════════════════════════════════ */}
      <section id="faq" className="py-5 md:py-24 px-5">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#cfab4a]  tracking-widest text-xs font-bold mb-5 text-center">FAQ</p>
          <h2 className="playfair-display-regular uppercase text-3xl md:text-5xl text-white mb-10 leading-tight text-center">
            Questions fréquentes
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-xs text-white/25 tracking-wide space-y-2">
        <p>© Nahed Rachad — Conférence Finance — Casablanca — 10 mai</p>
        <div className="flex justify-center gap-4 text-white/20">
          <a href="#" className="hover:text-white/60 transition-colors">Mentions légales</a>
          <span>·</span>
          <a href="#" className="hover:text-white/60 transition-colors">Politique de confidentialité</a>
          <span>·</span>
          <a href="#" className="hover:text-white/60 transition-colors">Contact</a>
        </div>
      </footer>
    </main>
  );
}
