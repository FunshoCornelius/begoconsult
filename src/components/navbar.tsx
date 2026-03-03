"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/trainings" },
  // { label: "Careers", href: "#" },
] as const;

/**
 * Navbar — transparent over the dark hero, transitions to frosted glass on scroll.
 *
 * Design: taller header (h-20), transparent by default so the hero image
 * shows through, then gains a white/blur backdrop + shadow once the user
 * scrolls past 48 px. Text switches from white → dark on scroll.
 * Mobile drawer slides down with AnimatePresence.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <div
        className={cn(
          "mx-auto  px-6 md:h-20 h-14 flex items-center transition-all duration-500 justify-between rounded-lg ",
          scrolled
            ? "max-w-6xl bg-black/30 backdrop-blur-md shadow-sm"
            : "container bg-transparent",
        )}
      >
        {/* ── Brand ─────────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="begoconsult logo"
            width={128}
            height={32}
            className={cn(
              "object-contain transition-all duration-300",
              scrolled ? "brightness-0 invert" : "",
            )}
            priority
          />
        </Link>

        {/* ── Desktop nav ───────────────────────────────────────── */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-200",
                "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full",
                scrolled
                  ? "text-white/80 hover:text-foreground"
                  : "text-white/80 hover:text-white",
              )}
            >
              {label}
            </Link>
          ))}
          <Button asChild size="default">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </nav>

        {/* ── Mobile toggle ─────────────────────────────────────── */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors duration-200",
            scrolled
              ? "text-foreground hover:bg-gray-100"
              : "text-white hover:bg-white/10",
          )}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile drawer ─────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-border shadow-lg"
          >
            <nav
              className="flex flex-col gap-1 px-6 py-5"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium text-foreground hover:text-primary hover:bg-primary-light rounded-lg px-3 py-2.5 transition-colors duration-150"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-border">
                <Button asChild size="default" className="w-full">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
