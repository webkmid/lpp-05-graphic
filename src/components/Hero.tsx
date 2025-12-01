// src/components/Hero.tsx
export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
        <source src="https://cdn.coverr.co/videos/coverr-woman-adjusting-camera-6638/720p.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 gradient-text leading-tight drop-shadow-lg">
          Photography. Videography. Branding.
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          We tell stories through motion, light, and design — helping brands inspire their audience and create lasting impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a href="#portfolio" className="px-8 py-3.5 rounded-full font-bold bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)]">
            View Our Works
          </a>
          <a href="#services" className="px-8 py-3.5 rounded-full font-bold border border-primary text-primary hover:bg-primary hover:text-white transition-all hover:scale-105">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};