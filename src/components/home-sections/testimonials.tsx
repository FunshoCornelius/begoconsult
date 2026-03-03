"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportSettings,
} from "@/animations/variants";
import TestimonialCard from "./testimonial-card";

const TESTIMONIALS = [
  {
    quote:
      "begoconsult transformed our hiring process. Within 72 hours, they placed three senior engineers who hit the ground running. Their screening quality is unlike anything we\u2019ve experienced.",
    name: "Sarah Mitchell",
    title: "VP of Engineering",
    company: "TechVista Inc.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The AWS training program upskilled our entire cloud team in under two months. We achieved our AWS migration six weeks ahead of schedule as a direct result.",
    name: "David Chen",
    title: "CTO",
    company: "Meridian Systems",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Their client-centric approach sets them apart. Our dedicated account manager understands our business deeply, and every placement has been a strong cultural and technical fit.",
    name: "Amara Johnson",
    title: "Director of Operations",
    company: "NovaCorp",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
  },
] as const;

/**
 * Testimonials — three client testimonial cards in a responsive grid.
 * Follows the same section-header pattern as Services.
 */
export default function Testimonials() {
  return (
    <section
      className="bg-background py-20 md:py-28"
      aria-label="Client testimonials"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Section header ─────────────────────────────────────── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-14 flex flex-col gap-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Client Success
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Results-driven partnerships that deliver measurable impact.
          </p>
        </motion.div>

        {/* ── Testimonial cards grid ──────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
