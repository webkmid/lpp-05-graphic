// src/components/Testimonials.tsx
import { useState, useEffect } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const testimonials = [
  { quote: "Kolaboravis tidak hanya membuat website, mereka memahami visi kami dan membantu mewujudkannya dengan desain yang menakjubkan.", author: "Budi Santoso", role: "CEO Toko Online" },
  { quote: "Video promosi yang mereka buat benar-benar meningkatkan penjualan kami. Tim mereka sangat profesional dan responsif.", author: "Siti Rahayu", role: "Pemilik Salon" },
  { quote: "Desain branding kami sekarang terlihat modern dan profesional. Kami sangat puas dengan hasil kerja Kolaboravis.", author: "Andi Pratama", role: "Founder Startup" },
];

export const Testimonials = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="py-28 bg-[#0f172a] text-center">
      <h2 className="text-4xl font-bold mb-6 gradient-text">What Our Clients Say</h2>
      <p className="text-gray-400 mb-16">Don't just take our word for it — hear from the brands we've helped grow.</p>

      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#1e293b] p-8 md:p-12 rounded-2xl shadow-xl border border-white/5 relative overflow-hidden">
          {/* Quote Icon Background */}
          <div className="absolute top-4 left-6 text-6xl text-white/5 font-serif">“</div>
          
          <div className="relative z-10 min-h-[180px] flex items-center justify-center">
            {testimonials.map((testi, index) => (
              <div 
                key={index} 
                className={`absolute w-full transition-all duration-500 ease-in-out transform
                  ${index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}
              >
                <p className="text-gray-300 text-lg md:text-xl italic mb-6 leading-relaxed">"{testi.quote}"</p>
                <div>
                  <h4 className="text-white font-bold text-lg">{testi.author}</h4>
                  <span className="text-primary text-sm">{testi.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary w-8' : 'bg-gray-600 hover:bg-gray-500'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};