"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { staggerItem } from "@/animations/variants";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

/**
 * TestimonialCard — individual client testimonial with quote mark,
 * text, divider, and headshot avatar.
 */
export default function TestimonialCard({
  quote,
  name,
  title,
  company,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm"
    >
      {/* Quote icon */}
      <Quote size={32} className="text-primary/30 shrink-0" strokeWidth={1.5} />

      {/* Testimonial text */}
      <p className="text-sm md:text-base text-muted leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Divider */}
      <div className="w-12 h-px bg-border" />

      {/* Author info */}
      <div className="flex items-center gap-3">
        {/* Headshot avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">{name}</span>
          <span className="text-xs text-muted">
            {title}, {company}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
