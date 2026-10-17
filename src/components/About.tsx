import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { User, MapPin, ArrowRight } from 'lucide-react';
import { profile } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={User}
          label="Who I Am"
          title="About"
          highlight="Me"
          subtitle="Get to know the person behind the code."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Photo */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card">
              <img src={profile.photo} alt={profile.name} loading="lazy" className="w-full h-72 sm:h-96 object-cover" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-2xl p-4">
                  <p className="text-sm font-semibold" style={{ color: 'var(--theme-text)' }}>{profile.name}</p>
                  <p className="text-xs text-primary">{profile.role}</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-20 h-20 rounded-2xl blur-xl opacity-20" style={{ background: 'var(--theme-primary)' }} />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed" style={{ color: 'var(--theme-text-secondary)' }}>
              {profile.bio}
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
                <MapPin className="w-4 h-4 text-primary" />
                {profile.location}
              </span>
              <a
                href={profile.resumeUrl}
                className="flex items-center gap-2 text-sm font-semibold text-primary group"
              >
                Download Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: 'Years Experience', value: '4+' },
                { label: 'Projects Shipped', value: '30+' },
                { label: 'Open Source Repos', value: '48' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-display font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
