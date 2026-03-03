"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/animations/variants";
import type { ServiceStep } from "@/lib/services";

interface Props {
  steps: ServiceStep[];
}

/**
 * ServiceProcess — "How It Works" numbered process steps.
 */
export default function ServiceProcess({ steps }: Props) {
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
            Our Process
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
            How It Works
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={staggerItem}
              className="flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="font-semibold text-base text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
