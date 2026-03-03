/**
 * HomePage — composes the full landing page from independent section components.
 *
 * This file is intentionally thin — a Server Component that sequences sections.
 * All interactivity and animation lives inside each section's own Client Component.
 *
 * Section order:
 *  1. Hero             → full-viewport dark-overlay hero with centred CTA
 *  2. StatsBar         → animated counter metrics on dark strip
 *  3. ClientLogos      → infinite marquee trust band
 *  4. Services         → three core service offerings
 *  5. WhyPartner       → four trust/credibility pillars (warm-bg)
 *  6. HowWeWork        → four-step engagement process timeline
 *  7. Testimonials     → three client testimonial cards
 *  8. TrainingPrograms → three detailed program cards
 *  9. CtaBanner        → dark closing call-to-action
 */
import Hero from "@/components/home-sections/hero";
import StatsBar from "@/components/home-sections/stats-bar";
import ClientLogos from "@/components/home-sections/client-logos";
import Services from "@/components/home-sections/services";
import WhyPartner from "@/components/home-sections/why-partner";
import HowWeWork from "@/components/home-sections/how-we-work";
import TrainingPrograms from "@/components/home-sections/training-programs";
import Testimonials from "@/components/home-sections/testimonials";
import CtaBanner from "@/components/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ClientLogos />
      <Services />
      <WhyPartner />
      <HowWeWork />
      <TrainingPrograms />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
