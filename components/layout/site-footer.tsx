import Link from "next/link";
import { GitFork } from "lucide-react";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          Built with Next.js, Tailwind CSS, and shadcn/ui. &copy;{" "}
          {new Date().getFullYear()} {siteConfig.name}.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub repository"
          >
            <GitFork className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
