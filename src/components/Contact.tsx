import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, MapPin, MessageCircle, ArrowUp, Send,
} from 'lucide-react';
import { profile, socials } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-bg-alt">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'var(--theme-primary)', opacity: 0.05 }}
      />

      <div className="relative max-w-5xl mx-auto">
        <SectionHeader
          icon={MessageCircle}
          label="Get in Touch"
          title="Let's Build Something"
          highlight="Together"
          subtitle="Have a project in mind or just want to say hello? I'm always open to discussing new ideas and opportunities."
          centered
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <a href={`mailto:${profile.email}`} className="block glass-card rounded-2xl p-6 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: 'var(--theme-bg-alt)' }}>
                  <Mail className="w-6 h-6" style={{ color: 'var(--theme-primary)' }} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors" style={{ color: 'var(--theme-text)' }}>{profile.email}</p>
                </div>
              </div>
            </a>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--theme-bg-alt)' }}>
                  <MapPin className="w-6 h-6" style={{ color: 'var(--theme-secondary)' }} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--theme-text)' }}>{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-xs text-muted uppercase tracking-wider mb-4">Quick Connect</p>
              <div className="flex flex-wrap gap-3">
                {socials.slice(0, 5).map((social) => (
                  <span key={social.name} className="text-sm px-4 py-2 rounded-xl text-muted" style={{ background: 'var(--theme-bg-alt)' }}>
                    {social.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs text-muted uppercase tracking-wider mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-alt border-theme rounded-xl text-sm transition-all focus:outline-none focus:ring-2"
                  style={{
                    color: 'var(--theme-text)',
                    '--tw-ring-color': 'var(--theme-primary)',
                  } as React.CSSProperties}
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="block text-xs text-muted uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-alt border-theme rounded-xl text-sm transition-all focus:outline-none focus:ring-2"
                  style={{
                    color: 'var(--theme-text)',
                    '--tw-ring-color': 'var(--theme-primary)',
                  } as React.CSSProperties}
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-xs text-muted uppercase tracking-wider mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-alt border-theme rounded-xl text-sm transition-all focus:outline-none focus:ring-2 resize-none"
                  style={{
                    color: 'var(--theme-text)',
                    '--tw-ring-color': 'var(--theme-primary)',
                  } as React.CSSProperties}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all"
                style={{ background: 'var(--theme-gradient)' }}
              >
                {sent ? (
                  <>Opening your email client...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {profile.name}. Crafted with care.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors group"
          >
            Back to top
            <span className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
