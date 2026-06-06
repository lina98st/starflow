export default function Moon() {
  return (
    <div className="relative float" style={{ width: 200, height: 200 }}>
      {/* Outer atmosphere glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: '-40%',
          background:
            'radial-gradient(circle, rgba(180,180,120,0.08) 0%, rgba(79,195,247,0.06) 50%, transparent 75%)',
        }}
      />

      {/* Moon body */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 32% 32%, #f0eedc 0%, #d4d2b8 22%, #a8a890 48%, #727060 72%, #3e3e30 100%)',
          boxShadow:
            '0 0 50px rgba(210, 205, 160, 0.2), 0 0 100px rgba(79, 195, 247, 0.1), 0 0 180px rgba(79, 195, 247, 0.05), inset -30px -24px 50px rgba(0, 0, 0, 0.55)',
        }}
      >
        {/* Craters */}
        <div
          className="absolute rounded-full"
          style={{
            width: 34, height: 34, top: '18%', left: '52%',
            background: 'radial-gradient(circle at 38% 38%, rgba(255,255,255,0.04), rgba(0,0,0,0.28))',
            boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.35), inset -1px -1px 2px rgba(255,255,255,0.06)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 20, height: 20, top: '54%', left: '22%',
            background: 'radial-gradient(circle at 38% 38%, rgba(255,255,255,0.04), rgba(0,0,0,0.24))',
            boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3), inset -1px -1px 2px rgba(255,255,255,0.05)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 14, height: 14, top: '34%', left: '38%',
            background: 'radial-gradient(circle at 38% 38%, rgba(255,255,255,0.03), rgba(0,0,0,0.22))',
            boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.28)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 26, height: 26, top: '62%', left: '58%',
            background: 'radial-gradient(circle at 38% 38%, rgba(255,255,255,0.04), rgba(0,0,0,0.26))',
            boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.32), inset -1px -1px 2px rgba(255,255,255,0.05)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 9, height: 9, top: '24%', left: '28%',
            background: 'radial-gradient(circle at 38% 38%, rgba(255,255,255,0.03), rgba(0,0,0,0.2))',
            boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.25)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 16, height: 16, top: '72%', left: '38%',
            background: 'radial-gradient(circle at 38% 38%, rgba(255,255,255,0.03), rgba(0,0,0,0.22))',
            boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.28)',
          }}
        />

        {/* Dark side overlay — terminator */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at 75% 55%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.45) 100%)',
          }}
        />
      </div>
    </div>
  )
}
