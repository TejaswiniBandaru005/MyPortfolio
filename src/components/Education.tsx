import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          icon={GraduationCap}
          label="Academic Background"
          title="My"
          highlight="Education"
          subtitle="The foundations that shaped my analytical and engineering mindset."
          centered
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-1/2" style={{ background: 'linear-gradient(to bottom, var(--theme-primary), transparent)' }} />

          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative pl-12 sm:pl-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'} pb-10 last:pb-0`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-4 sm:left-auto top-1.5 w-3 h-3 rounded-full ring-4"
                style={{
                  background: 'var(--theme-primary)',
                  ...(i % 2 === 0 ? { right: '-6px', left: 'auto' } : { left: '-6px' }),
                  boxShadow: `0 0 0 4px var(--theme-bg)`,
                } as React.CSSProperties}
              />

              <div className="glass-card rounded-2xl p-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary mb-2">
                  <Calendar className="w-3 h-3" />
                  {edu.period}
                </span>
                <h3 className="text-lg font-display font-semibold mb-1" style={{ color: 'var(--theme-text)' }}>{edu.degree}</h3>
                <p className="text-sm text-primary mb-2">{edu.institution}</p>
                <p className="text-sm text-muted leading-relaxed mb-3">{edu.description}</p>
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-lg text-white" style={{ background: 'var(--theme-gradient)' }}>
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
