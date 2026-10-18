import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Atom, Globe, Box, Server, Database, Terminal, Cloud,
  Share2, Palette, Sparkles, Zap, type LucideIcon,
} from 'lucide-react';
import { skills, techTicker } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

const iconMap: Record<string, LucideIcon> = {
  Code2, Atom, Globe, Box, Server, Database, Terminal, Cloud,
  Share2, Palette, Sparkles, Zap,
};

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'DevOps', '3D & Graphics', 'Animation'];

function SkillRing({ name, level, icon, index }: { name: string; level: number; icon: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = iconMap[icon] || Code2;
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, type: 'spring', stiffness: 200 }}
      className="flex flex-col items-center gap-3 p-4"
    >
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="var(--theme-border)"
            strokeWidth="6"
          />
          <motion.circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="var(--theme-primary)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.2, delay: (index % 4) * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className="w-6 h-6 mb-1" style={{ color: 'var(--theme-primary)' }} />
          <span className="text-sm font-bold font-mono" style={{ color: 'var(--theme-text)' }}>{level}%</span>
        </div>
      </div>
      <span className="text-sm font-medium text-center" style={{ color: 'var(--theme-text-secondary)' }}>{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="skills" className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-bg-alt">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Sparkles}
          label="Capabilities"
          title="Technical"
          highlight="Skills"
          subtitle="Technologies I use to bring ideas to life — measured by hands-on experience."
          centered
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div key={skill.name} className="glass-card rounded-2xl">
              <SkillRing name={skill.name} level={skill.level} icon={skill.icon} index={i} />
            </div>
          ))}
        </div>

        {/* Tech ticker */}
        <div className="relative mt-16 overflow-hidden py-6 border-y border-theme">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, var(--theme-bg-alt), transparent)` }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, var(--theme-bg-alt), transparent)` }} />
          <div className="flex gap-6 animate-scroll-x">
            {[...techTicker, ...techTicker].map((tech, i) => (
              <span key={i} className="text-2xl sm:text-3xl font-display font-bold whitespace-nowrap text-muted hover:text-primary transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
