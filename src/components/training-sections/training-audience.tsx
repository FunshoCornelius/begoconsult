"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, BookOpen } from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/animations/variants";

interface Props {
  targetAudience: string[];
  prerequisites: string[];
}

/**
 * TrainingAudience — side-by-side cards showing who the training
 * is for and what prerequisites are needed.
 */
export default function TrainingAudience({
  targetAudience,
  prerequisites,
}: Props) {
  return (
    <section className="bg-warm-bg py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Who it's for */}
          <motion.div
            variants={staggerItem}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                <Users size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Who Is This For?
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {targetAudience.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
                >
                  <CheckCircle2
                    size={16}
                    className="text-primary shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Prerequisites */}
          <motion.div
            variants={staggerItem}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                <BookOpen size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Prerequisites
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {prerequisites.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
                >
                  <CheckCircle2
                    size={16}
                    className="text-primary shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
