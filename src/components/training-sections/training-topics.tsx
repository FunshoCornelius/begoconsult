"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/animations/variants";

interface Props {
  topics: string[];
}

/**
 * TrainingTopics — two-column checklist of key topics covered.
 */
export default function TrainingTopics({ topics }: Props) {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col gap-3 mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            At a Glance
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
            Key Topics Covered
          </h2>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {topics.map((topic) => (
            <motion.li
              key={topic}
              variants={staggerItem}
              className="flex items-center gap-3 text-base text-foreground"
            >
              <CheckCircle2 size={18} className="text-primary shrink-0" />
              {topic}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
