import { useState, useEffect } from "react";
import founderPhoto from "@/assets/founder-raphael.jpg";

const AI_PLATFORMS = [
  {
    name: "ChatGPT",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[0.9em] h-[0.9em]" fill="#10a37f" aria-hidden="true">
        <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.52-2.9A6.06 6.06 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .52 4.91 6.05 6.05 0 0 0 6.52 2.9 5.98 5.98 0 0 0 4.51 2.01 6.05 6.05 0 0 0 5.77-4.2 5.98 5.98 0 0 0 4-2.9 6.05 6.05 0 0 0-.76-7.08zM13.26 21.5a4.49 4.49 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.78.78 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zM3.6 17.38a4.48 4.48 0 0 1-.54-3.03l.14.09 4.78 2.76a.78.78 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19a4.5 4.5 0 0 1-6.14-1.65zM2.34 7.9a4.48 4.48 0 0 1 2.36-1.98v5.68a.77.77 0 0 0 .39.68l5.82 3.36-2.02 1.17a.08.08 0 0 1-.07 0L3.98 14a4.5 4.5 0 0 1-1.64-6.1zm16.6 3.86L13.1 8.38l2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.5 4.5 0 0 1-.68 8.1v-5.68a.78.78 0 0 0-.4-.67zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.4 9.24V6.9a.07.07 0 0 1 .03-.06l4.83-2.78a4.5 4.5 0 0 1 6.68 4.66zM8.3 12.87l-2.02-1.17a.07.07 0 0 1-.04-.05V6.07a4.5 4.5 0 0 1 7.38-3.46l-.14.08L8.7 5.46a.78.78 0 0 0-.39.68zm1.1-2.37L12 8.99l2.6 1.5v3l-2.6 1.5-2.6-1.5z"/>
      </svg>
    ),
    color: "#10a37f",
  },
  {
    name: "Gemini",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[0.9em] h-[0.9em]" aria-hidden="true">
        <defs>
          <linearGradient id="gem-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4796E3" />
            <stop offset="50%" stopColor="#8F6FE8" />
            <stop offset="100%" stopColor="#E8624D" />
          </linearGradient>
        </defs>
        <path fill="url(#gem-grad)" d="M12 0c.7 5.5 4.5 9.3 10 10-5.5.7-9.3 4.5-10 10-.7-5.5-4.5-9.3-10-10 5.5-.7 9.3-4.5 10-10z"/>
      </svg>
    ),
    color: "#4796E3",
  },
  {
    name: "Perplexity",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[0.9em] h-[0.9em]" fill="none" stroke="#20808D" strokeWidth="1.6" aria-hidden="true">
        <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/>
      </svg>
    ),
    color: "#20808D",
  },
  {
    name: "Claude",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[0.9em] h-[0.9em]" fill="#D97757" aria-hidden="true">
        <path d="M12 2v6M12 16v6M2 12h6M16 12h6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2"/>
        <circle cx="12" cy="12" r="2.2"/>
      </svg>
    ),
    color: "#D97757",
  },
];

function RotatingPlatform() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % AI_PLATFORMS.length), 3000);
    return () => clearInterval(id);
  }, []);
  const p = AI_PLATFORMS[index];
  return (
    <span
      key={p.name}
      className="inline-flex items-center gap-[0.25em] align-baseline animate-[fadeInUp_0.5s_ease-out]"
    >
      <span className="inline-flex items-center justify-center">{p.icon}</span>
      <span>{p.name}</span>
    </span>
  );
}


