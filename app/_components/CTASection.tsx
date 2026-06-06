'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto text-center glass rounded-3xl py-20 px-10 relative overflow-hidden"
        style={{
          boxShadow: '0 0 80px rgba(79, 195, 247, 0.08), 0 0 160px rgba(106, 27, 154, 0.06)',
        }}
      >
        {/* Inner glow */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(79,195,247,0.08) 0%, transparent 70%)',
          }}
        />

        <p className="text-cyan-400 text-sm tracking-[0.25em] uppercase font-medium mb-6">
          Ready for Launch?
        </p>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
          Begin your{' '}
          <span
            className="glow-text text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, #4fc3f7 0%, #80deea 100%)',
            }}
          >
            journey
          </span>{' '}
          today
        </h2>
        <p className="text-slate-400 mb-10 max-w-md mx-auto">
          Join thousands of teams already operating at stellar velocity. Free forever for small crews.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="btn-glow px-10 py-4 rounded-2xl font-semibold text-white text-base"
            style={{
              background: 'linear-gradient(135deg, #1565c0, #4fc3f7)',
            }}
          >
            Launch for Free
          </button>
          <button className="glass glass-hover px-10 py-4 rounded-2xl font-semibold text-slate-200 text-base">
            Talk to Mission Control
          </button>
        </div>
      </motion.div>
    </section>
  )
}
