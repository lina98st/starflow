import StarField from './_components/StarField'
import HeroSection from './_components/HeroSection'
import FeaturesSection from './_components/FeaturesSection'
import CTASection from './_components/CTASection'

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: '#050a14' }}>
      <StarField />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <span
          className="text-xl font-black tracking-tight text-transparent bg-clip-text"
          style={{ backgroundImage: 'linear-gradient(90deg, #4fc3f7, #ce93d8)' }}
        >
          ✦ Starflow
        </span>
        <div className="hidden sm:flex items-center gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-cyan-300 transition-colors">Features</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">Pricing</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">Docs</a>
        </div>
        <button className="glass glass-hover rounded-xl px-5 py-2 text-sm font-medium text-slate-200">
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
      <footer className="relative z-10 text-center py-10 text-slate-600 text-sm border-t border-white/5">
        © 2026 Starflow. All systems nominal.
      </footer>
    </main>
  )
}
