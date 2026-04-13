'use client';

import { useState, useEffect, useCallback } from 'react';
// import { X } from 'lucide-react';


const notifications = [
  { name: 'Lamia ', location: 'Casablanca, Maroc' },
  { name: 'Khadija ', location: 'Rabat, Maroc' },
  { name: 'Meryem ', location: 'Paris, France' },
  { name: 'Sofia ', location: 'Marrakech, Maroc' },
  { name: 'Chems ', location: 'Lyon, France' },
  { name: 'Meryem ', location: 'Bruxelles, Belgique' },
];

export default function NotificationWidget() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  const cycleNotification = useCallback(() => {
    if (closed) return;

    // Show
    setVisible(true);

    // Hide after 4 seconds
    const hideTimeout = setTimeout(() => {
      setVisible(false);
      
      // Wait 3 seconds before showing the next one
      const nextTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % notifications.length);
      }, 3000);

      return () => clearTimeout(nextTimeout);
    }, 4000);

    return () => clearTimeout(hideTimeout);
  }, [closed]);

  useEffect(() => {
    // Initial delay before first show
    const initialTimeout = setTimeout(() => {
      cycleNotification();
    }, 2000);

    return () => clearTimeout(initialTimeout);
  }, [index, cycleNotification]);

  if (closed) return null;

  const current = notifications[index];

  return (
    <div
      className={`fixed z-[100] transition-all duration-700 ease-out 
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}
        bottom-0 left-0 w-full md:bottom-6 md:left-6 md:w-[350px] md:max-w-[400px]
      `}
    >
      <div className="relative bg-white p-3 md:py-2 md:px-4 rounded-none md:rounded-lg shadow-[0_-5px_20px_rgba(0,0,0,0.1)] md:shadow-[0_10px_40px_rgba(0,0,0,0.15)] border-t md:border border-black/5 overflow-hidden">



        {/* Close button */}
        <button 
          onClick={() => {
            setVisible(false);
            setClosed(true);
          }}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>


        <div className="space-y-1 text-left">
          <p className="font-bold text-[15px] md:text-base leading-snug">
            <span className="text-[#cfab4a]">{current.name}</span>{' '}
          </p>
          <p className="text-gray-900 text-[14px] md:text-[15px] leading-relaxed">
            a réservé sa place pour la conférence <span className="font-extrabold">Money Reset.</span>
          </p>
          <a 
            href="#register" 
            className="inline-flex items-center gap-1.5 text-[#cfab4a] font-bold text-sm mt-2 hover:underline tracking-tight"
          >
            Cliquez ici <span className="text-lg leading-none mt-[-2px]">›</span>
          </a>
        </div>
      </div>
    </div>
  );
}