export function Hero() {
  return (
    <section className="relative bg-white">
      {/* Pre-sale banner — dark, founding access style */}
      <div className="w-full bg-[#0b1220] text-white">
        <div className="mx-auto max-w-[1400px] px-6 h-11 flex items-center justify-between gap-4 text-[13px]">
          <div className="flex items-center gap-2 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Founding cohort open
          </div>
          <div className="hidden md:block text-neutral-400">
            First 50 founders get lifetime pricing. No enterprise sales call, no annual contract.
          </div>
          <a href="#" className="font-medium underline underline-offset-4 decoration-neutral-500 hover:decoration-white transition-colors whitespace-nowrap">
            Claim a spot →
          </a>
        </div>
      </div>


      {/* Nav */}
      <header className="border-b border-hairline bg-white">
        <div className="relative mx-auto max-w-[1400px] px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 rounded-[4px] bg-ink" />
            <span className="text-[17px] font-semibold tracking-tight text-ink">{"{{PRODUCT_NAME}}"}</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-ink absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#" className="hover:text-ink-muted transition-colors">Features</a>
            <a href="#" className="hover:text-ink-muted transition-colors">Pricing</a>
            <a href="#" className="hover:text-ink-muted transition-colors">How it works</a>
            <a href="#" className="hover:text-ink-muted transition-colors">Affiliation</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden sm:inline-flex items-center h-9 px-4 text-[14px] font-medium text-ink hover:text-ink-muted transition-colors"
            >
              Log in
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-cta text-cta-foreground text-[14px] font-medium hover:bg-cta/90 transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            >
              Book a demo
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </header>


      {/* Hero — two-column: copy left on clean bg, painterly illustration right */}
      <div className="relative bg-white border-b border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT — copy stack on clean background */}
            <div className="max-w-[600px]">
              <div className="inline-flex items-center gap-2 h-7 px-3 rounded-full border border-hairline bg-white text-[12px] font-medium text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Founding cohort · 50 spots
              </div>

              <h1
                className="mt-5 text-ink font-semibold tracking-[-0.03em] leading-[1.04]"
                style={{ fontSize: "clamp(2rem, 4.4vw, 3.75rem)" }}
              >
                Your next signup is asking
                {" "}
                <RotatingPlatform />
                {" "}
                which SaaS to buy. Is it naming you?
              </h1>

              <p className="mt-5 text-[15px] md:text-[17px] leading-[1.55] text-neutral-600">
                Track your <Chip icon={<EyeIcon />}>Visibility</Chip>, <Chip icon={<PositionIcon />}>Position</Chip>, and <Chip icon={<SmileIcon />}>Sentiment</Chip> across the AI models that matter — then fix the gaps that cost you signups.
              </p>

              {/* URL audit */}
              <div className="mt-6 max-w-[520px]">
                <div className="flex items-center gap-2 h-12 md:h-14 pl-5 pr-2 rounded-full bg-white border border-hairline shadow-[0_10px_30px_-15px_rgba(15,45,82,0.25)]">
                  <input
                    type="url"
                    placeholder="yoursaas.com"
                    className="flex-1 min-w-0 bg-transparent border-none text-[15px] md:text-[16px] text-ink placeholder:text-neutral-400 outline-none focus:ring-0"
                  />
                  <button className="flex-shrink-0 h-10 md:h-11 px-4 md:px-5 rounded-full bg-cta text-cta-foreground text-[13px] md:text-[14px] font-medium whitespace-nowrap hover:bg-cta/90 transition-colors">
                    Check my AI score
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Score in under 30 seconds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    No credit card, no sales call
                  </span>
                </div>
              </div>

              {/* Two CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-cta text-cta-foreground text-[14px] font-medium shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:bg-cta/90 transition-colors"
                >
                  Start now
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-white border border-hairline text-ink text-[14px] font-medium hover:bg-neutral-50 transition-colors"
                >
                  Book a demo
                </a>
              </div>

              {/* Trust bar — avatars + stars + line, in-hero */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="flex -space-x-2">
                  {["MR", "JL", "AK", "SC", "DK"].map((initials, i) => (
                    <div
                      key={i}
                      className={`inline-flex items-center justify-center h-8 w-8 rounded-full border-2 border-white text-[10px] font-semibold text-white ${
                        i % 2 === 0 ? "bg-cta" : "bg-cta/70"
                      }`}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-star" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[13px] md:text-[14px] font-medium text-ink max-w-[380px]">
                  Built with founders in the beta cohort — not for enterprise SEO teams
                </p>
              </div>

              {/* Honest pre-launch proof line */}
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px] text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                  6 AI models tracked
                </span>
                <span className="hidden sm:inline text-neutral-300">·</span>
                <span>Built in public by a solo founder</span>
                <span className="hidden sm:inline text-neutral-300">·</span>
                <span>Founding price locked for life</span>
              </div>
            </div>

            {/* RIGHT — clean minimal product preview on soft gradient */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[5/6] bg-gradient-to-br from-[#0b1220] via-[#0f1a2e] to-[#0b1220] shadow-[0_30px_80px_-30px_rgba(15,45,82,0.35)]">
                {/* subtle grid */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                  }}
                />
                {/* corner glow */}
                <div
                  aria-hidden="true"
                  className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(56,189,248,0.35), transparent 65%)" }}
                />
                {/* subtle abstract wave — vestigial ocean motif */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 500 120"
                  preserveAspectRatio="none"
                  className="absolute inset-x-0 bottom-0 w-full h-32"
                >
                  <defs>
                    <linearGradient id="wave-fade" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,70 C120,20 260,110 380,50 C440,20 480,60 500,50 L500,120 L0,120 Z" fill="url(#wave-fade)" />
                </svg>

                {/* floating dashboard preview card */}
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
                  <div className="w-full max-w-[380px] rounded-2xl bg-white/[0.97] backdrop-blur border border-white/60 p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        <span className="text-[12px] font-medium text-neutral-500">Live · yoursaas.com</span>
                      </div>
                      <span className="text-[11px] text-neutral-400">2m ago</span>
                    </div>

                    <div className="mt-6 space-y-5">
                      <MetricRow label="Visibility" value="68%" pct={68} tone="sky" />
                      <MetricRow label="Position" value="#3" pct={80} tone="ink" />
                      <MetricRow label="Sentiment" value="92%" pct={92} tone="emerald" />
                    </div>

                    <div className="mt-6 pt-5 border-t border-hairline">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-neutral-400 font-semibold">Next action</div>
                      <div className="mt-2 flex items-start gap-2">
                        <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cta/10 text-cta text-[10px] font-bold flex-shrink-0">→</span>
                        <div className="text-[13px] font-medium text-ink leading-snug">
                          Answer r/SaaS thread — high citation odds
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Social proof */}
      <div className="mx-auto max-w-[800px] px-6 pt-20 pb-16 text-center">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <div className="flex -space-x-2">
              {["MR", "JL", "AK", "SC", "DK"].map((initials, i) => (
                <div
                  key={i}
                  className={`inline-flex items-center justify-center h-9 w-9 rounded-full border-2 border-white text-[11px] font-semibold text-white ${
                    i % 2 === 0 ? "bg-cta" : "bg-cta/70"
                  }`}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-star" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[16px] md:text-[18px] font-semibold text-ink">
              Built with founders in the beta cohort — not for enterprise SEO teams
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 md:gap-16 text-center">
            <div>
              <div className="text-[28px] md:text-[40px] font-semibold tracking-tight text-ink">6</div>
              <div className="text-[13px] md:text-[14px] text-neutral-500">AI models tracked</div>
            </div>
            <div>
              <div className="text-[28px] md:text-[40px] font-semibold tracking-tight text-ink">24h</div>
              <div className="text-[13px] md:text-[14px] text-neutral-500">to your first signal</div>
            </div>
            <div>
              <div className="text-[28px] md:text-[40px] font-semibold tracking-tight text-ink">50</div>
              <div className="text-[13px] md:text-[14px] text-neutral-500">founding spots</div>
            </div>
          </div>
        </div>
      </div>


      {/* Video sales letter placeholder */}
      <div className="border-t border-hairline bg-white bg-grid">
        <div className="mx-auto max-w-[960px] px-6 py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full border border-hairline bg-white text-[13px] text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="h-2 w-2 rounded-full bg-cta" />
              2-min walkthrough
            </div>
            <h2 className="mt-6 text-ink font-semibold tracking-[-0.03em]" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
              What ChatGPT tells your next signup about you.
            </h2>
          </div>
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-hairline bg-[#0b1220] shadow-[0_30px_80px_-30px_rgba(15,45,82,0.45)] group cursor-pointer">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(56,189,248,0.25),transparent_70%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                aria-label="Play video"
                className="flex items-center justify-center h-20 w-20 rounded-full bg-cta text-cta-foreground shadow-[0_10px_30px_rgba(56,189,248,0.6)] transition-transform group-hover:scale-110"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-4 left-4 text-white/80 text-[13px] font-medium">
              {"{{PRODUCT_NAME}}"} — Founder walkthrough · 2:14
            </div>
          </div>
        </div>
      </div>

      {/* Unified SaaS trust block */}
      <div className="border-t border-hairline bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <p className="text-center text-[14px] text-neutral-500">
            Founding SaaS shipping with {"{{PRODUCT_NAME}}"} instead of guessing at AI rankings
          </p>

          <div className="mt-10">
            <LogoMarquee />
          </div>
        </div>
      </div>


      {/* AI Search Metrics section */}
      <div className="border-t border-hairline bg-[#faf5ec]">
        <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full border border-hairline bg-white text-[13px] text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l2.4 6.4L21 10l-5.4 3.6L18 21l-6-4-6 4 2.4-7.4L3 10l6.6-1.6L12 2z" />
            </svg>
            AI Search Metrics
          </div>
          <h2
            className="mt-8 mx-auto text-ink font-semibold tracking-[-0.03em] leading-[1.02]"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", maxWidth: "22ch" }}
          >
            Three numbers that tell you if you're actually in the answer.
          </h2>
          <p className="mt-6 mx-auto max-w-[720px] text-[19px] leading-[1.55] text-neutral-500">
            A score is not a strategy. Every metric here comes with the exact next thing to ship.
          </p>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
            {/* Left column — 3 metric cards */}
            <div className="flex flex-col gap-6">
              <MetricCard
                accent
                icon={<EyeIcon />}
                title="Visibility"
                body="What share of buyer questions in your category name your product at all. If it's under 20%, you're invisible — and we tell you which prompts to go earn first."
              />
              <MetricCard
                icon={<PositionIcon />}
                title="Position"
                body="When you do show up, where in the answer — first, buried at #7, or an afterthought. Position is what turns a mention into a signup."
              />
              <MetricCard
                accent
                icon={<SmileIcon />}
                title="Sentiment"
                body="What the model actually says about you next to competitors. Catch a bad framing before it becomes the default answer for the next 10,000 buyers."
              />
            </div>

            {/* Right column — chat mockup */}
            <div className="rounded-2xl border border-hairline bg-white p-8 md:p-10">
              <div className="flex justify-end">
                <div className="inline-flex items-center h-10 px-4 rounded-full border border-hairline bg-white text-[14px] text-ink">
                  Best AI visibility tracker for bootstrapped SaaS founders?
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-ink flex items-center justify-center text-white text-[11px] font-semibold">GPT</div>
                <div className="flex-1 rounded-xl border border-hairline p-5 space-y-5">
                  <p className="text-[14px] leading-[1.65] text-ink">
                    For a solo founder tracking how AI answers surface your product, a few tools stand out in 2026. Here's what I'd actually recommend based on price, setup time, and whether they tell you what to do next.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center h-6 px-2 rounded-md border border-hairline text-[11px] text-neutral-500 font-mono">#1</span>
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-ink text-white text-[10px] font-semibold">P</span>
                      <span className="text-[14px] font-semibold text-ink">Peec AI</span>
                    </div>
                    <p className="text-[14px] leading-[1.65] text-ink">
                      Peec gives you a <mark className="bg-emerald-100 text-ink px-1 rounded">clean dashboard across ChatGPT, Claude and Perplexity</mark> and <mark className="bg-emerald-100 text-ink px-1 rounded">daily refresh out of the box</mark>. Downside: it <mark className="bg-red-100 text-ink px-1 rounded">stops at the score — no guidance on what to actually ship next</mark>.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center h-6 px-2 rounded-md border border-hairline text-[11px] text-neutral-500 font-mono">#2</span>
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-ink text-white text-[10px] font-semibold">O</span>
                      <span className="text-[14px] font-semibold text-ink">Otterly</span>
                    </div>
                    <p className="text-[14px] leading-[1.65] text-ink">
                      Otterly is <mark className="bg-emerald-100 text-ink px-1 rounded">easy to set up in a weekend</mark>. Coverage is thinner on newer models and reports lean more on visualization than on concrete next actions.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center h-6 px-2 rounded-md border border-hairline text-[11px] text-neutral-500 font-mono">#3</span>
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-ink text-white text-[10px] font-semibold">{"{"}</span>
                      <span className="text-[14px] font-semibold text-ink">{"{{PRODUCT_NAME}}"}</span>
                    </div>
                    <div className="relative">
                      <p className="text-[14px] leading-[1.65] text-ink">
                        Built specifically for indie SaaS founders. Every missed prompt comes with <mark className="bg-emerald-100 text-ink px-1 rounded">an exact next action — a Reddit thread to answer, a listicle to pitch, a page to rewrite</mark>. Priced for a bootstrapped stack, not an enterprise seat.
                      </p>

                      {/* Sentiment tooltip */}
                      <div className="hidden md:block absolute -right-2 -bottom-4 translate-y-full w-[300px] rounded-xl bg-[#0b1220] text-white p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)]">
                        <div className="flex items-center justify-between">
                          <span className="text-[12px] text-neutral-400">Positive Sentiment</span>
                          <span className="inline-flex items-center justify-center h-5 w-5 rounded bg-white/10 text-[10px]">◎</span>
                        </div>
                        <div className="mt-2 inline-flex items-center h-6 px-2 rounded border-l-2 border-emerald-400 bg-white/5 text-[13px] font-semibold">
                          96
                        </div>
                        <p className="mt-3 text-[12px] leading-[1.5] text-neutral-300">
                          Framed as the founder-friendly option that pairs monitoring with a concrete next step.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key features — Hawaii pixel backdrop */}
      <KeyFeaturesPixel />

      {/* Prompts — new search engines */}
      <div className="border-t border-hairline bg-white bg-grid">
        <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-6 text-center">
          <h2
            className="mx-auto text-ink font-semibold tracking-[-0.03em] leading-[1.05]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)", maxWidth: "22ch" }}
          >
            AI is the new distribution channel for SaaS.
            <br />
            <span className="text-neutral-500">Track the prompts your next 100 signups are actually asking.</span>
          </h2>
        </div>
        <PromptsMarquee />
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Big CTA */}
      <BigCta />

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <div className="border-t border-hairline bg-white">
        <div className="mx-auto max-w-[880px] px-6 py-24">
          <div className="text-center">
            <h2 className="text-ink font-semibold tracking-[-0.03em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
              FAQs
            </h2>
            <p className="mt-4 text-[17px] md:text-[19px] leading-[1.5] text-neutral-500">
              What founders ask us before they claim a founding spot in
              <br className="hidden md:block" /> {"{{PRODUCT_NAME}}"}.
            </p>
          </div>
          <div className="mt-14">
            <FaqList />
          </div>
        </div>
      </div>

      {/* Footer */}
      <SiteFooter />
    </section>
  );
}

function Pricing() {
  const [yearly, setYearly] = useState(true);
  const monthlyBase = 79;
  const discounted = 55; // 79 * 0.7 ≈ 55.30 → 55
  const yearlyPrice = discounted * 10; // 2 months free
  const yearlySavings = monthlyBase * 12 - yearlyPrice;
  const monthlySavings = monthlyBase - discounted;

  const price = yearly ? yearlyPrice : discounted;
  const suffix = yearly ? "/year" : "/month";
  const savingsLabel = yearly
    ? `You save €${yearlySavings}/year vs monthly at €${monthlyBase}`
    : `You save €${monthlySavings}/month`;

  return (
    <section className="relative bg-[#faf5ec] border-y border-hairline bg-grid">
      <div className="mx-auto max-w-[1120px] px-6 py-24 md:py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-sky-600 uppercase">
            <span className="h-px w-8 bg-sky-500" /> Pricing
          </div>
          <h2 className="mt-6 text-ink font-semibold tracking-[-0.03em]" style={{ fontSize: "clamp(2rem, 4.8vw, 3.5rem)", lineHeight: 1.05 }}>
            Priced for a founder's stack, <em className="not-italic text-sky-500 italic font-semibold">locked forever</em> for the first 50.
          </h2>
        </div>

        <div className="mt-14 mx-auto max-w-[560px] rounded-[24px] bg-white shadow-[0_20px_60px_-20px_rgba(15,45,82,0.18)] border border-hairline p-8 md:p-10 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center rounded-full bg-sky-500 text-white px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase">
              Founding member · –30%
            </span>
          </div>

          <div className="mt-4 text-center">
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-neutral-400 line-through text-[22px] font-medium">€{yearly ? monthlyBase * 12 : monthlyBase}</span>
              <span className="text-ink font-semibold" style={{ fontSize: "clamp(3rem, 7vw, 4.5rem)", lineHeight: 1 }}>€{price}</span>
              <span className="text-neutral-500 text-[18px]">{suffix}</span>
            </div>

            <div className="mt-5 flex items-center justify-center">
              <div className="relative inline-flex items-center p-1 rounded-full bg-neutral-100 border border-hairline">
                <span
                  aria-hidden="true"
                  className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-ink shadow-sm transition-transform duration-200 ease-out ${yearly ? "translate-x-full" : "translate-x-0"}`}
                  style={{ left: 4 }}
                />
                <button
                  type="button"
                  onClick={() => setYearly(false)}
                  className={`relative z-10 h-9 px-5 rounded-full text-[13px] font-medium transition-colors ${!yearly ? "text-white" : "text-neutral-600 hover:text-ink"}`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setYearly(true)}
                  className={`relative z-10 h-9 px-5 rounded-full text-[13px] font-medium transition-colors ${yearly ? "text-white" : "text-neutral-600 hover:text-ink"}`}
                >
                  Yearly <span className={yearly ? "text-emerald-300" : "text-emerald-600"}>· 2 months free</span>
                </button>
              </div>
            </div>


            <div className="mt-5 inline-flex items-center rounded-full bg-sky-50 text-sky-700 px-4 py-1.5 text-[13px] font-semibold">
              Pre-launch offer · {savingsLabel}
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-sky-50/70 border border-sky-100 p-5 text-center text-[14.5px] text-ink/80 leading-relaxed">
            One SaaS, tracked across every model that matters. Founding price is locked for life — after launch, this plan goes back to €{monthlyBase}/month.
          </div>

          <div className="mt-8 min-h-[140px]" aria-hidden="true" />

          <button
            type="button"
            className="mt-2 w-full rounded-2xl bg-sky-500 hover:bg-sky-600 transition-colors text-white font-semibold py-4 text-[16px]"
          >
            Claim your founding spot →
          </button>
          <p className="mt-4 text-center text-[13px] text-neutral-500">
            Cancel from the dashboard in one click. No calls, no annual contract.
          </p>
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
  const items = [
    {
      quote: "I found out ChatGPT was recommending a competitor for a query I literally built my product around. Two weeks of pointed content later, I'm the #1 answer. That's the whole game.",
      name: "Founder, beta cohort",
      role: "Indie SaaS · $2K MRR",
      company: "BETA",
    },
    {
      quote: "Other tools told me my score was 34. Cool. This one told me exactly which four Reddit threads I needed to answer this week. That's actionable.",
      name: "Founder, beta cohort",
      role: "Bootstrapped devtool",
      company: "BETA",
    },
    {
      quote: "I'm a solo founder. I don't have time for a dashboard I have to interpret. I want a to-do list. This is the first GEO tool that gives me one.",
      name: "Founder, beta cohort",
      role: "Solo B2B SaaS",
      company: "BETA",
    },
    {
      quote: "Priced like a Stripe subscription, not like a Salesforce add-on. Finally.",
      name: "Founder, beta cohort",
      role: "Building in public",
      company: "BETA",
    },
    {
      quote: "I shipped one landing page based on a suggested prompt on Monday. By Friday it was cited by Claude. First time a marketing tool has paid for itself that fast.",
      name: "Founder, beta cohort",
      role: "AI-native SaaS",
      company: "BETA",
    },
    {
      quote: "I was ready to hire a GEO agency for €3K/month. Cancelled the intro call after one afternoon with this.",
      name: "Founder, beta cohort",
      role: "Bootstrapped, pre-seed",
      company: "BETA",
    },
  ];
  const row1 = items.slice(0, 3);
  const row2 = items.slice(3, 6);
  const offsets1 = ["mt-0", "mt-3", "mt-6"];
  const offsets2 = ["mt-6", "mt-0", "mt-3"];
  return (
    <div className="relative border-t border-hairline bg-[#faf5ec] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-6 relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full border border-hairline bg-white text-[13px] text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
            </svg>
            Testimonials
          </div>
          <h2
            className="mt-8 mx-auto text-ink font-semibold tracking-[-0.03em] leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", maxWidth: "20ch" }}
          >
            What founders in the beta cohort are actually saying about{" "}
            <span className="text-cta">{"{{PRODUCT_NAME}}"}</span>.
          </h2>
        </div>
      </div>

      <div className="relative pt-10 pb-20 space-y-4">
        <TestimonialRow items={row1} offsets={offsets1} duration={65} />
        <TestimonialRow items={row2} offsets={offsets2} duration={80} reverse />
      </div>
    </div>
  );
}

function TestimonialRow({
  items, offsets, duration, reverse,
}: { items: any[]; offsets: string[]; duration: number; reverse?: boolean }) {
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#faf5ec] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#faf5ec] to-transparent z-10 pointer-events-none" />
      <div
        className="flex items-start gap-6 whitespace-nowrap hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((t, i) => (
          <div key={i} className={`flex-shrink-0 w-[380px] md:w-[440px] ${offsets[i % offsets.length]}`}>
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({
  quote, name, role, company,
}: { quote: string; name: string; role: string; company: string }) {
  return (
    <div className="rounded-2xl bg-white border border-hairline p-7 flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(15,45,82,0.2)] whitespace-normal min-h-[280px]">
      <p className="text-[15px] leading-[1.65] text-neutral-600 flex-1">{quote}</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-cta text-white text-[13px] font-semibold flex-shrink-0">
            {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </span>
          <div className="min-w-0">
            <div className="text-[15px] font-semibold text-ink truncate">{name}</div>
            <div className="text-[13px] text-neutral-500 truncate">{role}</div>
          </div>
        </div>
        <span className="text-[13px] font-bold tracking-[0.12em] text-neutral-400">{company}</span>
      </div>
    </div>
  );
}

function KeyFeaturesPixel() {
  return (
    <div className="relative overflow-hidden border-t border-hairline bg-[#e8895a]">
      <img
        src={featuresPixel}
        alt="Painterly Hawaiian sunset with cliff, waterfall and hibiscus"
        width={1024}
        height={1408}
        loading="lazy"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />
      {/* Warm dark overlay so white type stays crisp */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/60"
      />
      {/* Bottom fade to cream page */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#faf5ec] to-transparent"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-24 md:pt-32 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full bg-white/90 backdrop-blur border border-white text-[13px] text-ink shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 7a4 4 0 11-4 4V7a4 4 0 014-4z" />
              <path d="M11 11L3 19l2 2 8-8" />
            </svg>
            Key features
          </div>
          <h2
            className="mt-8 mx-auto text-white font-semibold tracking-[-0.03em] leading-[1.02] drop-shadow-[0_2px_20px_rgba(15,45,82,0.4)]"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", maxWidth: "22ch" }}
          >
            Every score comes with the exact next thing to ship.
          </h2>
          <p className="mt-6 mx-auto max-w-[720px] text-[17px] md:text-[18px] leading-[1.55] text-white/95 drop-shadow-[0_1px_10px_rgba(15,45,82,0.35)]">
            Most GEO tools hand you a number and wish you luck. {"{{PRODUCT_NAME}}"} hands you a to-do list your future signups will find you through.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeaturePixelCard
            title="Track the prompts that matter"
            body="Paste your product or auto-import the buyer questions in your category — start seeing your rank in ChatGPT, Claude, Gemini and Perplexity within 24h."
            mock={<TrackedPromptsMock />}
          />
          <FeaturePixelCard
            title="Get suggested prompts, ranked by volume"
            body="Stop guessing what to track. We surface the queries buyers in your niche actually ask, sorted by traffic potential — so you only write content that could move signups."
            mock={<SuggestedPromptsMock />}
          />
          <FeaturePixelCard
            title="See exactly who's beating you"
            body="Drop in your top 3 competitors and watch head-to-head rankings shift model by model. Know when a competitor launches content that steals a query — and copy the play."
            mock={<AddBrandsMock />}
          />
          <FeaturePixelCard
            title="Pick the models your buyers actually use"
            body="ChatGPT, Claude, Gemini, Perplexity, DeepSeek, AI Overviews. Toggle what matters, ignore what doesn't. No wasted credits on models your buyers never touch."
            mock={<ChooseModelsMock />}
          />
          <FeaturePixelCard
            title="See which sources feed the answer"
            body="Every AI response is stitched together from a handful of sources — Reddit threads, listicles, docs. We show you which ones so you know exactly where to plant your next post."
            mock={<KeySourcesMock />}
          />
          <FeaturePixelCard
            title="Get a next-action list, not just a dashboard"
            body="Every drop in ranking comes with a concrete play: a Reddit thread to answer, a comparison page to write, a directory to submit to. Actions, not vibes."
            mock={<ActOnInsightsMock />}
          />
        </div>

        {/* Featured quote */}
        <div className="mt-16 rounded-3xl bg-white/95 backdrop-blur border border-white/70 shadow-[0_30px_80px_-30px_rgba(15,45,82,0.45)] px-8 md:px-20 py-16 md:py-24">
          <p
            className="mx-auto max-w-[1000px] text-center text-ink font-semibold tracking-[-0.02em] leading-[1.2]"
            style={{ fontSize: "clamp(1.5rem, 2.75vw, 2.5rem)" }}
          >
            Every other GEO tool told me I was invisible.{" "}
            <span className="text-cta">{"{{PRODUCT_NAME}}"}</span> told me exactly which three pages to ship to fix it. That's the whole difference.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-cta text-white font-semibold text-[14px]">R</span>
            <div className="text-left">
              <div className="text-[15px] font-semibold text-ink">Raphaël</div>
              <div className="text-[13px] text-neutral-500">Founder, {"{{PRODUCT_NAME}}"} · building in public</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturePixelCard({
  title, body, mock,
}: { title: string; body: string; mock: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-white/95 backdrop-blur border border-white/70 shadow-[0_30px_80px_-30px_rgba(15,45,82,0.45)] overflow-hidden flex flex-col">
      <div className="p-8 md:p-10">
        <h3 className="text-[22px] md:text-[24px] font-semibold tracking-tight text-ink">{title}</h3>
        <p className="mt-3 text-[15px] md:text-[16px] leading-[1.6] text-neutral-500 max-w-[46ch]">{body}</p>
      </div>
      <div className="mt-auto px-6 md:px-8 pb-0 relative min-h-[280px]">
        {mock}
      </div>
    </div>
  );
}

function TrackedPromptsMock() {
  const rows = [
    { p: "Best GEO tracker for indie SaaS 2026", v: "82%", loc: "US", tag: "Buyer" },
    { p: "AI visibility tools for bootstrapped founders", v: "71%", loc: "US", tag: "Buyer" },
    { p: "Cheapest ChatGPT visibility monitoring", v: "64%", loc: "UK", tag: "Price" },
    { p: "How to rank in Perplexity as a SaaS", v: "58%", loc: "CA", tag: "How-to" },
  ];
  return (
    <div className="relative -mb-6">
      <div className="rounded-t-2xl border border-hairline border-b-0 bg-white overflow-hidden shadow-[0_10px_30px_-10px_rgba(15,45,82,0.2)]">
        <div className="flex items-center justify-between px-4 py-3 border-b border-hairline">
          <div className="flex items-center gap-2 text-[13px] font-semibold text-ink">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded border border-hairline text-[10px] text-neutral-500">◱</span>
            Tracked Prompts
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-neutral-500">Add Prompt</span>
            <span className="inline-flex items-center h-6 px-2 rounded-md bg-ink text-white text-[11px]">Bulk Import CSV</span>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-[1fr_60px_60px_80px] gap-3 px-4 py-2 text-[11px] uppercase tracking-wide text-neutral-400 border-b border-hairline">
          <span>Prompt</span><span>Visibility</span><span>Location</span><span>Tags</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[1fr_60px_60px_80px] gap-3 px-4 py-3 text-[12px] text-ink items-center border-b border-hairline last:border-b-0">
            <span className="truncate">{r.p}</span>
            <span className="text-neutral-600">{r.v}</span>
            <span className="text-neutral-600">🇺🇸 {r.loc}</span>
            <span className="inline-flex items-center h-5 px-2 rounded bg-cta/15 text-cta text-[10px] font-medium w-fit">{r.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SuggestedPromptsMock() {
  const cards = [
    { q: "What's the best AI visibility tracker for a solo SaaS founder under $50/mo?", vol: "High Volume", tone: "emerald", rotate: "-rotate-3" },
    { q: "Which GEO tool actually tells you what content to ship, not just a score?", vol: "Medium Volume", tone: "orange", rotate: "rotate-2 translate-x-6 translate-y-6" },
  ];
  const toneMap: Record<string, string> = {
    emerald: "bg-emerald-100 text-emerald-700",
    orange: "bg-orange-100 text-orange-700",
  };
  return (
    <div className="relative -mb-6 h-[280px]">
      <div className="absolute left-2 top-2 inline-flex items-center gap-2 h-7 px-3 rounded-full bg-white border border-hairline text-[12px] text-ink shadow-sm z-10">
        <span className="text-cta">✷</span>
        Suggested Prompts <span className="text-neutral-400">(14)</span>
      </div>
      {cards.map((c, i) => (
        <div
          key={i}
          className={`absolute left-8 top-14 w-[85%] rounded-2xl border border-hairline bg-white p-5 shadow-[0_20px_50px_-20px_rgba(15,45,82,0.25)] transform ${c.rotate}`}
          style={{ zIndex: 5 - i, top: `${56 + i * 40}px` }}
        >
          <p className="text-[14px] font-semibold text-ink leading-[1.35]">{c.q}</p>
          <div className="mt-3 flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center h-6 px-2 rounded bg-neutral-100 text-neutral-500 text-[11px]">Estimated Volume</span>
            <span className={`inline-flex items-center h-6 px-2 rounded text-[11px] font-medium ${toneMap[c.tone]}`}>{c.vol}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function AddBrandsMock() {
  const brands = [
    { name: "Peec AI", url: "peec.ai", extra: "+3", state: "start", color: "bg-pink-100", initial: "P", initialBg: "bg-pink-500" },
    { name: "Otterly", url: "otterly.ai", extra: "+2", state: "tracking", color: "bg-emerald-50", initial: "O", initialBg: "bg-emerald-600" },
  ];
  return (
    <div className="relative -mb-6 h-[280px]">
      <div className="absolute left-2 top-2 inline-flex items-center gap-2 h-7 px-3 rounded-full bg-white border border-hairline text-[12px] text-ink shadow-sm z-10">
        <span className="text-neutral-500">◫</span>
        Brands <span className="text-neutral-400">(5)</span>
      </div>
      {brands.map((b, i) => (
        <div
          key={i}
          className={`absolute left-6 w-[85%] rounded-2xl border border-hairline ${b.color} p-4 shadow-[0_20px_50px_-20px_rgba(15,45,82,0.25)] ${i === 0 ? "-rotate-2" : "rotate-2 translate-x-8"}`}
          style={{ top: `${56 + i * 80}px`, zIndex: 5 - i }}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className={`inline-flex items-center justify-center h-9 w-9 rounded-lg ${b.initialBg} text-white text-[13px] font-semibold flex-shrink-0`}>{b.initial}</span>
              <div className="min-w-0">
                <div className="text-[14px] font-semibold text-ink truncate">
                  {b.name} <span className="text-neutral-400 font-normal">{b.extra}</span>
                </div>
                <div className="text-[12px] text-neutral-500 truncate">{b.url}</div>
              </div>
            </div>
            {b.state === "start" ? (
              <span className="inline-flex items-center gap-1 h-7 px-3 rounded-full bg-ink text-white text-[11px] font-medium whitespace-nowrap">+ Start Tracking</span>
            ) : (
              <span className="inline-flex items-center gap-1 h-7 px-3 rounded-full bg-white text-ink text-[11px] font-medium border border-hairline whitespace-nowrap">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Actively Tracking
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function ChooseModelsMock() {
  const models = [
    { name: "ChatGPT", on: true, icon: "◉" },
    { name: "AI Overviews", on: true, icon: "G" },
    { name: "Claude", on: true, icon: "✷" },
    { name: "DeepSeek R1", on: false, icon: "🐋" },
    { name: "Perplexity", on: false, icon: "❋" },
    { name: "Gemini", on: false, icon: "✦" },
  ];
  return (
    <div className="relative -mb-6">
      <div className="rounded-t-2xl border border-hairline border-b-0 bg-white overflow-hidden shadow-[0_10px_30px_-10px_rgba(15,45,82,0.2)]">
        <div className="flex items-center justify-between px-4 py-3 border-b border-hairline">
          <div className="flex items-center gap-2 text-[13px] font-semibold text-ink">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded border border-hairline text-[10px] text-neutral-500">◧</span>
            Models
          </div>
          <div className="flex items-center gap-2 text-[11px] text-neutral-500">
            Set Frequency
            <span className="inline-flex items-center h-6 px-2 rounded border border-hairline bg-white text-ink text-[11px]">Daily ▾</span>
          </div>
        </div>
        {models.map((m, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-2.5 border-b border-hairline last:border-b-0">
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center justify-center h-4 w-4 rounded ${m.on ? "bg-cta text-white" : "border border-hairline"}`}>
                {m.on && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
              </span>
              <span className="text-[13px] font-medium text-ink">{m.name}</span>
            </div>
            <span className="text-neutral-400 text-[13px]">{m.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KeySourcesMock() {
  const rows = [
    { d: "reddit.com/r/SaaS", t: "UGC", tc: "bg-blue-100 text-blue-700", u: "41%", c: "3.8" },
    { d: "yoursaas.com", t: "You", tc: "bg-emerald-100 text-emerald-700", u: "22%", c: "2.1" },
    { d: "indiehackers.com", t: "UGC", tc: "bg-violet-100 text-violet-700", u: "34%", c: "1.9" },
    { d: "peec.ai", t: "Competitor", tc: "bg-rose-100 text-rose-700", u: "37%", c: "1.4" },
  ];
  return (
    <div className="relative -mb-6">
      <div className="rounded-t-2xl border border-hairline border-b-0 bg-white overflow-hidden shadow-[0_10px_30px_-10px_rgba(15,45,82,0.2)]">
        <div className="flex items-center justify-between px-4 py-3 border-b border-hairline">
          <div className="inline-flex items-center h-7 px-3 rounded border border-hairline text-[12px] text-neutral-500">🔍 Search Sources</div>
          <span className="inline-flex items-center h-7 px-3 rounded border border-hairline text-[12px] text-ink">All Types ▾</span>
        </div>
        <div className="grid grid-cols-[1fr_80px_60px_70px] gap-3 px-4 py-2 text-[10px] uppercase tracking-wide text-neutral-400 border-b border-hairline">
          <span>Domain</span><span>Type</span><span>Used</span><span>Avg. Cit.</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[1fr_80px_60px_70px] gap-3 px-4 py-2.5 text-[12px] items-center border-b border-hairline last:border-b-0">
            <span className="text-ink font-medium truncate">{r.d}</span>
            <span className={`inline-flex items-center h-5 px-2 rounded text-[10px] font-medium w-fit ${r.tc}`}>{r.t}</span>
            <span className="text-neutral-600">{r.u}</span>
            <span className="text-neutral-600">{r.c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActOnInsightsMock() {
  const insights = [
    { t: "r/SaaS thread ranks for your top query", s: "Reply with a founder story in the next 48h.", dark: false },
    { t: "Indie Hackers milestone post gets cited daily", s: "Post your MRR update this week — high citation odds.", dark: true },
    { t: "A comparison listicle is missing you", s: "Email the author with a 3-line pitch — template inside.", dark: false },
  ];
  return (
    <div className="relative -mb-6 space-y-3 pt-2">
      {insights.map((it, i) => (
        <div
          key={i}
          className={`flex items-center justify-between gap-3 rounded-2xl px-4 py-3 ${
            it.dark ? "bg-ink text-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]" : "bg-white border border-hairline"
          }`}
        >
          <div className="min-w-0">
            <div className={`text-[13px] font-semibold truncate ${it.dark ? "text-white" : "text-ink"}`}>{it.t}</div>
            <div className={`text-[11px] truncate ${it.dark ? "text-white/60" : "text-neutral-500"}`}>{it.s}</div>
          </div>
          <span className={`inline-flex items-center justify-center h-7 w-7 rounded-lg flex-shrink-0 ${it.dark ? "bg-white/10 text-white" : "border border-hairline text-ink"}`}>→</span>
        </div>
      ))}
    </div>
  );
}


function BigCta() {
  return (
    <div className="border-t border-hairline bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-[#0b1220] px-8 md:px-16 py-20 md:py-28">
          {/* Subtle grid + glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.35), transparent 65%)" }}
          />
          <div className="relative max-w-[640px]">
            <h2
              className="text-white font-semibold tracking-[-0.035em] leading-[1.02]"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
            >
              Stop guessing <span className="text-cta">what AI says</span>
              <br />
              <span className="text-white/70">about your SaaS.</span>
            </h2>
            <p className="mt-6 text-white/70 text-[16px] md:text-[17px] leading-[1.6] max-w-[520px]">
              A score is where every other tool stops. That's where {"{{PRODUCT_NAME}}"} starts.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-ink text-[15px] font-semibold hover:bg-white/90 transition-colors"
              >
                Run my free AI audit
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-cta text-cta-foreground text-[15px] font-semibold hover:bg-cta/90 transition-colors"
              >
                <span className="h-2 w-2 rounded-sm bg-white/90" />
                Book a founder demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SiteFooter() {
  const cols = [
    {
      title: "Company",
      links: ["Home", "Careers", "FAQ"],
    },
    {
      title: "Product",
      links: ["Docs", "Blog", "Pricing", "Changelog"],
    },
    {
      title: "Features",
      links: ["ChatGPT visibility tracker", "Gemini visibility tracker", "AI Mode visibility tracker"],
    },
  ];
  const cols2 = [
    { title: "Partnership", links: ["Agencies", "Creators", "Media"] },
    { title: "Comparison", links: ["{{PRODUCT_NAME}} vs Peec AI", "{{PRODUCT_NAME}} vs Otterly", "{{PRODUCT_NAME}} vs Profound", "{{PRODUCT_NAME}} vs Ahrefs"] },
  ];
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="inline-block h-5 w-5 rounded-[4px] bg-cta" />
              <span className="text-[17px] font-semibold tracking-tight text-white">{"{{PRODUCT_NAME}}"}</span>
            </div>
            <p className="mt-6 text-[22px] md:text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-white/90">
              AI visibility
              <br />
              <span className="text-white/50">for solo SaaS founders</span>
            </p>
          </div>

          {cols.map((c) => (
            <FooterCol key={c.title} title={c.title} links={c.links} />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="hidden md:block" />
          {cols2.map((c) => (
            <FooterCol key={c.title} title={c.title} links={c.links} />
          ))}
          <div>
            <h4 className="text-[15px] font-semibold text-white">Follow Us</h4>
            <ul className="mt-5 space-y-4">
              <li>
                <a href="#" className="flex items-center gap-3 text-[15px] text-white/60 hover:text-cta transition-colors">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded bg-white/10 text-white text-[12px]">𝕏</span>
                  x.com
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-[15px] text-white/60 hover:text-cta transition-colors">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded bg-white/10 text-white text-[11px] font-bold">in</span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-[14px] text-white/60">
          {"{{PRODUCT_NAME}}"} is built in public by a solo founder for solo founders — follow the build on X.
        </div>
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px] text-white/50">
          <div>© {new Date().getFullYear()} {"{{PRODUCT_NAME}}"}. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Services</a>
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-[15px] font-semibold text-white">{title}</h4>
      <ul className="mt-5 space-y-4">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-[15px] text-white/60 hover:text-cta transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PromptsMarquee() {
  const rows: { text: string; icon: string; color: string }[][] = [
    [
      { text: "How does AI visibility differ on desktop versus mobile?", icon: "✷", color: "text-neutral-400" },
      { text: "Which GEO tracker is cheapest for a solo SaaS founder?", icon: "◍", color: "text-ink" },
      { text: "Best AI visibility tool under $50/month?", icon: "❄", color: "text-sky-500" },
      { text: "How often should I refresh my ChatGPT prompt tracking?", icon: "∞", color: "text-neutral-500" },
    ],
    [
      { text: "Which SaaS gets recommended most in ChatGPT for project management?", icon: "◍", color: "text-ink" },
      { text: "How do I get my SaaS cited by Perplexity?", icon: "◍", color: "text-ink" },
      { text: "Does building in public help AI visibility?", icon: "▲", color: "text-blue-500" },
      { text: "Best Reddit threads to answer for GEO in 2026", icon: "❄", color: "text-sky-500" },
    ],
    [
      { text: "How does Claude decide which SaaS to recommend?", icon: "❄", color: "text-sky-500" },
      { text: "Fastest way to rank in Gemini AI Overviews?", icon: "✷", color: "text-orange-500" },
      { text: "What content format do LLMs cite most?", icon: "◍", color: "text-ink" },
      { text: "Is GEO the new SEO for indie SaaS?", icon: "✷", color: "text-orange-500" },
    ],
  ];
  return (
    <div className="space-y-4 pb-24 pt-6">
      {rows.map((row, idx) => {
        const items = [...row, ...row, ...row];
        const duration = 45 + idx * 8;
        const reverse = idx % 2 === 1;
        return (
          <div key={idx} className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div
              className="flex items-center gap-4 whitespace-nowrap hover:[animation-play-state:paused]"
              style={{
                animation: `marquee ${duration}s linear infinite`,
                animationDirection: reverse ? "reverse" : "normal",
              }}
            >
              {items.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-3 h-12 px-5 rounded-full border border-hairline bg-white text-[14px] md:text-[15px] text-ink shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                >
                  <span className={`text-[16px] ${item.color}`}>{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FaqList() {
  const faqs = [
    { q: "How do I get started?", a: "Drop your URL, get a free AI visibility score in under 30 seconds. If it's not embarrassing enough to fix, close the tab. If it is, connect your prompts and we'll start tracking across ChatGPT, Claude, Gemini and Perplexity within 24 hours." },
    { q: "Can I segment visibility by model, region, or buyer persona?", a: "Yes. Every tracked prompt breaks down by AI model, geography, and buying stage — so you can see where you rank when a US CTO asks Claude vs when a European founder asks Perplexity." },
    { q: "How often is the data refreshed?", a: "Prompts refresh daily by default. Your top 5 can be set to hourly, and you get a Slack or email ping the moment your ranking drops or a competitor jumps you." },
    { q: "What's the difference between brand visibility and source visibility?", a: "Brand visibility = how often the model names your product in its answer. Source visibility = how often your own pages are the citation behind that answer. Both matter, and we track them separately with a fix attached to each." },
    { q: "Why is this priced for founders instead of enterprise?", a: "Because the founder building at $2K MRR shouldn't have to book a sales call to find out if AI is ignoring them. Founding members lock €55/mo forever — public pricing after launch is €79/mo. Still no seats, no annual contract, no sales rep." },
    { q: "How does {{PRODUCT_NAME}} plug into my stack?", a: "Slack alerts, weekly email digest, CSV export, and a REST API. Push metrics into Notion, Linear, or a spreadsheet. No BI tool required." },
  ];
  return (
    <div className="divide-y divide-hairline border-t border-b border-hairline">
      {faqs.map((f, i) => (
        <FaqItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
      ))}
    </div>
  );
}

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  return (
    <details className="group py-6" open={defaultOpen}>
      <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
        <span className="text-[16px] md:text-[18px] font-medium text-ink">{q}</span>
        <span className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full border border-hairline text-ink transition-transform group-open:rotate-180">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </summary>
      <p className="mt-4 pr-14 text-[15px] md:text-[16px] leading-[1.65] text-neutral-500">{a}</p>
    </details>
  );
}

function MetricCard({
  icon, title, body, accent,
}: { icon: React.ReactNode; title: string; body: string; accent?: boolean }) {
  return (
    <div className={"relative rounded-2xl border border-hairline bg-white p-8 " + (accent ? "" : "")}>
      {accent && <span className="absolute left-8 top-8 bottom-8 w-[2px] rounded-full bg-ink/80" />}
      <div className={accent ? "pl-5" : ""}>
        <div className="flex items-center gap-2 text-ink">
          <span className="inline-flex items-center justify-center h-5 w-5 text-ink">{icon}</span>
          <h3 className="text-[17px] font-semibold tracking-tight">{title}</h3>
        </div>
        <p className="mt-3 text-[15px] leading-[1.6] text-neutral-500">{body}</p>
      </div>
    </div>
  );
}

/* Fixed founder chat pill — persistent bottom-right of the site */
export function FounderChatPill() {
  return (
    <a
      href="#"
      className="fixed z-50 bottom-5 right-5 md:bottom-6 md:right-6 flex items-center gap-3 bg-[#0b1220] text-white pl-2 pr-2 py-2 rounded-full shadow-[0_12px_36px_-10px_rgba(0,0,0,0.5)] hover:bg-[#111a2e] transition-colors"
    >
      <img
        src={founderPhoto}
        alt="Raphaël, founder"
        width={40}
        height={40}
        loading="lazy"
        className="h-10 w-10 rounded-full object-cover shrink-0"
      />
      <span className="hidden sm:flex flex-col leading-tight pr-1 min-w-0">
        <span className="flex items-center gap-1.5">
          <span className="text-[14px] font-semibold truncate">Raphaël</span>
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_2px_rgba(16,185,129,0.25)]" aria-label="online" />
        </span>
        <span className="text-[12px] text-neutral-400 truncate">Founder</span>
      </span>
      <span className="hidden sm:inline-flex items-center h-8 px-3 shrink-0 rounded-full bg-white text-ink text-[12px] font-semibold">
        Chat now
      </span>
    </a>
  );
}


function Chip({ icon, children, className }: { icon: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 md:gap-1.5 h-6 px-2 md:h-7 md:px-2.5 mx-0.5 -translate-y-[1px] rounded-md border border-hairline bg-white text-[13px] md:text-[14px] text-ink align-middle ${className || ""}`}>
      {icon}
      {children}
    </span>
  );
}

function StatusPill({
  state, label, value,
}: { state: "running" | "done"; label: string; value: string }) {
  const dot = state === "done" ? "bg-emerald-500" : "bg-amber-500";
  return (
    <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur border border-white/70 rounded-lg pl-2 pr-1 py-1 shadow-[0_6px_20px_-8px_rgba(0,0,0,0.25)]">
      <span className="flex items-center gap-1.5">
        <span className={"h-1.5 w-1.5 rounded-full " + dot} />
        <span className="text-[11px] font-medium text-neutral-600">{label}</span>
      </span>
      <span className="text-[11px] font-semibold text-ink bg-neutral-100 rounded-md px-2 py-0.5">
        {value}
      </span>
    </div>
  );
}

/* Icons — inline SVG, no deps */
function EyeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function PositionIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="12" r="2" /><circle cx="18" cy="12" r="2" />
      <path d="M8 12h8" />
    </svg>
  );
}
function SmileIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01M15 9h.01" />
    </svg>
  );
}

function LogoMarquee() {
  const logos = [
    { name: "taap.it", icon: "✕", box: false },
    { name: "Trendtrack", icon: "T", box: true },
    { name: "Arcade", icon: "A", box: true },
    { name: "Adwize", icon: "A", box: true },
    { name: "Speechly", icon: "≡", box: false },
    { name: "PeakLab", icon: "P", box: true },
    { name: "SoftSearch", icon: "S", box: true },
    { name: "Uplix", icon: null, box: false },
    { name: "suma ai", icon: null, box: false },
    { name: "MailTester.Ninja", icon: null, box: false },
    { name: "Skyden", icon: "SD", box: true },
  ];

  const items = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="flex items-center gap-12 md:gap-16 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap py-6">
        {items.map((logo, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-ink text-[15px] md:text-[16px] font-semibold tracking-tight">
            {logo.icon ? (
              <span className={`inline-flex items-center justify-center h-6 w-6 text-[10px] ${logo.box ? "rounded-md bg-ink text-white" : ""}`}>
                {logo.icon}
              </span>
            ) : null}
            {logo.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function AiLogosMarquee() {
  const logos = [
    "ChatGPT", "Claude", "Gemini", "Perplexity", "Copilot",
    "Mistral", "Grok", "Llama", "DeepSeek", "You.com", "Poe", "Bing Chat",
  ];
  const items = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden border-b border-hairline bg-white">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="flex items-center gap-10 md:gap-14 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap py-3">
        {items.map((name, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-neutral-500 text-[13px] md:text-[14px] font-medium tracking-tight">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-neutral-100 text-ink text-[10px] font-semibold">
              {name[0]}
            </span>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

