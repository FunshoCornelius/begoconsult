"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/animations/variants";

const MILESTONES: {
  year: string;
  title: string;
  description: string;
  image?: string;
}[] = [
  {
    year: "2014",
    title: "Founded",
    description:
      "begoconsult launched as an IT staffing consultancy in the United States, placing its first contract engineers within 60 days.",
  },
  {
    year: "2016",
    title: "Training Division Launched",
    description:
      "Expanded into IT certification training, starting with AWS and Splunk programs to upskill enterprise workforces.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&auto=format&fit=crop&q=80",
  },
  {
    year: "2018",
    title: "Nationwide Reach",
    description:
      "Grew delivery capabilities coast-to-coast, establishing partnerships with Fortune 500 clients across multiple industries.",
  },
  {
    year: "2020",
    title: "App Development & Infrastructure",
    description:
      "Added custom application development and infrastructure services, becoming a full Talent-as-a-Service provider.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&auto=format&fit=crop&q=80",
  },
  {
    year: "2022",
    title: "Cybersecurity Practice",
    description:
      "Launched a dedicated cybersecurity training and consulting practice in response to growing enterprise security demands.",
  },
  {
    year: "2024",
    title: "10 Years of Impact",
    description:
      "Celebrated a decade of service — 500+ clients, 1000+ professionals placed, and a 95% client retention rate.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&auto=format&fit=crop&q=80",
  },
];

/**
 * TimelineSection — vertical timeline showing company milestones.
 * Full-bleed background image with dark overlay for depth.
 * Alternates left/right on desktop, stacks vertically on mobile.
 */
export default function TimelineSection() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      aria-label="Company timeline"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&auto=format&fit=crop&q=80"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
      />
      {/* Dark overlay — stronger than hero for small-text legibility */}
      <div className="absolute inset-0 bg-foreground/85" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-16 flex flex-col gap-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Key Milestones
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            From a small staffing firm to a comprehensive Talent-as-a-Service
            partner.
          </p>
        </motion.div>

        {/* ── Timeline ──────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative"
        >
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

          <div className="flex flex-col gap-10 md:gap-14">
            {MILESTONES.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              const isLast = i === MILESTONES.length - 1;

              return (
                <motion.div
                  key={milestone.year}
                  variants={staggerItem}
                  className="relative flex items-start md:items-center"
                >
                  {/* Dot on the line */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-foreground -translate-x-1.5 mt-1 md:mt-0 md:-translate-x-1.5 z-10 ${isLast ? "ring-4 ring-primary/20" : ""}`}
                  />

                  {/* Content card — alternates sides on desktop */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft
                        ? "md:mr-auto md:pr-8 md:text-right"
                        : "md:ml-auto md:pl-8 md:text-left"
                    }`}
                  >
                    <span className="text-sm font-bold text-primary">
                      {milestone.year}
                    </span>
                    <h3 className="text-base font-semibold text-white mt-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mt-1.5">
                      {milestone.description}
                    </p>
                    {milestone.image && (
                      <div className="relative w-full h-28 rounded-lg overflow-hidden mt-3">
                        <Image
                          src={milestone.image}
                          alt={milestone.title}
                          fill
                          className="object-cover"
                          sizes="300px"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
