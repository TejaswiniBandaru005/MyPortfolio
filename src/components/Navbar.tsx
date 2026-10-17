import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Coding', href: '#coding' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Others', href: '#others' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-black/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="flex items-center gap-2 group"
            >
              <div
                className="relative w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'var(--theme-gradient)' }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-lg font-bold hidden sm:block" style={{ color: 'var(--theme-text)' }}>
                Tejaswini<span className="gradient-text">.dev</span>
              </span>
            </a>

            {/* Desktop nav — horizontal scrollable */}
            <div className="hidden lg:flex items-center gap-0.5 max-w-xl overflow-x-auto no-scrollbar">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-300 whitespace-nowrap ${
                      isActive ? 'text-primary' : 'text-muted hover:text-primary'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navActive"
                        className="absolute inset-0 rounded-lg opacity-10"
                        style={{ background: 'var(--theme-primary)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden lg:block">
                <ThemeSwitcher />
              </div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2"
                style={{ color: 'var(--theme-text)' }}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden glass flex flex-col items-center justify-center gap-3 pt-20"
          >
            <div className="mb-4">
              <ThemeSwitcher />
            </div>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
                className="text-xl font-display font-semibold hover:text-primary transition-colors"
                style={{ color: 'var(--theme-text)' }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
