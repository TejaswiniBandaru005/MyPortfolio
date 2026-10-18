import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl glass text-sm font-medium transition-all hover:scale-105"
        style={{ color: 'var(--theme-text)' }}
        aria-label="Change theme"
      >
        <Palette className="w-4 h-4" style={{ color: 'var(--theme-primary)' }} />
        <span className="hidden sm:block">{theme.name}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 z-[80] p-4 rounded-2xl glass shadow-xl"
            style={{ minWidth: 220 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted font-medium mb-3">
              Color Palette
            </p>
            <div className="grid grid-cols-3 gap-3">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  className="flex flex-col items-center gap-1.5 group"
                  aria-label={t.name}
                >
                  <div
                    className={`theme-btn ${theme.id === t.id ? 'active' : ''}`}
                    style={{
                      background: `linear-gradient(135deg, ${t.primary} 0%, ${t.secondary} 100%)`,
                    }}
                  >
                    {theme.id === t.id && (
                      <Check className="absolute inset-0 m-auto w-4 h-4 text-white" />
                    )}
                  </div>
                  <span className="text-[10px] text-center text-muted group-hover:text-primary transition-colors leading-tight">
                    {t.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
