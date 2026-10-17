import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (p: Project) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
    setRot({ x: -dy * 8, y: dx * 8 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setRot({ x: 0, y: 0 })}
      onClick={() => onOpen(project)}
      style={{ transform: `perspective(1000px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`, transformStyle: 'preserve-3d' }}
      className="group relative cursor-pointer rounded-2xl glass-card overflow-hidden hover:shadow-xl transition-shadow duration-500"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--theme-surface), transparent 60%)' }} />
        <div className="absolute top-3 right-3 w-10 h-10 rounded-xl glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-5 h-5" style={{ color: 'var(--theme-primary)' }} />
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <span className="text-xs uppercase tracking-wider text-primary font-medium">{project.tagline}</span>
        <h3 className="text-xl font-display font-bold mt-1 mb-2 group-hover:text-primary transition-colors" style={{ color: 'var(--theme-text)' }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed line-clamp-2 text-muted">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-md text-muted" style={{ background: 'var(--theme-bg-alt)' }}>
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && <span className="px-2.5 py-1 text-xs font-medium text-primary">+{project.tags.length - 4}</span>}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        style={{ background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(8px)' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-2xl glass border-theme"
        >
          <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl glass flex items-center justify-center transition-colors" style={{ color: 'var(--theme-text)' }}>
            <X className="w-5 h-5" />
          </button>

          <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--theme-surface), transparent 50%)' }} />
          </div>

          <div className="p-6 sm:p-8">
            <span className="text-xs uppercase tracking-wider text-primary font-medium">{project.tagline}</span>
            <h2 className="text-3xl font-display font-bold mt-1 mb-4" style={{ color: 'var(--theme-text)' }}>{project.title}</h2>
            <p className="leading-relaxed mb-6" style={{ color: 'var(--theme-text-secondary)' }}>{project.longDescription}</p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {project.metrics.map((m) => (
                <div key={m.label} className="text-center p-3 rounded-xl bg-bg-alt border-theme">
                  <div className="text-lg sm:text-xl font-bold gradient-text">{m.value}</div>
                  <div className="text-xs text-muted mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs font-medium text-primary rounded-lg" style={{ background: 'var(--theme-bg-alt)' }}>{tag}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all" style={{ background: 'var(--theme-gradient)' }}>
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl glass hover:scale-105 transition-all" style={{ color: 'var(--theme-text)' }}>
                <Github className="w-4 h-4" /> Source Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={FolderGit2}
          label="Selected Work"
          title="Featured"
          highlight="Projects"
          subtitle="A collection of products I have designed, built, and shipped — from AI-powered tools to immersive 3D experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
