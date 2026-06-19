import { ComponentShowcase } from "@/components/demo/component-showcase";
import { FeatureCards } from "@/components/demo/feature-cards";
import { Hero } from "@/components/demo/hero";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />

      <Separator className="mx-auto max-w-6xl" />

      <section id="components" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Everything you need, already wired up
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            A live look at the shadcn/ui components installed in this starter —
            forms, overlays, feedback, and data display.
          </p>
        </div>
        <ComponentShowcase />
      </section>
    </>
  );
}
