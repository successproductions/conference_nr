'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ─── QUESTIONS ─────────────────────────────────────────────────── */
const questions = [
  {
    id: 1,
    text: 'Quand tu reçois de l\'argent (salaire, paiement, rentrée imprévue), que se passe-t-il le plus souvent dans les 7 jours ?',
    options: [
      { key: 'A', label: 'Je le dépense très vite, sans trop regarder.' },
      { key: 'B', label: 'Je le laisse sur le compte sans y toucher, par peur de manquer.' },
      { key: 'C', label: 'Je rembourse d\'abord ce que je dois, puis je vois après.' },
      { key: 'D', label: 'J\'ai déjà prévu où chaque euro va aller.' },
    ],
  },
  {
    id: 2,
    text: 'Quand tu penses à ton avenir financier, quelle phrase te ressemble le plus ?',
    options: [
      { key: 'A', label: '"On verra bien, de toute façon je me débrouille toujours."' },
      { key: 'B', label: '"J\'ai peur, je préfère ne pas y penser."' },
      { key: 'C', label: '"J\'ai envie de m\'en sortir, mais je tourne en rond."' },
      { key: 'D', label: '"J\'ai des objectifs clairs, il me manque surtout de la discipline."' },
    ],
  },
  {
    id: 3,
    text: 'Quand tu regardes ton compte en banque :',
    options: [
      { key: 'A', label: 'Je regarde seulement quand je sens que ça ne va pas.' },
      { key: 'B', label: 'J\'évite de regarder, ça me stresse trop.' },
      { key: 'C', label: 'Je regarde régulièrement mais ça ne change pas mes décisions.' },
      { key: 'D', label: 'Je le regarde chaque semaine et j\'agis en fonction.' },
    ],
  },
  {
    id: 4,
    text: 'Si une dépense imprévue arrive :',
    options: [
      { key: 'A', label: 'Panique → je paye comme je peux, et je gère après.' },
      { key: 'B', label: 'Je repousse, je fais comme si ça n\'existait pas.' },
      { key: 'C', label: 'Je demande de l\'aide / un prêt.' },
      { key: 'D', label: 'J\'ai prévu une marge pour ça.' },
    ],
  },
  {
    id: 5,
    text: 'Quand on te parle d\'investir :',
    options: [
      { key: 'A', label: '"J\'aimerais bien"… mais je ne passe jamais à l\'action.' },
      { key: 'B', label: '"Ce n\'est pas pour moi."' },
      { key: 'C', label: 'J\'ai déjà essayé → mauvaises expériences.' },
      { key: 'D', label: 'Je me renseigne et je décide.' },
    ],
  },
  {
    id: 6,
    text: 'Ton rapport émotionnel à l\'argent :',
    options: [
      { key: 'A', label: 'Je culpabilise après avoir dépensé.' },
      { key: 'B', label: 'L\'argent me fait peur.' },
      { key: 'C', label: 'J\'y pense tout le temps.' },
      { key: 'D', label: 'C\'est un outil.' },
    ],
  },
  {
    id: 7,
    text: 'Quand tu fais une erreur financière :',
    options: [
      { key: 'A', label: '"Je suis nul(le) avec l\'argent."' },
      { key: 'B', label: 'Je blâme quelque chose / quelqu\'un.' },
      { key: 'C', label: 'J\'évite d\'y penser.' },
      { key: 'D', label: 'J\'analyse pour corriger.' },
    ],
  },
  {
    id: 8,
    text: 'La phrase qui te parle le plus :',
    options: [
      { key: 'A', label: '"Dès que j\'ai un peu d\'air, ça replonge."' },
      { key: 'B', label: '"Je préfère ne pas regarder."' },
      { key: 'C', label: '"Je ne comprends pas où part mon argent."' },
      { key: 'D', label: '"Je veux reprendre le contrôle sainement."' },
    ],
  },
  {
    id: 9,
    text: 'Sur les 12 derniers mois :',
    options: [
      { key: 'A', label: 'J\'ai fait les mêmes erreurs en boucle.' },
      { key: 'B', label: 'J\'ai subi.' },
      { key: 'C', label: 'J\'ai tenté sans stratégie.' },
      { key: 'D', label: 'J\'ai commencé à structurer.' },
    ],
  },
  {
    id: 10,
    text: 'La stabilité financière pour toi :',
    options: [
      { key: 'A', label: 'Beau… mais irréaliste.' },
      { key: 'B', label: 'Difficile à imaginer.' },
      { key: 'C', label: 'Peut-être un jour.' },
      { key: 'D', label: 'Possible avec un cadre.' },
    ],
  },
];

