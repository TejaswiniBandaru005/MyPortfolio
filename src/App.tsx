import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import CodingProfiles from '@/components/CodingProfiles';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Others from '@/components/Others';
import Contact from '@/components/Contact';
import { ThemeProvider } from '@/contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <div className="noise-overlay" />
        <ScrollProgress />
        <Navbar />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Certifications />
          <CodingProfiles />
          <Education />
          <Experience />
          <Others />
          <Contact />
        </motion.main>
      </div>
    </ThemeProvider>
  );
}

export default App;
