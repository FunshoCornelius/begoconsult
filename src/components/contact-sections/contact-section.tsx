"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportSettings } from "@/animations/variants";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

/**
 * ContactSection — two-column layout with the form on the left
 * and contact details + map on the right.
 */
export default function ContactSection() {
  return (
    <section className="bg-background py-16 md:py-20" aria-label="Contact form">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Section header ─────────────────────────────────── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col gap-3 mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Contact Us
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
            Send Us a Message
          </h2>
          <p className="text-muted text-base max-w-lg">
            Fill out the form below and our team will get back to you within 24
            hours. We&rsquo;re here to help with any questions about our
            services.
          </p>
        </motion.div>

        {/* ── Two-column: form + info ────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-14">
          {/* Form — wider column */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Info + map — narrower column */}
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
