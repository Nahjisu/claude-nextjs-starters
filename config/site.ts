export const siteConfig = {
  name: "Next Starter",
  description:
    "A modern Next.js starter kit with TypeScript, Tailwind CSS, and shadcn/ui — ready to build on from day one.",
  url: "https://github.com/your-org/claude-nextjs-starters",
  links: {
    github: "https://github.com/your-org/claude-nextjs-starters",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "Components", href: "/#components" },
    { title: "Docs", href: "https://ui.shadcn.com/docs" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
