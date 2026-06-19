import Link from "next/link";
import { ArrowRight, GitFork } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 pt-20 pb-16 text-center sm:pt-28">
      <Badge variant="secondary" className="gap-1.5">
        Next.js · TypeScript · Tailwind CSS · shadcn/ui
      </Badge>
      <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl">
        Ship your next project, faster.
      </h1>
      <p className="max-w-xl text-lg text-balance text-muted-foreground">
        A batteries-included starter kit — themeable UI, a curated component
        library, and a clean layout shell — so you can skip the boilerplate and
        start building.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="lg" asChild>
          <Link href="#components">
            Browse components
            <ArrowRight />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitFork />
            View on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
}
