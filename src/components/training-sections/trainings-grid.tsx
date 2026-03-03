"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportSettings,
} from "@/animations/variants";
import { getAllTrainings } from "@/lib/trainings";
import TrainingCard from "@/components/home-sections/training-card";
import { cn } from "@/lib/utils";

const ALL_TRAININGS = getAllTrainings();
const CATEGORIES = [
  "All",
  ...Array.from(new Set(ALL_TRAININGS.map((t) => t.category))),
];

/**
 * TrainingsGrid — category filter pills + animated training card grid.
 * Owns the filter state for client-side category filtering.
 */
export default function TrainingsGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? ALL_TRAININGS
      : ALL_TRAININGS.filter((t) => t.category === active);

  return (
    <section className="bg-background py-16 md:py-20" aria-label="Programs">
      <div className="mx-auto max-w-6xl px-6">
        {/* Filter pills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-wrap gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200",
                active === cat
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200",
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((program) => (
              <TrainingCard key={program.slug} {...program} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
