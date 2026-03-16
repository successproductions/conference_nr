'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function PageAnimations() {
  useGSAP(() => {
    // Fade Up animations
    const fadeUpElements = gsap.utils.toArray('.gsap-fade-up');
    fadeUpElements.forEach((el: any) => {
      gsap.fromTo(el, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    });

    // Stagger containers
    const staggerContainers = gsap.utils.toArray('.gsap-stagger-container');
    staggerContainers.forEach((container: any) => {
      const items = container.querySelectorAll('.gsap-stagger-item');
      if (items.length > 0) {
        gsap.fromTo(items, 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
            }
          }
        );
      }
    });

    // Scale in elements (usually images)
    const scaleElements = gsap.utils.toArray('.gsap-scale-in');
    scaleElements.forEach((el: any) => {
      gsap.fromTo(el,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    });

  }, []);

  return null;
}
