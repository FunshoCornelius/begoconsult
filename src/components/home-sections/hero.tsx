"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/animations/variants";

/**
 * Hero — full-viewport dark overlay hero with centred copy.
 *
 * Design: a high-quality background image overlaid with gradients,
 * centred headline + subtitle + dual CTA buttons, and an inline
 * trust indicator strip at the bottom.
 */
export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Background image ──────────────────────────────────── */}
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format&fit=crop&q=80"
        alt=""
        fill
        className="object-cover"
        priority
        aria-hidden="true"
      />

      {/* ── Dark gradient overlays ────────────────────────────── */}
      <div className="absolute inset-0 bg-foreground/75" />
      <div className="absolute inset-0 bg-linear-to-b from-foreground/40 via-transparent to-foreground/80" />

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 md:py-40 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow badge */}
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white/90 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Trusted Partner Since 2014
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] text-white max-w-4xl"
          >
            Accelerating Growth Through{" "}
            <span className="text-primary">Talent &amp; Technology</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
          >
            We deliver top-tier IT staffing, specialized corporate training, and
            custom application development that transforms how enterprises
            operate and compete.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <Button asChild size="lg" className="text-base px-10 h-13">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-10 h-13 border-white/30 text-white hover:bg-white hover:text-foreground"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </motion.div>

          {/* Trust indicator strip */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-6 mt-6 text-white/50 text-sm"
          >
            <div className="flex items-center gap-2">
              {/* Small stacked avatar circles as visual proof */}
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-white/20 border-2 border-white/10"
                  />
                ))}
              </div>
              <span>
                Trusted by{" "}
                <strong className="text-white font-semibold">500+</strong>{" "}
                businesses
              </span>
            </div>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <span>
              <strong className="text-white font-semibold">95%</strong> client
              retention
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom fade to white ──────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
