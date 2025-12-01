// src/components/UIOverlay.tsx
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useScrollVisibility } from '../hooks/useScrollVisibility';

export const UIOverlay = () => {
  const scrollProgress = useScrollProgress();
  const showBackToTop = useScrollVisibility(300);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 w-12 h-12 bg-gray-700/80 text-white rounded-full flex items-center justify-center z-40 transition-all duration-300 hover:bg-primary backdrop-blur-sm
          ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* Live Chat Widget */}
      <a 
        href="https://wa.me/6281234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center z-50 shadow-[0_0_20px_rgba(249,115,22,0.5)] animate-bounce hover:animate-none hover:scale-110 transition-transform"
      >
        <i className="fas fa-comment-dots text-2xl"></i>
      </a>
    </>
  );
};