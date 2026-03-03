import { Variants } from "framer-motion";

/**
 * Shared Framer Motion variant definitions.
 *
 * Architecture decision: centralising variants here means all components
 * consume the same timing/easing values — changing animation feel site-wide
 * requires editing a single file.
 */

/** Generic fade + slide up — primary entrance animation for sections */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Simple opacity fade — overlays, images */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/**
 * Stagger container — wrap a list of items with this on the parent.
 * Each direct child with staggerItem will animate in sequence.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

/** Stagger item — attach to each child inside a staggerContainer */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Slide in from left — hero text, left-aligned content */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Slide in from right — hero image, right-aligned content */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Scale in — cards, badges, icons */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/** Settings shared across all viewport-triggered animations */
export const viewportSettings = {
  once: true, // animate only on first enter — no re-trigger on scroll up
  amount: 0.2, // 20% of element visible triggers the animation
};
