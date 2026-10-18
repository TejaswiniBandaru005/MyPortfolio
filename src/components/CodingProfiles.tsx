import { motion } from 'framer-motion';
import { Code2, Github, Trophy, Flame, type LucideIcon, ExternalLink } from 'lucide-react';
import { codingProfiles } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

const iconMap: Record<string, LucideIcon> = {
  Code2, Github, Trophy, Flame,
};

export default function CodingProfiles() {
  return (
    <section id="coding" className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-bg-alt">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Code2}
          label="Problem Solving"
          title="Coding"
          highlight="Profiles"
          subtitle="Where I sharpen my algorithms and contribute to the community."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((cp, i) => {
            const Icon = iconMap[cp.icon] || Code2;
            return (
              <motion.a
                key={cp.platform}
                href={cp.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-2xl p-6 group flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: `${cp.color}15` }}>
                    <Icon className="w-6 h-6" style={{ color: cp.color }} />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-lg font-display font-bold mb-1" style={{ color: 'var(--theme-text)' }}>{cp.platform}</h3>
                <p className="text-sm text-muted mb-4">{cp.username}</p>

                <div className="mt-auto space-y-2">
                  {cp.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <span className="text-xs text-muted">{stat.label}</span>
                      <span className="text-sm font-bold font-mono" style={{ color: 'var(--theme-text)' }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
