import heroImage from "@/assets/hero-hawaii-pixel.jpg";
import featuresPixel from "@/assets/hero-hawaii-features.jpg";

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
        <div className="relative mx-auto max-w-[1400px] px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 rounded-[4px] bg-ink" />
            <span className="text-[17px] font-semibold tracking-tight text-ink">GetReef AI</span>
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

      {/* AI platforms marquee — under nav */}
      <AiLogosMarquee />

      {/* Hero — pixel scene as immersive backdrop */}
      <div className="relative overflow-hidden bg-[#7cc3f0]">
        {/* Pixel background — vivid, no animation */}
        <img
          src={heroImage}
          alt="Pixel art of a surfer riding a Hawaiian wave at sunrise"
          width={1920}
          height={1088}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          style={{ imageRendering: "pixelated" }}
        />
        {/* Bottom fade so page transitions cleanly */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 pt-20 md:pt-28 pb-32 md:pb-40">
          <div className="max-w-[720px]">
            <h1
              className="text-white font-semibold tracking-[-0.035em] leading-[0.98] drop-shadow-[0_2px_20px_rgba(15,45,82,0.35)]"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)", maxWidth: "16ch" }}
            >
              AI search analytics
              <br />
              <span className="text-white/80">for surf-ready brands</span>
            </h1>

            <p className="mt-6 max-w-[600px] text-[16px] md:text-[17px] leading-[1.6] text-white/95 drop-shadow-[0_1px_10px_rgba(15,45,82,0.35)]">
              Track, analyze, and improve brand performance on AI search platforms through
              key metrics like{" "}
              <Chip icon={<EyeIcon />}>Visibility</Chip>,{" "}
              <Chip icon={<PositionIcon />}>Position</Chip>, and{" "}
              <Chip icon={<SmileIcon />}>Sentiment</Chip>.
            </p>

            {/* URL audit input */}
            <div className="mt-8 max-w-[560px]">
              <div className="flex items-center gap-2 h-14 md:h-16 pl-6 pr-2 rounded-full border border-hairline bg-white shadow-[0_10px_30px_-10px_rgba(15,45,82,0.35)]">
                <input
                  type="url"
                  placeholder="Enter your website URL"
                  className="flex-1 min-w-0 bg-transparent border-none text-[16px] md:text-[17px] text-ink placeholder:text-neutral-400 outline-none focus:ring-0"
                />
                <button className="flex-shrink-0 h-11 md:h-12 px-5 md:px-6 rounded-full bg-cta text-cta-foreground text-[14px] md:text-[15px] font-medium whitespace-nowrap hover:bg-cta/90 transition-colors">
                  Run AI visibility audit
                </button>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-[13px] md:text-[14px] text-white drop-shadow-[0_1px_8px_rgba(15,45,82,0.4)]">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  See results in 30 seconds
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  No credit card required
                </span>
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
              Loved by SaaS founders who'd rather scoop than guess
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 md:gap-16 text-center">
            <div>
              <div className="text-[28px] md:text-[40px] font-semibold tracking-tight text-ink">50+</div>
              <div className="text-[13px] md:text-[14px] text-neutral-500">SaaS tracked</div>
            </div>
            <div>
              <div className="text-[28px] md:text-[40px] font-semibold tracking-tight text-ink">12,000</div>
              <div className="text-[13px] md:text-[14px] text-neutral-500">live signals</div>
            </div>
            <div>
              <div className="text-[28px] md:text-[40px] font-semibold tracking-tight text-ink">8</div>
              <div className="text-[13px] md:text-[14px] text-neutral-500">verticals</div>
            </div>
          </div>
        </div>
      </div>


      {/* Video sales letter placeholder */}
      <div className="border-t border-hairline bg-white">
        <div className="mx-auto max-w-[960px] px-6 py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full border border-hairline bg-white text-[13px] text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="h-2 w-2 rounded-full bg-cta" />
              Watch the 2-min product tour
            </div>
            <h2 className="mt-6 text-ink font-semibold tracking-[-0.03em]" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
              See how founders read the wave in real time
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
              GetReef AI — Product tour · 2:14
            </div>
          </div>
        </div>
      </div>

      {/* Unified SaaS trust block */}
      <div className="border-t border-hairline bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <p className="text-center text-[14px] text-neutral-500">
            50+ SaaS navigating the generative shift with <span className="text-ink font-semibold">GetReef.ai</span>
          </p>

          <div className="mt-10">
            <LogoMarquee />
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

      {/* Key features — Hawaii pixel backdrop */}
      <KeyFeaturesPixel />

      {/* Prompts — new search engines */}
      <div className="border-t border-hairline bg-white">
        <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-6 text-center">
          <h2
            className="mx-auto text-ink font-semibold tracking-[-0.03em] leading-[1.05]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)", maxWidth: "22ch" }}
          >
            AI platforms are becoming the new search engines.
            <br />
            <span className="text-neutral-500">Track the prompts that define your brand's relevance.</span>
          </h2>
        </div>
        <PromptsMarquee />
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Big CTA */}
      <BigCta />

      {/* FAQ */}
      <div className="border-t border-hairline bg-white">
        <div className="mx-auto max-w-[880px] px-6 py-24">
          <div className="text-center">
            <h2 className="text-ink font-semibold tracking-[-0.03em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
              FAQs
            </h2>
            <p className="mt-4 text-[17px] md:text-[19px] leading-[1.5] text-neutral-500">
              Get answers to the most common questions
              <br className="hidden md:block" /> about AI search and GetReef AI.
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

