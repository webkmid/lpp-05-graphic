// src/components/Footer.tsx
export const Footer = () => (
  <footer className="bg-[#0f172a] border-t border-white/5 py-12 mt-10">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h3 className="text-2xl font-bold text-white mb-2">Kolaboravis Studio</h3>
      <p className="text-gray-500 mb-8 text-sm">Gading Serpong, Tangerang • kolaboravis@gmail.com</p>
      
      <div className="flex justify-center gap-8 mb-8">
        <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:-translate-y-1 text-2xl"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:-translate-y-1 text-2xl"><i className="fab fa-youtube"></i></a>
        <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:-translate-y-1 text-2xl"><i className="fab fa-tiktok"></i></a>
        <a href="mailto:hello@kolaboravis.id" className="text-gray-400 hover:text-primary transition-colors transform hover:-translate-y-1 text-2xl"><i className="fas fa-envelope"></i></a>
      </div>
      
      <div className="border-t border-white/5 pt-8 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Kolaboravis Creative Studio. All Rights Reserved.</p>
        <p className="mt-2">Powered by <a href="#" className="text-gray-400 hover:text-white font-medium">WebKM</a></p>
      </div>
    </div>
  </footer>
);