/* ─── ZONE TYPE & PROFILES ──────────────────────────────────────── */
type Zone = 'red' | 'orange' | 'yellow' | 'green';

const profiles: Record<Zone, {
  zone: Zone; emoji: string; label: string; subLabel: string;
  accent: string; paragraphs: string[]; bullets: string[]; cta: string;
}> = {
  red: {
    zone: 'red', emoji: '🔴',
    label: 'PROFIL A — LE SURVIVANT HAUT DE GAMME',
    subLabel: '"Tu gères. Tu avances. Tu tiens."',
    accent: '#ef4444',
    paragraphs: [
      "Mais en réalité… tu es en mode survie amélioré.",
      "Tu fais face. Tu trouves des solutions. Tu t'en sors toujours. Mais au prix de ton énergie.",
      "Ton système repose sur : l'effort, l'adaptation, la réaction.",
      "Résultat : fatigue constante, instabilité déguisée, impression de ne jamais 'sécuriser'.",
      "Tu n'as pas un problème d'argent. Tu n'as pas de système. Et sans système : tu compenses, tu recommences, tu t'épuises.",
      "Ton prochain niveau n'est pas plus d'effort. C'est sortir définitivement du mode survie.",
    ],
    bullets: ["l'effort", "l'adaptation", "la réaction"],
    cta: "Money Reset te montre comment avoir un vrai système qui fonctionne sans ta présence constante.",
  },
  orange: {
    zone: 'orange', emoji: '🟠',
    label: 'PROFIL B — L\'ÉVITANT LUCIDE',
    subLabel: '"Tu sais… mais tu préfères ne pas voir."',
    accent: '#f97316',
    paragraphs: [
      "Tu n'es pas inconscient(e). Tu comprends que quelque chose ne va pas. Mais tu évites. Pas par faiblesse. Par protection.",
      "L'argent est associé à : la peur, la pression, le jugement. Alors tu fais ce que beaucoup font : tu regardes le moins possible.",
      "Résultat : flou, anxiété silencieuse, perte de contrôle progressive.",
      "Ton problème n'est pas l'argent. C'est la relation que tu as avec lui.",
      "Tant que tu évites : tu laisses ta situation décider à ta place.",
      "Ton prochain niveau : c'est regarder en face — sans te juger — et reprendre le pouvoir.",
    ],
    bullets: [],
    cta: "Money Reset t'aide à transformer l'anxiété en clarté, l'évitement en action.",
  },
  yellow: {
    zone: 'yellow', emoji: '🟡',
    label: 'COMBATTANT DÉSORGANISÉ ',
    subLabel: '"Tu essaies beaucoup. Mais sans vraie direction."',
    accent: '#f59e0b',
    paragraphs: [
      "Lis bien ce qui suit. C'est probablement la première fois que quelqu'un met des mots précis sur ta situation.",
      "Tu n'es pas passif(ve). Loin de là. Tu testes. Tu lis. Tu essaies différentes approches. Tu fais preuve d'initiative.",
      "Mais voilà : tu as beaucoup d'actions, pas assez de système. Tu avanças, puis tu recules. Tu fais des progrès qui ne tiennent pas.",
      "Et surtout, tu es épuisé(e). Pas par le manque d'effort — tu en fais assez — mais parce que tu cours dans tous les sens sans vraie direction.",
      "C'est comme conduire une moto puissante sans système de freinage. Tu vas vite, mais tu ne contrôles pas vraiment où tu vas.",
      "Money Reset va te montrer comment transformer ton énergie — que tu as en abondance — en résultats durables. L'enjeu n'est pas plus d'action. C'est une meilleure organisation.",
    ],
    bullets: [],
    cta: "Tu as le moteur. Il te manque la boussole. Money Reset c'est ta boussole.",
  },
  green: {
    zone: 'green', emoji: '🟢',
    label: 'PROFIL D — LE STRATÈGE EN CONSTRUCTION',
    subLabel: '"Tu es déjà en avance."',
    accent: '#22c55e',
    paragraphs: [
      "Tu as compris : que l'argent se pilote, que les décisions comptent, que la structure est clé. Mais il manque encore quelque chose : un système complet.",
      "Aujourd'hui : tu avances, mais pas encore de manière optimisée, pas encore avec une vraie puissance.",
      "Tu es entre deux niveaux : plus dans le chaos, mais pas encore dans la maîtrise.",
      "Ton profil montre que tu as déjà les bons réflexes. Le système que tu lis maintenant dans Money Reset sera ton accélérateur.",
      "C'est la différence entre 'gérer' et 'piloter'. Entre progresser et créer.",
      "Ton prochain niveau : passer de 'je gère' à 'je pilote' — c'est là que commence la vraie création de richesse.",
    ],
    bullets: [],
    cta: "Tu es l'un des profils qui tire le plus de Money Reset. Le dernier clic pour passer au niveau supérieur.",
  },
};

