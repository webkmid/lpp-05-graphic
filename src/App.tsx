// src/App.tsx
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Clients } from './components/Clients';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { UIOverlay } from './components/UIOverlay';

function App() {
  return (
    <div className="antialiased selection:bg-primary selection:text-white">
      <UIOverlay />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Clients />
        <Testimonials />
        <Pricing />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;