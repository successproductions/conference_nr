'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';

export default function ListeAttenteForm() {
  const [state, setState] = useState<'idle' | 'loading'>('idle');
  const [form, setForm] = useState({ prenom: '', email: '', telNumber: '', countryCode: '+212' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    try {
      await new Promise((r) => setTimeout(r, 900));
      // TODO: replace the line above with your real API call

      setState('idle');
      setForm({ prenom: '', email: '', telNumber: '', countryCode: form.countryCode });

      await Swal.fire({
        icon: 'success',
        title: 'Tu es sur la liste ! 🎉',
        text: 'Tu seras prévenue en priorité, avant l\'annonce officielle.',
        confirmButtonText: 'Super !',
        background: '#111118',
        color: '#ffffff',
        confirmButtonColor: '#ff8bcc',
        customClass: {
          popup: 'rounded-xl',
          title: 'text-white',
          confirmButton: 'font-bold tracking-wide rounded-full px-8',
        },
      });
    } catch {
      setState('idle');
      await Swal.fire({
        icon: 'error',
        title: 'Oups !',
        text: 'Une erreur est survenue. Réessaie dans quelques instants.',
        confirmButtonText: 'Réessayer',
        background: '#111118',
        color: '#ffffff',
        confirmButtonColor: '#d4a853',
        customClass: {
          popup: 'rounded-2xl',
          confirmButton: 'font-bold tracking-wide rounded-full px-8',
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      {/* Prénom */}
      <div className="group">
        <label
          htmlFor="prenom"
          className="block text-xs md:text-sm font-semibold tracking-widest uppercase text-white/40 mb-2"
        >
          Prénom
        </label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          required
          autoComplete="given-name"
          value={form.prenom}
          onChange={handleChange}
          placeholder="Ton prénom"
          className="w-full px-5 py-3.5 rounded-sm bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm outline-none transition-all focus:border-gold/60 focus:bg-white/8 focus:ring-2 focus:ring-gold/15"
        />
      </div>

      {/* Email */}
      <div className="group">
        <label
          htmlFor="email"
          className="block text-xs md:text-sm font-semibold tracking-widest uppercase text-white/40 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="ton@email.com"
          className="w-full px-5 py-3.5 rounded-sm bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm outline-none transition-all focus:border-gold/60 focus:bg-white/8 focus:ring-2 focus:ring-gold/15"
        />
      </div>

      {/* Téléphone */}
      <div className="group">
        <label
          htmlFor="telNumber"
          className="block text-xs md:text-sm font-semibold tracking-widest uppercase text-white/40 mb-2"
        >
          Téléphone
        </label>
        <div className="flex gap-2">
          {/* Country code selector */}
          <select
            id="countryCode"
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            className="shrink-0 w-28 px-3 py-3.5 rounded-sm bg-white/5 border border-white/10 text-white text-sm outline-none transition-all focus:border-gold/60 focus:ring-2 focus:ring-gold/15 appearance-none cursor-pointer"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.dial} className="bg-[#1a1a1f] text-white">
                {c.flag} {c.dial}
              </option>
            ))}
          </select>
          {/* Number input */}
          <input
            type="tel"
            id="telNumber"
            name="telNumber"
            required
            autoComplete="tel-national"
            value={form.telNumber}
            onChange={handleChange}
            placeholder="6 00 00 00 00"
            className="flex-1 min-w-0 px-5 py-3.5 rounded-sm bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm outline-none transition-all focus:border-gold/60 focus:bg-white/8 focus:ring-2 focus:ring-gold/15"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={state === 'loading'}
        id="liste-attente-submit"
        className="w-full mt-2 py-4 rounded-sm bg-[#ff8bcc] text-white font-semibold text-sm md:text-lg tracking-wide shadow-lg shadow-[#ff8bcc]/30 transition-all hover:scale-[1.02] hover:shadow-[#ff8bcc]/50 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'loading' ? 'Inscription en cours…' : 'Je veux accèder à la liste privée'}
      </button>

      <p className="text-center text-xs text-white pt-1">
        Aucune publicité. Aucun spam. Uniquement l’accès prioritaire à l’annonce.
      </p>
    </form>
  );
}

/* ─── Countries ─────────────────────────────────────────── */
const COUNTRIES: { flag: string; code: string; dial: string }[] = [
  { flag: '🇲🇦', code: 'MA', dial: '+212' },
  { flag: '🇫🇷', code: 'FR', dial: '+33' },
  { flag: '🇩🇿', code: 'DZ', dial: '+213' },
  { flag: '🇹🇳', code: 'TN', dial: '+216' },
  { flag: '🇧🇪', code: 'BE', dial: '+32' },
  { flag: '🇨🇭', code: 'CH', dial: '+41' },
  { flag: '🇨🇦', code: 'CA', dial: '+1' },
  { flag: '🇬🇧', code: 'GB', dial: '+44' },
  { flag: '🇩🇪', code: 'DE', dial: '+49' },
  { flag: '🇪🇸', code: 'ES', dial: '+34' },
  { flag: '🇮🇹', code: 'IT', dial: '+39' },
  { flag: '🇵🇹', code: 'PT', dial: '+351' },
  { flag: '🇸🇳', code: 'SN', dial: '+221' },
  { flag: '🇨🇮', code: 'CI', dial: '+225' },
  { flag: '🇺🇸', code: 'US', dial: '+1' },
  { flag: '🇦🇪', code: 'AE', dial: '+971' },
];
