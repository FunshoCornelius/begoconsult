"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock4,
  Star,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  slideInLeft,
  viewportSettings,
} from "@/animations/variants";
import FeatureCard from "./feature-card";

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Vetted Talent",
    description:
      "Rigorous screening process ensuring only the top 1% of candidates reach your team.",
  },
  {
    icon: Clock4,
    title: "Rapid Deployment",
    description:
      "Get the resources you need within 48-72 hours, keeping your projects on schedule.",
  },
  {
    icon: Star,
    title: "Expert Trainers",
    description:
      "Learn from certified professionals with real-world industry experience.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Approach",
    description:
      "Dedicated account managers for seamless communication and ongoing support.",
  },
] as const;

/**
 * WhyPartner — section header on top, then two-column layout below.
 * Left: large team image as visual anchor.
 * Right: stacked feature items with numbered icons + CTA.
 */
export default function WhyPartner() {
  return (
    <section
      className="bg-warm-bg py-20 md:py-28"
      aria-label="Why partner with us"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Section header ──────────────────────────────────── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Why begoconsult
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Built for Results,{" "}
              <span className="text-primary">Not Just Promises</span>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-lg">
              We don&rsquo;t just provide services — we build long-term
              partnerships grounded in trust, quality, and measurable outcomes
              that drive your business forward.
            </p>
          </div>
        </motion.div>

        {/* ── Two-column: image + features ────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: team image */}
          <motion.figure
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaborating around a table"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.figure>

          {/* Right: features + CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="flex flex-col gap-8"
          >
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i + 1} />
            ))}

            {/* CTA below features */}
            <motion.div variants={staggerItem} className="pt-4">
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2"
                >
                  Start a Conversation
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
