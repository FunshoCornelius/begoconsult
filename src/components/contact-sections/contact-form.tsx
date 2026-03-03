"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/animations/variants";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success";

const SERVICE_OPTIONS = [
  "IT Staffing",
  "Corporate Training",
  "App Development",
  "Other",
];

/**
 * ContactForm — contact form with mock submission.
 * Simulates a successful send after a short delay.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Mock successful submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center gap-5 py-16 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-extrabold text-foreground">
          Message Sent!
        </h3>
        <p className="text-muted max-w-md">
          Thank you for reaching out. Our team will review your message and get
          back to you within 24 hours.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="flex flex-col gap-5"
    >
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <motion.div variants={staggerItem} className="flex flex-col gap-1.5">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-foreground"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            disabled={status === "submitting"}
            placeholder="John"
            className={cn(
              "h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground",
              "placeholder:text-muted/60 outline-none",
              "focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all",
              "disabled:opacity-50",
            )}
          />
        </motion.div>

        <motion.div variants={staggerItem} className="flex flex-col gap-1.5">
          <label
            htmlFor="lastName"
            className="text-sm font-medium text-foreground"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            disabled={status === "submitting"}
            placeholder="Doe"
            className={cn(
              "h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground",
              "placeholder:text-muted/60 outline-none",
              "focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all",
              "disabled:opacity-50",
            )}
          />
        </motion.div>
      </div>

      {/* Email */}
      <motion.div variants={staggerItem} className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={status === "submitting"}
          placeholder="john@example.com"
          className={cn(
            "h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground",
            "placeholder:text-muted/60 outline-none",
            "focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all",
            "disabled:opacity-50",
          )}
        />
      </motion.div>

      {/* Phone */}
      <motion.div variants={staggerItem} className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Phone Number{" "}
          <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          disabled={status === "submitting"}
          placeholder="+1 (555) 000-0000"
          className={cn(
            "h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground",
            "placeholder:text-muted/60 outline-none",
            "focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all",
            "disabled:opacity-50",
          )}
        />
      </motion.div>

      {/* Service interest */}
      <motion.div variants={staggerItem} className="flex flex-col gap-1.5">
        <label
          htmlFor="service"
          className="text-sm font-medium text-foreground"
        >
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          required
          disabled={status === "submitting"}
          defaultValue=""
          className={cn(
            "h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground",
            "outline-none appearance-none",
            "focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all",
            "disabled:opacity-50",
          )}
        >
          <option value="" disabled>
            Select a service...
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </motion.div>

      {/* Message */}
      <motion.div variants={staggerItem} className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          disabled={status === "submitting"}
          rows={5}
          placeholder="Tell us about your project or requirements..."
          className={cn(
            "rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground resize-none",
            "placeholder:text-muted/60 outline-none",
            "focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all",
            "disabled:opacity-50",
          )}
        />
      </motion.div>

      {/* Submit */}
      <motion.div variants={staggerItem} className="pt-2">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin mr-2" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={16} className="ml-2" />
            </>
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
}
