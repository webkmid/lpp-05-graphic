// src/components/Contact.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export const Contact = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={sectionRef} id="contact" className="py-28 bg-[#121a2a] text-center">
      <h2 className="text-4xl font-bold mb-6 gradient-text">Let’s Collaborate</h2>
      <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
        Ready to bring your next project to life? Let’s make something amazing together.
      </p>
      
      <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" 
         className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:scale-105 transition-transform mb-12">
        <i className="fab fa-whatsapp text-xl"></i> Start a Project
      </a>

      <div className="max-w-4xl mx-auto px-6">
        <form className="grid md:grid-cols-2 gap-6 bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-white/5" onSubmit={e => e.preventDefault()}>
          <div className="space-y-6">
            <input type="text" placeholder="Nama Lengkap" className="w-full bg-[#0f172a] p-4 rounded-lg text-white border border-white/10 focus:border-primary focus:outline-none transition-colors" required />
            <input type="email" placeholder="Email" className="w-full bg-[#0f172a] p-4 rounded-lg text-white border border-white/10 focus:border-primary focus:outline-none transition-colors" required />
          </div>
          <textarea placeholder="Pesan Anda" rows={4} className="w-full bg-[#0f172a] p-4 rounded-lg text-white border border-white/10 focus:border-primary focus:outline-none transition-colors h-full min-h-[150px]" required></textarea>
          <div className="md:col-span-2 text-right">
            <button type="submit" className="px-8 py-3 rounded-lg font-bold bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all shadow-lg w-full md:w-auto">
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-20">
        <div className="bg-[#1e293b] p-2 rounded-xl border border-white/5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.28318727286!2d106.75626359253573!3d-6.229571216174751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1647833928123!5m2!1sen!2sid" width="100%" height="300" style={{ border: 0, borderRadius: '0.5rem' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};