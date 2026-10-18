import { motion } from 'framer-motion';
import {
  Trophy, Mic, GitBranch, Star, Heart, Flame,
  type LucideIcon,
} from 'lucide-react';
import { achievements } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

const iconMap: Record<string, LucideIcon> = {
  Trophy, Mic, GitBranch, Star, Heart, Flame,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-bg-alt">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Trophy}
          label="Recognition"
          title="My"
          highlight="Achievements"
          subtitle="Milestones and honors that mark my journey in tech."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.icon] || Trophy;
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative glass-card rounded-2xl p-6 group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full rounded-tr-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: 'var(--theme-primary)' }} />

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'var(--theme-bg-alt)' }}>
                    <Icon className="w-6 h-6" style={{ color: 'var(--theme-primary)' }} />
                  </div>
                  <span className="text-xs font-mono text-muted px-3 py-1 rounded-full bg-bg-alt">{ach.year}</span>
                </div>

                <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors" style={{ color: 'var(--theme-text)' }}>
                  {ach.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{ach.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
