"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, BarChart2, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { staggerItem } from "@/animations/variants";
import { CATEGORY_GRADIENT, CATEGORY_VARIANT } from "@/lib/trainings";

export interface TrainingCardProps {
  slug: string;
  category: string;
  title: string;
  description: string;
  hours: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  topics: string[];
  certification: string;
  image: string;
}

/**
 * TrainingCard — detailed program card with photo-backed gradient header,
 * description, topic list, certification info, and CTA linking to detail page.
 */
export default function TrainingCard({
  slug,
  category,
  title,
  description,
  hours,
  level,
  topics,
  certification,
  image,
}: TrainingCardProps) {
  const gradient =
    CATEGORY_GRADIENT[category] ?? "from-gray-700/90 to-gray-900/90";

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="flex flex-col rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      {/* ── Gradient header with background photo ──────────────── */}
      <div className="relative px-6 pt-6 pb-8 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className={`absolute inset-0 bg-linear-to-br ${gradient}`} />

        <div className="relative z-10">
          <Badge
            variant={CATEGORY_VARIANT[category] ?? "default"}
            className="mb-3"
          >
            {category}
          </Badge>
          <h3 className="text-lg font-bold text-white leading-snug">{title}</h3>

          <div className="flex items-center gap-4 mt-3 text-xs text-white/60">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {hours} Hours
            </span>
            <span className="flex items-center gap-1">
              <BarChart2 size={12} />
              {level}
            </span>
          </div>
        </div>
      </div>

      {/* ── Card body ────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <p className="text-sm text-muted leading-relaxed">{description}</p>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Key Topics
          </span>
          <ul className="flex flex-col gap-1.5">
            {topics.map((topic) => (
              <li
                key={topic}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <CheckCircle2 size={14} className="text-primary shrink-0" />
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
          <span className="text-xs text-muted">
            Certification:{" "}
            <span className="font-semibold text-foreground">
              {certification}
            </span>
          </span>
          <Link
            href={`/trainings/${slug}`}
            className="text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
