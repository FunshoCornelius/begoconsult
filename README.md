# Bego Consult

Corporate website for **Bego Consult** — an IT consulting firm specializing in staffing, corporate training, and custom application development. Built with Next.js 16, React 19, and Tailwind CSS v4.

## Pages

| Route               | Description                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `/`                 | Homepage with hero, services overview, training programs, why-partner section, and CTA |
| `/about`            | Company story, mission & values, leadership, and team culture                          |
| `/services`         | Services listing with alternating image + content cards                                |
| `/services/[slug]`  | Individual service detail pages (IT Staffing, Corporate Training, App Development)     |
| `/trainings`        | Training programs listing with category filtering                                      |
| `/trainings/[slug]` | Individual training detail pages (6 certification programs)                            |
| `/contact`          | Contact form, office info (address, email, phone), and embedded map                    |

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack, React Compiler)
- **UI:** [React 19](https://react.dev), [Tailwind CSS v4](https://tailwindcss.com)
- **Animations:** [Framer Motion 12](https://motion.dev)
- **Icons:** [Lucide React](https://lucide.dev)
- **Components:** [Radix UI](https://radix-ui.com) primitives, [CVA](https://cva.style) for variant management
- **Utilities:** clsx, tailwind-merge

## Project Structure

```
src/
├── animations/          # Shared Framer Motion variants
├── app/                 # Route files only (metadata, generateStaticParams)
│   ├── about/
│   ├── contact/
│   ├── services/
│   │   └── [slug]/
│   └── trainings/
│       └── [slug]/
├── components/
│   ├── contact-sections/    # Contact page section components
│   ├── home-sections/       # Homepage section components
│   ├── service-sections/    # Services page section components
│   ├── training-sections/   # Training page section components
│   └── ui/                  # Reusable UI primitives (Button, Badge, Card)
└── lib/                 # Data modules, utilities
    ├── services.ts      # Service data & helpers
    ├── trainings.ts     # Training data & helpers
    └── utils.ts         # cn() utility
```

**Architecture:** Route files in `app/` contain only metadata and imports. All UI logic lives in `components/` as focused, single-responsibility section components. Shared data lives in `lib/` as the single source of truth consumed by homepage sections, listing pages, detail pages, and the sitemap.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

The site is configured for standard Next.js deployment. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for platform-specific instructions.
