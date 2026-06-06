'use client'

import { useMemo } from 'react'

interface Star {
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

const STAR_COLORS = [
  'rgba(255,255,255,0.9)',
  'rgba(79,195,247,0.8)',
  'rgba(206,147,216,0.7)',
  'rgba(128,222,234,0.8)',
]

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
  }))
}

export default function StarField() {
  const stars = useMemo(() => generateStars(180), [])

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {stars.map((star, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            '--duration': `${star.duration}s`,
            '--delay': `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Nebula blobs */}
      <div
        className="nebula absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: '-10%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(21,101,192,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="nebula absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: '5%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(106,27,154,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '-5s',
        }}
      />
      <div
        className="nebula absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          top: '40%',
          left: '35%',
          background: 'radial-gradient(circle, rgba(0,96,100,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '-10s',
        }}
      />
    </div>
  )
}
