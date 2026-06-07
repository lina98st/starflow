'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: '🌟',
    title: 'Natal Charts',
    description:
      'Generate precise birth charts based on the exact position of celestial bodies at the moment you were born. Rooted in astronomical data.',
    color: '#4fc3f7',
  },
  {
    icon: '🔭',
    title: 'Live Sky Map',
    description:
      'Real-time star map showing constellations, planets, and deep space objects above your exact location — updated to the second.',
    color: '#ce93d8',
  },
  {
    icon: '🪐',
    title: 'Planetary Transits',
    description:
      'Track the precise movement of every planet through the zodiac. Understand orbital mechanics alongside their astrological significance.',
    color: '#80deea',
  },
  {
    icon: '🌙',
    title: 'Lunar Calendar',
    description:
      'Follow the moon through all its phases. Plan around new moons, full moons, and eclipses — with the science behind the tides explained.',
    color: '#ffb74d',
  },
  {
    icon: '☄️',
    title: 'Cosmic Events',
    description:
      'Never miss a meteor shower, solar eclipse, or planetary conjunction. A science-backed calendar of everything happening in the sky.',
    color: '#a5d6a7',
  },
  {
    icon: '📡',
    title: 'Deep Space Science',
    description:
      'Explore black holes, dark matter, and the expanding universe. Curated research from NASA, ESA, and leading astrophysics institutions.',
    color: '#ef9a9a',
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
      className="glass glass-hover rounded-2xl p-7 flex flex-col gap-4"
    >
      <div
        aria-hidden="true"
        className="text-3xl w-12 h-12 flex items-center justify-center rounded-xl"
        style={{ background: `${feature.color}18` }}
      >
        {feature.icon}
      </div>
      <h3
        className="text-lg font-bold"
        style={{ color: feature.color }}
      >
        {feature.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true })

  return (
    <section className="relative py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        className="mb-20"
      >
        <p className="text-cyan-400 text-sm tracking-[0.25em] uppercase font-medium mb-4">
          What You Can Explore
        </p>
        <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
          The universe,{' '}
          <span
            className="glow-text-purple text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(90deg, #ce93d8, #4fc3f7)',
            }}
          >
            explained
          </span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl">
          From the astrology of ancient civilisations to the astrophysics of today — all in one place.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </section>
  )
}
