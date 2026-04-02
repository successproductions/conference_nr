'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: "À qui s'adresse cette conférence ?",
    a: "À celles et ceux qui sentent qu'ils pourraient faire beaucoup plus…\n\nmais qui n'arrivent pas à passer un cap.\n\nCe n'est pas une question de niveau.\n\nC'est une question de fonctionnement.\n\nQue vous soyez entrepreneur, salarié ou en transition,\nsi vous avez déjà essayé sans obtenir les résultats que vous voulez vraiment,\n\nvous êtes concerné.",
  },
  {
    q: "Est-ce une conférence d'investissement ou de trading ?",
    a: "Non.\n\nVous pouvez apprendre toutes les stratégies du monde,\nsi ce qui pilote vos décisions ne change pas,\nvos résultats ne changeront pas non plus.\n\nCette conférence agit à la racine.\n\nC'est ce qui vous permet ensuite\nd'appliquer réellement ce que vous savez déjà.",
  },
  {
    q: "Est-ce que ça va vraiment changer quelque chose pour moi ?",
    a: "Oui.\n\nParce que le problème n'est pas ce que vous faites.\n\nC'est ce qui vous fait refaire toujours la même chose.\n\nTant que ça ne change pas,\nles résultats ne changent pas non plus.\n\nEt c'est précisément ce qui est traité ici.",
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
            <span className="font-light text-white text-lg md:text-xl pr-4 group-hover:text-[#cfab4a] transition-colors">
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
