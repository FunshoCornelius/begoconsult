"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  BarChart2,
  Award,
  Monitor,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/animations/variants";
import {
  type Training,
  CATEGORY_GRADIENT,
  CATEGORY_VARIANT,
} from "@/lib/trainings";

interface Props {
  training: Training;
}

/**
 * TrainingDetailHero — breadcrumb, category badge, title, meta row,
 * and enroll CTA over the training's background image with gradient overlay.
 */
export default function TrainingDetailHero({ training }: Props) {
  const gradient =
    CATEGORY_GRADIENT[training.category] ?? "from-gray-700/90 to-gray-900/90";

  return (
    <section
      className="relative min-h-[50vh] flex items-end overflow-hidden"
      aria-label="Training hero"
    >
      <Image
        src={training.image}
        alt=""
        fill
        className="object-cover"
        priority
        aria-hidden="true"
      />
      <div className={`absolute inset-0 bg-linear-to-br ${gradient}`} />
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5"
        >
          {/* Breadcrumb */}
          <motion.nav
            variants={staggerItem}
            className="flex items-center gap-1 text-xs text-white/50"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link
              href="/trainings"
              className="hover:text-white/80 transition-colors"
            >
              Training Programs
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{training.title}</span>
          </motion.nav>

          <motion.div variants={staggerItem}>
            <Badge
              variant={CATEGORY_VARIANT[training.category] ?? "default"}
              className="mb-2"
            >
              {training.category}
            </Badge>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl"
          >
            {training.title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-5 text-sm text-white/60"
          >
            <span className="flex items-center gap-1.5">
              <Clock size={16} />
              {training.hours} Hours
            </span>
            <span className="flex items-center gap-1.5">
              <BarChart2 size={16} />
              {training.level}
            </span>
            <span className="flex items-center gap-1.5">
              <Award size={16} />
              {training.certification}
            </span>
            <span className="flex items-center gap-1.5">
              <Monitor size={16} />
              {training.format}
            </span>
          </motion.div>

          <motion.div variants={staggerItem} className="mt-2">
            <Button asChild size="lg">
              <Link href="/contact" className="inline-flex items-center gap-2">
                Enroll Now
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
