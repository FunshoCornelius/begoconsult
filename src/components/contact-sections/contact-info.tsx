"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/animations/variants";

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "10851 Lanham Severn Rd\nGlenn Dale, MD 20769",
    href: "https://www.google.com/maps/search/?api=1&query=10851+Lanham+Severn+Rd+Glenn+Dale+MD+20769",
  },
  {
    icon: Mail,
    label: "Email",
    value: "admin@begoconsult.com",
    href: "mailto:admin@begoconsult.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 240-716-9841",
    href: "tel:+12407169841",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 9:00 AM – 6:00 PM EST",
    href: undefined,
  },
] as const;

/**
 * ContactInfo — contact details cards + embedded Google Maps.
 */
export default function ContactInfo() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="flex flex-col gap-6"
    >
      {/* ── Contact detail cards ─────────────────────────── */}
      {CONTACT_DETAILS.map((item) => {
        const Icon = item.icon;
        const content = (
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
              <Icon size={18} className="text-primary" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                {item.label}
              </span>
              <span className="text-sm text-foreground whitespace-pre-line leading-relaxed">
                {item.value}
              </span>
            </div>
          </div>
        );

        return (
          <motion.div
            key={item.label}
            variants={staggerItem}
            className="rounded-2xl border border-border bg-card p-5"
          >
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block hover:opacity-80 transition-opacity"
              >
                {content}
              </a>
            ) : (
              content
            )}
          </motion.div>
        );
      })}

      {/* ── Map embed ───────────────────────────────────── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="rounded-2xl border border-border overflow-hidden"
      >
        <iframe
          title="Bego Consult office location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.8!2d-76.8245!3d38.9825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c2c3e5a5a5a5%3A0x0!2s10851+Lanham+Severn+Rd%2C+Glenn+Dale%2C+MD+20769!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </motion.div>
  );
}
