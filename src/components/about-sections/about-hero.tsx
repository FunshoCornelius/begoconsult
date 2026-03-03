"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/variants";

/**
 * AboutHero — full-bleed background image hero with gradient overlays.
 * Mirrors the homepage hero pattern for visual consistency.
 */
export default function AboutHero() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden"
      aria-label="About hero"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&auto=format&fit=crop&q=80"
        alt=""
        fill
        className="object-cover"
        priority
        aria-hidden="true"
      />

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-foreground/75" />
      <div className="absolute inset-0 bg-linear-to-b from-foreground/40 via-transparent to-foreground/80" />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(240,136,91,0.25) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 md:py-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col gap-5"
        >
          {/* Glassmorphic eyebrow badge */}
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white/90 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              About begoconsult
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          >
            Building Careers.{" "}
            <span className="text-primary">Powering Enterprises.</span>
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl"
          >
            Since 2014, we&rsquo;ve been connecting exceptional talent with
            industry-leading organizations — delivering IT staffing, training,
            and technology solutions across the United States.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
