"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search, UserCheck, Rocket, Headset } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/animations/variants";

const STEPS = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We learn your business goals, technical requirements, and team culture to craft a tailored engagement plan.",
  },
  {
    icon: UserCheck,
    title: "Match",
    description:
      "Our screening process identifies the right talent or training program aligned to your specific needs.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description:
      "Resources are onboarded and integrated within 48-72 hours, keeping your projects on track.",
  },
  {
    icon: Headset,
    title: "Support",
    description:
      "Ongoing account management ensures quality delivery, performance tracking, and continuous improvement.",
  },
] as const;

/**
 * HowWeWork — horizontal process timeline showing the 4-step engagement model.
 * Each step has a numbered icon, connector line, title, and description.
 */
export default function HowWeWork() {
  return (
    <section
      className="relative bg-background py-20 md:py-28 overflow-hidden"
      aria-label="How we work"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Light overlay for text legibility */}
      <div className="absolute inset-0 bg-white/90" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* ── Section header ─────────────────────────────────────── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-16 flex flex-col gap-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            How We Work
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            A proven four-step process that delivers results from day one.
          </p>
        </motion.div>

        {/* ── Steps ──────────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0"
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              variants={staggerItem}
              className="relative flex flex-col items-center text-center px-4"
            >
              {/* Connector line (between steps, hidden on mobile and after last) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-border" />
              )}

              {/* Step number + icon */}
              <div className="relative mb-5">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center">
                  <step.icon
                    size={24}
                    className="text-primary"
                    strokeWidth={1.75}
                  />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              {/* Copy */}
              <h3 className="font-semibold text-base text-foreground mb-1.5">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed max-w-55">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
