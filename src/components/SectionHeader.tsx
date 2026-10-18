import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export default function SectionHeader({
  icon: Icon,
  label,
  title,
  highlight,
  subtitle,
  centered,
}: {
  icon: LucideIcon;
  label: string;
  title: string;
  highlight: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 sm:mb-16 ${centered ? 'text-center' : ''}`}
    >
      <div className={`flex items-center gap-3 mb-3 ${centered ? 'justify-center' : ''}`}>
        <Icon className="w-5 h-5 text-primary" />
        <span className="text-sm uppercase tracking-widest text-primary font-medium">{label}</span>
      </div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold" style={{ color: 'var(--theme-text)' }}>
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-muted max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
