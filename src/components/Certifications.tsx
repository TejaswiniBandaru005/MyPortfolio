import { Award, ExternalLink, Cloud, Code2, Palette, Database, Brain, Users, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { certifications } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

const iconMap: Record<string, LucideIcon> = {
  Cloud, Code2, Palette, Database, Brain, Users,
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Award}
          label="Credentials"
          title="My"
          highlight="Certifications"
          subtitle="Professional certifications that validate my expertise across the stack."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <motion.a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-2xl p-6 group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'var(--theme-bg-alt)' }}>
                    <Icon className="w-6 h-6" style={{ color: 'var(--theme-primary)' }} />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-base font-display font-semibold mb-2 group-hover:text-primary transition-colors" style={{ color: 'var(--theme-text)' }}>
                  {cert.title}
                </h3>
                <p className="text-sm text-muted mb-3">{cert.issuer}</p>

                <div className="mt-auto flex items-center justify-between text-xs">
                  <span className="font-mono text-muted">{cert.credentialId}</span>
                  <span className="px-3 py-1 rounded-full text-primary font-medium" style={{ background: 'var(--theme-bg-alt)' }}>{cert.year}</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
