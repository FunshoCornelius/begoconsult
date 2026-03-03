"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Code2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/animations/variants";
import { type Service, SERVICE_ICON } from "@/lib/services";

const ICON_MAP = { Users, GraduationCap, Code2 } as const;

interface Props {
  service: Service;
}

/**
 * ServiceDetailHero — breadcrumb, icon badge, title, tagline,
 * and CTA over the service's background image with dark gradient overlay.
 */
export default function ServiceDetailHero({ service }: Props) {
  const iconName = SERVICE_ICON[service.slug] ?? "Code2";
  const Icon = ICON_MAP[iconName];

  return (
    <section
      className="relative min-h-[50vh] flex items-end overflow-hidden"
      aria-label="Service hero"
    >
      <Image
        src={service.image}
        alt=""
        fill
        className="object-cover"
        priority
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 to-slate-800/90" />
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
              href="/services"
              className="hover:text-white/80 transition-colors"
            >
              Services
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{service.title}</span>
          </motion.nav>

          {/* Icon badge */}
          <motion.div variants={staggerItem}>
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-1">
              <Icon size={28} className="text-white" strokeWidth={1.75} />
            </div>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl"
          >
            {service.title}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl"
          >
            {service.tagline}
          </motion.p>

          <motion.div variants={staggerItem} className="mt-2">
            <Button asChild size="lg">
              <Link href="/contact" className="inline-flex items-center gap-2">
                Get Started
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
