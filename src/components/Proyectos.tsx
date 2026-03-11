import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { RiGithubLine, RiExternalLinkLine } from 'react-icons/ri';
import {
  RiCheckboxLine,
  RiShoppingCart2Line,
  RiBarChartLine,
  RiBrushLine,
} from 'react-icons/ri';
import { MdOutlinePool } from 'react-icons/md';
import { GiSurfBoard } from 'react-icons/gi';
import type { IconType } from 'react-icons';

type Project = {
  name: string;
  description: string;
  stack: string[];
  Icon: IconType;
  gradient: string;
  url?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    name: 'Activity Tracker',
    description:
      'App personal para gestionar ToDos, hábitos y notas. Minimalista, rápida, siempre disponible.',
    stack: ['Next.js', 'TypeScript', 'Upstash Redis', 'Tailwind CSS'],
    Icon: RiCheckboxLine,
    gradient: 'linear-gradient(135deg, #7c3aed, #db2777)',
  },
  {
    name: 'AUA Website',
    description:
      'Sitio web para la Asociación Uruguaya de Apneístas. Diseño limpio enfocado en la comunidad apneísta uruguaya.',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    Icon: MdOutlinePool,
    gradient: 'linear-gradient(135deg, #0891b2, #3b82f6)',
    url: 'https://aida-uy.vercel.app/',
    repo: 'https://github.com/diego-caceres/aua-website',
  },
  {
    name: 'Integral Surf',
    description:
      'Sitio web completo para una agencia de viajes de surf: información de viajes, galería de fotos, experiencias, y contacto.',
    stack: ['Next.js', 'Supabase', 'Cloudinary', 'TypeScript'],
    Icon: GiSurfBoard,
    gradient: 'linear-gradient(135deg, #0d9488, #0891b2)',
  },
  {
    name: 'Master Sales Site',
    description:
      'Sitio de identidad de marca para mayorista, con catálogo de productos y backoffice para su gestión. Full-stack completo.',
    stack: ['Next.js', 'Neon', 'Cloudinary', 'TypeScript'],
    Icon: RiShoppingCart2Line,
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    url: 'https://www.mastersales.com.uy/',
  },
  {
    name: 'Ranking',
    description:
      'Tracker de Elo para el juego de mesa Terraforming Mars. Registra partidas, calcula rating ELO y muestra historial por jugador. Proyecto open source para mis amigos.',
    stack: ['React', 'Vite', 'Upstash Redis', 'TypeScript'],
    Icon: RiBarChartLine,
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    repo: 'https://github.com/diego-caceres/terraforming-mars-ranking',
    url: 'https://terraforming-mars-ranking.vercel.app/',
  },
  {
    name: 'Portfolio Belén Villegas Pla',
    description:
      'Portfolio personal para una investigadora de economía política. Diseño elegante con énfasis en su trabajo académico y publicaciones.',
    stack: ['React', 'Vite', 'TypeScript', 'CSS Modules'],
    Icon: RiBrushLine,
    gradient: 'linear-gradient(135deg, #ec4899, #f97316)',
    url: 'https://belen-villegas-pla.vercel.app/about',
  },
];

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col"
      style={{
        backgroundColor: 'var(--color-card)',
        borderColor: 'var(--color-border)',
      }}
    >
      {/* Header stripe */}
      <div className="h-1.5 w-full" style={{ background: project.gradient }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + name */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: project.gradient }}
          >
            <project.Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-bold text-lg leading-tight pt-1" style={{ color: 'var(--color-text)' }}>
            {project.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--color-muted)' }}>
          {project.description}
        </p>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-xs font-mono border"
              style={{
                backgroundColor: 'var(--color-bg)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-muted)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-70"
              style={{ color: 'var(--color-accent-1)' }}
            >
              <RiGithubLine className="w-3.5 h-3.5" />
              Repo
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-70"
              style={{ color: 'var(--color-accent-3)' }}
            >
              <RiExternalLinkLine className="w-3.5 h-3.5" />
              Ver sitio
            </a>
          )}
          {!project.repo && !project.url && (
            <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
              Proyecto privado
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Proyectos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="proyectos" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: 'linear-gradient(to right, transparent, var(--color-accent-2))' }} />
            <span className="text-xs font-mono font-medium tracking-widest uppercase" style={{ color: 'var(--color-accent-2)' }}>
              Proyectos
            </span>
            <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, var(--color-accent-2))' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Cosas que{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--color-accent-2), var(--color-accent-1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              construí
            </span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--color-muted)' }}>
            Algunos proyectos personales y de clientes freelance. Cada uno con su propio stack, y sus propios
            desafíos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
