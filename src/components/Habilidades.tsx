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
    gradient: 'linear-gradient(135deg, #a86520, #d4953a)',
    Icon: RiLayoutLine,
    skills: ['React', 'Next.js', 'Astro', 'TypeScript', 'JavaScript', 'Tailwind CSS', ],
  },
  {
    title: 'Backend & Datos',
    gradient: 'linear-gradient(135deg, #1a5c78, #1e7a68)',
    Icon: RiServerLine,
    skills: ['Python', 'Node.js', 'PostgreSQL', 'Supabase', 'Upstash Redis', 'Neon'],
  },
  {
    title: 'Infra & DevOps',
    gradient: 'linear-gradient(135deg, #2a5c38, #1a5c78)',
    Icon: RiCloudLine,
    skills: ['Vercel', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
  },
  {
    title: 'Herramientas',
    gradient: 'linear-gradient(135deg, #5a4230, #a86520)',
    Icon: RiToolsLine,
    skills: ['Vite', 'ESLint', 'Prettier', 'Figma', 'Notion'],
  },
];

// Extract the first color from each gradient for chip border tinting
const categoryBorderColors: Record<string, string> = {
  'Frontend': '#a86520',
  'Backend & Datos': '#1a5c78',
  'Infra & DevOps': '#2a5c38',
  'Herramientas': '#8a6530',
};

function SkillChip({ skill, index, color }: { skill: string; index: number; color: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -2 }}
      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium cursor-default select-none"
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
      className="rounded-2xl p-6 border transition-shadow duration-300 hover:shadow-xl"
      style={{
        backgroundColor: 'var(--color-card)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="flex items-center gap-2 mb-5">
        <cat.Icon className="w-5 h-5 flex-shrink-0" style={{ color }} />
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
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--color-accent-1)' }}>
              Stack
            </span>
            <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, var(--color-accent-1))' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Con qué{' '}
            <span style={{ color: 'var(--color-accent-1)' }}>trabajo</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--color-muted)' }}>
            Herramientas y tecnologías con las que suelo trabajar en mis proyectos personales y profesionales.
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
