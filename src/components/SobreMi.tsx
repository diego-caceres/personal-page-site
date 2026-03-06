import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  RiGithubLine,
  RiMapPin2Line,
  RiGamepadLine,
  RiBookOpenLine,
} from 'react-icons/ri';
import { PiCat } from 'react-icons/pi';
import { GiWaveSurfer } from 'react-icons/gi';

const interests = [
  { icon: <GiWaveSurfer />, label: 'Surf' },
  { icon: <PiCat />, label: 'Gatos' },
  { icon: <RiGithubLine />, label: 'Open Source' },
  { icon: <RiMapPin2Line />, label: 'Uruguay' },
  { icon: <RiGamepadLine />, label: 'Juegos de mesa' },
  { icon: <RiBookOpenLine />, label: 'Cultura libre' },
];

export default function SobreMi() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sobre-mi" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-px w-8"
                style={{ background: 'linear-gradient(to right, var(--color-accent-2), var(--color-accent-1))' }}
              />
              <span
                className="text-xs font-mono font-medium tracking-widest uppercase"
                style={{ color: 'var(--color-accent-2)' }}
              >
                Sobre mí
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Ingeniero{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--color-accent-2), var(--color-accent-3))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                de verdad.
              </span>
            </h2>

            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: 'var(--color-muted)' }}
            >
              <p>
                Soy Diego, ingeniero en sistemas egresado de la ORT Uruguay. Llevo más de una
                década construyendo cosas para la web — desde sistemas internos hasta productos
                que usan miles de personas.
              </p>
              <p>
                Me gusta el trabajo bien hecho: código limpio, interfaces que se sienten bien,
                y equipos donde la gente se habla de verdad. Hoy trabajo como Software Engineer
                en una empresa internacional, desde Montevideo.
              </p>
              <p>
                Cuando no estoy frente a una pantalla, estoy en el agua intentando surfear olas
                que se me van, o en casa con Frida y Ada —mis dos gatas—.
              </p>
            </div>

            <div
              className="mt-8 p-4 rounded-xl border-l-4 text-sm italic"
              style={{
                borderLeftColor: 'var(--color-accent-1)',
                backgroundColor: 'var(--color-card)',
                color: 'var(--color-muted)',
              }}
            >
              "Construir software es un oficio. Como el surf: podés saberlo todo en teoría,
              pero lo que cuenta es la práctica y las ganas de mejorar."
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* Avatar placeholder */}
            <div
              className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent-1), var(--color-accent-2))',
              }}
            >
              <GiWaveSurfer className="w-24 h-24 text-white opacity-80" />
              <div
                className="absolute -bottom-1 -right-1 w-14 h-14 rounded-full border-4 flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-bg)' }}
              >
                <PiCat className="w-7 h-7" style={{ color: 'var(--color-accent-2)' }} />
              </div>
            </div>

            {/* Interest chips */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--color-muted)' }}>
                Intereses
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {interests.map((item) => (
                  <motion.span
                    key={item.label}
                    whileHover={{ scale: 1.08, rotate: 1 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-default"
                    style={{
                      backgroundColor: 'var(--color-card)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  >
                    <span className="text-base" style={{ color: 'var(--color-accent-1)' }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-2">
              {[
                { value: '10+', label: 'años dev' },
                { value: '35', label: 'años de vida' },
                { value: '2', label: 'gatas jefas' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4 text-center border"
                  style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-accent-1), var(--color-accent-2))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
