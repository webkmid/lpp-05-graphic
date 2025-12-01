// src/components/Pricing.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const plans = [
  { name: 'Basic', desc: 'Perfect for small businesses starting out.', price: '500K', features: ['1 Landing Page', 'Template Premium', 'Basic SEO', 'Support Email'], cta: 'Get Started' },
  { name: 'Pro', desc: 'Ideal for growing businesses.', price: '800K', features: ['Full Custom Landing Page', 'Advanced SEO', 'Social Media Integration', 'Priority Support'], cta: 'Get Started', featured: true },
  { name: 'Enterprise', desc: 'For large-scale projects.', price: '3M', features: ['Website + Backend', 'E-commerce Features', 'Mobile App Integration', 'Dedicated Account Manager'], cta: 'Contact Sales' },
];

export const Pricing = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={sectionRef} id="pricing" className="py-28 bg-[#111827] text-center">
      <h2 className="text-4xl font-bold mb-4 gradient-text">Our Pricing</h2>
      <p className="text-gray-400 mb-16">Transparent pricing. No hidden fees.</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-left">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`relative bg-[#1e293b] p-8 rounded-2xl shadow-lg border transition-all duration-300 hover:-translate-y-2 
              ${plan.featured ? 'border-primary shadow-[0_0_30px_rgba(249,115,22,0.15)] scale-105 z-10' : 'border-white/5 hover:border-white/10'}`}
          >
            {plan.featured && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>}
            
            <h3 className="text-2xl font-semibold mb-2 text-white">{plan.name}</h3>
            <p className="text-gray-400 mb-6 text-sm">{plan.desc}</p>
            <div className="mb-6 pb-6 border-b border-white/10">
              <span className="text-4xl font-bold text-white">Rp {plan.price}</span>
              <span className="text-gray-500">/bulan</span>
            </div>
            <ul className="text-gray-300 mb-8 space-y-3">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-3">
                  <i className="fas fa-check text-green-500 text-sm"></i> <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className={`block text-center py-3 rounded-full font-semibold transition-all ${plan.featured ? 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90' : 'bg-white/10 text-white hover:bg-white/20'}`}>
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};