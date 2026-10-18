import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-bg-alt">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          icon={Briefcase}
          label="Career Path"
          title="Work"
          highlight="Experience"
          subtitle="Roles where I built, shipped, and led impactful products."
          centered
        />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, var(--theme-primary), transparent)' }} />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-12 pb-10 last:pb-0"
            >
              <div className="absolute left-4 top-1.5 w-3 h-3 rounded-full -translate-x-1/2" style={{ background: 'var(--theme-primary)', boxShadow: '0 0 0 4px var(--theme-bg-alt)' }} />

              <div className="glass-card rounded-2xl p-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary mb-2">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </span>
                <h3 className="text-lg font-display font-semibold" style={{ color: 'var(--theme-text)' }}>{exp.role}</h3>
                <p className="text-sm font-medium mb-2" style={{ color: 'var(--theme-secondary)' }}>{exp.company}</p>
                <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
