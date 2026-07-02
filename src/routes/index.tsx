import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/reef/hero";
import { Wavetrack } from "@/components/reef/wavetrack";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-abyss text-ink">
      <Hero />
      <Wavetrack />
      <footer className="border-t border-hairline">
        <div className="mx-auto max-w-[1400px] px-8 py-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          <span>GETREEF.AI — 48°51′N / 2°21′E</span>
          <span>© 2026 — ALL CURRENTS RESERVED</span>
        </div>
      </footer>
    </main>
  );
}
