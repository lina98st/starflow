'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: '🛸',
    title: 'Hyperdrive Automation',
    description:
      'Set workflows in motion and watch them execute at warp speed. Automate repetitive tasks across your entire galaxy of tools.',
    color: '#4fc3f7',
  },
  {
    icon: '🌌',
    title: 'Deep Space Analytics',
    description:
      'Explore your data like never before. Real-time dashboards that map the universe of your business metrics.',
    color: '#ce93d8',
  },
  {
    icon: '⭐',
    title: 'Stellar Collaboration',
    description:
      'Bring your crew together across any timezone. Shared workspaces with live presence and instant sync.',
    color: '#80deea',
  },
  {
    icon: '🚀',
    title: 'Zero-Gravity Deployment',
    description:
      'Ship at the speed of thought. One-click deployments with automatic rollbacks if anything drifts off course.',
    color: '#ffb74d',
  },
  {
    icon: '🔭',
    title: 'AI Mission Control',
    description:
      'Your AI co-pilot monitors everything, surfaces anomalies before they become crises, and suggests optimal trajectories.',
    color: '#a5d6a7',
  },
  {
    icon: '🛡️',
    title: 'Quantum Security',
    description:
      'Enterprise-grade encryption and zero-trust architecture that keeps your data safe from even the darkest corners of space.',
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
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="glass glass-hover rounded-2xl p-7 flex flex-col gap-4"
    >
      <div
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
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <p className="text-cyan-400 text-sm tracking-[0.25em] uppercase font-medium mb-4">
          Mission Capabilities
        </p>
        <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
          Everything you need to{' '}
          <span
            className="glow-text-purple text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(90deg, #ce93d8, #4fc3f7)',
            }}
          >
            reach orbit
          </span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto">
          A complete platform built for teams who move fast and aim higher.
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
