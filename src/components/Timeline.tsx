import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  RiUserLine,
  RiGraduationCapLine,
  RiCodeSSlashLine,
  RiAwardLine,
  RiBuildingLine,
  RiHome2Line,
  RiBrainLine,
  RiGlobalLine,
  RiAnchorLine,
  RiRefreshLine,
  RiHeartLine,
} from 'react-icons/ri';
import type { IconType } from 'react-icons';

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  Icon: IconType;
  color: string;
  category: 'vida' | 'trabajo' | 'personal';
};

const events: TimelineEvent[] = [
  {
    year: '1990',
    title: 'Primeros píxeles',
    description: 'Nací en Montevideo, Uruguay. Sin saberlo todavía, en la ciudad correcta.',
    Icon: RiUserLine,
    color: '#ec4899',
    category: 'vida',
  },
  {
    year: '2009',
    title: 'Ingeniería en Sistemas',
    description: 'Empecé la carrera en ORT Uruguay. Los primeros algoritmos, las primeras noches sin dormir.',
    Icon: RiGraduationCapLine,
    color: '#7c3aed',
    category: 'trabajo',
  },
  {
    year: '2013',
    title: 'Primer trabajo como dev',
    description: 'Código de producción por primera vez — con todo lo que eso implica.',
    Icon: RiCodeSSlashLine,
    color: '#0891b2',
    category: 'trabajo',
  },
  {
    year: '2014',
    title: 'Ingeniero de Sistemas',
    description: 'Me recibí. El título llegó; las ganas de aprender, también.',
    Icon: RiAwardLine,
    color: '#10b981',
    category: 'vida',
  },
  {
    year: '2014',
    title: 'Xseed',
    description: 'Entré a una Software Factory. Proyectos variados, ritmo intenso, mucho aprendizaje.',
    Icon: RiBuildingLine,
    color: '#f59e0b',
    category: 'trabajo',
  },
  {
    year: '2015',
    title: 'Independencia',
    description: 'Me mudé fuera de la casa de mis padres, primer hogar, vida adulta en primera persona.',
    Icon: RiHome2Line,
    color: '#ec4899',
    category: 'personal',
  },
  {
    year: '2021',
    title: 'Monkeylearn',
    description: 'Cambié a Monkeylearn, empresa de producto de NLP. El salto de la factory al producto.',
    Icon: RiBrainLine,
    color: '#8b5cf6',
    category: 'trabajo',
  },
  {
    year: '2022',
    title: 'Medallia',
    description: 'Monkeylearn fue adquirida por Medallia. De startup uruguaya a empresa global.',
    Icon: RiGlobalLine,
    color: '#0891b2',
    category: 'trabajo',
  },
  {
    year: '2022',
    title: 'El surf me encontró',
    description: 'Empecé a surfear. Un hobbie demandante pero algo en la conexión con el agua me enganchó para siempre.',
    Icon: RiAnchorLine,
    color: '#0d9488',
    category: 'personal',
  },
  {
    year: '2026',
    title: 'Ahora',
    description: 'Sigo surfeando (algo mejor). Trabajo como Software Engineer en una empresa internacional. Vivo con Frida y Ada, mis gatas.',
    Icon: RiHeartLine,
    color: '#ec4899',
    category: 'vida',
  },
];

const categoryColors: Record<string, string> = {
  vida: '#ec4899',
  trabajo: '#7c3aed',
  personal: '#0891b2',
};

