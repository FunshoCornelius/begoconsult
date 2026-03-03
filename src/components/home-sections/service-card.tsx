"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { staggerItem } from "@/animations/variants";

interface ServiceCardProps {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

/**
 * ServiceCard — individual service offering card with top image strip.
 * Uses staggerItem variant so the parent staggerContainer controls
 * the cascaded entrance timing automatically.
 */
export default function ServiceCard({
  slug,
  icon: Icon,
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex flex-col rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
    >
      {/* Image strip */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-4 p-6">
        {/* Icon bubble */}
        <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
          <Icon size={20} className="text-primary" strokeWidth={1.75} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-base text-foreground">{title}</h3>
          <p className="text-sm text-muted leading-relaxed">{description}</p>
        </div>

        <Link
          href={`/services/${slug}`}
          className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
        >
          Learn More &rarr;
        </Link>
      </div>
    </motion.div>
  );
}
