import { ThemeProvider } from './hooks/useTheme';
import ParticleBackground from './components/ui/ParticleBackground';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark-300 text-white overflow-hidden">
        <ParticleBackground />
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;