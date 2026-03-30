'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ─── QUESTIONS ─────────────────────────────────────────────────── */
const questions = [
  {
    id: 1,
    text: 'Depuis combien de temps tu te dis que tu vas "reprendre le contrôle" de ton argent ?',
    options: [
      { key: 'A', label: 'Plus de 3 ans', points: 1 },
      { key: 'B', label: 'Entre 1 et 3 ans', points: 2 },
      { key: 'C', label: 'Depuis quelques mois', points: 3 },
      { key: 'D', label: "J'ai déjà commencé à agir", points: 4 },
    ],
  },
  {
    id: 2,
    text: "Ce mois-ci, est-ce que tu sais exactement combien tu as dépensé et où ?",
    options: [
      { key: 'A', label: 'Absolument pas', points: 1 },
      { key: 'B', label: "J'ai une vague idée", points: 2 },
      { key: 'C', label: 'Oui, à peu près', points: 3 },
      { key: 'D', label: 'Oui, au centime près', points: 4 },
    ],
  },
  {
    id: 3,
    text: "Si une urgence de 1\u202f000€ arrive demain — que se passe-t-il ?",
    options: [
      { key: 'A', label: "Catastrophe. Je ne sais pas comment je vais faire", points: 1 },
      { key: 'B', label: "Je vais devoir emprunter", points: 2 },
      { key: 'C', label: "Je vais m'en sortir mais ça va faire mal", points: 3 },
      { key: 'D', label: "J'ai une réserve. Je gère", points: 4 },
    ],
  },
  {
    id: 4,
    text: 'Combien de fois as-tu essayé de "tout recommencer financièrement" ces 3 dernières années ?',
    options: [
      { key: 'A', label: "Jamais, je ne sais même pas par où commencer", points: 1 },
      { key: 'B', label: "J'ai essayé, mais j'ai abandonné à chaque fois", points: 2 },
      { key: 'C', label: "J'essaie régulièrement mais rien ne tient", points: 3 },
      { key: 'D', label: "J'ai trouvé un système, même imparfait, qui tient", points: 4 },
    ],
  },
  {
    id: 5,
    text: "Quand tu penses à ton compte bancaire en ce moment, tu ressens quoi ?",
    options: [
      { key: 'A', label: "Honte / évitement — je préfère ne pas regarder", points: 1 },
      { key: 'B', label: "Stress / angoisse — ça me pèse tous les jours", points: 2 },
      { key: 'C', label: "Frustration — je travaille dur mais ça n'avance pas", points: 3 },
      { key: 'D', label: "Calme relatif — ce n'est pas parfait mais je contrôle", points: 4 },
    ],
  },
  {
    id: 6,
    text: "Dans 12 mois, si tu ne changes rien, tu seras où financièrement ?",
    options: [
      { key: 'A', label: "Exactement au même point. Ou pire", points: 1 },
      { key: 'B', label: "Je ne veux pas y penser", points: 2 },
      { key: 'C', label: "Peut-être un peu mieux… peut-être pas", points: 3 },
      { key: 'D', label: "J'ai un plan, ça dépend de moi", points: 4 },
    ],
  },
  {
    id: 7,
    text: 'Est-ce que tu as déjà pris une décision financière "sous émotion" que tu regrettes encore aujourd\'hui ?',
    options: [
      { key: 'A', label: "Oui, plusieurs — et ça m'a coûté cher", points: 1 },
      { key: 'B', label: "Oui, une grosse erreur que je suis encore en train de payer", points: 2 },
      { key: 'C', label: "Oui, des petites erreurs régulières", points: 3 },
      { key: 'D', label: "Rarement — j'ai appris à prendre du recul", points: 4 },
    ],
  },
  {
    id: 8,
    text: 'Combien de fois tu as dit "quand j\'aurai plus d\'argent, je commencerai à le gérer correctement" ?',
    options: [
      { key: 'A', label: "C'est littéralement ma phrase préférée", points: 1 },
      { key: 'B', label: "Plusieurs fois, oui", points: 2 },
      { key: 'C', label: "Une ou deux fois", points: 3 },
      { key: 'D', label: "Jamais — je sais que c'est un piège mental", points: 4 },
    ],
  },
  {
    id: 9,
    text: "Si quelqu'un te donnait un système clair pour reprendre le contrôle en 30 jours, qu'est-ce qui t'empêcherait réellement d'agir ?",
    options: [
      { key: 'A', label: "Je n'ai pas le temps", points: 1 },
      { key: 'B', label: "Je ne veux pas investir", points: 2 },
      { key: 'C', label: "J'ai peur que ça ne marche pas pour moi", points: 3 },
      { key: 'D', label: "Rien. Je suis prêt(e) maintenant", points: 4 },
    ],
  },
  {
    id: 10,
    text: "Quelle phrase décrit le mieux ta situation en ce moment ?",
    options: [
      { key: 'A', label: '"Je survis financièrement. Chaque mois est une bataille."', points: 1 },
      { key: 'B', label: '"Je m\'en sors mais rien n\'est stable. Je suis épuisé(e)."', points: 2 },
      { key: 'C', label: '"Je veux vraiment changer mais je ne sais pas comment."', points: 3 },
      { key: 'D', label: '"Je suis en mouvement. Il me manque juste un cadre solide."', points: 4 },
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
    label: 'SURVIVANT HAUT DE GAMME (10–19)',
    subLabel: '"Tu gères, tu avances, mais à quel prix ?"',
    accent: '#ef4444',
    paragraphs: [
      "Lis bien ce qui suit. C'est probablement la première fois que quelqu'un met des mots précis sur ta situation.",
      "De l'extérieur, tu as l'air de bien t'en sortir. Tu paies tes factures. Tu avances. Mais tu le sais : c'est au prix d'une énergie épuisante.",
      "Tu compenses par l'effort. Tu t'adaptes. Tu réagis. Chaque jour est une micro-gestion de crises qui n'arrivent que parce que tu n'as pas de système.",
      "Le problème, ce n'est pas ton revenu. C'est que tu fonctionnes en mode urgence permanent. Tu brûles ton énergie au lieu de la construire.",
      "Et tu le sais au plus profond : ça ne peut pas durer comme ça.",
      "Money Reset n'est pas une formation de plus. C'est le moment où tu vas poser, pour la première fois, un système réel qui fonctionne sans ta présence constante.",
    ],
    bullets: ["l'effort", "l'adaptation", "la réaction"],
    cta: "Tu es capable. Mais la capacité sans système, c'est juste du travail de fou. Money Reset te montre comment passer de 'je gère' à 'ça fonctionne'.",
  },
  orange: {
    zone: 'orange', emoji: '🟠',
    label: 'ÉVITANT LUCIDE (20–26)',
    subLabel: '"Tu sais que tu dois le faire. Mais tu ne le fais pas."',
    accent: '#f97316',
    paragraphs: [
      "Lis bien ce qui suit. C'est probablement la première fois que quelqu'un met des mots précis sur ta situation.",
      "Non, tu n'es pas nul(le) avec l'argent. Non, tu n'as pas un problème de connaissance.",
      "Ton problème est plus profond. C'est la peur. L'anxiété. Le sentiment d'être dépassé(e) par quelque chose que tu ne comprends pas vraiment.",
      "Alors tu évites. Tu repousses. Tu dis 'je verrai plus tard'. Et chaque fois que tu repousses, tu perds un peu plus le contrôle.",
      "Le pire ? Tu sais exactement ce que tu fais. Tu es lucide sur ton évitement. Et ça te frustre encore plus.",
      "Money Reset n'est pas là pour te juger. Il est là pour te montrer qu'une fois que tu as un plan simple et clair, l'anxiété disparaît. Parce que c'est l'incertitude qui te paralyse, pas l'argent.",
    ],
    bullets: [],
    cta: "Ton premier pas vers le contrôle n'est pas financier. C'est psychologique. Et ça commence par oser regarder en face.",
  },
  yellow: {
    zone: 'yellow', emoji: '🟡',
    label: 'COMBATTANT DÉSORGANISÉ (27–33)',
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
    label: 'STRATÈGE EN CONSTRUCTION (34–40)',
    subLabel: '"Tu comprends comment ça marche. Prochaine étape : la maîtrise."',
    accent: '#22c55e',
    paragraphs: [
      "Lis bien ce qui suit. C'est probablement la première fois que quelqu'un met des mots précis sur ta situation.",
      "Tu as déjà compris quelque chose que beaucoup n'ont pas : la structure fonctionne. Les systèmes fonctionnent.",
      "Tu le vois dans ta vie. Tu as mis en place des choses. Ça marche. Tu as un semblant de contrôle. C'est déjà énorme.",
      "Mais voilà : tu es encore à un stade où tu 'gères'. Tu réagis bien, tu organises, tu contrôles. C'est bon. Mais tu n'as pas encore commencé à 'piloter'.",
      "Et il y a toute une différence. Piloter, c'est quand ton système fonctionne tellement bien que tu fais tes choix à partir de stratégie, pas à partir de réaction.",
      "Money Reset c'est le moment où tu vas faire le saut de 'gestionnaire' à 'pilote'. C'est là que la vraie création de richesse commence.",
    ],
    bullets: [],
    cta: "Tu es plus proche que tu ne le penses. La prochaine étape, ce n'est pas une formation de plus. C'est une clarification.",
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

/* ─── Compute zone from total points ────────────────────────────── */
function computeScore(answers: Record<number, string>): { score: number; zone: Zone } {
  let total = 0;
  questions.forEach((q) => {
    const key = answers[q.id];
    if (key) {
      const opt = q.options.find((o) => o.key === key);
      if (opt) total += opt.points;
    }
  });
  const zone: Zone = total <= 19 ? 'red' : total <= 26 ? 'orange' : total <= 33 ? 'yellow' : 'green';
  return { score: total, zone };
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
        Pourquoi tu es encore au même niveau financier aujourd&apos;hui
      </h1>

      <p className="text-gray-500 text-sm md:text-base mb-4 font-light">
        Es-tu vraiment prêt(e) à changer ta vie financière — ou tu vas encore attendre ?
      </p>
      <div className="mb-6 space-y-2 text-sm text-gray-600 italic border-l-4 border-[#cfab4a]/40 pl-4">
        <p>Ce quiz ne va pas te flatter. Il va te montrer exactement pourquoi tu es encore là où tu es.</p>
        <p>👉 Si tu n&apos;es pas prêt(e) à voir la vérité, ne fais pas ce quiz.</p>
        <p>Réponds honnêtement. Pas pour moi. Pour toi.</p>
      </div>

      <div className="mb-4 space-y-2 text-sm text-gray-600">
        <p className="font-medium text-gray-700">La majorité des entrepreneurs ne manquent pas :</p>
        <ul className="space-y-1.5 pl-2">
          {["d'idées", "d'intelligence", "d'opportunités"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cfab4a] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p>Ils sont simplement bloqués par un <strong>mécanisme qu&apos;ils ne voient pas</strong>.</p>
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
    <div className="flex flex-col justify-center min-h-full px-5 py-8 md:px-8 md:py-10 lg:px-14 lg:py-14">
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
function PersonalInfoScreen({
  userData,
  setUserData,
  onSubmit,
}: {
  userData: { prenom: string; email: string; phone: string; countryCode: string };
  setUserData: React.Dispatch<React.SetStateAction<{ prenom: string; email: string; phone: string; countryCode: string }>>;
  onSubmit: () => void;
}) {
  const isFormValid =
    userData.prenom.trim() !== '' &&
    userData.email.trim() !== '' &&
    userData.phone.trim() !== '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col justify-center min-h-full px-5 py-8 md:px-8 md:py-10 lg:px-12 lg:py-14">
      <div className="inline-flex mb-6">
        <span className="px-3 py-1 rounded-full bg-[#cfab4a]/10 border border-[#cfab4a]/30 text-[#b8922e] text-xs tracking-wider font-semibold uppercase">
          Dernière étape
        </span>
      </div>

      <h2 className="playfair-display-regular text-2xl md:text-3xl xl:text-4xl font-bold text-[#0a0a0f] leading-tight mb-3">
        Pour voir ton résultat détaillé
      </h2>

      <p className="text-gray-600 text-sm md:text-base mb-8">
        Remplis tes informations personnelles pour accéder à ton profil complet et découvrir comment améliorer ta situation financière.
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

      <button
        onClick={onSubmit}
        disabled={!isFormValid}
        className="w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase text-white transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          background: isFormValid ? 'linear-gradient(135deg, #cfab4a 0%, #b8922e 100%)' : '#d1d5db',
          boxShadow: isFormValid ? '0 8px 32px rgba(207,171,74,0.35)' : 'none',
        }}
      >
        Voir mon résultat →
      </button>
    </div>
  );
}

/* ─── COMMITMENT SCREEN ─────────────────────────────────────────── */
function CommitmentScreen({ onDecide }: { onDecide: (choice: string) => void }) {
  return (
    <div className="flex flex-col justify-center min-h-full px-5 py-8 md:px-8 md:py-10 lg:px-12 lg:py-14">
      <div className="inline-flex mb-6">
        <span className="px-3 py-1 rounded-full bg-[#cfab4a]/10 border border-[#cfab4a]/30 text-[#b8922e] text-xs tracking-wider font-semibold uppercase">
          Dernière étape
        </span>
      </div>
      <h2 className="playfair-display-regular text-2xl md:text-3xl xl:text-4xl font-bold text-[#0a0a0f] leading-tight mb-3">
        Ton profil est prêt. Dernière étape pour y accéder 👇
      </h2>
      <p className="text-gray-600 text-sm md:text-base mb-8">
        Est-ce que tu veux comprendre concrètement comment améliorer ta situation financière dans les prochaines semaines ?
      </p>
      <div className="space-y-3">
        <button
          onClick={() => onDecide('yes')}
          className="w-full py-4 rounded-xl font-bold text-sm tracking-wider text-white text-left px-5 transition-all hover:scale-[1.01] active:scale-95"
          style={{ background: 'linear-gradient(135deg, #cfab4a 0%, #b8922e 100%)', boxShadow: '0 8px 32px rgba(207,171,74,0.3)' }}
        >
          ✅ Oui, je veux participer à Money Reset le 10 mai à Casablanca
        </button>
        <button
          onClick={() => onDecide('more')}
          className="w-full py-4 rounded-xl font-bold text-sm tracking-wider text-[#0a0a0f] text-left px-5 transition-all border border-gray-200 hover:border-[#cfab4a] hover:bg-[#cfab4a]/5 active:scale-95"
        >
          🤔 Je veux en savoir plus
        </button>
        <button
          onClick={() => onDecide('no')}
          className="w-full py-3 rounded-xl text-sm text-gray-400 text-left px-5 transition-all hover:text-gray-600"
        >
          ❌ Pas pour le moment
        </button>
      </div>
    </div>
  );
}

/* ─── RESULT SCREEN ─────────────────────────────────────────────── */
function ResultScreen({ zone, score, onRestart }: { zone: Zone; score: number; onRestart: () => void }) {
  const profile = profiles[zone];
  return (
    <div className="flex flex-col min-h-full px-5 py-8 md:px-8 md:py-10 lg:px-14 lg:py-14">
      <div className="inline-flex mb-6">
        <span className="px-4 py-1.5 rounded-full border text-sm font-bold tracking-wider" style={{ borderColor: profile.accent, color: profile.accent, background: `${profile.accent}15` }}>
          {profile.emoji} {profile.label}
        </span>
      </div>

      <h2 className="playfair-display-regular text-2xl md:text-3xl xl:text-4xl font-bold text-[#0a0a0f] leading-tight mb-2">
        {profile.subLabel}
      </h2>

      <div className="h-px bg-linear-to-r from-gray-200 to-transparent mb-6" />

      <div className="space-y-4 mb-6">
        {profile.paragraphs.map((p, i) => (
          <p key={i} className="text-gray-700 text-sm md:text-base leading-relaxed">{p}</p>
        ))}
      </div>

      {profile.bullets.length > 0 && (
        <div className="mb-6 pl-3 border-l-4" style={{ borderColor: profile.accent }}>
          <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-3">Chaque semaine qui passe te coûte :</p>
          <ul className="space-y-1.5">
            {profile.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: profile.accent }} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 italic border-l-4 pl-4" style={{ borderColor: profile.accent }}>
        {profile.cta}
      </p>

      <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 mb-6 text-sm text-gray-700 space-y-1">
        <p className="font-semibold text-[#0a0a0f]">Tu peux continuer comme ça encore 1 an… ou décider maintenant.</p>
        <p>L&apos;argent ne ment jamais. Il révèle ton niveau de structure.</p>
      </div>

      {/* FOMO SECTION */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 mb-6 text-sm space-y-2">
        <p className="text-red-700 font-semibold">Accès limité jusqu&apos;au 10 mai.</p>
      </div>

      {/* WHATSAPP CONTACT SECTION */}
      <div className="space-y-3">
        <a
          href="https://wa.me/212666538168"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase text-white text-center transition-all hover:scale-[1.02] active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #cfab4a 0%, #b8922e 100%)',
            boxShadow: '0 8px 32px rgba(207,171,74,0.35)',
          }}
        >
          📱 Enregistre ce numéro
        </a>

        <a
          href="https://chat.whatsapp.com/HG9jVnMNbiK3Euc2oVaNvo?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase text-white text-center transition-all hover:scale-[1.02] active:scale-95"
          style={{ background: '#25d366', boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)' }}
        >
          💬 Rejoindre le groupe WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────── */
export default function QuizPage() {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'info' | 'commitment' | 'result'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [zone, setZone] = useState<Zone | null>(null);
  const [score, setScore] = useState(0);
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

  function handleInfoSubmit() {
    setPhase('commitment');
  }

  function handleDecide(choice: string) {
    const { score: s, zone: z } = computeScore(answers);
    setScore(s);
    setZone(z);
    setPhase('result');

    // Only send data for 'yes' and 'no' choices, not for 'more'
    if (choice === 'more') return;

    const SCRIPT_URL = process.env.NEXT_PUBLIC_APP_SCRIPT_URL;
    if (SCRIPT_URL) {
      try {
        const data = new URLSearchParams();
        // Use 'quiz' for yes, 'quiz_brevo' for no
        data.append('formType', choice === 'yes' ? 'quiz' : 'quiz_brevo');
        data.append('prenom', userData.prenom);
        data.append('email', userData.email);
        data.append('phone', `${userData.countryCode} ${userData.phone}`);
        data.append('profil', z);
        data.append('score', String(s));
        data.append('choix', choice);
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
    setZone(null);
    setScore(0);
    setUserData({ prenom: '', email: '', phone: '', countryCode: '+212' });
  }

  const panelPhase = phase === 'commitment' || phase === 'info' || phase === 'result' ? 'result' : phase;

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
      <PersonalInfoScreen
        userData={userData}
        setUserData={setUserData}
        onSubmit={handleInfoSubmit}
      />
    );
    if (phase === 'commitment') return <CommitmentScreen onDecide={handleDecide} />;
    if (phase === 'result' && zone) return <ResultScreen zone={zone} score={score} onRestart={handleRestart} />;
    return null;
  };

  return (
    <>
      {/* ── MOBILE LAYOUT (< lg) ── */}
      <main className="lg:hidden min-h-screen bg-white flex flex-col">
        <MobileTopBar current={currentIndex + 1} total={questions.length} phase={panelPhase} />
        <div className="flex-1 bg-white">{renderContent()}</div>
      </main>

      {/* ── DESKTOP LAYOUT (lg+) ── */}
      <main className="hidden lg:flex h-screen w-screen overflow-hidden">
        <div className="w-[40%] h-full shrink-0">
          <LeftPanel current={currentIndex + 1} total={questions.length} phase={panelPhase} />
        </div>
        <div className="w-[60%] h-full bg-white overflow-y-auto">{renderContent()}</div>
      </main>
    </>
  );
}