function TimelineItem({ event, idx, isLast }: { event: TimelineEvent; idx: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const isEven = idx % 2 === 0;

  const Card = ({ align }: { align: 'left' | 'right' }) => (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-2xl border p-5 max-w-xs hover:shadow-lg transition-shadow duration-300"
      style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}
    >
      <div className={`flex items-center gap-2 mb-2 ${align === 'left' ? 'justify-end' : ''}`}>
        {align === 'right' && <event.Icon className="w-4 h-4" style={{ color: event.color }} />}
        <span className="font-mono text-sm font-bold" style={{ color: event.color }}>{event.year}</span>
        {align === 'left' && <event.Icon className="w-4 h-4" style={{ color: event.color }} />}
      </div>
      <h3 className={`font-bold text-base mb-1 ${align === 'left' ? 'text-right' : ''}`} style={{ color: 'var(--color-text)' }}>
        {event.title}
      </h3>
      <p className={`text-sm leading-relaxed ${align === 'left' ? 'text-right' : ''}`} style={{ color: 'var(--color-muted)' }}>
        {event.description}
      </p>
      <div className={`flex mt-2 ${align === 'left' ? 'justify-end' : ''}`}>
        <span
          className="text-xs px-2 py-0.5 rounded-full"
          style={{ backgroundColor: `${categoryColors[event.category]}20`, color: categoryColors[event.category] }}
        >
          {event.category}
        </span>
      </div>
    </motion.div>
  );

  return (
    <div ref={ref} className="relative flex items-start gap-4 md:gap-0">
      {/* Desktop: alternating layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full gap-6 items-start">
        <div className="flex flex-col items-end">
          {isEven && <Card align="left" />}
        </div>

        {/* Center dot */}
        <div className="flex flex-col items-center pt-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
            className="w-10 h-10 rounded-full flex items-center justify-center z-10 relative"
            style={{
              background: `linear-gradient(135deg, ${event.color}, ${event.color}88)`,
              boxShadow: `0 0 0 4px var(--color-bg), 0 0 0 6px ${event.color}40`,
            }}
          >
            <event.Icon className="w-5 h-5 text-white" />
          </motion.div>
          {!isLast && (
            <div
              className="w-px flex-1 mt-2"
              style={{
                background: `linear-gradient(to bottom, ${event.color}60, var(--color-border))`,
                minHeight: '60px',
              }}
            />
          )}
        </div>

        <div>
          {!isEven && <Card align="right" />}
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="flex md:hidden gap-4 w-full">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, type: 'spring' }}
            className="w-9 h-9 rounded-full flex items-center justify-center z-10 flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${event.color}, ${event.color}88)`,
              boxShadow: `0 0 0 3px var(--color-bg), 0 0 0 5px ${event.color}40`,
            }}
          >
            <event.Icon className="w-4 h-4 text-white" />
          </motion.div>
          {!isLast && (
            <div
              className="w-px flex-1 mt-2"
              style={{ background: `linear-gradient(to bottom, ${event.color}60, var(--color-border))`, minHeight: '40px' }}
            />
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border p-4 mb-4 flex-1"
          style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <event.Icon className="w-3.5 h-3.5" style={{ color: event.color }} />
            <span className="font-mono text-xs font-bold" style={{ color: event.color }}>{event.year}</span>
          </div>
          <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--color-text)' }}>{event.title}</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>{event.description}</p>
          <span
            className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full"
            style={{ backgroundColor: `${categoryColors[event.category]}20`, color: categoryColors[event.category] }}
          >
            {event.category}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="timeline"
      className="py-24 md:py-32"
      style={{ backgroundColor: 'color-mix(in srgb, var(--color-bg) 97%, var(--color-accent-2))' }}
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
            <div className="h-px w-8" style={{ background: 'linear-gradient(to right, transparent, var(--color-accent-3))' }} />
            <span className="text-xs font-mono font-medium tracking-widest uppercase" style={{ color: 'var(--color-accent-3)' }}>
              Timeline
            </span>
            <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, var(--color-accent-3))' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            La historia{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--color-accent-3), var(--color-accent-1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              hasta acá
            </span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--color-muted)' }}>
            Hitos, cambios y aprendizajes. Todo lo que me trajo hasta donde estoy hoy.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            {Object.entries(categoryColors).map(([cat, color]) => (
              <div key={cat} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-xs capitalize" style={{ color: 'var(--color-muted)' }}>{cat}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-0">
          {events.map((event, idx) => (
            <TimelineItem
              key={`${event.year}-${event.title}`}
              event={event}
              idx={idx}
              isLast={idx === events.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
