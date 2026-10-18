import { useRef, useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import { profile, socials } from '@/data/portfolio';

const Scene3D = lazy(() => import('./Scene3D'));

const socialIcons: Record<string, typeof Github> = {
  Github, Linkedin, Instagram,
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqMobile = window.matchMedia('(max-width: 768px)');
    setReduced(mqReduce.matches);
    setIsMobile(mqMobile.matches);
    const updateReduce = () => setReduced(mqReduce.matches);
    const updateMobile = () => setIsMobile(mqMobile.matches);
    mqReduce.addEventListener('change', updateReduce);
    mqMobile.addEventListener('change', updateMobile);
    return () => {
      mqReduce.removeEventListener('change', updateReduce);
      mqMobile.removeEventListener('change', updateMobile);
    };
  }, []);

  useEffect(() => {
    if (reduced) return;
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [reduced]);

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        {!isMobile || !reduced ? (
          <Suspense fallback={null}>
            <Scene3D reduced={reduced || isMobile} />
          </Suspense>
        ) : null}
      </div>

      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-pulse-glow pointer-events-none"
        style={{ background: 'var(--theme-primary)', opacity: 0.05, transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-pulse-glow pointer-events-none"
        style={{ background: 'var(--theme-secondary)', opacity: 0.05, transform: `translate(${-mousePos.x * 20}px, ${-mousePos.y * 20}px)`, animationDelay: '1.5s' }}
      />

      {/* Readability overlay behind text */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ background: `radial-gradient(ellipse 70% 60% at 50% 50%, var(--theme-bg) 0%, rgba(0,0,0,0) 70%)` }}
      />

      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass text-sm mt-8"
          style={{ color: 'var(--theme-primary)' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--theme-primary)' }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--theme-primary)' }} />
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.05] tracking-tight"
          style={{ color: 'var(--theme-text)' }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-xl sm:text-2xl md:text-3xl font-light max-w-3xl mx-auto"
          style={{ color: 'var(--theme-text-secondary)' }}
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-3.5 text-sm font-semibold text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{ background: 'var(--theme-gradient)' }}
          >
            View Projects
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-3.5 text-sm font-semibold rounded-xl glass hover:scale-105 transition-all duration-300"
            style={{ color: 'var(--theme-text)' }}
          >
            Get in Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {socials.slice(0, 5).map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ color: 'var(--theme-primary)' }}
                aria-label={social.name}
              >
                {Icon && <Icon className="w-5 h-5" />}
              </a>
            );
          })}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-8 flex flex-col items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity mx-auto"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest text-muted">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown className="w-5 h-5" style={{ color: 'var(--theme-primary)' }} />
          </motion.div>
        </motion.button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[1]" style={{ background: `linear-gradient(to top, var(--theme-bg), transparent)` }} />
    </section>
  );
}
