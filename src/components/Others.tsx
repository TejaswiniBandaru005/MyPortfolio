import { motion } from 'framer-motion';
import {
  PenTool, BookOpen, Camera, Music, Mountain, GitBranch,
<<<<<<< HEAD
  Github, Linkedin, Instagram, Youtube,
=======
  Github, Linkedin, Twitter, Instagram, Dribbble, Youtube,
>>>>>>> origin/main
  Share2, type LucideIcon,
} from 'lucide-react';
import { hobbies, socials } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

const hobbyIcons: Record<string, LucideIcon> = {
  PenTool, BookOpen, Camera, Music, Mountain, GitBranch,
};

const socialIcons: Record<string, LucideIcon> = {
<<<<<<< HEAD
  Github, Linkedin, Instagram, Youtube,
=======
  Github, Linkedin, Twitter, Instagram, Dribbble, Youtube,
>>>>>>> origin/main
};

export default function Others() {
  return (
    <section id="others" className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Share2}
          label="Beyond the Code"
          title="More"
          highlight="About Me"
          subtitle="When I'm not building software, here's what keeps me inspired."
          centered
        />

        {/* Hobbies */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--theme-text)' }}>
            <span className="w-1 h-6 rounded-full" style={{ background: 'var(--theme-gradient)' }} />
            Hobbies & Interests
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, i) => {
              const Icon = hobbyIcons[hobby.icon] || PenTool;
              return (
                <motion.div
                  key={hobby.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card rounded-2xl p-6 group flex gap-4"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'var(--theme-bg-alt)' }}>
                    <Icon className="w-6 h-6" style={{ color: 'var(--theme-primary)' }} />
                  </div>
                  <div>
                    <h4 className="text-base font-display font-semibold mb-1 group-hover:text-primary transition-colors" style={{ color: 'var(--theme-text)' }}>{hobby.name}</h4>
                    <p className="text-sm text-muted leading-relaxed">{hobby.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--theme-text)' }}>
            <span className="w-1 h-6 rounded-full" style={{ background: 'var(--theme-gradient)' }} />
            Connect With Me
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {socials.map((social, i) => {
              const Icon = socialIcons[social.icon] || Share2;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, type: 'spring', stiffness: 200 }}
                  className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 group"
                  aria-label={social.name}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'var(--theme-bg-alt)' }}>
                    <Icon className="w-6 h-6 group-hover:text-primary transition-colors" style={{ color: 'var(--theme-text-secondary)' }} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold" style={{ color: 'var(--theme-text)' }}>{social.name}</p>
                    <p className="text-xs text-muted">{social.handle}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
