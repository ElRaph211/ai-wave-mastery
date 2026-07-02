import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-bg px-4 py-24 sm:px-6 lg:px-8">
      {/* Aurora / Wavy background layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora-blob aurora-blob-1 -left-1/4 -top-1/4" />
        <div className="aurora-blob aurora-blob-2 -right-1/4 top-1/3" />
        <div className="aurora-blob aurora-blob-3 left-1/3 -bottom-1/4" />
        {/* Subtle top-to-bottom gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-hero-bg/40 via-transparent to-hero-bg/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm">
          L'ère du SEO est finie, entrez dans le GEO
        </span>

        <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Dominez la vague de l'IA Search.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-hero-text-muted sm:text-lg md:text-xl">
          Suivez vos citations sur ChatGPT, Claude et Perplexity. Ajustez votre contenu. Ne perdez plus un seul lead.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-hero-cyan to-hero-electric px-7 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-12px_var(--color-hero-cyan)] transition-all hover:shadow-[0_0_60px_-8px_var(--color-hero-cyan)] hover:brightness-110">
            Prendre la vague (Beta gratuite)
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10">
            <Play className="h-4 w-4 fill-current" />
            Voir la démo
          </button>
        </div>

        {/* Piliers / stats */}
        <div className="mt-16 flex flex-col items-stretch justify-center gap-6 sm:flex-row sm:gap-10">
          <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center backdrop-blur-sm transition-colors hover:bg-white/[0.06]">
            <span className="text-2xl">📈</span>
            <span className="mt-2 text-sm font-medium text-white">Share of Voice</span>
            <span className="text-xs text-hero-text-muted">Visibilité</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center backdrop-blur-sm transition-colors hover:bg-white/[0.06]">
            <span className="text-2xl">🎯</span>
            <span className="mt-2 text-sm font-medium text-white">Position dans les réponses</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center backdrop-blur-sm transition-colors hover:bg-white/[0.06]">
            <span className="text-2xl">💬</span>
            <span className="mt-2 text-sm font-medium text-white">Analyse du Sentiment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
