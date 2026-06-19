import { Blocks, Moon, Palette, Zap } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Modern stack",
    description:
      "Next.js App Router, TypeScript, and Tailwind CSS v4 — configured and ready to go.",
  },
  {
    icon: Blocks,
    title: "shadcn/ui components",
    description:
      "A curated set of accessible, composable components already installed in components/ui.",
  },
  {
    icon: Moon,
    title: "Dark mode built in",
    description:
      "Light, dark, and system themes powered by next-themes — no flash, persists across reloads.",
  },
  {
    icon: Palette,
    title: "Themeable design tokens",
    description:
      "CSS-variable based color, radius, and font tokens you can restyle from one place.",
  },
];

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="size-6 text-primary" />
              <CardTitle className="mt-2">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
