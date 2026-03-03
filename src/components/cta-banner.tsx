"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fadeInUp, viewportSettings } from "@/animations/variants";

/**
 * CtaBanner — dark closing-pitch section before the footer.
 * Features a background image, dark overlay, subtle radial glow
 * of the brand colour at the centre, and a single prominent conversion CTA.
 */
export default function CtaBanner() {
  return (
    <section
      className="relative bg-foreground py-20 md:py-28 overflow-hidden"
      aria-label="Call to action"
    >
      {/* ── Background image ──────────────────────────────────── */}
      <Image
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* ── Dark overlay ──────────────────────────────────────── */}
      <div className="absolute inset-0 bg-foreground/85" aria-hidden="true" />

      {/* ── Decorative radial glow ─────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(240,136,91,0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col items-center gap-6"
        >
          {/* Pre-heading */}
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Let&rsquo;s Build Together
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to Transform <br className="hidden sm:block" />
            Your Business?
          </h2>

          {/* Subtext */}
          <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
            Whether you need top talent, specialized training, or custom
            software solutions, our team is ready to deliver results that
            matter.
          </p>

          {/* CTA */}
          <Button asChild size="lg" className="text-base px-10 h-13 mt-2">
            <Link href="/contact" className="inline-flex items-center gap-2">
              Schedule a Consultation
              <ArrowRight size={16} />
            </Link>
          </Button>

          {/* Supporting micro-copy */}
          <p className="text-xs text-white/40">
            No commitment required. Let&rsquo;s start with a conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
