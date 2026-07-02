export function Hero() {
  return (
    <section className="relative border-b border-hairline">
      {/* topographic grid backdrop */}
      <TopoBackdrop />

      {/* top nav bar */}
      <div className="relative border-b border-hairline">
        <div className="mx-auto max-w-[1400px] px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 bg-seafoam" />
            <span className="font-mono text-[11px] tracking-[0.24em] uppercase text-ink">
              GetReef<span className="text-ink-muted">.ai</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
            <a href="#platform" className="hover:text-ink transition-colors">Platform</a>
            <a href="#method" className="hover:text-ink transition-colors">Method</a>
            <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
            <a href="#log" className="hover:text-ink transition-colors">Field Log</a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              STATUS <span className="text-seafoam">● LIVE</span>
            </span>
            <a
              href="#request"
              className="font-mono text-[10px] uppercase tracking-[0.22em] px-3 py-1.5 border border-hairline-strong text-ink hover:bg-hairline transition-colors"
            >
              Request Access
            </a>
          </div>
        </div>
      </div>

      {/* Hero body */}
      <div className="relative mx-auto max-w-[1400px] px-8 pt-24 pb-32 md:pt-32 md:pb-40">
        {/* Editorial coordinate strip */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-10 bg-hairline-strong" />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted">
            THE NEXT FRONTIER OF ORGANIC SEARCH
          </span>
          <div className="h-px flex-1 bg-hairline" />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted">
            TRANSITIONING FROM SEO TO GEO
          </span>
          <div className="h-px w-10 bg-hairline-strong" />
        </div>

        {/* Editorial headline */}
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-9">
            <h1 className="font-serif text-ink leading-[0.92] tracking-[-0.02em]"
                style={{ fontSize: "clamp(3.5rem, 10vw, 9.5rem)" }}>
              Ride the
              <br />
              <span className="italic text-ink-dim">semantic</span> wave.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:pb-6">
            <div className="border-l border-hairline-strong pl-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted mb-2">
                VOL. I / ISSUE 01
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">
                MMXXVI · ABYSSAL EDITION
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              § 001
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-ink-dim text-[15px] leading-[1.7] max-w-[54ch]">
              AI search engines are rewriting the web. GetReef.ai maps the deep currents
              of LLM citations, ensuring your brand stays at the crest of generative
              answers. Built for high-ticket B2B SaaS.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a
                href="#request"
                className="group inline-flex items-center gap-3 bg-ink text-abyss px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-seafoam transition-colors"
                style={{ borderRadius: 2 }}
              >
                Chart Your Reef
                <span aria-hidden className="inline-block w-4 h-px bg-abyss group-hover:w-6 transition-all" />
              </a>
              <a
                href="#platform"
                className="inline-flex items-center gap-3 border border-hairline-strong text-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] hover:border-ink-dim transition-colors"
                style={{ borderRadius: 2 }}
              >
                View The Instrument
              </a>
            </div>
          </div>

          {/* right meta column */}
          <div className="col-span-12 md:col-span-5 md:pl-8 md:border-l border-hairline">
            <dl className="grid grid-cols-2 gap-6 font-mono text-[10px] uppercase tracking-[0.2em]">
              <div>
                <dt className="text-ink-muted mb-2">Coverage</dt>
                <dd className="text-ink text-[13px] tracking-[0.08em]">
                  ChatGPT · Perplexity · Gemini · Claude
                </dd>
              </div>
              <div>
                <dt className="text-ink-muted mb-2">Sampling</dt>
                <dd className="text-ink text-[13px] tracking-[0.08em]">
                  2,400 prompts / week
                </dd>
              </div>
              <div>
                <dt className="text-ink-muted mb-2">Latency</dt>
                <dd className="text-ink text-[13px] tracking-[0.08em]">Δ &lt; 6h</dd>
              </div>
              <div>
                <dt className="text-ink-muted mb-2">Vertical</dt>
                <dd className="text-ink text-[13px] tracking-[0.08em]">B2B SaaS · Enterprise</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopoBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-[0.14]" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1e293b" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <svg className="absolute inset-0 w-full h-full opacity-[0.25] swell-anim"
           viewBox="0 0 1400 800" preserveAspectRatio="none">
        {Array.from({ length: 14 }).map((_, i) => {
          const y = 120 + i * 45;
          const amp = 8 + i * 2;
          const d = `M -50 ${y} Q 350 ${y - amp} 700 ${y} T 1450 ${y}`;
          return (
            <path key={i} d={d} fill="none" stroke="#1e293b" strokeWidth="0.6" />
          );
        })}
      </svg>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-abyss to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-abyss to-transparent" />
    </div>
  );
}