/* ─── COUNTRIES ─────────────────────────────────────────────────── */
const COUNTRIES: { flag: string; code: string; dial: string }[] = [
  { flag: '🇲🇦', code: 'MA', dial: '+212' },
  { flag: '🇫🇷', code: 'FR', dial: '+33' },
  { flag: '🇩🇿', code: 'DZ', dial: '+213' },
  { flag: '🇹🇳', code: 'TN', dial: '+216' },
  { flag: '🇧🇪', code: 'BE', dial: '+32' },
  { flag: '🇨🇭', code: 'CH', dial: '+41' },
  { flag: '🇨🇦', code: 'CA', dial: '+1'   },
  { flag: '🇬🇧', code: 'GB', dial: '+44'  },
  { flag: '🇩🇪', code: 'DE', dial: '+49'  },
  { flag: '🇪🇸', code: 'ES', dial: '+34'  },
  { flag: '🇮🇹', code: 'IT', dial: '+39'  },
  { flag: '🇵🇹', code: 'PT', dial: '+351' },
  { flag: '🇸🇳', code: 'SN', dial: '+221' },
  { flag: '🇨🇮', code: 'CI', dial: '+225' },
  { flag: '🇺🇸', code: 'US', dial: '+1'   },
  { flag: '🇦🇪', code: 'AE', dial: '+971' },
];

/* ─── Compute zone from letter frequency (profile counting) ──────── */
function computeScore(answers: Record<number, string>): { score: number; zone: Zone } {
  const letterCount = { A: 0, B: 0, C: 0, D: 0 };
  questions.forEach((q) => {
    const key = answers[q.id];
    if (key && (key === 'A' || key === 'B' || key === 'C' || key === 'D')) {
      letterCount[key]++;
    }
  });
  let dominantLetter: 'A' | 'B' | 'C' | 'D' = 'A';
  let maxCount = letterCount.A;
  if (letterCount.B > maxCount) { dominantLetter = 'B'; maxCount = letterCount.B; }
  if (letterCount.C > maxCount) { dominantLetter = 'C'; maxCount = letterCount.C; }
  if (letterCount.D > maxCount) { dominantLetter = 'D'; maxCount = letterCount.D; }
  const zoneMap: Record<string, Zone> = { A: 'red', B: 'orange', C: 'yellow', D: 'green' };
  const zone: Zone = zoneMap[dominantLetter];
  return { score: maxCount, zone };
}

