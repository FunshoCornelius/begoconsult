"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Lightbulb, Target, Users } from "lucide-react";
import {
  fadeInUp,
  slideInLeft,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/animations/variants";

const VALUES = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with transparency and honesty in every client relationship, delivering on our commitments without exception.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously evolve our methods, tools, and training programs to stay ahead of the technology landscape.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards — from the talent we vet to the solutions we build and the training we deliver.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We invest in long-term relationships, treating every client's success as our own and every engagement as a collaboration.",
  },
] as const;

/**
 * ValuesSection — two-column layout with large image left
 * and stacked value items right, on warm background.
 */
export default function ValuesSection() {
  return (
    <section className="bg-warm-bg py-20 md:py-28" aria-label="Our values">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* ── Left: image ──────────────────────────────────────── */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="w-full"
          >
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80"
                alt="Team collaborating around a conference table"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* ── Right: header + stacked values ────────────────────── */}
          <div className="flex flex-col gap-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="flex flex-col gap-3"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Our Core Values
              </h2>
              <p className="text-muted text-base max-w-md">
                The principles that guide every decision, every engagement, and
                every relationship we build.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="flex flex-col gap-6"
            >
              {VALUES.map((value) => (
                <motion.div
                  key={value.title}
                  variants={staggerItem}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                    <value.icon
                      size={22}
                      className="text-primary"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-base text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
