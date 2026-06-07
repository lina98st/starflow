'use client'

import { motion } from 'framer-motion'
import Moon from './Moon'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1, delay },
  }),
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 lg:px-16">
      {/* Orbit rings + Moon — pinned to the right as a decorative element */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:flex items-center justify-center"
        style={{ width: 720, height: 720 }}
      >
        <Moon />
        <div
          className="orbit-ring absolute"
          style={{ width: 340, height: 340, '--orbit-duration': '25s' } as React.CSSProperties}
        />
        <div
          className="orbit-ring absolute"
          style={{
            width: 520,
            height: 520,
            '--orbit-duration': '40s',
            animationDirection: 'reverse',
            opacity: 0.6,
          } as React.CSSProperties}
        />
        <div
          className="orbit-ring absolute"
          style={{ width: 700, height: 700, '--orbit-duration': '60s', opacity: 0.3 } as React.CSSProperties}
        />
      </div>

      {/* Left-aligned content */}
      <div className="max-w-6xl w-full mx-auto">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="glass rounded-full px-5 py-2 mb-8 inline-flex items-center gap-2"
          >
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse" />
            <span className="text-sm text-cyan-300 font-medium tracking-wide">Where Science Meets the Stars</span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="text-7xl sm:text-8xl md:text-[9rem] font-black leading-none tracking-tighter mb-6 float"
          >
            <span
              className="glow-text text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, #4fc3f7 0%, #ce93d8 50%, #80deea 100%)',
              }}
            >
              Star
            </span>
            <span className="text-white">flow</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="text-lg sm:text-xl text-slate-300 mb-2 leading-relaxed"
          >
            Explore the cosmos. Decode celestial patterns.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="text-base text-slate-400 mb-10 leading-relaxed"
          >
            Astrology grounded in science — star charts, planetary transits, and deep space discovery in one place.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.65}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              className="btn-glow px-8 py-4 rounded-2xl font-semibold text-base text-white"
              style={{
                background: 'linear-gradient(135deg, #1565c0, #4fc3f7, #6a1b9a)',
                backgroundSize: '200% 200%',
              }}
            >
              Start Exploring
            </button>
            <button className="glass glass-hover px-8 py-4 rounded-2xl font-semibold text-base text-slate-200">
              View Star Charts <span aria-hidden="true">→</span>
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.85}
            className="flex gap-10 mt-14 border-t border-white/5 pt-10"
          >
            {[
              { value: '88', label: 'Constellations' },
              { value: '4,000+', label: 'Stars Mapped' },
              { value: '∞', label: 'To Discover' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-cyan-300 glow-text">{value}</div>
                <div className="text-xs text-slate-400 mt-1 tracking-widest uppercase">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={1.1}
        aria-hidden="true"
        className="absolute bottom-8 left-8 lg:left-16 flex flex-col items-start gap-2 text-slate-400"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
      </motion.div>
    </section>
  )
}
