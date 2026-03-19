import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiFileCopyLine,
  RiCheckLine,
} from 'react-icons/ri';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/diego-caceres',
    Icon: RiGithubLine,
    color: 'var(--color-accent-1)',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/diego-caceres-galvan',
    Icon: RiLinkedinLine,
    color: 'var(--color-accent-2)',
  },
  {
    name: 'Email',
    url: 'mailto:diegocaceresgalvan@gmail.com',
    Icon: RiMailLine,
    color: 'var(--color-accent-3)',
  },
];

export default function Contacto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('diegocaceresgalvan@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: 'linear-gradient(to right, transparent, var(--color-accent-1))' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--color-accent-1)' }}>
              Contacto
            </span>
            <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, var(--color-accent-1))' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Hablemos{' '}
            <span style={{ color: 'var(--color-accent-1)' }}>de algo</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--color-muted)' }}>
            Abierto a colaboraciones, proyectos comunitarios o simplemente
            tomar un café virtual y charlar de tecnología.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl p-8 md:p-12 mb-8 text-center"
            style={{
              backgroundColor: 'var(--color-card)',
              border: '1px solid var(--color-border)',
            }}
          >
            <p className="text-base mb-2" style={{ color: 'var(--color-muted)' }}>
              Escribime a
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <button
                onClick={copyEmail}
                className="text-2xl md:text-3xl font-bold transition-opacity hover:opacity-80 text-center cursor-pointer"
                style={{ color: 'var(--color-accent-1)' }}
              >
                diegocaceresgalvan<wbr />@gmail.com
              </button>
              <button
                onClick={copyEmail}
                aria-label="Copiar email"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110"
                style={{
                  borderColor: 'var(--color-border)',
                  color: copied ? 'var(--color-accent-3)' : 'var(--color-muted)',
                  backgroundColor: 'var(--color-bg)',
                }}
              >
                {copied ? (
                  <RiCheckLine className="w-4 h-4" />
                ) : (
                  <RiFileCopyLine className="w-4 h-4" />
                )}
              </button>
            </div>
            {copied && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm mt-2"
                style={{ color: 'var(--color-accent-3)' }}
              >
                Email copiado
              </motion.p>
            )}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('mailto') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl border text-sm font-medium"
                style={{
                  backgroundColor: 'var(--color-card)',
                  borderColor: 'var(--color-border)',
                  color: link.color,
                }}
              >
                <link.Icon className="w-5 h-5" />
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-xs mt-10"
            style={{ color: 'var(--color-muted)' }}
          >
            Hecho con Astro, React y Tailwind CSS — desde Montevideo y con ayuda de Claude Code
          </motion.p>
        </div>
      </div>
    </section>
  );
}
