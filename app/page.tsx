import StarField from './_components/StarField'
import HeroSection from './_components/HeroSection'
import FeaturesSection from './_components/FeaturesSection'
import CTASection from './_components/CTASection'
import CustomCursor from './_components/CustomCursor'

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: '#050a14' }}>
      <CustomCursor />
      <StarField />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 lg:px-16 py-6 max-w-6xl mx-auto">
        <span
          className="text-xl font-black tracking-tight text-transparent bg-clip-text"
          style={{ backgroundImage: 'linear-gradient(90deg, #4fc3f7, #ce93d8)' }}
        >
          ✦ Starflow
        </span>
        <div
          className="hidden sm:flex items-center gap-8 text-sm font-light text-slate-300 tracking-wide"
          style={{ fontFamily: 'var(--font-geist-sans)' }}
        >
          <a href="#" className="hover:text-cyan-300 transition-colors">Explore</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">Charts</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">Events</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">Science</a>
        </div>
        <button
          className="glass glass-hover rounded-xl px-5 py-2 text-xs font-medium text-slate-200 tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-space-mono)' }}
        >
          Sign In
        </button>
      </nav>

      {/* Sections */}
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 text-center py-10 text-slate-600 text-xs border-t border-white/5 tracking-widest uppercase"
        style={{ fontFamily: 'var(--font-space-mono)' }}
      >
        © 2026 Starflow. The universe awaits.
      </footer>
    </main>
  )
}
