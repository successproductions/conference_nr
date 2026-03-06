'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';

type Category = 'Balcon' | 'Standard' | 'VIP';

const CATEGORIES: { label: Category; price: string; }[] = [
  { label: 'Balcon',   price: '390 MAD' },
  { label: 'Standard', price: '470 MAD' },
  { label: 'VIP',      price: '750 MAD' }
];

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

const INPUT_CLASS =
  'w-full px-5 py-3.5 rounded-sm bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm outline-none transition-all focus:border-[#cfab4a]/60 focus:bg-white/8 focus:ring-2 focus:ring-[#cfab4a]/15';

export default function ConferenceForm() {
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');
  const [category, setCategory] = useState<Category>('Standard');
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telNumber: '',
    countryCode: '+212',
  });

  const SCRIPT_URL = process.env.NEXT_PUBLIC_CONFERENCE_SCRIPT_URL || '';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!SCRIPT_URL) {
      console.error('NEXT_PUBLIC_CONFERENCE_SCRIPT_URL is not set');
      return;
    }

    setStatus('loading');
    try {
      const fullPhone = `${form.countryCode} ${form.telNumber}`;
      const data = new URLSearchParams();
      data.append('prenom',   form.prenom);
      data.append('nom',      form.nom);
      data.append('email',    form.email);
      data.append('phone',    fullPhone);
      data.append('categorie', category);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });

      setStatus('idle');
      setForm({ prenom: '', nom: '', email: '', telNumber: '', countryCode: form.countryCode });
      setConsent(false);

      await Swal.fire({
        icon: 'success',
        title: 'Place réservée ! 🎉',
        html: `<p style="color:#ffffff99">Catégorie <strong style="color:#cfab4a">${category}</strong> — vous recevrez la confirmation par email.</p>`,
        confirmButtonText: 'Parfait !',
        background: '#111118',
        color: '#ffffff',
        confirmButtonColor: '#cfab4a',
        customClass: {
          popup:         'rounded-xl',
          confirmButton: 'font-bold tracking-wide rounded-sm px-8',
        },
      });
    } catch {
      setStatus('idle');
      await Swal.fire({
        icon: 'error',
        title: 'Oups !',
        text: 'Une erreur est survenue. Réessaie dans quelques instants.',
        confirmButtonText: 'Réessayer',
        background: '#111118',
        color: '#ffffff',
        confirmButtonColor: '#d4a853',
        customClass: {
          popup:         'rounded-2xl',
          confirmButton: 'font-bold tracking-wide rounded-sm px-8',
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg mx-auto">

      {/* ── Category picker ── */}
      <div>
        <p className="block text-xs font-semibold tracking-widest uppercase text-white mb-3">
          Catégorie
        </p>
        <div className="grid grid-cols-3 gap-3">
          {CATEGORIES.map(({ label, price,   }) => {
            const active = category === label;
            const isVip  = label === 'VIP';
            return (
              <button
                key={label}
                type="button"
                onClick={() => setCategory(label)}
                className={`flex flex-col items-center gap-1 py-4 px-2 rounded-sm border text-center transition-all
                  ${active
                    ? isVip
                      ? 'border-gold bg-gold/10 shadow-lg shadow-gold/15'
                      : 'border-[#cfab4a] bg-[#cfab4a]/10'
                    : 'border-white/10 bg-white/3 hover:border-white/30'
                  }`}
              >
                <span className={`text-xs font-bold tracking-widest uppercase ${active ? (isVip ? 'text-gold' : 'text-[#cfab4a]') : 'text-white/50'}`}>
                  {label}
                </span>
                <span className={`bebas-neue-regular text-2xl leading-none ${active ? 'text-white' : 'text-white'}`}>
                  {price.split(' ')[0]}
                </span>
               
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Name row ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="conf-prenom" className="block text-xs font-semibold tracking-widest uppercase text-white mb-2">
            Prénom
          </label>
          <input
            type="text" id="conf-prenom" name="prenom" required
            autoComplete="given-name"
            value={form.prenom} onChange={handleChange}
            placeholder="Votre prénom"
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="conf-nom" className="block text-xs font-semibold tracking-widest uppercase text-white mb-2">
            Nom
          </label>
          <input
            type="text" id="conf-nom" name="nom" required
            autoComplete="family-name"
            value={form.nom} onChange={handleChange}
            placeholder="Votre nom"
            className={INPUT_CLASS}
          />
        </div>
      </div>

      {/* ── Email ── */}
      <div>
        <label htmlFor="conf-email" className="block text-xs font-semibold tracking-widest uppercase text-white mb-2">
          Email
        </label>
        <input
          type="email" id="conf-email" name="email" required
          autoComplete="email"
          value={form.email} onChange={handleChange}
          placeholder="votre@email.com"
          className={INPUT_CLASS}
        />
      </div>

      {/* ── Phone ── */}
      <div>
        <label htmlFor="conf-tel" className="block text-xs font-semibold tracking-widest uppercase text-white mb-2">
          Téléphone
        </label>
        <div className="flex gap-2">
          <select
            id="conf-countryCode" name="countryCode"
            value={form.countryCode} onChange={handleChange}
            className="shrink-0 w-28 px-3 py-3.5 rounded-sm bg-white/5 border border-white/10 text-white text-sm outline-none transition-all focus:border-[#cfab4a]/60 focus:ring-2 focus:ring-[#cfab4a]/15 appearance-none cursor-pointer"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.dial} className="bg-[#1a1a1f] text-white">
                {c.flag} {c.dial}
              </option>
            ))}
          </select>
          <input
            type="tel" id="conf-tel" name="telNumber" required
            autoComplete="tel-national"
            value={form.telNumber} onChange={handleChange}
            placeholder="6 00 00 00 00"
            className={`${INPUT_CLASS} flex-1 min-w-0`}
          />
        </div>
      </div>

      {/* ── Consent ── */}
      <label className="flex items-start gap-3 cursor-pointer group/consent">
        <div className="relative mt-0.5 shrink-0">
          <input
            type="checkbox" id="conf-consent" required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-5 h-5 rounded-sm border border-white/20 bg-white/5 transition-all
                          peer-checked:bg-[#cfab4a] peer-checked:border-[#cfab4a]
                          group-hover/consent:border-[#cfab4a]/60 flex items-center justify-center">
            {consent && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-xs text-white leading-relaxed group-hover/consent:text-white/70 transition-colors">
          J&apos;accepte que mes données personnelles soient utilisées pour la gestion de ma réservation.
        </span>
      </label>

      {/* ── Submit ── */}
      <button
        type="submit"
        id="conference-form-submit"
        disabled={status === 'loading'}
        className="w-full py-4 rounded-sm bg-[#cfab4a] text-white font-bold text-sm md:text-base tracking-widest uppercase
                   shadow-xl shadow-[#cfab4a]/30 transition-all hover:scale-[1.02] hover:shadow-[#cfab4a]/50
                   active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Inscription en cours…' : '👉 JE RÉSERVE MA PLACE'}
      </button>
    </form>
  );
}
