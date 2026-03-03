"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/animations/variants";
import type { ServiceFeature } from "@/lib/services";

interface Props {
  features: ServiceFeature[];
}

/**
 * ServiceFeatures — "What's Included" numbered feature cards
 * in a 2-column grid on warm background.
 */
export default function ServiceFeatures({ features }: Props) {
  return (
    <section className="bg-warm-bg py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col gap-3 mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Capabilities
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
            What&rsquo;s Included
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold text-base text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
