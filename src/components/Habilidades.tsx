import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { RiLayoutLine, RiServerLine, RiCloudLine, RiToolsLine } from 'react-icons/ri';
import type { IconType } from 'react-icons';

type SkillCategory = {
  title: string;
  gradient: string;
  Icon: IconType;
  skills: string[];
};

const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    gradient: 'linear-gradient(135deg, #7c3aed, #db2777)',
    Icon: RiLayoutLine,
    skills: ['React', 'Next.js', 'Astro', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend & Datos',
    gradient: 'linear-gradient(135deg, #0891b2, #0d9488)',
    Icon: RiServerLine,
    skills: ['Python', 'Node.js', 'PostgreSQL', 'Supabase', 'Upstash Redis', 'Neon'],
  },
  {
    title: 'Infra & DevOps',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    Icon: RiCloudLine,
    skills: ['Kubernetes', 'Docker', 'Vercel', 'CI/CD', 'Git'],
  },
  {
    title: 'Herramientas',
    gradient: 'linear-gradient(135deg, #10b981, #3b82f6)',
    Icon: RiToolsLine,
    skills: ['Vite', 'ESLint', 'Cloudinary', 'Nodemailer', 'hCaptcha'],
  },
];

// Extract the first color from each gradient for chip border tinting
const categoryBorderColors: Record<string, string> = {
  'Frontend': '#7c3aed',
  'Backend & Datos': '#0891b2',
  'Infra & DevOps': '#f59e0b',
  'Herramientas': '#10b981',
};

function SkillChip({ skill, index, color }: { skill: string; index: number; color: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -2 }}
      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium cursor-default select-none transition-all duration-200"
      style={{
        backgroundColor: `${color}12`,
        border: `1px solid ${color}35`,
        color: 'var(--color-text)',
      }}
    >
      {skill}
    </motion.span>
  );
}

function CategoryCard({ cat, idx }: { cat: SkillCategory; idx: number }) {
  const color = categoryBorderColors[cat.title];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl"
      style={{
        backgroundColor: 'var(--color-card)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: cat.gradient }}
        >
          <cat.Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-semibold text-base" style={{ color: 'var(--color-text)' }}>
          {cat.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, i) => (
          <SkillChip key={skill} skill={skill} index={i} color={color} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Habilidades() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="habilidades"
      className="py-24 md:py-32"
      style={{ backgroundColor: 'color-mix(in srgb, var(--color-bg) 98%, var(--color-accent-1))' }}
      ref={ref}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: 'linear-gradient(to right, transparent, var(--color-accent-1))' }} />
            <span className="text-xs font-mono font-medium tracking-widest uppercase" style={{ color: 'var(--color-accent-1)' }}>
              Stack
            </span>
            <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, var(--color-accent-1))' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Con qué{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--color-accent-1), var(--color-accent-3))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              trabajo
            </span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--color-muted)' }}>
            Herramientas que conozco bien y uso a diario. No barras de porcentaje —
            estas tecnologías realmente son parte de mi trabajo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <CategoryCard key={cat.title} cat={cat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