/* ─── LEFT PANEL (DESKTOP) ──────────────────────────────────────── */
function LeftPanel({ current, total, phase }: { current: number; total: number; phase: 'intro' | 'quiz' | 'result' }) {
  const answered = phase === 'intro' ? 0 : phase === 'result' ? total : current;

  let imageSrc = '/conference/images/quiz/imageQuiz1.jpg';
  if (phase === 'intro') {
    imageSrc = '/conference/images/quiz/imageQuiz1.jpg';
  } else if (phase === 'quiz') {
    imageSrc = `/conference/images/quiz/female${current}.jpg`;
  } else if (phase === 'result') {
    imageSrc = '/conference/images/quiz/famale_result2.jpg';
  }

  return (
    <div className="relative hidden lg:block h-screen w-full overflow-hidden select-none bg-[#0a0a0f]">
      <Image
        key={imageSrc}
        src={imageSrc}
        alt="Quiz illustration"
        fill
        className="object-cover object-center transition-opacity duration-500"
        priority
        quality={75}
        sizes="(max-width: 1024px) 100vw, 50vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAICAgIBwkJCQkJCQkKDAkLDAwLDA0RFBISFQ0PFwwSFBUTHRgYGBgSFBcUHRj/2wBDAQcHBwoIChMJChMoGBYaHCAgICAhICAgICAhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8VAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//2Q=="
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white text-lg font-light tracking-widest uppercase">
            {answered} / {total} répondus
          </span>
          <span className="text-white text-lg font-light">
            {phase === 'result' ? '✓ Complété' : `Étape ${answered}`}
          </span>
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: total }).map((_, i) => {
            const isDone = i < answered;
            const isCurrent = i === answered && phase === 'quiz';
            return (
              <div
                key={i}
                className="flex-1 h-1.5 rounded-full transition-all duration-500"
                style={{
                  background: isDone ? 'white' : isCurrent ? 'rgba(207,171,74,0.45)' : 'rgba(255,255,255,0.25)',
                  transform: isCurrent ? 'scaleY(1.4)' : 'scaleY(1)',
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── MOBILE TOP BAR ────────────────────────────────────────────── */
function MobileTopBar({ current, total, phase }: { current: number; total: number; phase: 'intro' | 'quiz' | 'result' }) {
  const answered = phase === 'intro' ? 0 : phase === 'result' ? total : current;
  return (
    <div className="sticky top-0 z-50 bg-[#08080d] border-b border-white/10 px-5 py-3 select-none lg:hidden">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[#cfab4a] text-base tracking-[0.25em] font-bold uppercase bebas-neue-regular" />
        <span className="text-white text-xs font-light tabular-nums">{answered} / {total}</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, i) => {
          const isDone = i < answered;
          const isCurrent = i === answered && phase === 'quiz';
          return (
            <div
              key={i}
              className="flex-1 h-1 rounded-full transition-all duration-500"
              style={{
                background: isDone ? '#cfab4a' : isCurrent ? 'rgba(207,171,74,0.5)' : 'rgba(255,255,255,0.15)',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ─── INTRO SCREEN ──────────────────────────────────────────────── */
function IntroScreen({
  onStart,
}: {
  onStart: () => void;
}) {
  return (
    <div className="flex flex-col justify-center min-h-full px-5 py-8 md:px-8 md:py-10 lg:px-12 lg:py-14">
      <div className="inline-flex mb-6">
        <span className="px-3 py-1 rounded-full border border-[#cfab4a]/40 text-[#cfab4a] text-xs tracking-widest uppercase font-semibold">
          Quiz Stratégique
        </span>
      </div>

      <h1 className="playfair-display-regular text-3xl md:text-4xl xl:text-5xl text-[#0a0a0f] font-bold leading-tight mb-3 uppercase">
        Quel est ton profil Money Reset ?
      </h1>

      <p className="text-gray-500 text-sm md:text-base mb-4 font-light">
        En 7 minutes, découvre ton profil financier caché et pourquoi tu répètes toujours les mêmes schémas avec l&apos;argent.
      </p>
      <div className="mb-6 space-y-2 text-gray-500 text-sm md:text-base mb-4 font-light">
        <p>Ce quiz ne parle pas de chiffres.</p>
        <p>Il parle de tes réflexes avec l&apos;argent.</p>
        <p>Réponds honnêtement, sans te juger.</p>
      </div>

      <div className="mb-4 space-y-2 text-gray-500 text-sm md:text-base mb-4 font-light">
        <p className="font-medium text-gray-500">À la fin, tu découvriras :</p>
        <ul className="space-y-1.5 pl-2">
          <li>• Ton profil réel</li>
          <li>• Le mécanisme qui te bloque</li>
          <li>• Comment la conférence Money Reset peut t&apos;aider à changer de scénario</li>
        </ul>
      </div>

      <button
        onClick={onStart}
        className="w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase text-white transition-all hover:scale-[1.02] active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #cfab4a 0%, #b8922e 100%)',
          boxShadow: '0 8px 32px rgba(207,171,74,0.35)',
        }}
      >
        Commencer le diagnostic →
      </button>
    </div>
  );
}

/* ─── QUESTION SCREEN ───────────────────────────────────────────── */
function QuestionScreen({
  question, questionIndex, totalQuestions, selectedKey, onSelect, onNext, onPrev,
}: {
  question: typeof questions[0];
  questionIndex: number;
  totalQuestions: number;
  selectedKey: string | null;
  onSelect: (key: string) => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="flex flex-col w-full px-5 py-8 md:px-8 md:py-10 lg:px-14 lg:py-14">
      <div className="inline-flex mb-5">
        <span className="px-3 py-1 rounded-full bg-[#cfab4a]/10 border border-[#cfab4a]/30 text-[#b8922e] text-xs tracking-wider font-semibold uppercase">
          Question {questionIndex + 1} sur {totalQuestions}
        </span>
      </div>

      <h2 className="playfair-display-regular text-2xl md:text-3xl xl:text-4xl font-bold text-[#0a0a0f] leading-snug mb-8">
        {question.text}
      </h2>

      <div className="h-px bg-linear-to-r from-[#cfab4a]/40 via-[#cfab4a]/20 to-transparent mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {question.options.map((opt) => {
          const isSelected = selectedKey === opt.key;
          return (
            <button
              key={opt.key}
              onClick={() => onSelect(opt.key)}
              className="group relative flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 hover:border-[#cfab4a]/60 hover:bg-[#cfab4a]/5"
              style={{
                borderColor: isSelected ? '#cfab4a' : '#e5e7eb',
                background: isSelected ? 'rgba(207,171,74,0.08)' : 'white',
                boxShadow: isSelected ? '0 0 0 2px rgba(207,171,74,0.25), 0 4px 12px rgba(207,171,74,0.1)' : '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <span
                className="shrink-0 w-7 h-7 rounded-full border text-xs font-bold flex items-center justify-center transition-all"
                style={{
                  borderColor: isSelected ? '#cfab4a' : '#d1d5db',
                  color: isSelected ? '#cfab4a' : '#6b7280',
                  background: isSelected ? 'rgba(207,171,74,0.1)' : 'transparent',
                }}
              >
                {opt.key}
              </span>
              <span className="text-sm text-gray-700 font-medium leading-snug group-hover:text-[#0a0a0f] transition-colors">
                {opt.label}
              </span>
              <span
                className="ml-auto shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
                style={{ borderColor: isSelected ? '#cfab4a' : '#d1d5db' }}
              >
                {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-[#cfab4a]" />}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        {questionIndex > 0 && (
          <button onClick={onPrev} className="px-4 py-3 rounded-xl border border-gray-200 text-gray-500 text-sm hover:border-gray-300 hover:text-gray-700 transition-all">
            ← Précédent
          </button>
        )}
        <button
          onClick={onNext}
          disabled={!selectedKey}
          className="flex-1 py-3.5 rounded-xl font-bold text-sm tracking-widest uppercase text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-95"
          style={{
            background: selectedKey ? 'linear-gradient(135deg, #cfab4a 0%, #b8922e 100%)' : '#d1d5db',
            boxShadow: selectedKey ? '0 6px 24px rgba(207,171,74,0.3)' : 'none',
          }}
        >
          {questionIndex === totalQuestions - 1 ? 'Voir mon résultat →' : 'Question suivante →'}
        </button>
      </div>
    </div>
  );
}

/* ─── PERSONAL INFO SCREEN ─────────────────────────────────────── */
function CombinedInfoScreen({
  userData,
  setUserData,
  onDecide,
}: {
  userData: { prenom: string; email: string; phone: string; countryCode: string };
  setUserData: React.Dispatch<React.SetStateAction<{ prenom: string; email: string; phone: string; countryCode: string }>>;
  onDecide: (choice: string) => void;
}) {
  const isFormValid =
    userData.prenom.trim() !== '' &&
    userData.email.trim() !== '' &&
    userData.phone.trim() !== '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col w-full px-5 py-8 md:px-8 md:py-10 lg:px-12 lg:py-14">
      <div className="inline-flex mb-6">
        <span className="px-3 py-1 rounded-full bg-[#cfab4a]/10 border border-[#cfab4a]/30 text-[#b8922e] text-xs tracking-wider font-semibold uppercase">
          Dernière étape
        </span>
      </div>

      <h2 className="playfair-display-regular text-2xl md:text-3xl xl:text-4xl font-bold text-[#0a0a0f] leading-tight mb-3">
        Ton profil est prêt. Dernière étape pour y accéder 
      </h2>

      <p className="text-gray-600 text-sm md:text-base mb-8">
        Remplis tes informations personnelles puis choisis ton option.
      </p>

      {/* PERSONAL INFO FORM */}
      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Nom Complet</label>
          <input 
            type="text" 
            name="prenom" 
            value={userData.prenom} 
            onChange={handleChange} 
            placeholder="Votre nom complet"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm outline-none transition-all focus:border-[#cfab4a] focus:ring-1 focus:ring-[#cfab4a]" 
            required 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            value={userData.email} 
            onChange={handleChange} 
            placeholder="votre@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm outline-none transition-all focus:border-[#cfab4a] focus:ring-1 focus:ring-[#cfab4a]" 
            required 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Téléphone</label>
          <div className="flex gap-2">
            <select 
              name="countryCode" 
              value={userData.countryCode} 
              onChange={handleChange}
              className="w-[100px] shrink-0 px-3 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm outline-none transition-all focus:border-[#cfab4a] focus:ring-1 focus:ring-[#cfab4a] appearance-none"
            >
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.dial}>{c.flag} {c.dial}</option>
              ))}
            </select>
            <input 
              type="tel" 
              name="phone" 
              value={userData.phone} 
              onChange={handleChange} 
              placeholder="600 000 000"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm outline-none transition-all focus:border-[#cfab4a] focus:ring-1 focus:ring-[#cfab4a]" 
              required 
            />
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm md:text-base mb-8">
        Est-ce que tu veux comprendre concrètement comment améliorer ta situation financière dans les prochaines semaines ?
      </p>

      {/* COMMITMENT BUTTONS */}
      <div className="space-y-3">
        <button
          onClick={() => onDecide('yes')}
          disabled={!isFormValid}
          className="w-full py-4 rounded-xl font-bold text-sm tracking-wider text-white text-left px-5 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ background: isFormValid ? 'linear-gradient(135deg, #cfab4a 0%, #b8922e 100%)' : '#d1d5db', boxShadow: isFormValid ? '0 8px 32px rgba(207,171,74,0.3)' : 'none' }}
        >
          ✅ Oui, je veux participer à Money Reset le 10 mai à Casablanca
        </button>
        <button
          onClick={() => onDecide('more')}
          disabled={!isFormValid}
          className="w-full py-4 rounded-xl font-bold text-sm tracking-wider text-[#0a0a0f] text-left px-5 transition-all border border-gray-200 hover:border-[#cfab4a] hover:bg-[#cfab4a]/5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          🤔 Je veux en savoir plus
        </button>
        <button
          onClick={() => onDecide('no')}
          disabled={!isFormValid}
          className="w-full py-3 rounded-xl text-sm text-left px-5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ color: isFormValid ? '#9ca3af' : '#d1d5db' }}
        >
          ❌ Pas pour le moment
        </button>
      </div>
    </div>
  );
}


/* ─── RESULT SCREEN ─────────────────────────────────────────────── */
function ResultScreen({ zone, score, choice, onRestart }: { zone: Zone; score: number; choice: string; onRestart: () => void }) {
  const profile = profiles[zone];
  
  // For all choices ('yes', 'more', 'no'), show full profile with conditional button
  return (
    <div className="flex flex-col w-full px-4 py-5 md:px-6 md:py-6 lg:px-10 lg:py-8">
      <div className="inline-flex mb-3">
        <span className="px-4 py-1.5 rounded-full border text-sm font-bold tracking-wider" style={{ borderColor: profile.accent, color: profile.accent, background: `${profile.accent}15` }}>
          {profile.emoji} {profile.label}
        </span>
      </div>

      <h2 className="playfair-display-regular text-2xl md:text-3xl xl:text-4xl font-bold text-[#0a0a0f] leading-tight mb-2">
        {profile.subLabel}
      </h2>

      <div className="h-px bg-linear-to-r from-gray-200 to-transparent mb-4" />

      <div className="space-y-3 mb-4">
        {profile.paragraphs.map((p, i) => (
          <p key={i} className="text-gray-700 text-sm leading-relaxed">{p}</p>
        ))}
      </div>

      {profile.bullets.length > 0 && (
        <div className="mb-2 pl-3 border-l-4" style={{ borderColor: profile.accent }}>
          <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-1">Chaque semaine qui passe te coûte :</p>
          <ul className="space-y-1">
            {profile.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: profile.accent }} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-gray-700 text-sm leading-relaxed mb-2 ">
        {profile.cta}
      </p>

      <div className="py-2 mb-2 text-sm text-gray-700 space-y-0.5">
        <p className=" text-[#0a0a0f]">Tu peux continuer comme ça encore 1 an… ou décider maintenant.</p>
        <p>L&apos;argent ne ment jamais. Il révèle ton niveau de structure.</p>
      </div>

      {/* VERSION COURTE FINALE - TRANSITION & CTA */}
      <div className="py-3 mb-4 space-y-2 border-t border-gray-200 pt-3">
        {/* TRANSITION */}
        <div className="space-y-1">
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="font-semibold">Ce que tu viens de lire n'est pas un hasard.</span>
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            C'est un schéma.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Et sans cadre, il va continuer.
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-1">
          <p className="text-gray-700 text-sm leading-relaxed font-semibold">
            Tu veux comprendre comment changer ça concrètement ?
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
             J'ai ouvert un groupe WhatsApp privé.
          </p>
        </div>

        {/* ACTION STEPS */}
        {/* <div className="space-y-1 bg-[#cfab4a]/5 rounded-lg p-3">
          <p className="text-gray-700 text-sm leading-relaxed">
             <span className="font-semibold">2. Clique ici pour rejoindre </span>
          </p>
        </div> */}

        {/* TRUST WARNING */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <p className="text-yellow-800 text-sm font-semibold">
            ⚠️ Important :
          </p>
          <p className="text-yellow-700 text-sm mt-0.5">
            Enregistre le numéro pour être sûr de recevoir les messages.
          </p>
        </div>

        {/* FOMO */}
        <p className="text-red-700 font-semibold text-sm">
          🔥 Accès limité jusqu'à 3 jours.
        </p>
      </div>

      {/* CONDITIONAL BUTTON - RESERVATION or WHATSAPP */}
      <div className="space-y-2 lg:max-w-md lg:mx-auto">
        {choice === 'yes' ? (
          <a
            href="https://guichet.com/ma-fr/event/salon-formation/money-reset-transformez-votre-futur-financier-le-10-mai-5792"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 lg:p-6 rounded-xl font-bold text-sm tracking-widest uppercase text-white text-center transition-all hover:scale-[1.02] active:scale-95"
            style={{ background: 'linear-gradient(135deg, #cfab4a 0%, #b8922e 100%)', boxShadow: '0 8px 32px rgba(207,171,74,0.3)' }}
          >
            🎟️ RÉSERVE ICI
          </a>
        ) : choice === 'no' ? null : (
          <a
            href="https://chat.whatsapp.com/FWj0OJ755eTIrPNLawn2oj?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 lg:p-6 rounded-xl font-bold text-sm tracking-widest uppercase text-white text-center transition-all hover:scale-[1.02] active:scale-95"
            style={{ background: '#25d366', boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)' }}
          >
            💬 Rejoindre le groupe WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────── */
export default function QuizPage() {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'info' | 'result'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [zone, setZone] = useState<Zone | null>(null);
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState<string>('no');
  const [userData, setUserData] = useState({ prenom: '', email: '', phone: '', countryCode: '+212' });

  const currentQuestion = questions[currentIndex];
  const selectedKey = answers[currentQuestion?.id] ?? null;

  function handleStart() {
    setPhase('quiz');
    setCurrentIndex(0);
    setAnswers({});
    setZone(null);
    setScore(0);
  }

  function handleSelect(key: string) {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: key }));
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setPhase('info');
    }
  }

  function handleDecide(choiceValue: string) {
    const { score: s, zone: z } = computeScore(answers);
    setScore(s);
    setZone(z);
    setChoice(choiceValue);
    setPhase('result');

    // Only send data for 'yes' and 'no' choices, not for 'more'
    if (choiceValue === 'more') return;

    const SCRIPT_URL = process.env.NEXT_PUBLIC_APP_SCRIPT_URL;
    if (SCRIPT_URL) {
      try {
        const data = new URLSearchParams();
        // Use 'quiz' for yes, 'quiz_brevo' for no
        data.append('formType', choiceValue === 'yes' ? 'quiz' : 'quiz_brevo');
        data.append('prenom', userData.prenom);
        data.append('email', userData.email);
        data.append('phone', `${userData.countryCode} ${userData.phone}`);
        data.append('profil', z);
        data.append('score', String(s));
        data.append('choix', choiceValue);
        fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: data.toString() });
      } catch (error) {
        console.error('Failed to submit quiz data:', error);
      }
    }
  }

  function handlePrev() {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }

  function handleRestart() {
    setPhase('intro');
    setCurrentIndex(0);
    setAnswers({});
    setChoice('no');
    setZone(null);
    setScore(0);
    setUserData({ prenom: '', email: '', phone: '', countryCode: '+212' });
  }

  const panelPhase = phase === 'info' || phase === 'result' ? 'result' : phase;

  const renderContent = () => {
    if (phase === 'intro') return <IntroScreen onStart={handleStart} />;
    if (phase === 'quiz') return (
      <QuestionScreen
        question={currentQuestion}
        questionIndex={currentIndex}
        totalQuestions={questions.length}
        selectedKey={selectedKey}
        onSelect={handleSelect}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    );
    if (phase === 'info') return (
      <CombinedInfoScreen
        userData={userData}
        setUserData={setUserData}
        onDecide={handleDecide}
      />
    );
    if (phase === 'result' && zone) return <ResultScreen zone={zone} score={score} choice={choice} onRestart={handleRestart} />;
    return null;
  };

  return (
    <>
      {/* ── MOBILE LAYOUT (< lg) ── */}
      <main className="lg:hidden min-h-screen bg-white flex flex-col">
        <MobileTopBar current={currentIndex + 1} total={questions.length} phase={panelPhase} />
        <div className="flex-1 bg-white overflow-y-auto">{renderContent()}</div>
      </main>

      {/* ── DESKTOP LAYOUT (lg+) ── */}
      <main className="hidden lg:flex h-screen w-screen overflow-hidden">
        <div className="w-[40%] h-full shrink-0">
          <LeftPanel current={currentIndex + 1} total={questions.length} phase={panelPhase} />
        </div>
        <div className="w-[60%] h-full bg-white overflow-y-auto flex flex-col">{renderContent()}</div>
      </main>
    </>
  );
}
