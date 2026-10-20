import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-silver-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
