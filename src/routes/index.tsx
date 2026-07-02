import { createFileRoute } from "@tanstack/react-router";
import { Hero, FounderChatPill } from "@/components/hero";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <Hero />
      <FounderChatPill />
    </main>
  );
}
