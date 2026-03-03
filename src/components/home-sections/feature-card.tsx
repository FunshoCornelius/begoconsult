"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { staggerItem } from "@/animations/variants";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

/**
 * FeatureCard — horizontal layout feature item with a numbered accent.
 * Designed for the split-layout WhyPartner section.
 */
export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div variants={staggerItem} className="flex gap-5 items-start group">
      {/* Numbered icon container */}
      <div className="relative w-14 h-14 rounded-2xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all duration-200">
        <Icon size={22} className="text-primary" strokeWidth={1.75} />
        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
          {index}
        </span>
      </div>

      <div className="flex flex-col gap-1 pt-1">
        <h3 className="font-semibold text-base text-foreground">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
