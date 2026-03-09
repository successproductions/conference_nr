'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';

// We can reuse the same countries list from the other forms
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

export default function RegisterForm() {
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telNumber: '',
    countryCode: '+212',
  });

  // Unique Env Var for this specific form
  const SCRIPT_URL = process.env.NEXT_PUBLIC_INSCRIPTION_SCRIPT_URL || '';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!SCRIPT_URL) {
      console.error('NEXT_PUBLIC_INSCRIPTION_SCRIPT_URL is not set');
      setStatus('idle');
      return;
    }

    setStatus('loading');
    try {
      const fullPhone = `${form.countryCode} ${form.telNumber}`;
      
      const data = new URLSearchParams();
      data.append('prenom', form.prenom);
      data.append('nom',    form.nom);
      data.append('email',  form.email);
      data.append('phone',  fullPhone);
      data.append('optin',  consent ? 'Oui' : 'Non');

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
        title: 'Inscription réussie ! 🎁',
        html: `<p style="color:#ffffff99">Merci <strong style="color:#cfab4a">${form.prenom}</strong>, ton inscription est bien prise en compte.</p>`,
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
        confirmButtonColor: '#cfab4a',
        customClass: {
          popup:         'rounded-2xl',
          confirmButton: 'font-bold tracking-wide rounded-sm px-8',
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg mx-auto p-6 md:p-8">

      {/* ── Name row ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="reg-prenom" className="block text-xs font-semibold tracking-widest uppercase text-white mb-2">
            Prénom
          </label>
          <input
            type="text" id="reg-prenom" name="prenom" required
            autoComplete="given-name"
            value={form.prenom} onChange={handleChange}
            placeholder="Ton prénom"
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="reg-nom" className="block text-xs font-semibold tracking-widest uppercase text-white mb-2">
            Nom
          </label>
          <input
            type="text" id="reg-nom" name="nom" required
            autoComplete="family-name"
            value={form.nom} onChange={handleChange}
            placeholder="Ton nom"
            className={INPUT_CLASS}
          />
        </div>
      </div>

      {/* ── Email ── */}
      <div>
        <label htmlFor="reg-email" className="block text-xs font-semibold tracking-widest uppercase text-white mb-2">
          Email
        </label>
        <input
          type="email" id="reg-email" name="email" required
          autoComplete="email"
          value={form.email} onChange={handleChange}
          placeholder="ton@email.com"
          className={INPUT_CLASS}
        />
      </div>

      {/* ── Phone ── */}
      <div>
        <label htmlFor="reg-tel" className="block text-xs font-semibold tracking-widest uppercase text-white mb-2">
          Téléphone
        </label>
        <div className="flex gap-2">
          <select
            id="reg-countryCode" name="countryCode"
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
            type="tel" id="reg-tel" name="telNumber" required
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
            type="checkbox" id="reg-consent" required
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
        <div className="flex flex-col gap-1">
          <span className="text-xs text-white leading-relaxed group-hover/consent:text-white/70 transition-colors">
            J'accepte de recevoir ce cadeau et je m'inscris à la newsletter de Nahed Rachad pour recevoir d'autres exclusivités.
          </span>
          <span className="text-[10px] text-white/40 leading-snug">
            C'est grâce à ton accord que nous pouvons t'envoyer tes cadeaux par email (selon la politique RGPD). Tu pourras te désinscrire à tout moment.
          </span>
        </div>
      </label>

      {/* ── Submit ── */}
      <button
        type="submit"
        id="register-form-submit"
        disabled={status === 'loading'}
        className="w-full py-4 rounded-sm bg-[#cfab4a] text-white font-bold text-sm md:text-base tracking-widest uppercase
                   shadow-xl shadow-[#cfab4a]/30 transition-all hover:scale-[1.02] hover:shadow-[#cfab4a]/50
                   active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Envoi en cours…' : '🎁 JE VEUX MON CADEAU'}
      </button>

    </form>
  );
}
