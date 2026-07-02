const PROMPTS = [
  { q: "Best enterprise cybersecurity tools 2026", vol: "18.4K", tag: "SECURITY" },
  { q: "Top data observability platforms for fintech", vol: "9.2K", tag: "DATA" },
  { q: "Alternatives to Salesforce for mid-market SaaS", vol: "14.7K", tag: "CRM" },
  { q: "AI compliance auditing vendors SOC 2", vol: "6.1K", tag: "COMPLIANCE" },
  { q: "Enterprise vector database benchmark", vol: "4.8K", tag: "INFRA" },
  { q: "Best identity governance tools for banks", vol: "7.3K", tag: "IDENTITY" },
];

export function Wavetrack() {
  return (
    <section id="platform" className="border-b border-hairline">
      {/* Section header */}
      <div className="mx-auto max-w-[1400px] px-8 pt-24 pb-10">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted">§ 002 — THE INSTRUMENT</span>
          <div className="h-px flex-1 bg-hairline" />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted">WAVETRACK™ / LIVE</span>
        </div>
        <div className="grid grid-cols-12 gap-6 items-end">
          <h2 className="col-span-12 md:col-span-8 font-serif tracking-[-0.02em] leading-[1]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}>
            Abyssal mapping of every <span className="italic text-ink-dim">citation current</span>.
          </h2>
          <p className="col-span-12 md:col-span-4 text-ink-dim text-[14px] leading-[1.7] md:pb-3">
            Wavetrack samples the answer surface of every major model, then decomposes
            each response into three tidal indicators.
          </p>
        </div>
      </div>

      {/* Split screen */}
      <div className="mx-auto max-w-[1400px] px-8 pb-24">
        <div className="border border-hairline-strong">
          {/* meta bar */}
          <div className="flex items-center justify-between border-b border-hairline-strong px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
            <div className="flex items-center gap-4">
              <span className="text-seafoam">● REC</span>
              <span>SESSION 04A · REEF/NORTH-ATL</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span>SWELL 1.8m</span>
              <span>PERIOD 12s</span>
              <span>TEMP 14.2°C</span>
            </div>
          </div>

          <div className="grid grid-cols-12">
            {/* LEFT — prompt list */}
            <div className="col-span-12 md:col-span-5 border-b md:border-b-0 md:border-r border-hairline-strong">
              <div className="px-4 py-3 border-b border-hairline flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                <span>MONITORED PROMPTS</span>
                <span>N = 128</span>
              </div>
              <ul>
                {PROMPTS.map((p, i) => (
                  <li
                    key={p.q}
                    className={
                      "group grid grid-cols-[3rem_1fr_auto] items-center gap-3 px-4 py-4 border-b border-hairline last:border-b-0 cursor-pointer hover:bg-[#070b12] transition-colors " +
                      (i === 0 ? "bg-[#070b12]" : "")
                    }
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em] text-ink-muted">
                      {String(i + 1).padStart(3, "0")}
                    </span>
                    <div className="min-w-0">
                      <div className="text-ink text-[13px] leading-snug truncate">{p.q}</div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                        {p.tag} · VOL {p.vol}
                      </div>
                    </div>
                    <Sparkline highlighted={i === 0} />
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — pillars */}
            <div className="col-span-12 md:col-span-7">
              <div className="px-4 py-3 border-b border-hairline flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                <span>SELECTED — BEST ENTERPRISE CYBERSECURITY TOOLS 2026</span>
                <span>Δ 24H</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3">
                <Pillar
                  label="Share of Voice"
                  value="34.2"
                  unit="%"
                  delta="+2.4"
                  chart={<SwellChart amplitude={26} phase={0} />}
                />
                <Pillar
                  label="Contextual Position"
                  value="1.7"
                  unit="rank"
                  delta="+0.3"
                  chart={<SwellChart amplitude={18} phase={1.2} />}
                  bordered
                />
                <Pillar
                  label="Sentiment Index"
                  value="+0.68"
                  unit="σ"
                  delta="+0.11"
                  chart={<SwellChart amplitude={22} phase={2.4} />}
                />
              </div>

              {/* Citation ledger */}
              <div className="border-t border-hairline-strong">
                <div className="px-4 py-3 border-b border-hairline flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                  <span>Citation Ledger</span>
                  <span>SOURCES 47</span>
                </div>
                <table className="w-full font-mono text-[11px]">
                  <tbody>
                    {[
                      ["01", "CHATGPT-5", "acme.io/security", "CITED", "1st"],
                      ["02", "PERPLEXITY", "acme.io/compare", "MENTIONED", "3rd"],
                      ["03", "GEMINI-2.5", "acme.io/enterprise", "CITED", "2nd"],
                      ["04", "CLAUDE-4.5", "acme.io/pricing", "OMITTED", "—"],
                    ].map(([n, model, url, status, pos]) => (
                      <tr key={n} className="border-b border-hairline last:border-b-0">
                        <td className="px-4 py-3 text-ink-muted w-12">{n}</td>
                        <td className="px-2 py-3 text-ink-dim">{model}</td>
                        <td className="px-2 py-3 text-ink truncate">{url}</td>
                        <td className={
                          "px-2 py-3 uppercase tracking-[0.18em] " +
                          (status === "CITED" ? "text-seafoam" : status === "OMITTED" ? "text-ink-muted" : "text-ink-dim")
                        }>{status}</td>
                        <td className="px-4 py-3 text-right text-ink-dim">{pos}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
          <span>FIG. 01 — WAVETRACK CONSOLE, LIVE SESSION</span>
          <span>SOURCE: GETREEF.AI / TELEMETRY</span>
        </div>
      </div>
    </section>
  );
}

function Pillar({
  label, value, unit, delta, chart, bordered,
}: {
  label: string; value: string; unit: string; delta: string;
  chart: React.ReactNode; bordered?: boolean;
}) {
  return (
    <div className={"p-6 " + (bordered ? "md:border-x border-hairline-strong" : "")}>
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
        <span>{label}</span>
        <span className="text-seafoam">{delta}</span>
      </div>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-serif text-ink" style={{ fontSize: "3.25rem", lineHeight: 1 }}>
          {value}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">{unit}</span>
      </div>
      <div className="mt-6 h-16">{chart}</div>
    </div>
  );
}

function SwellChart({ amplitude, phase }: { amplitude: number; phase: number }) {
  const w = 260, h = 64;
  const pts: string[] = [];
  for (let x = 0; x <= w; x += 4) {
    const t = (x / w) * Math.PI * 4 + phase;
    const decay = 1 - x / (w * 2.5);
    const y = h / 2 + Math.sin(t) * amplitude * decay * 0.6 + Math.sin(t * 2.3) * amplitude * 0.15;
    pts.push(`${x},${y.toFixed(2)}`);
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="w-full h-full">
      <line x1="0" y1={h/2} x2={w} y2={h/2} stroke="#111827" strokeWidth="0.5" strokeDasharray="2 3" />
      <polyline points={pts.join(" ")} fill="none" stroke="#a8d8d1" strokeWidth="1" />
      <polyline points={pts.join(" ")} fill="none" stroke="#a8d8d1" strokeWidth="0.4" opacity="0.4" transform="translate(0 6)" />
    </svg>
  );
}

function Sparkline({ highlighted }: { highlighted?: boolean }) {
  const pts = Array.from({ length: 24 }).map((_, i) => {
    const y = 12 + Math.sin(i * 0.7 + (highlighted ? 0 : 1.4)) * 5 + (highlighted ? -i * 0.15 : 0);
    return `${i * 3},${y.toFixed(1)}`;
  });
  return (
    <svg viewBox="0 0 72 24" className="w-[72px] h-6">
      <polyline
        points={pts.join(" ")}
        fill="none"
        stroke={highlighted ? "#a8d8d1" : "#334155"}
        strokeWidth="1"
      />
    </svg>
  );
}
