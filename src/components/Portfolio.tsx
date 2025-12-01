// src/components/Portfolio.tsx
import { useState } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

interface PortfolioItem {
  id: number;
  category: 'photo' | 'video' | 'design';
  title: string;
  image: string;
}

const portfolioData: PortfolioItem[] = [
  { id: 1, category: 'photo', title: 'Product Campaign', image: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=600' },
  { id: 2, category: 'video', title: 'Fitness Brand Video', image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600' },
  { id: 3, category: 'design', title: 'Packaging Design', image: 'https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?q=80&w=600' },
  { id: 4, category: 'photo', title: 'Editorial Shoot', image: 'https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=600' },
  { id: 5, category: 'video', title: 'Commercial Ad', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600' },
  { id: 6, category: 'design', title: 'Logo Concept', image: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=600' },
];

// Lightbox Component
const Lightbox = ({ item, onClose, onNext, onPrev }: { item: PortfolioItem; onClose: () => void; onNext: () => void; onPrev: () => void; }) => (
  <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-up" onClick={onClose}>
    <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="absolute top-6 right-6 text-white text-4xl hover:text-primary transition">&times;</button>
    <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 md:left-8 text-white/50 hover:text-white text-4xl md:text-6xl transition"><i className="fas fa-chevron-left"></i></button>
    <img src={item.image} alt={item.title} className="max-w-full max-h-[85vh] rounded-lg shadow-[0_0_50px_rgba(37,99,235,0.3)] border-2 border-secondary object-contain" onClick={(e) => e.stopPropagation()}/>
    <div className="absolute bottom-6 text-white text-xl font-bold bg-black/50 px-4 py-2 rounded-full">{item.title}</div>
    <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 md:right-8 text-white/50 hover:text-white text-4xl md:text-6xl transition"><i className="fas fa-chevron-right"></i></button>
  </div>
);

export const Portfolio = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  const [filter, setFilter] = useState<'all' | 'photo' | 'video' | 'design'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === 'all' ? portfolioData : portfolioData.filter(item => item.category === filter);
  
  // Handlers for lightbox navigation based on the *filtered* list logic if needed, 
  // but usually lightbox navigates through all items or currently visible ones.
  // Let's navigate through ALL items for simplicity in this demo.
  const handleNext = () => setLightboxIndex(prev => (prev === null ? null : (prev + 1) % portfolioData.length));
  const handlePrev = () => setLightboxIndex(prev => (prev === null ? null : (prev - 1 + portfolioData.length) % portfolioData.length));

  return (
    <section ref={sectionRef} id="portfolio" className="py-28 bg-[#0f172a] text-center">
      <h2 className="text-4xl font-bold mb-6 gradient-text">Our Portfolio</h2>
      <p className="text-gray-400 mb-10 max-w-2xl mx-auto">A showcase of our creative collaborations across photography, video, and design.</p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap px-4">
        {['all', 'photo', 'video', 'design'].map((cat) => (
          <button 
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 capitalize
              ${filter === cat 
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105' 
                : 'bg-[#1e293b] text-gray-400 hover:bg-[#334155] hover:text-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {filteredItems.map((item, originalIndex) => (
          <div 
            key={item.id} 
            onClick={() => setLightboxIndex(item.id - 1)} // Assuming IDs match index+1 for simplicity here
            className="group relative overflow-hidden rounded-2xl cursor-pointer border border-white/5"
          >
            <img src={item.image} alt={item.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-xl">{item.title}</p>
                <p className="text-primary text-sm uppercase tracking-wider mt-1">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox 
          item={portfolioData[lightboxIndex]} 
          onClose={() => setLightboxIndex(null)} 
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};