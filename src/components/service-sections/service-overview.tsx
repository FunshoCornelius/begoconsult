"use client";

import { motion } from "framer-motion";
import { Briefcase, Zap, Globe, Heart } from "lucide-react";
import { fadeInUp, viewportSettings } from "@/animations/variants";
import type { Service } from "@/lib/services";

const HIGHLIGHT_ICONS = [Briefcase, Zap, Globe, Heart];

interface Props {
  service: Service;
}

/**
 * ServiceOverview — two-column layout with overview paragraphs
 * and a sticky Quick Facts sidebar card.
 */
export default function ServiceOverview({ service }: Props) {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Overview text */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
              Overview
            </h2>
            {service.overview.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Facts sidebar */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm h-fit lg:sticky lg:top-28">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/50 mb-5">
              Quick Facts
            </h3>
            <dl className="flex flex-col gap-4">
              {service.highlights.map(({ label, value }, i) => {
                const Icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
                return (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <dt className="text-xs text-muted">{label}</dt>
                      <dd className="text-sm font-semibold text-foreground">
                        {value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
