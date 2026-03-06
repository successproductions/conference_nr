'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: "A qui s'adresse cette conférence ?",
    a: "A celles et ceux qui refusent de répéter la même année financière.",
  },
  {
    q: "Est-ce une conférence d'investissement / trading ?",
    a: "Non. Ce n'est pas une conférence sur les outils. C'est une conférence sur le système intérieur qui décide.",
  },
  {
    q: 'Dois-je déjà "gagner beaucoup" ?',
    a: "Que vous gagniez 3 000 ou 30 000, si vos décisions restent les mêmes, votre plafond reste le même.",
  },
  {
    q: "Est-ce que ce sera confrontant ?",
    a: "Oui. Ce n'est pas une conférence confortable. C'est une conférence lucide.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="border border-white/10 rounded-sm overflow-hidden bg-white/2 backdrop-blur-sm transition-all"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left group"
          >
            <span className="font-light text-white text-base md:text-lg pr-4 group-hover:text-[#cfab4a] transition-colors">
              {faq.q}
            </span>
            <span
              className={`text-[#cfab4a] text-2xl font-light shrink-0 transition-transform duration-300 ${
                open === i ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-white leading-relaxed text-sm md:text-base border-t border-white/8 pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
