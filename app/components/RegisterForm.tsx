'use client';

import { useState } from 'react';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your API / email list
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="mt-2 text-sm font-semibold text-gold animate-pulse">
        ✓ You're on the list — we'll be in touch!
      </p>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={handleSubmit}
      aria-label="Registration interest form"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        id="register-email"
        className="flex-1 px-5 py-3 rounded-full bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
      />
      <button
        type="submit"
        id="register-submit"
        className="px-7 py-3 rounded-full bg-gold text-[#0a0a0f] font-bold text-sm tracking-wide shadow-lg shadow-gold/30 transition-all hover:scale-105 hover:shadow-gold/50 active:scale-95 whitespace-nowrap"
      >
        Notify Me
      </button>
    </form>
  );
}
