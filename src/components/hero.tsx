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
      <header className="border-b border-hairline bg-white">
        <div className="mx-auto max-w-[1400px] px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center gap-2">
              <span className="inline-block h-5 w-5 rounded-[4px] bg-ink" />
              <span className="text-[17px] font-semibold tracking-tight text-ink">GetReef AI</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-ink">
              <a href="#" className="hover:text-ink-muted transition-colors">Features</a>
              <a href="#" className="hover:text-ink-muted transition-colors">Pricing</a>
              <a href="#" className="hover:text-ink-muted transition-colors">How it works</a>
              <a href="#" className="hover:text-ink-muted transition-colors">Affiliation</a>
            </nav>
          </div>
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

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 border border-hairline rounded-2xl overflow-hidden bg-white">
            <div className="flex items-center justify-center h-24 md:h-28 border-b border-r border-hairline px-4">
              <span className="flex items-center gap-2 text-ink text-[15px] md:text-[16px] font-semibold tracking-tight">
                <span className="inline-flex items-center justify-center h-6 w-6">✕</span>
                taap.it
              </span>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28 border-b border-r border-hairline px-4">
              <span className="flex items-center gap-2 text-ink text-[15px] md:text-[16px] font-semibold tracking-tight">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-ink text-white text-[10px]">T</span>
                Trendtrack
              </span>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28 border-b border-r border-hairline px-4">
              <span className="flex items-center gap-2 text-ink text-[15px] md:text-[16px] font-semibold tracking-tight">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-ink text-white text-[10px]">A</span>
                Arcade
              </span>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28 border-b border-hairline px-4">
              <span className="flex items-center gap-2 text-ink text-[15px] md:text-[16px] font-semibold tracking-tight">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-ink text-white text-[10px]">A</span>
                Adwize
              </span>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28 border-b border-r border-hairline px-4">
              <span className="flex items-center gap-2 text-ink text-[15px] md:text-[16px] font-semibold tracking-tight">
                <span className="inline-flex items-center justify-center h-6 w-6">≡</span>
                Speechly
              </span>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28 border-b border-r border-hairline px-4">
              <span className="flex items-center gap-2 text-ink text-[15px] md:text-[16px] font-semibold tracking-tight">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-ink text-white text-[10px]">P</span>
                PeakLab
              </span>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28 border-b border-r border-hairline px-4">
              <span className="flex items-center gap-2 text-ink text-[15px] md:text-[16px] font-semibold tracking-tight">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-ink text-white text-[10px]">S</span>
                SoftSearch
              </span>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28 border-b border-hairline px-4">
              <span className="text-ink text-[15px] md:text-[16px] font-semibold tracking-tight">Uplix</span>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28 border-r border-hairline px-4">
              <span className="text-ink text-[15px] md:text-[16px] font-semibold tracking-tight">Uplix</span>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28 border-r border-hairline px-4">
              <span className="text-ink text-[15px] md:text-[16px] font-semibold tracking-tight">suma ai</span>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28 border-r border-hairline px-4">
              <span className="text-ink text-[15px] md:text-[16px] font-semibold tracking-tight">MailTester.Ninja</span>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28 px-4">
              <span className="flex items-center gap-2 text-ink text-[15px] md:text-[16px] font-semibold tracking-tight">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-ink text-white text-[10px]">SD</span>
                Skyden
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Search Metrics section */}
      <div className="border-t border-hairline bg-[#f5f5f4]">
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
            Decode your brand's footprint in the semantic swell.
          </h2>
          <p className="mt-6 mx-auto max-w-[720px] text-[19px] leading-[1.55] text-neutral-500">
            Continuous observation built around the critical metrics shaping generative visibility.
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
                body="See the share of chats where your brand is mentioned and understand how often you show up in conversations."
              />
              <MetricCard
                icon={<PositionIcon />}
                title="Position"
                body="Understand your brand's position within AI search results and uncover opportunities to improve your ranking."
              />
              <MetricCard
                accent
                icon={<SmileIcon />}
                title="Sentiment"
                body="Find out how your brand is perceived by AI, what's going well, and what requires improvements."
              />
            </div>

            {/* Right column — chat mockup */}
            <div className="rounded-2xl border border-hairline bg-white p-8 md:p-10">
              <div className="flex justify-end">
                <div className="inline-flex items-center h-10 px-4 rounded-full border border-hairline bg-white text-[14px] text-ink">
                  What are the best CRMs for Startups?
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-ink flex items-center justify-center text-white text-[11px] font-semibold">GPT</div>
                <div className="flex-1 rounded-xl border border-hairline p-5 space-y-5">
                  <p className="text-[14px] leading-[1.65] text-ink">
                    Choosing the right CRM really comes down to how your startup sells, grows, and automates. Here's a curated breakdown of the top CRM platforms for startups in 2026.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center h-6 px-2 rounded-md border border-hairline text-[11px] text-neutral-500 font-mono">#1</span>
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-ink text-white text-[10px] font-semibold">M</span>
                      <span className="text-[14px] font-semibold text-ink">Monday</span>
                    </div>
                    <p className="text-[14px] leading-[1.65] text-ink">
                      Monday offers a <mark className="bg-emerald-100 text-ink px-1 rounded">strong free tier</mark> with contact management, email tracking, reporting, and integrations. It <mark className="bg-emerald-100 text-ink px-1 rounded">easily expands</mark> into Sales, Marketing, or Service Hubs as you grow. Paid plans <mark className="bg-red-100 text-ink px-1 rounded">can become expensive, and some advanced features are locked</mark> behind higher tiers.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center h-6 px-2 rounded-md border border-hairline text-[11px] text-neutral-500 font-mono">#2</span>
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-ink text-white text-[10px] font-semibold">A</span>
                      <span className="text-[14px] font-semibold text-ink">Attio</span>
                    </div>
                    <p className="text-[14px] leading-[1.65] text-ink">
                      Attio is a <mark className="bg-emerald-100 text-ink px-1 rounded">flexible modern</mark> CRM that works like a relational database, letting you design pipelines, views, and workflows around your data with tools like Slack, Notion, and Segment.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center h-6 px-2 rounded-md border border-hairline text-[11px] text-neutral-500 font-mono">#3</span>
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-ink text-white text-[10px] font-semibold">Z</span>
                      <span className="text-[14px] font-semibold text-ink">Zero</span>
                    </div>
                    <div className="relative">
                      <p className="text-[14px] leading-[1.65] text-ink">
                        Zero is built for founders who want a <mark className="bg-emerald-100 text-ink px-1 rounded">streamlined CRM without the usual bloat</mark>. It focuses on speed, simplicity, and essential deal tracking while still offering automation and integrations with tools like Google Workspace, Slack, and Zapier.
                      </p>

                      {/* Sentiment tooltip */}
                      <div className="hidden md:block absolute -right-2 -bottom-4 translate-y-full w-[300px] rounded-xl bg-[#0b1220] text-white p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)]">
                        <div className="flex items-center justify-between">
                          <span className="text-[12px] text-neutral-400">Positive Sentiment</span>
                          <span className="inline-flex items-center justify-center h-5 w-5 rounded bg-white/10 text-[10px]">◎</span>
                        </div>
                        <div className="mt-2 inline-flex items-center h-6 px-2 rounded border-l-2 border-emerald-400 bg-white/5 text-[13px] font-semibold">
                          95
                        </div>
                        <p className="mt-3 text-[12px] leading-[1.5] text-neutral-300">
                          Positive endorsement of Zero as a fast, simple, and efficient CRM for founders.
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
    </section>
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
