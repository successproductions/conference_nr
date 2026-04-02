import type { Metadata } from 'next';
import Image from 'next/image';
import PageAnimations from './components/PageAnimations';
import FaqAccordion from './components/FaqAccordion';
import ConferenceForm from './components/ConferenceForm';

export const metadata: Metadata = {
  title: 'MONEY RESET — Conférence avec Nahed Rachad · Casablanca 10 Mai',
  description:
    "Reprogrammez votre rapport à l'argent et reprenez le contrôle de vos décisions financières. Conférence présentielle à Casablanca le 10 mai.",
  alternates: {
    canonical: 'https://nahedrachad.com/conference',
  },
  openGraph: {
    title: 'MONEY RESET — Conférence Nahed Rachad',
    description:
      "Reprogrammez votre rapport à l'argent et reprenez le contrôle de vos décisions financières.",
    url: 'https://nahedrachad.com/conference',
    siteName: 'MONEY RESET',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://nahedrachad.com/conference/images/liste-attente/MONEYRESET2.png',
        width: 1200,
        height: 630,
        alt: 'MONEY RESET - Conférence Nahed Rachad',
      },
    ],
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MONEY RESET — Conférence Nahed Rachad',
    description: "Reprogrammez votre rapport à l'argent et reprenez le contrôle de vos décisions financières.",
    images: ['https://nahedrachad.com/conference/images/liste-attente/MONEYRESET2.png'],
  },
};

