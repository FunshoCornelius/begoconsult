"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/variants";

/**
 * TrainingsHero — full-bleed background image hero for the trainings listing page.
 */
export default function TrainingsHero() {
  return (
    <section
      className="relative min-h-[50vh] flex items-center overflow-hidden"
      aria-label="Trainings hero"
    >
      <Image
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&auto=format&fit=crop&q=80"
        alt=""
        fill
        className="object-cover"
        priority
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-foreground/75" />
      <div className="absolute inset-0 bg-linear-to-b from-foreground/40 via-transparent to-foreground/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-36">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col gap-5"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white/90 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Training Programs
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          >
            Master the Skills <span className="text-primary">That Matter</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl"
          >
            Industry-recognized certification programs with hands-on labs,
            expert instructors, and real-world scenarios designed to accelerate
            your career and team performance.
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
