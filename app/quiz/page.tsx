'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ─── DATA ─────────────────────────────────────────────────────── */

const questions = [
  {
    id: 1,
    text: "Quand votre entreprise rencontre un problème, votre premier réflexe est :",
    options: [
      { key: 'A', label: "Imaginer immédiatement une nouvelle stratégie" },
      { key: 'B', label: "Analyser les données et les chiffres" },
      { key: 'C', label: "Travailler plus pour compenser" },
      { key: 'D', label: "Attendre avant de prendre une décision" },
    ],
  },
  {
    id: 2,
    text: "Votre entreprise dépend de vous principalement pour :",
    options: [
      { key: 'A', label: "La vision et les nouvelles idées" },
      { key: 'B', label: "Les analyses et les décisions stratégiques" },
      { key: 'C', label: "L'exécution et l'opérationnel" },
      { key: 'D', label: "Les décisions importantes" },
    ],
  },
  {
    id: 3,
    text: "Quand votre chiffre d'affaires augmente, vous avez tendance à :",
    options: [
      { key: 'A', label: "Lancer de nouveaux projets" },
      { key: 'B', label: "Optimiser la stratégie" },
      { key: 'C', label: "Travailler encore davantage" },
      { key: 'D', label: "Espérer que cela continue" },
    ],
  },
  {
    id: 4,
    text: "Votre plus grande difficulté aujourd'hui est :",
    options: [
      { key: 'A', label: "Structurer vos idées" },
      { key: 'B', label: "Décider plus vite" },
      { key: 'C', label: "Déléguer" },
      { key: 'D', label: "Sortir d'une stagnation" },
    ],
  },
  {
    id: 5,
    text: "Quand vous prenez une décision importante :",
    options: [
      { key: 'A', label: "Vous suivez votre intuition" },
      { key: 'B', label: "Vous analysez longtemps les données" },
      { key: 'C', label: "Vous passez à l'action immédiatement" },
      { key: 'D', label: "Vous repoussez la décision" },
    ],
  },
  {
    id: 6,
    text: "Votre entreprise pourrait fonctionner sans vous :",
    options: [
      { key: 'A', label: "Quelques jours" },
      { key: 'B', label: "Quelques semaines" },
      { key: 'C', label: "Très difficilement" },
      { key: 'D', label: "Presque pas" },
    ],
  },
  {
    id: 7,
    text: "Votre plus grande peur entrepreneuriale est :",
    options: [
      { key: 'A', label: "Rater une opportunité" },
      { key: 'B', label: "Faire une mauvaise décision" },
      { key: 'C', label: "Perdre le contrôle de l'activité" },
      { key: 'D', label: "Rester au même niveau" },
    ],
  },
  {
    id: 8,
    text: "Quand vous regardez vos chiffres :",
    options: [
      { key: 'A', label: "Vous regardez surtout la croissance" },
      { key: 'B', label: "Vous analysez les marges" },
      { key: 'C', label: "Vous regardez le chiffre d'affaires" },
      { key: 'D', label: "Vous évitez de regarder" },
    ],
  },
  {
    id: 9,
    text: "Si votre entreprise stagnait pendant 3 ans, la raison la plus probable serait :",
    options: [
      { key: 'A', label: "Trop d'idées en même temps" },
      { key: 'B', label: "Trop d'analyse avant d'agir" },
      { key: 'C', label: "Trop de dépendance à vous" },
      { key: 'D', label: "Des décisions importantes repoussées" },
    ],
  },
  {
    id: 10,
    text: "Votre prochaine étape entrepreneuriale devrait être :",
    options: [
      { key: 'A', label: "Structurer votre vision" },
      { key: 'B', label: "Décider plus vite" },
      { key: 'C', label: "Construire un système autonome" },
      { key: 'D', label: "Prendre des décisions que vous évitez" },
    ],
  },
];

