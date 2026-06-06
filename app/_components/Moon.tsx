'use client'

import { useEffect, useRef } from 'react'

function drawMoon(ctx: CanvasRenderingContext2D, size: number) {
  const cx = size / 2
  const cy = size / 2
  const r  = size / 2 - 2

  ctx.clearRect(0, 0, size, size)
  ctx.save()

  // Clip to circle
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.clip()

  // 1. Base surface — radial gradient simulating sphere lit from top-left
  const base = ctx.createRadialGradient(cx * 0.60, cy * 0.52, 0, cx, cy, r)
  base.addColorStop(0,    '#f0eddc')
  base.addColorStop(0.28, '#d6d2b4')
  base.addColorStop(0.55, '#a8a68c')
  base.addColorStop(0.78, '#727060')
  base.addColorStop(1,    '#26261e')
  ctx.fillStyle = base
  ctx.fillRect(0, 0, size, size)

  // 2. Mare — dark basalt regions (soft ellipses)
  const drawMare = (x: number, y: number, rx: number, ry: number, alpha: number) => {
    ctx.save()
    ctx.beginPath()
    ctx.ellipse(x, y, rx, ry, -0.2, 0, Math.PI * 2)
    const g = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry))
    g.addColorStop(0,   `rgba(36, 34, 26, ${alpha})`)
    g.addColorStop(0.65,`rgba(36, 34, 26, ${alpha * 0.45})`)
    g.addColorStop(1,   'rgba(36, 34, 26, 0)')
    ctx.fillStyle = g
    ctx.fill()
    ctx.restore()
  }

  drawMare(cx + 24, cy - 30, 32, 25, 0.58) // Mare Serenitatis
  drawMare(cx + 20, cy + 14, 27, 23, 0.52) // Mare Tranquillitatis
  drawMare(cx - 22, cy - 24, 36, 30, 0.52) // Mare Imbrium
  drawMare(cx - 6,  cy + 34, 21, 18, 0.42) // Mare Nubium
  drawMare(cx + 38, cy - 50, 18, 14, 0.38) // Mare Frigoris

  // 3. Craters — floor gradient + lit rim highlight
  const drawCrater = (x: number, y: number, cr: number) => {
    // Dark floor
    const floor = ctx.createRadialGradient(x + cr * 0.15, y + cr * 0.15, 0, x, y, cr)
    floor.addColorStop(0,    'rgba(15, 14, 10, 0.72)')
    floor.addColorStop(0.6,  'rgba(22, 21, 16, 0.50)')
    floor.addColorStop(1,    'rgba(28, 26, 20, 0)')
    ctx.beginPath()
    ctx.arc(x, y, cr, 0, Math.PI * 2)
    ctx.fillStyle = floor
    ctx.fill()

    // Lit rim — bright arc on the top-left side
    const rim = ctx.createRadialGradient(
      x - cr * 0.32, y - cr * 0.32, cr * 0.68,
      x, y, cr * 1.18
    )
    rim.addColorStop(0,    'rgba(248, 244, 218, 0)')
    rim.addColorStop(0.86, 'rgba(228, 220, 178, 0.22)')
    rim.addColorStop(1,    'rgba(228, 220, 178, 0)')
    ctx.beginPath()
    ctx.arc(x, y, cr * 1.18, 0, Math.PI * 2)
    ctx.fillStyle = rim
    ctx.fill()
  }

  drawCrater(cx + 14,  cy - 52, 13)  // Plato
  drawCrater(cx - 28,  cy - 18, 12)  // Copernicus
  drawCrater(cx + 10,  cy + 58, 15)  // Tycho
  drawCrater(cx - 44,  cy - 38, 7.5)
  drawCrater(cx + 40,  cy + 20, 8.5)
  drawCrater(cx - 12,  cy + 34, 9)
  drawCrater(cx + 52,  cy - 14, 6)
  drawCrater(cx - 52,  cy + 20, 5.5)
  drawCrater(cx + 32,  cy + 54, 7)
  drawCrater(cx - 24,  cy + 60, 5)
  drawCrater(cx + 60,  cy + 40, 6.5)
  drawCrater(cx - 38,  cy + 44, 4.5)
  drawCrater(cx + 20,  cy - 76, 5.5)
  drawCrater(cx - 62,  cy - 18, 4)
  drawCrater(cx + 46,  cy - 58, 5)

  // 4. Limb darkening — edges fade to dark
  const limb = ctx.createRadialGradient(cx * 0.82, cy * 0.80, r * 0.42, cx, cy, r)
  limb.addColorStop(0.52, 'rgba(0,0,0,0)')
  limb.addColorStop(0.80, 'rgba(0,0,0,0.10)')
  limb.addColorStop(1,    'rgba(0,0,0,0.72)')
  ctx.fillStyle = limb
  ctx.fillRect(0, 0, size, size)

  // 5. Terminator — gibbous phase, night side on the right
  const term = ctx.createRadialGradient(cx + r * 1.08, cy, 8, cx + r * 0.88, cy, r * 1.35)
  term.addColorStop(0,    'rgba(0,0,0,0)')
  term.addColorStop(0.32, 'rgba(0,0,0,0)')
  term.addColorStop(0.62, 'rgba(0,0,0,0.50)')
  term.addColorStop(1,    'rgba(0,0,0,0.92)')
  ctx.fillStyle = term
  ctx.fillRect(0, 0, size, size)

  ctx.restore()
}

export default function Moon() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    drawMoon(ctx, canvas.width)
  }, [])

  return (
    <div className="relative float">
      {/* Atmosphere glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: '-40%',
          background:
            'radial-gradient(circle, rgba(210, 204, 158, 0.07) 0%, rgba(79, 195, 247, 0.05) 52%, transparent 72%)',
        }}
      />
      <canvas
        ref={canvasRef}
        width={240}
        height={240}
        style={{
          borderRadius: '50%',
          filter:
            'drop-shadow(0 0 28px rgba(210, 200, 150, 0.20)) drop-shadow(0 0 70px rgba(79, 195, 247, 0.10))',
        }}
      />
    </div>
  )
}
