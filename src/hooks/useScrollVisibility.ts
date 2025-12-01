// src/hooks/useScrollVisibility.ts
import { useState, useEffect } from 'react';

export const useScrollVisibility = (threshold: number) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  return isVisible;
};