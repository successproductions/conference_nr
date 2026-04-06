'use client';

import { useState, useEffect } from 'react';

interface CTAButtonProps {
  href?: string;
  label?: string;
}

export default function CTAButton({ href = '#register', label }: CTAButtonProps) {
  const [displayLabel, setDisplayLabel] = useState('Réserver mon ticket');

  useEffect(() => {
    const labels = ['Réserver mon ticket', 'Je prends ma place', 'Réserver maintenant'];
    if (label) {
      setDisplayLabel(label);
    } else {
      setDisplayLabel(labels[Math.floor(Math.random() * labels.length)]);
    }
  }, [label]);

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#cfab4a] text-white
                 font-bold text-sm md:text-base tracking-widest uppercase
                 shadow-xl shadow-[#cfab4a]/30 hover:shadow-[#cfab4a]/50
                 hover:scale-[1.03] active:scale-95 transition-all"
    >
      👉 {displayLabel}
    </a>
  );
}