/* ─── CTA button shared style ───────────────────────────────── */
const CTA = ({ href = '#register', label = 'RÉSERVER MA PLACE' }) => (
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
      <PageAnimations />

      {/* ══════════════════════════════════════════════════════
          1 · HERO
      ══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-5 md:pb-0 overflow-hidden"
      >
        {/* Background glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[700px] rounded-full bg-[#cfab4a]/8 blur-[140px]" />
        </div>
        <div className='z-10 gsap-scale-in'>
          <h1 className="sr-only">MONEY RESET — Conférence avec Nahed Rachad à Casablanca</h1>
          {/* Mobile: image pleine largeur */}
          <Image
            src="/conference/images/PHONELP1.jpeg"
            alt="Hero"
            width={0}
            height={0}
            sizes="100vw"
            className="block md:hidden object-cover h-[290px] relative left-1/2 -translate-x-1/2 w-screen"
            priority
          />
          {/* Desktop: image originale */}
          <Image src="/conference/images/DESKTOPLP.jpeg" alt="Hero" width={1920} height={580} className="hidden md:block object-cover h-[600px] w-full z-10" />
        </div>

       

        {/* Body copy */}
        <div className="relative z-10 md:w-[80%] text-left md:text-center text-white text-lg md:text-2xl leading-relaxed space-y-8 mb-10 md:mb-16 font-light gsap-stagger-container">
          
          <div className="space-y-4 gsap-stagger-item">
            <h1 className="playfair-display-regular text-[21px] md:text-5xl uppercase">TU NE MANQUES PAS D’ARGENT, TU STAGNES À CAUSE DE TES DÉCISIONS.</h1>
            <p>
              Votre vrai problème n&apos;est pas le montant que vous gagnez.
            </p>
            <p>
              C&apos;est l&apos;identité financière avec laquelle vous prenez vos décisions.
            </p>
          </div>

          <div className="space-y-4 gsap-stagger-item">
            <p>
              Les mêmes peurs.<br />
              Les mêmes histoires.<br />
              Les mêmes réflexes.
            </p>
            <p>
              Produisent toujours<br />
              les mêmes résultats.
            </p>
          </div>

          <div className="space-y-4 gsap-stagger-item">
            <p>
              Tant que votre système intérieur 
              n&apos;est pas reset,
            </p>
            <p>
              vous pouvez travailler plus, 
              gagner plus, 
              lire tous les livres...
            </p>
            <p>
              Votre niveau de vie<br />
              restera bloqué.
            </p>
          </div>

          <div className="space-y-4 text-white gsap-stagger-item">
            <p className="text-white">
              Money Reset est là pour une chose.
            </p>
            <p>Couper ce cycle.</p>
            <p>Réinitialiser votre rapport à l&apos;argent.</p>
            <p>
              Et vous remettre aux commandes<br />
              de vos décisions.
            </p>
            <p>
              Sans excuses.<br />
              Sans auto-sabotage.
            </p>
          </div>

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
          <h2 className="playfair-display-regular text-[22px] md:text-5xl uppercase text-white mb-6 leading-tight gsap-fade-up">
            AVANT DE RÉSERVER, REGARDEZ CETTE VIDÉO.
          </h2>
          <p className="text-white text-lg md:text-2xl leading-relaxed mb-10 font-light max-w-2xl mx-auto gsap-fade-up">
            Dans cette vidéo, je vous explique clairement : 
 <span className="text-white font-light"> Pourquoi vous faites des efforts… <br/>
mais que vos résultats financiers ne changent pas.</span> <br/> Et surtout, ce que vous devez changer
pour sortir de ce cycle. <br/>Si vous vous reconnaissez dans ce que vous entendez, alors cette conférence est pour vous.
          </p>

          {/* Video card */}
          <div className="relative rounded-sm overflow-hidden border border-[#cfab4a]/40 shadow-2xl shadow-[#cfab4a]/15 mb-10 gsap-scale-in">
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
            Plus de 3,4 millions de personnes suivent déjà ce travail.<br />
            Des milliers ont déjà changé leur manière de décider,
et vu leur réalité financière évoluer.<br />
            Le 10 mai, pour la première fois,
ce travail est présenté en direct, en présentiel.<br/>
Vous pouvez continuer à faire comme avant. <br/>Ou comprendre enfin ce qui bloque vos résultats.
          </p>

          <CTA />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3 · TRANSFORMATIONS
      ══════════════════════════════════════════════════════ */}
      <section id="transformations" className="relative py-5 md:py-10 px-2 md:px-5 bg-white/[0.015]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="playfair-display-regular text-[22px] md:text-5xl uppercase text-white mb-4 leading-tight">
            80 % DES GENS<br />
            VONT CONTINUER COMME ÇA.<br />
            <span className="text-white mb-2">
              JUSQU’À CE QU’IL SOIT TROP TARD POUR CHANGER.<br />
            </span>
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center mb-6 md:mb-10">
            
            <div className="text-left w-full order-2 md:order-1">
              <p className="text-white font-bold text-lg md:text-2xl mb-8">
                Le 10 mai, vous allez voir ce que vous évitez depuis des années.
              </p>

              <ul className="space-y-6 mb-12">
                {[
                  'Ce niveau que vous n’arrivez pas à dépasser… même en faisant plus.',
                  'Ce confort qui vous rassure… mais vous enferme.',
                  'Ce jeu invisible où vous avancez… sans jamais vraiment changer de vie.',
                  'Et surtout, la vérité que la plupart refusent de regarder : vous pourriez faire beaucoup plus… mais quelque chose en vous vous en empêche.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 ">
                    <span className="shrink-0 mt-1 w-6 h-6 rounded-full border border-[#cfab4a]/60 flex items-center justify-center text-white text-xs font-bold">•</span>
                    <span className="text-white text-lg md:text-xl font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white text-[22px] md:text-xl font-light mb-0 md:mb-2">
                Le 10 mai,<br />
                ce ne sera pas agréable.<br />
                Mais ce sera nécessaire.
                Vous ne viendrez pas pour être motivé.
                Vous viendrez pour comprendre.
                Et une fois que vous aurez compris,
                vous ne pourrez plus continuer comme avant.
              </p>
            </div>

            {/* Image 1 - Transformation */}
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-[#cfab4a]/20 shadow-2xl shadow-[#cfab4a]/10 order-1 md:order-2">
              <Image 
                src="/conference/images/confernce2.jpg" 
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
        <div className="relative z-10 max-w-5xl mx-auto text-center border-y border-[#d4a853]/20 py-10 md:py-20 gsap-fade-up">
          <p className="playfair-display-regular text-[22px] md:text-5xl text-white leading-tight uppercase">
            ARRÊTEZ DE CROIRE QUE LE PROBLÈME EST À L’EXTÉRIEUR.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5 · POURQUOI CETTE CONFÉRENCE
      ══════════════════════════════════════════════════════ */}
      <section id="pourquoi" className="py-10 md:py-24 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center gsap-stagger-container">
          
          {/* Image 2 - Pourquoi */}
          <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-[#cfab4a]/20 shadow-[-20px_20px_60px_rgba(207,171,74,0.08)] order-2 md:order-1 gsap-stagger-item">
            <Image 
              src="/conference/images/confernce1.jpeg" 
              alt="Pourquoi cette conférence" 
              fill 
              className="object-cover object-top hover:scale-105 transition-transform duration-1000 ease-in-out" 
            />
          </div>

          <div className="text-left order-1 md:order-2 gsap-stagger-item">
            
            <h2 className="playfair-display-regular text-[22px] md:text-4xl uppercase text-white mb-10 leading-tight">
              VOICI LA VÉRITÉ QUE PEU DE GENS REGARDENT EN FACE :
            </h2>
            <div className="space-y-6 md:space-y-8 text-white text-lg md:text-xl font-light leading-relaxed">
              <p>
                C’est votre conditionnement interne qui vous limite<br />
                Vous pouvez être intelligent.<br />Motivé.<br />Travailleur.<br />
                Et rester exactement au même niveau. Parce que ce qui pilote vos résultats n’est pas visible.
              </p>
              <p>
               Et tant que ce système interne ne change pas, rien ne change vraiment.
              </p>
              <p className="font-light text-white text-lg md:text-2xl">
                C’est pour ça que la majorité des gens
essaient encore…sans jamais basculer.
              </p>
              <p className="font-light text-white text-lg md:text-2xl">
                Le 10 mai, vous ne viendrez pas apprendre plus.<br />
                Vous viendrez reprogrammer  ce qui décide à votre place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7 · URGENCE
      ══════════════════════════════════════════════════════ */}
      <h2 className="pl-4 md:hidden playfair-display-regular uppercase text-[22px] md:text-5xl text-white leading-tight">
              Vous pouvez attendre, Comme la majorité. <br />
              <span className="text-white">Ou décider maintenant.</span>
            </h2>
      <section className="py-10 md:py-24 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center gsap-stagger-container">
          <div className="text-left space-y-6 md:pr-10 order-2 md:order-1 gsap-stagger-item">
            <h2 className="hidden md:block playfair-display-regular uppercase text-3xl md:text-4xl text-white leading-tight">
              Vous pouvez attendre.<br /> Comme la majorité.<br />
              <span className="text-white">Ou décider maintenant.</span>
            </h2>

            <div className="flex flex-col gap-5 text-md md:text-xl text-white py-4">
                          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
              Parce que :
            </p>
              <span className="flex items-center gap-3"><span className="text-white font-light md:font-bold border border-[#cfab4a]/40 rounded-full w-8 h-8 flex items-center justify-center shrink-0">✕</span> Il n’y aura pas de replay</span>
              <span className="flex items-center gap-3"><span className="text-white font-light md:font-bold border border-[#cfab4a]/40 rounded-full w-8 h-8 flex items-center justify-center shrink-0">✕</span> Il n’y aura pas de deuxième date</span>
            </div>
            <p className="text-white/70 text-lg md:text-xl pb-4 font-light leading-relaxed">
              Et quand ce sera plein, ce sera fini.
            </p>
            <div className="flex justify-center">
              <CTA />
            </div>
          
          </div>

          {/* Image 3 - Urgence */}
          <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-[#cfab4a]/20 shadow-2xl shadow-[#cfab4a]/10 order-1 md:order-2 gsap-stagger-item">
             <Image 
               src="/conference/images/confernce2.jpeg" 
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

        <div className="relative z-10 max-w-xl mx-auto text-center gsap-stagger-container">
          
          <h2 className="playfair-display-regular text-[24px] uppercase md:text-5xl text-white mb-4 leading-tight gsap-stagger-item">
            Réserver ma place
          </h2>
          <div className="rounded-sm border border-white/10 bg-white/3 backdrop-blur-sm p-8 gsap-stagger-item">
            <ConferenceForm />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          9 · FAQ
      ══════════════════════════════════════════════════════ */}
      <section id="faq" className="py-5 md:py-24 px-5">
        <div className="max-w-2xl mx-auto gsap-stagger-container">
        
          <h2 className="playfair-display-regular uppercase text-[24px] md:text-5xl text-white mb-10 leading-tight text-center gsap-stagger-item">
            Questions fréquentes
          </h2>
          <div className="gsap-stagger-item">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-xs text-white/25 tracking-wide space-y-2">
        <p>© Nahed Rachad — Conférence Finance — Casablanca — 10 mai</p>
        <div className="flex justify-center flex-wrap gap-4 text-white/20 mt-4">
          <a href="/" className="hover:text-white/60 transition-colors">Site Officiel</a>
          <span>·</span>
          <a href="/conference" className="hover:text-white/60 transition-colors">L&apos;Événement</a>
          <span>·</span>
          <a href="/conference/inscription" className="hover:text-white/60 transition-colors">Inscription VIP</a>
          <span>·</span>
          <a href="/conference/liste-attente" className="hover:text-white/60 transition-colors">Liste d&apos;attente</a>
          <span>·</span>
          <a href="#" className="hover:text-white/60 transition-colors">Mentions légales</a>
          <span>·</span>
          <a href="#" className="hover:text-white/60 transition-colors">Politique de confidentialité</a>
          <span>·</span>
          <a href="#" className="hover:text-white/60 transition-colors">Contact</a>
        </div>
      </footer>
      
      {/* Schema.org JSON-LD pour le SEO Événement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "MONEY RESET — Conférence Nahed Rachad",
            "startDate": "2024-05-10T16:00:00+01:00",
            "endDate": "2024-05-10T20:00:00+01:00",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": "Casablanca",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Casablanca",
                "addressCountry": "MA"
              }
            },
            "image": [
              "https://nahedrachad.com/conference/images/liste-attente/MONEYRESET2.png"
            ],
            "description": "Reprogrammez votre rapport à l'argent et reprenez le contrôle de vos décisions financières. Conférence présentielle à Casablanca le 10 mai.",
            "offers": {
              "@type": "Offer",
              "url": "https://nahedrachad.com/conference",
              "price": "390",
              "priceCurrency": "MAD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-03-01T00:00:00+00:00"
            },
            "performer": {
              "@type": "Person",
              "name": "Nahed Rachad"
            }
          })
        }}
      />
    </main>
  );
}
