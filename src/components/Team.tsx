// src/components/Team.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const team = [
  { name: 'Ahmad', role: 'Lead Designer', img: 'https://avatar.iran.liara.run/public/15' },
  { name: 'Siti', role: 'Frontend Developer', img: 'https://avatar.iran.liara.run/public/65' },
  { name: 'Budi', role: 'Project Manager', img: 'https://avatar.iran.liara.run/public/34' },
];

export const Team = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={sectionRef} id="team" className="py-28 bg-[#111827] text-center">
      <h2 className="text-4xl font-bold mb-4 gradient-text">Meet Our Team</h2>
      <p className="text-gray-400 mb-16">The creative minds behind your success.</p>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto px-6">
        {team.map((member) => (
          <div key={member.name} className="bg-[#1e293b] p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors duration-300 group">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#0f172a] shadow-lg group-hover:scale-110 transition-transform duration-300">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-primary text-sm font-medium">{member.role}</p>
            
            {/* Social Icons Placeholder */}
            <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};