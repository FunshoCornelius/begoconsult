"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportSettings,
} from "@/animations/variants";
import { getAllTrainings } from "@/lib/trainings";
import TrainingCard from "./training-card";

const PROGRAMS = getAllTrainings().slice(0, 3);

/**
 * TrainingPrograms — 3-column grid showing the first 3 training programs.
 * Data sourced from the centralized trainings module.
 */
export default function TrainingPrograms() {
  return (
    <section
      className="bg-background py-20 md:py-28"
      aria-label="Training programs"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Section header ─────────────────────────────────────── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Upskill Your Team
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Training Programs
            </h2>
            <p className="text-muted text-base max-w-lg">
              Industry-recognized certification programs designed to accelerate
              your team&rsquo;s expertise and career growth.
            </p>
          </div>

          <Link
            href="/trainings"
            className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors shrink-0"
          >
            View All Programs &rarr;
          </Link>
        </motion.div>

        {/* ── Program cards grid ──────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PROGRAMS.map((program) => (
            <TrainingCard key={program.slug} {...program} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