const profiles = {
  A: {
    emoji: '1️⃣',
    label: 'Le Visionnaire Prisonnier',
    color: 'from-violet-500/20 to-purple-700/10',
    accent: '#a855f7',
    paragraphs: [
      "Vous avez probablement ce qui manque à beaucoup d'entrepreneurs : la vision.",
      "Les idées viennent facilement. Les opportunités aussi.",
      "Mais votre croissance peut être freinée par un piège classique : trop d'idées, pas assez de structure.",
    ],
    bullets: [
      "plus de projets que de systèmes",
      "plus d'initiatives que de process",
    ],
    conclusion: "Le véritable tournant arrive lorsque le visionnaire transforme ses idées en systèmes exécutables.",
    result_label: "Résultat",
    result_body: "Leur entreprise dépend encore beaucoup d'eux.",
  },
  B: {
    emoji: '2️⃣',
    label: "L'Analyste Paralysé",
    color: 'from-blue-500/20 to-cyan-700/10',
    accent: '#3b82f6',
    paragraphs: [
      "Vous avez une qualité très rare chez les entrepreneurs : vous analysez. Vous réfléchissez. Vous voulez comprendre avant d'agir.",
      "C'est une force.",
      "Mais parfois cette force devient un piège : l'excès d'analyse ralentit la décision.",
      "Pendant que vous analysez encore, d'autres passent à l'action.",
    ],
    bullets: [],
    conclusion: "Le problème n'est pas votre intelligence. Le problème est que la vitesse de décision détermine souvent la croissance.",
    result_label: "À retenir",
    result_body: "L'analyse est précieuse — la décision est indispensable.",
  },
  C: {
    emoji: '3️⃣',
    label: "L'Entrepreneur Épuisé",
    color: 'from-orange-500/20 to-red-700/10',
    accent: '#f97316',
    paragraphs: [
      "Vous êtes probablement le pilier de votre entreprise. Rien n'avance vraiment sans vous.",
      "Vous travaillez beaucoup. Parfois trop.",
      "Votre activité fonctionne… mais elle repose encore énormément sur votre énergie.",
    ],
    bullets: [],
    conclusion: "Le vrai passage au niveau supérieur arrive quand l'entreprise devient un système et plus seulement un effort personnel.",
    result_label: "Le risque",
    result_body: "Ce n'est pas l'échec — c'est l'épuisement entrepreneurial.",
  },
  D: {
    emoji: '4️⃣',
    label: 'Le Décideur Retardataire',
    color: 'from-emerald-500/20 to-teal-700/10',
    accent: '#10b981',
    paragraphs: [
      "Votre problème n'est pas l'intelligence. Ni les opportunités.",
      "Votre difficulté est ailleurs : certaines décisions importantes sont repoussées trop longtemps.",
    ],
    bullets: [
      "Investir",
      "Structurer",
      "Changer de stratégie",
      "Prendre une décision difficile",
    ],
    conclusion: "Les trajectoires entrepreneuriales changent souvent le jour où une décision difficile est enfin prise.",
    result_label: "Ce que cela crée",
    result_body: "Stagnation · Doute · Inertie",
  },
};

/* ─── Compute dominant profile ──────────────────────────────────── */
function computeProfile(answers: Record<number, string>): 'A' | 'B' | 'C' | 'D' {
  const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((v) => { if (v) counts[v]++; });
  return (Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]) as 'A' | 'B' | 'C' | 'D';
}

