// src/components/Services.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const servicesData = [
  { icon: 'fa-camera', title: 'Photography', desc: 'Capturing brand identity through stunning product and lifestyle imagery.' },
  { icon: 'fa-video', title: 'Videography', desc: 'Storytelling in motion — crafting cinematic videos that connect emotionally.' },
  { icon: 'fa-palette', title: 'Branding & Design', desc: 'Building brand presence through identity systems, packaging, and visuals.' },
];

export const Services = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-[#111827] text-center">
      <h2 className="text-4xl font-bold mb-4 gradient-text">Our Expertise</h2>
      <p className="text-gray-400 mb-16 max-w-2xl mx-auto">Bringing brands to life through creativity, precision, and passion.</p>
      
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 text-left">
        {servicesData.map((service, idx) => (
          <div key={idx} className="group relative bg-[#1e293b] p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-pulse-border border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <i className={`fa-solid ${service.icon} text-primary text-5xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}></i>
            <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>
            <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-white transition-colors group-hover:translate-x-2 duration-300">
              Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};