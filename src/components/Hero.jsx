import Spline from '@splinetool/react-spline';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-end px-4 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            Modern. Digital. Impactful.
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Switch Media
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            We craft striking content, seamless streaming, and brand experiences that
            turn audiences into advocates. Switch on your media presence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition-shadow"
            >
              Start a project
              <ArrowRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
            >
              <PlayCircle size={18} />
              View our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
