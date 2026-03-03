"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportSettings } from "@/animations/variants";

const CLIENT_NAMES = [
  "TechVista",
  "NovaCorp",
  "Meridian Systems",
  "Apex Solutions",
  "CloudBridge",
  "DataForge",
  "Pinnacle Group",
  "Vanguard Digital",
] as const;

/**
 * ClientLogos — marquee trust band showing placeholder client names.
 * Uses a pure-CSS infinite scroll animation with edge-fade gradients.
 */
export default function ClientLogos() {
  return (
    <section
      className="bg-background py-16 md:py-20 overflow-hidden"
      aria-label="Trusted by industry leaders"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center text-sm font-semibold uppercase tracking-widest text-muted mb-10"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>

      {/* ── Marquee container ──────────────────────────────────── */}
      <div className="relative">
        {/* Left edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
        {/* Right edge fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...CLIENT_NAMES, ...CLIENT_NAMES].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center shrink-0 px-10 md:px-14"
            >
              <span className="text-xl md:text-2xl font-bold text-foreground/15 whitespace-nowrap select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
