// src/components/Clients.tsx
const clients = [
  { name: 'Tokopedia', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Tokopedia.svg', h: 'h-12' },
  { name: 'Shopee', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopee_logo.svg', h: 'h-12' },
  { name: 'Grab', img: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Grab_Logo.svg', h: 'h-10' },
  { name: 'GoTo', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/GoTo_logo.png', h: 'h-10' },
  { name: 'Gojek', img: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Gojek_logo_2019.svg', h: 'h-8' },
];

export const Clients = () => {
  return (
    <section id="clients" className="relative py-32 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-center overflow-hidden">
      {/* Radial Decoration */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,transparent_70%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Trusted By</h2>
        <p className="text-gray-400 mb-14 text-lg max-w-2xl mx-auto">We’ve collaborated with visionary brands that trust our creative touch.</p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {clients.map((client) => (
            <img 
              key={client.name} 
              src={client.img} 
              alt={client.name} 
              className={`${client.h} md:h-14 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-out`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};