'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
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
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
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

      {/* Badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="glass rounded-full px-5 py-2 mb-8 inline-flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse" />
        <span className="text-sm text-cyan-300 font-medium tracking-wide">Now in Beta — Join the Galaxy</span>
      </motion.div>

      {/* Main title */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.25}
        className="text-7xl sm:text-8xl md:text-[9rem] font-black leading-none tracking-tighter mb-6 float"
      >
        <span className="glow-text text-transparent bg-clip-text"
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
        className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mb-4 leading-relaxed"
      >
        Navigate your projects at the speed of light.
        <br />
        <span className="text-slate-400">
          AI-powered workflows that take your team beyond the stars.
        </span>
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.7}
        className="flex flex-col sm:flex-row gap-4 mt-10"
      >
        <button
          className="btn-glow px-8 py-4 rounded-2xl font-semibold text-base text-white"
          style={{
            background: 'linear-gradient(135deg, #1565c0, #4fc3f7, #6a1b9a)',
            backgroundSize: '200% 200%',
          }}
        >
          Start for Free
        </button>
        <button className="glass glass-hover px-8 py-4 rounded-2xl font-semibold text-base text-slate-200">
          Watch Demo →
        </button>
      </motion.div>

      {/* Stats row */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.9}
        className="flex gap-10 mt-16"
      >
        {[
          { value: '10k+', label: 'Astronauts' },
          { value: '99.9%', label: 'Uptime' },
          { value: '∞', label: 'Possibilities' },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-2xl font-bold text-cyan-300 glow-text">{value}</div>
            <div className="text-xs text-slate-500 mt-1 tracking-widest uppercase">{label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={1.2}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  )
}
