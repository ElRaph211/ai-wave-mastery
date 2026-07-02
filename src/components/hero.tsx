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
            <span className="text-[17px] font-semibold tracking-tight text-ink">GetReef AI</span>
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

        </div>
      </div>

      {/* Unified SaaS trust block */}
      <div className="border-t border-hairline bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <p className="text-center text-[14px] text-neutral-500">
            50+ SaaS navigating the generative shift with <span className="text-ink font-semibold">GetReef.ai</span>
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 border border-hairline rounded-2xl overflow-hidden bg-white">
            {/* Brands column */}
            <div className="relative p-8 md:p-10 border-b md:border-b-0 md:border-r border-hairline">
              <span className="absolute -top-3 left-6 inline-flex items-center h-6 px-3 rounded-full border border-hairline bg-white text-[11px] font-medium text-ink">
                Brands
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-8 gap-y-8 items-center justify-items-center text-neutral-700 text-[15px] font-semibold tracking-tight">
                <span>◐ Kaimana</span>
                <span>Reeftide</span>
                <span>◆ Monday</span>
                <span>ATTIO</span>
                <span>SQUARESPACE</span>
                <span className="text-emerald-600">Brevo</span>
                <span>HUGO BOSS</span>
                <span>Salesforce</span>
              </div>
            </div>

            {/* Agencies column */}
            <div className="relative p-8 md:p-10">
              <span className="absolute -top-3 left-6 inline-flex items-center h-6 px-3 rounded-full border border-hairline bg-white text-[11px] font-medium text-ink">
                Agencies
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-8 gap-y-8 items-center justify-items-center text-neutral-700 text-[15px] font-semibold tracking-tight">
                <span>seer<span className="block text-[10px] font-normal text-neutral-400">interactive</span></span>
                <span>previsible.io</span>
                <span className="text-sky-600">PEAK ACE</span>
                <span className="text-sky-500">Eskimoz</span>
                <span>KINESSO</span>
                <span>We.<span className="text-neutral-400 font-normal"> Comms</span></span>
                <span>MINDSHARE</span>
                <span>▲ FIRSTPAGE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Fixed founder chat pill — persistent bottom-right of the site */
export function FounderChatPill() {
  return (
    <a
      href="#"
      className="fixed z-50 bottom-5 right-5 md:bottom-6 md:right-6 flex items-center gap-3 bg-[#0b1220] text-white pl-2 pr-2 py-2 rounded-full shadow-[0_12px_36px_-10px_rgba(0,0,0,0.5)] hover:bg-[#0f172a] transition-colors"
    >
      <span className="relative inline-flex shrink-0">
        <span className="flex items-center justify-center h-10 w-10 rounded-full bg-sky-400 text-white font-semibold text-[15px]">
          R
        </span>
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#0b1220]" />
      </span>
      <span className="hidden sm:flex flex-col leading-tight pr-1 min-w-0">
        <span className="text-[14px] font-semibold truncate">Raphaël</span>
        <span className="text-[12px] text-neutral-400 truncate">Founder · Book a demo</span>
      </span>
      <span className="hidden sm:inline-flex items-center h-8 px-3 shrink-0 rounded-full bg-white text-ink text-[12px] font-semibold">
        Chat now
      </span>
    </a>
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
