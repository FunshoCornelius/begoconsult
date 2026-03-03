"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, viewportSettings } from "@/animations/variants";

const STATS = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 95, suffix: "%", label: "Client Retention" },
  { value: 1000, suffix: "+", label: "Professionals Placed" },
] as const;

/**
 * useCountUp — animates a number from 0 to `end` over `durationMs`
 * when `shouldStart` becomes true. Uses requestAnimationFrame for smooth
 * 60 fps updates without any external dependency.
 */
function useCountUp(
  end: number,
  shouldStart: boolean,
  durationMs = 2000,
): number {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      // easeOutCubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * end));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, shouldStart, durationMs]);

  return current;
}

function StatItem({ value, suffix, label }: (typeof STATS)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(value, isInView);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="text-4xl md:text-5xl font-extrabold text-white tabular-nums">
        {count}
        <span className="text-primary">{suffix}</span>
      </span>
      <span className="text-sm text-white/60 font-medium">{label}</span>
    </div>
  );
}

/**
 * StatsBar — dark strip with four animated counter metrics.
 * Numbers count up from zero when the section enters the viewport.
 */
export default function StatsBar() {
  return (
    <section
      className="bg-foreground py-16 md:py-20"
      aria-label="Key statistics"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