/* ─── LEFT PANEL (DESKTOP) ──────────────────────────────────────── */
function LeftPanel({ current, total, phase }: { current: number; total: number; phase: 'intro' | 'quiz' | 'result' }) {
  const answered = phase === 'intro' ? 0 : phase === 'result' ? total : current;

  // Image dynamique basée sur l'étape
  let imageSrc = "/conference/images/quiz/imageQuiz1.jpg";
  if (phase === 'intro') {
    imageSrc = "/conference/images/quiz/imageQuiz1.jpg";
  } else if (phase === 'quiz') {
    imageSrc = `/conference/images/quiz/female${current}.jpg`;
  } else if (phase === 'result') {
    imageSrc = "/conference/images/quiz/famale_result2.jpg";
  }

  return (
    <div className="relative hidden lg:block h-screen w-full overflow-hidden select-none bg-[#0a0a0f]">
      {/* Full-height image */}
      <Image
        key={imageSrc} // Force la mise à jour de l'image visuellement à chaque changement
        src={imageSrc}
        alt="Quiz illustration"
        fill
        className="object-cover object-center transition-opacity duration-500"
        priority
      />

      {/* Subtle dark overlay so the progress bar reads well */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Step pills — pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white text-lg font-light tracking-widest uppercase">
            {answered} / {total} répondus
          </span>
          <span className="text-white text-lg font-light">
            {phase === 'result' ? '✓ Complété' : `Étape ${answered + (phase === 'quiz' ? 0 : 0)}`}
          </span>
        </div>
        {/* Segmented step pills */}
        <div className="flex gap-1.5">
          {Array.from({ length: total }).map((_, i) => {
            const isDone = i < answered;
            const isCurrent = i === answered && phase === 'quiz';
            return (
              <div
                key={i}
                className="flex-1 h-1.5 rounded-full transition-all duration-500"
                style={{
                  background: isDone
                    ? 'white'
                    : isCurrent
                    ? 'rgba(207,171,74,0.45)'
                    : 'rgba(255,255,255,0.25)',
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
        <span className="text-[#cfab4a] text-base tracking-[0.25em] font-bold uppercase bebas-neue-regular">
          
        </span>
        <span className="text-white text-xs font-light tabular-nums">
          {answered} / {total}
        </span>
      </div>
      {/* Segmented step pills */}
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, i) => {
          const isDone = i < answered;
          const isCurrent = i === answered && phase === 'quiz';
          return (
            <div
              key={i}
              className="flex-1 rounded-full transition-all duration-500"
              style={{
                height: isCurrent ? '5px' : '3px',
                background: isDone
                  ? '#cfab4a'
                  : isCurrent
                  ? 'rgba(207,171,74,0.5)'
                  : 'rgba(255,255,255,0.15)',
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
  userData,
  setUserData,
}: {
  onStart: () => void;
  userData: { prenom: string; email: string; phone: string };
  setUserData: React.Dispatch<React.SetStateAction<{ prenom: string; email: string; phone: string }>>;
}) {
  const isFormValid =
    userData.prenom.trim() !== '' &&
    userData.email.trim() !== '' &&
    userData.phone.trim() !== '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col justify-center min-h-full px-5 py-8 md:px-8 md:py-10 lg:px-12 lg:py-14">
      {/* Badge */}
      <div className="inline-flex mb-6">
        <span className="px-3 py-1 rounded-full border border-[#cfab4a]/40 text-[#cfab4a] text-xs tracking-widest uppercase font-semibold">
          Quiz Stratégique
        </span>
      </div>

      <h1 className="playfair-display-regular text-3xl md:text-4xl xl:text-5xl text-[#0a0a0f] font-bold leading-tight mb-3 uppercase">
        Quel type d&apos;entrepreneur êtes-vous vraiment ?
      </h1>

      <p className="text-gray-500 text-sm md:text-base mb-6 font-light">
        En 2 minutes, découvrez le mécanisme invisible qui peut freiner votre croissance entrepreneuriale.
      </p>
      {/* Intro block */}
      <div className="mb-6 space-y-3">
        <p className="text-gray-700 font-medium text-sm">La majorité des entrepreneurs ne manquent pas :</p>
        <ul className="space-y-1.5 pl-2">
          {["d'idées", "d'intelligence", "d'opportunités"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cfab4a] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 text-sm leading-relaxed pt-2">
          Ils sont simplement bloqués par un <strong>mécanisme qu&apos;ils ne voient pas</strong>.
          Ce diagnostic rapide vous permettra d&apos;identifier votre profil entrepreneurial dominant.
        </p>
      </div>

      {/* LEAD CAPTURE FORM */}
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
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="+212 600 000 000"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm outline-none transition-all focus:border-[#cfab4a] focus:ring-1 focus:ring-[#cfab4a]"
            required
          />
        </div>
      </div>

      <button
        onClick={onStart}
        disabled={!isFormValid}
        className="w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase text-white transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          background: isFormValid ? 'linear-gradient(135deg, #cfab4a 0%, #b8922e 100%)' : '#d1d5db',
          boxShadow: isFormValid ? '0 8px 32px rgba(207,171,74,0.35)' : 'none',
        }}
      >
        Commencer le diagnostic →
      </button>
    </div>
  );
}

/* ─── QUESTION SCREEN ───────────────────────────────────────────── */
function QuestionScreen({
  question,
  questionIndex,
  totalQuestions,
  selectedKey,
  onSelect,
  onNext,
  onPrev,
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
      {/* Question counter pill */}
      <div className="inline-flex mb-5">
        <span className="px-3 py-1 rounded-full bg-[#cfab4a]/10 border border-[#cfab4a]/30 text-[#b8922e] text-xs tracking-wider font-semibold uppercase">
          Question {questionIndex + 1} sur {totalQuestions}
        </span>
      </div>

      {/* Question text */}
      <h2 className="playfair-display-regular text-2xl md:text-3xl xl:text-4xl font-bold text-[#0a0a0f] leading-snug mb-8">
        {question.text}
      </h2>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-[#cfab4a]/40 via-[#cfab4a]/20 to-transparent mb-8" />

      {/* Options */}
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
              {/* Key badge */}
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
              {/* Radio circle */}
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

      {/* Navigation */}
      <div className="flex items-center gap-3">
        {questionIndex > 0 && (
          <button
            onClick={onPrev}
            className="px-4 py-3 rounded-xl border border-gray-200 text-gray-500 text-sm hover:border-gray-300 hover:text-gray-700 transition-all"
          >
            ← Précédent
          </button>
        )}
        <button
          onClick={onNext}
          disabled={!selectedKey}
          className="flex-1 py-3.5 rounded-xl font-bold text-sm tracking-widest uppercase text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-95"
          style={{
            background: selectedKey
              ? 'linear-gradient(135deg, #cfab4a 0%, #b8922e 100%)'
              : '#d1d5db',
            boxShadow: selectedKey ? '0 6px 24px rgba(207,171,74,0.3)' : 'none',
          }}
        >
          {questionIndex === totalQuestions - 1 ? 'Voir mon résultat →' : 'Question suivante →'}
        </button>
      </div>
    </div>
  );
}

/* ─── RESULT SCREEN ─────────────────────────────────────────────── */
function ResultScreen({ profileKey, answers, onRestart }: { profileKey: 'A' | 'B' | 'C' | 'D'; answers: Record<number, string>; onRestart: () => void }) {
  const profile = profiles[profileKey];

  return (
    <div className="flex flex-col min-h-full px-5 py-8 md:px-8 md:py-10 lg:px-14 lg:py-14">
      {/* Badge */}
      <div className="inline-flex mb-6">
        <span className="px-3 py-1 rounded-full bg-[#cfab4a]/10 border border-[#cfab4a]/30 text-[#b8922e] text-xs tracking-wider font-semibold uppercase">
          Votre Profil
        </span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <h2 className="playfair-display-regular text-2xl md:text-3xl xl:text-4xl font-bold text-[#0a0a0f] leading-tight uppercase">
          {profile.label}
        </h2>
      </div>

      <div className="h-px bg-linear-to-r from-[#cfab4a]/40 via-[#cfab4a]/20 to-transparent mb-6" />

      {/* Profile paragraphs */}
      <div className="space-y-3 mb-6">
        {profile.paragraphs.map((p, i) => (
          <p key={i} className="text-gray-700 text-sm md:text-base leading-relaxed">{p}</p>
        ))}
      </div>

      {/* Bullets if any */}
      {profile.bullets.length > 0 && (
        <div className=" py-4 mb-0">
          <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-3">Les visionnaires créent souvent :</p>
          <ul className="space-y-2">
            {profile.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: profile.accent }} />
                {b}
              </li>
            ))}
          </ul>

          {profile.result_body && (
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">{profile.result_label}</p>
              <p className="text-gray-700 text-sm font-medium">{profile.result_body}</p>
            </div>
          )}
        </div>
      )}

      {/* Conclusion */}
      <div
        className="mb-0 border"
      >
        <p className="text-gray-800 text-sm md:text-base font-medium leading-relaxed italic">
          &ldquo;{profile.conclusion}&rdquo;
        </p>
      </div>

      {/* Transition phrase */}
      <div className=" text-black py-6 mb-4">
        <p className="text-gray-700 text-sm md:text-base leading-relaxed uppercase tracking-widest font-semibold mb-3">Quelle que soit votre profil</p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
          La croissance entrepreneuriale dépend rarement uniquement du travail.
          Elle dépend surtout :
        </p>
        <ul className="space-y-2 mb-6">
          {['des décisions', 'de la structure', 'du système que vous construisez'].map((item) => (
            <li key={item} className="flex items-center gap-2 text-[#cfab4a] text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cfab4a] shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* NOUVEAU TEXTE INVITATION CONFÉRENCE */}
        <p className="text-gray-800 font-medium text-sm md:text-base leading-relaxed italic">
          Si vous voulez aller plus loin, Nahed Rachad organise une conférence le <strong>10 mai à Casablanca</strong>.<br />
          Si vous voulez réserver une place Premium, cliquez ici :
        </p>
      </div>

      {/* CTA to conference */}
      <a
        href="/conference/liste-attente"
        className="block w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase text-white text-center transition-all hover:scale-[1.02] active:scale-95 mb-3"
        style={{
          background: 'linear-gradient(135deg, #cfab4a 0%, #b8922e 100%)',
          boxShadow: '0 8px 32px rgba(207,171,74,0.35)',
        }}
      >
        Je réserve ma place Premium
      </a>

      <button
        onClick={onRestart}
        className="w-full py-3 rounded-xl border border-gray-200 text-gray-500 text-sm hover:border-gray-300 hover:text-gray-700 transition-all"
      >
        Recommencer le quiz
      </button>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────── */
export default function QuizPage() {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [profileKey, setProfileKey] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  
  // Lead capture state
  const [userData, setUserData] = useState({ prenom: '', email: '', phone: '' });

  const currentQuestion = questions[currentIndex];
  const selectedKey = answers[currentQuestion?.id] ?? null;

  function handleStart() {
    setPhase('quiz');
    setCurrentIndex(0);
    setAnswers({});
    setProfileKey(null);
  }

  function handleSelect(key: string) {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: key }));
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      const result = computeProfile(answers);
      setProfileKey(result);
      setPhase('result');

      // Submit to Google Sheets (Quiz Web App)
      const SCRIPT_URL = process.env.NEXT_PUBLIC_APP_SCRIPT_URL;
      if (SCRIPT_URL) {
        try {
          const data = new URLSearchParams();
          data.append('formType', 'quiz');
          data.append('prenom', userData.prenom);
          data.append('email', userData.email);
          data.append('phone', userData.phone);
          data.append('profil', result);

          fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: data.toString(),
          });
        } catch (error) {
          console.error("Failed to submit quiz data:", error);
        }
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
    setProfileKey(null);
    setUserData({ prenom: '', email: '', phone: '' });
  }

  return (
    <>
      {/* ── MOBILE LAYOUT (< lg) ── */}
      <main className="lg:hidden min-h-screen bg-white flex flex-col">
        <MobileTopBar
          current={currentIndex + 1}
          total={questions.length}
          phase={phase}
        />
        <div className="flex-1 bg-white">
          {phase === 'intro' && <IntroScreen onStart={handleStart} userData={userData} setUserData={setUserData} />}
          {phase === 'quiz' && (
            <QuestionScreen
              question={currentQuestion}
              questionIndex={currentIndex}
              totalQuestions={questions.length}
              selectedKey={selectedKey}
              onSelect={handleSelect}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}
          {phase === 'result' && profileKey && (
            <ResultScreen
              profileKey={profileKey}
              answers={answers}
              onRestart={handleRestart}
            />
          )}
        </div>
      </main>

      {/* ── DESKTOP LAYOUT (lg+) ── */}
      <main className="hidden lg:flex h-screen w-screen overflow-hidden">
        {/* LEFT — dark panel 40% */}
        <div className="w-[40%] h-full shrink-0">
          <LeftPanel
            current={currentIndex + 1}
            total={questions.length}
            phase={phase}
          />
        </div>

        {/* RIGHT — light panel 60% */}
        <div className="w-[60%] h-full bg-white overflow-y-auto">
          {phase === 'intro' && <IntroScreen onStart={handleStart} userData={userData} setUserData={setUserData} />}
          {phase === 'quiz' && (
            <QuestionScreen
              question={currentQuestion}
              questionIndex={currentIndex}
              totalQuestions={questions.length}
              selectedKey={selectedKey}
              onSelect={handleSelect}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}
          {phase === 'result' && profileKey && (
            <ResultScreen
              profileKey={profileKey}
              answers={answers}
              onRestart={handleRestart}
            />
          )}
        </div>
      </main>
    </>
  );
}
