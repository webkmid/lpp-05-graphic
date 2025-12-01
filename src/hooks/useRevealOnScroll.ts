// src/hooks/useRevealOnScroll.ts
import { useRef, useEffect } from 'react';

export const useRevealOnScroll = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set opacity awal ke 0 untuk menghindari flash
    element.style.opacity = '0';
    element.style.transform = 'translateY(12px)';
    element.style.transition = 'all 0.7s cubic-bezier(0.2, 0.9, 0.2, 1)';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'none';
          observer.unobserve(element); // Berhenti mengamati setelah animasi berjalan
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Muncul saat 10% elemen terlihat
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return ref;
};