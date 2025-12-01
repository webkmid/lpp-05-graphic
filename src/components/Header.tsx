// src/components/Header.tsx
import { useState } from 'react';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#clients", label: "Clients" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 w-full bg-[#0f172a]/90 backdrop-blur-md z-50 shadow-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white tracking-tight">Kolaboravis</h1>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wide">{link.label}</a>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 hover:scale-105 transition-all shadow-lg">Let's Talk</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0f172a] border-t border-white/10 shadow-xl flex flex-col p-4 space-y-4 animate-fade-in-up">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="block text-gray-300 hover:text-primary py-2 border-b border-white/5">{link.label}</a>
          ))}
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="block text-center px-5 py-3 rounded-lg font-bold bg-gradient-to-r from-primary to-secondary text-white mt-4">Let's Talk</a>
        </div>
      )}
    </header>
  );
};