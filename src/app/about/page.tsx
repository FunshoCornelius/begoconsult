import type { Metadata } from "next";
import AboutHero from "@/components/about-sections/about-hero";
import StorySection from "@/components/about-sections/story-section";
import ValuesSection from "@/components/about-sections/values-section";
import TeamSection from "@/components/about-sections/team-section";
import TimelineSection from "@/components/about-sections/timeline-section";
import CtaBanner from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about begoconsult — a US-based Talent-as-a-Service provider delivering IT staffing, training, and technology solutions since 2014.",
};

/**
 * AboutPage — enterprise trust-building page.
 *
 * Section order:
 *  1. AboutHero       → dark banner with heading
 *  2. StorySection    → founding story + mission & vision cards
 *  3. ValuesSection   → four core values on warm background
 *  4. TeamSection     → leadership team grid
 *  5. TimelineSection → company milestones on dark background
 *  6. CtaBanner       → shared closing CTA
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
      <CtaBanner />
    </>
  );
}
