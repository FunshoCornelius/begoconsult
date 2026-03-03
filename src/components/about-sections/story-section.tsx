"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportSettings,
} from "@/animations/variants";

/**
 * StorySection — company overview with founding story left, image right.
 * Followed by mission & vision in a two-column card layout.
 */
export default function StorySection() {
  return (
    <section className="bg-background py-20 md:py-28" aria-label="Our story">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Story split ──────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20"
        >
          {/* Left: copy */}
          <motion.div variants={slideInLeft} className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
              A Decade of Delivering{" "}
              <span className="text-primary">Excellence</span>
            </h2>
            <div className="flex flex-col gap-4 text-muted text-base leading-relaxed">
              <p>
                Founded in 2014, begoconsult was born from a simple observation:
                enterprises needed a partner who could deliver top-tier IT
                talent, world-class training, and custom technology solutions —
                all under one roof.
              </p>
              <p>
                What started as an IT staffing firm has grown into a
                comprehensive Talent-as-a-Service provider, serving businesses
                of all sizes with full-time, part-time, and contract
                professionals across every major technology stack.
              </p>
              <p>
                With a leadership team averaging 6+ years of global management
                experience and a nationwide delivery model, we&rsquo;ve become
                the trusted partner for organizations seeking measurable results
                and long-term growth.
              </p>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div variants={slideInRight} className="w-full">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="begoconsult team working together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ── Mission & Vision cards ───────────────────────────── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Mission */}
          <div className="rounded-2xl bg-card overflow-hidden shadow-md">
            <div className="relative w-full h-36">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80"
                alt="Team in a strategy meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Our Mission
              </span>
              <h3 className="text-xl font-bold text-foreground mt-3 mb-3">
                Empowering Growth Through Talent & Technology
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                To bridge the gap between exceptional IT talent and the
                organizations that need them — accelerating business outcomes
                through strategic staffing, specialized training, and innovative
                technology solutions.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="rounded-2xl bg-card overflow-hidden shadow-md">
            <div className="relative w-full h-36">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80"
                alt="Modern tech workspace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Our Vision
              </span>
              <h3 className="text-xl font-bold text-foreground mt-3 mb-3">
                The Standard for Enterprise IT Partnership
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                To be the most trusted Talent-as-a-Service partner for enterprises
                across the United States — known for quality, speed, and the
                measurable impact we deliver to every client engagement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
