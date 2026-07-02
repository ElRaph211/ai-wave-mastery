import heroImage from "@/assets/hero-hawaii-pixel.jpg";

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
            Founding access open
          </div>
          <div className="hidden md:block text-neutral-400">
            Limited beta — onboard your first 50 tracked prompts before public launch
          </div>
          <a href="#" className="font-medium underline underline-offset-4 decoration-neutral-500 hover:decoration-white transition-colors whitespace-nowrap">
            Book a demo →
          </a>
        </div>
      </div>


      {/* Nav */}
      <header className="border-b border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 rounded-[4px] bg-ink" />
            <span className="text-[17px] font-semibold tracking-tight text-ink">GetReef</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[14px] text-ink">
            <a href="#" className="hover:text-ink-muted transition-colors">Product</a>
            <a href="#" className="hover:text-ink-muted transition-colors">Pricing</a>
            <a href="#" className="hover:text-ink-muted transition-colors">Resources</a>
            <a href="#" className="hover:text-ink-muted transition-colors">Partnerships</a>
            <a href="#" className="hover:text-ink-muted transition-colors">Careers</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="hidden sm:inline-flex items-center h-9 px-4 rounded-lg border border-hairline text-[14px] font-medium text-ink hover:bg-neutral-50 transition-colors"
            >
              Log in
            </a>
            <a
              href="#"
              className="inline-flex items-center h-9 px-4 rounded-lg bg-ink text-white text-[14px] font-medium hover:bg-neutral-800 transition-colors"
            >
              Sign up
            </a>
          </div>
        </div>
      </header>

      {/* Hero content */}
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full border border-hairline bg-white text-[13px] text-ink">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          We are hiring
        </div>

        {/* Headline */}
        <h1
          className="mt-8 mx-auto text-ink font-semibold tracking-[-0.035em] leading-[0.98]"
          style={{ fontSize: "clamp(2.75rem, 7.5vw, 6.5rem)", maxWidth: "18ch" }}
        >
          AI search analytics
          <br />
          <span className="text-neutral-300">for surf-ready brands</span>
        </h1>

        {/* Subtitle with inline chips */}
        <p className="mt-8 mx-auto max-w-[720px] text-[17px] leading-[1.6] text-neutral-500">
          Track, analyze, and improve brand performance on AI search platforms through
          key metrics like{" "}
          <Chip icon={<EyeIcon />}>Visibility</Chip>,{" "}
          <Chip icon={<PositionIcon />}>Position</Chip>, and{" "}
          <Chip icon={<SmileIcon />}>Sentiment</Chip>.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-hairline bg-white text-[14px] font-medium text-ink hover:bg-neutral-50 transition-colors"
          >
            <span className="inline-block h-2 w-2 rounded-sm bg-neutral-300" />
            Talk to Sales
          </a>
          <a
            href="#"
            className="inline-flex items-center h-11 px-6 rounded-lg bg-ink text-white text-[14px] font-medium hover:bg-neutral-800 transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </div>

      {/* Pixel-art hero visual */}
      <div className="mx-auto max-w-[1400px] px-6 pb-24">
        <div className="relative rounded-2xl overflow-hidden border border-hairline shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
          <img
            src={heroImage}
            alt="Pixel art of a surfer riding a Hawaiian wave at sunrise"
            width={1920}
            height={1088}
            className="w-full h-auto block"
            style={{ imageRendering: "pixelated" }}
          />

          {/* Floating status pills — top right, Cofounder style */}
          <div className="hidden sm:flex flex-col gap-2 absolute top-6 right-6 md:top-10 md:right-10">
            <StatusPill state="running" label="Prompt tracking" value="chatgpt-5" />
            <StatusPill state="done" label="Analysis complete" value="Share of Voice ↑ 5.2%" />
            <StatusPill state="done" label="Report ready" value="April Wavetrack" />
          </div>

          {/* Bottom-left brand chip */}
          <div className="hidden md:flex items-center gap-2 absolute bottom-6 left-6 bg-white/90 backdrop-blur px-3 py-2 rounded-lg border border-white/60 shadow-sm">
            <span className="inline-block h-4 w-4 rounded-sm bg-ink" />
            <span className="text-[12px] font-medium text-ink">Wavetrack — Live</span>
          </div>
        </div>
      </div>

      {/* Logo strip */}
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-10">
          <p className="text-center text-[12px] uppercase tracking-[0.18em] text-neutral-400 mb-6">
            Trusted by teams shipping on the AI-search shoreline
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-neutral-400 text-[15px] font-semibold tracking-tight">
            <span>ATTIO</span>
            <span>◆ Monday</span>
            <span>Salesforce</span>
            <span>▲ Zero</span>
            <span>Pipedrive</span>
            <span>◇ Northwind</span>
            <span>Kaimana</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 h-7 px-2.5 mx-0.5 -translate-y-[1px] rounded-md border border-hairline bg-white text-[14px] text-ink align-middle">
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
