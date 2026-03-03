"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, GraduationCap, Code2, ArrowRight } from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/animations/variants";
import { getAllServices, SERVICE_ICON } from "@/lib/services";

const ICON_MAP = {
  Users,
  GraduationCap,
  Code2,
} as const;

const ALL_SERVICES = getAllServices();

/**
 * ServicesGrid — large alternating service cards for the listing page.
 * Each card has an image on one side and content on the other,
 * alternating direction for visual variety.
 */
export default function ServicesGrid() {
  return (
    <section
      className="bg-background py-16 md:py-20"
      aria-label="Services overview"
    >
      <div className="mx-auto max-w-6xl px-6 flex flex-col gap-16">
        {ALL_SERVICES.map((service, i) => {
          const iconName = SERVICE_ICON[service.slug] ?? "Code2";
          const Icon = ICON_MAP[iconName];
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={service.slug}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
                i > 0 ? "pt-16 border-t border-border" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                variants={staggerItem}
                className={`w-full ${isEven ? "" : "lg:order-2"}`}
              >
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={staggerItem}
                className={`flex flex-col gap-5 ${isEven ? "" : "lg:order-1"}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                  <Icon size={24} className="text-primary" strokeWidth={1.75} />
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                  {service.title}
                </h2>

                <p className="text-muted text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Highlight pills */}
                <div className="flex flex-wrap gap-3">
                  {service.highlights.map((h) => (
                    <span
                      key={h.label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-warm-bg px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      <span className="font-semibold text-primary">
                        {h.value}
                      </span>
                      {h.label}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors mt-1 w-fit"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
