"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, GraduationCap, Code2 } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewportSettings,
} from "@/animations/variants";
import { getAllServices, SERVICE_ICON } from "@/lib/services";
import ServiceCard from "./service-card";

const ICON_MAP = { Users, GraduationCap, Code2 } as const;

const SERVICES = getAllServices();

/**
 * Services — "Comprehensive IT Solutions" section.
 *
 * Layout:
 *  Top row: label + heading | "View All Services →" link (space-between)
 *  Bottom:  3-column card grid, staggered entrance
 */
export default function Services() {
  return (
    <section
      className="bg-background py-20 md:py-28"
      aria-label="Services section"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Section header ─────────────────────────────────────── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Comprehensive IT Solutions
            </h2>
            <p className="text-muted text-base max-w-lg">
              We bridge the gap between talent and technology to drive your
              business forward with integrated services.
            </p>
          </div>

          <Link
            href="/services"
            className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors shrink-0"
          >
            View All Services &rarr;
          </Link>
        </motion.div>

        {/* ── Cards grid ─────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const iconName = SERVICE_ICON[service.slug] ?? "Code2";
            const icon = ICON_MAP[iconName];
            return (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                icon={icon}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