function Testimonials() {
  const items = [
    {
      quote: "GetReef gave us key insights on AI visibility, helping our SaaS stay at the forefront of discovery in the age of generative search. As ChatGPT, Claude, and Perplexity drive traffic and signups, GetReef measures the growth.",
      name: "Crystal Carter",
      role: "Head of SEO Comms",
      company: "WIX",
    },
    {
      quote: "GetReef avoids the issues we see with other SEO/AEO platforms, where there's often an overload of features and information that isn't of primary importance. It keeps things simple — set up your prompts, see your AI visibility, and act on top citations.",
      name: "Ethan Smith",
      role: "CEO",
      company: "GRAPHITE",
    },
    {
      quote: "GetReef helps us identify what's being cited, adjust our strategy in real-time, and stay ahead of a rapidly evolving search landscape. For our team, the clarity and simplicity of the platform is invaluable when making strategic content decisions.",
      name: "Thomas Smeaton",
      role: "SEO Manager",
      company: "SQUARESPACE",
    },
    {
      quote: "GetReef allows us to pinpoint the exact types of content that are surfaced in specific LLMs. With that visibility, we've been able to prioritize our content strategy and drive a 5x year-over-year increase in traffic and demo requests from LLMs.",
      name: "Jon Gitlin",
      role: "SEO Strategist",
      company: "MERGE",
    },
    {
      quote: "GetReef gave us a data-informed view of our LLMO strategy at Glide — virtually overnight. With its insights, our blog posts started ranking for targeted ChatGPT and Perplexity prompts within 24 hours. I'm really impressed with the platform and the support from the team.",
      name: "Sepy Bazzazi",
      role: "Head of Marketing",
      company: "Glide",
    },
    {
      quote: "As search marketers, our decisions should always be driven by data. GetReef provides exactly the critical insights we need to stay competitive in the ever-evolving world of search.",
      name: "Artur Kosch",
      role: "General Manager",
      company: "KKP",
    },
  ];
  return (
    <div className="border-t border-hairline bg-[#f5f5f4]">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-24">
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
            Check what the best marketers say about{" "}
            <span className="text-cta">GetReef AI</span>.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  quote, name, role, company,
}: { quote: string; name: string; role: string; company: string }) {
  return (
    <div className="rounded-2xl bg-white border border-hairline p-7 flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(15,45,82,0.2)]">
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
    <div className="relative overflow-hidden border-t border-hairline bg-[#4fb5ec]">
      <img
        src={featuresPixel}
        alt="Pixel art Hawaiian beach with palm trees and hibiscus"
        width={1920}
        height={1088}
        loading="lazy"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        style={{ imageRendering: "pixelated" }}
      />
      {/* Bottom fade to page */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"
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
            Turn AI search insights into new customers with GetReef AI.
          </h2>
          <p className="mt-6 mx-auto max-w-[720px] text-[17px] md:text-[18px] leading-[1.55] text-white/95 drop-shadow-[0_1px_10px_rgba(15,45,82,0.35)]">
            Identify the prompts that matter, monitor your rankings, and act before your competitors do.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeaturePixelCard
            title="Set up Prompts"
            body="Prompts are the foundation of your AI search strategy. Uncover and organize the prompts that matter most for your brand's discovery."
            mock={<TrackedPromptsMock />}
          />
          <FeaturePixelCard
            title="Use Data to Pick Winners"
            body="Leverage AI-suggested prompts and search volumes to focus on the biggest opportunities in your vertical."
            mock={<SuggestedPromptsMock />}
          />
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
    { p: "Best AI-native CRM 2026", v: "84%", loc: "US", tag: "Corporate" },
    { p: "CRM software with advanced workflow automation", v: "84%", loc: "US", tag: "Corporate" },
    { p: "Top-rated CRM platforms with analytics", v: "84%", loc: "CA", tag: "Corporate" },
    { p: "CRMs that support offline access", v: "78%", loc: "CA", tag: "Feature" },
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
    { q: "Best CRM software with intuitive user interfaces and customizable workflows", vol: "High Volume", tone: "emerald", rotate: "-rotate-3" },
    { q: "What are the top CRM systems that provide AI-driven insights and automation?", vol: "Medium Volume", tone: "orange", rotate: "rotate-2 translate-x-6 translate-y-6" },
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
              Find out what <span className="text-cta">AI says</span>
              <br />
              <span className="text-white/70">about your brand</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-ink text-[15px] font-semibold hover:bg-white/90 transition-colors"
              >
                Start free trial
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-cta text-cta-foreground text-[15px] font-semibold hover:bg-cta/90 transition-colors"
              >
                <span className="h-2 w-2 rounded-sm bg-white/90" />
                Talk to Sales
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
    { title: "Comparison", links: ["GetReef vs Ahrefs", "GetReef vs Profound", "GetReef vs Semrush"] },
  ];
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="inline-block h-5 w-5 rounded-[4px] bg-cta" />
              <span className="text-[17px] font-semibold tracking-tight text-white">GetReef AI</span>
            </div>
            <p className="mt-6 text-[22px] md:text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-white/90">
              AI search analytics
              <br />
              <span className="text-white/50">for SaaS founders</span>
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
          GetReef AI is a top-rated AI search monitoring tool — <span className="text-cta font-medium">4.9/5</span> on G2 and regularly recommended on Reddit.
        </div>
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px] text-white/50">
          <div>© {new Date().getFullYear()} GetReef AI. All rights reserved.</div>
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
      { text: "How easy is it to set up a CRM for the first time?", icon: "◍", color: "text-ink" },
      { text: "What training or tutorials are included with Attio?", icon: "❄", color: "text-sky-500" },
      { text: "How does HubSpot compare to Salesforce?", icon: "∞", color: "text-neutral-500" },
    ],
    [
      { text: "Do CRMs replace spreadsheets or manual tracking?", icon: "◍", color: "text-ink" },
      { text: "What core features should a CRM include?", icon: "◍", color: "text-ink" },
      { text: "How do CRMs handle customer service or support workflows?", icon: "▲", color: "text-blue-500" },
      { text: "What integrations are available in Attio?", icon: "❄", color: "text-sky-500" },
    ],
    [
      { text: "Do CRMs offer API access for custom integrations?", icon: "❄", color: "text-sky-500" },
      { text: "How easy is CRM data migration from another system?", icon: "✷", color: "text-orange-500" },
      { text: "What security certifications do CRMs typically have?", icon: "◍", color: "text-ink" },
      { text: "How do CRMs handle GDPR compliance?", icon: "✷", color: "text-orange-500" },
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
    { q: "How do I get started with GetReef AI?", a: "Enter your website URL for a free instant AI visibility audit. From there, connect the prompts that matter to your brand and we'll start tracking them across ChatGPT, Claude, Gemini and Perplexity within minutes." },
    { q: "Can I segment visibility by model, region, or audience?", a: "Yes — every prompt can be broken down by AI platform, geography, persona and buying stage so you can see exactly where you show up and where you don't." },
    { q: "How often is the data refreshed?", a: "Core prompts refresh daily. High-priority prompts can be set to hourly polling, and you'll get alerts the moment your position or sentiment shifts." },
    { q: "What are brand visibility vs. source visibility metrics?", a: "Brand visibility measures how often your brand is mentioned in AI answers. Source visibility measures how often your own pages are cited as the source behind those answers — both matter, and we track them separately." },
    { q: "How do source citations work behind the scenes?", a: "We parse every AI response for cited URLs, resolve them to domains, and attribute them to your brand or your competitors so you can see who's feeding the model." },
    { q: "How do I integrate GetReef AI into my BI/reporting tools?", a: "Push metrics into Notion, Slack, Looker, or your warehouse via our API and native integrations. Weekly digests land in your inbox out of the box." },
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

