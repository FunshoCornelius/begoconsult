import type { Metadata } from "next";
import TrainingsHero from "@/components/training-sections/trainings-hero";
import TrainingsGrid from "@/components/training-sections/trainings-grid";
import CtaBanner from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Training Programs",
  description:
    "Industry-leading training in AWS, Splunk, MuleSoft, Data Science, Cybersecurity, and Agile — hands-on certification courses for every skill level.",
};

export default function TrainingsPage() {
  return (
    <>
      <TrainingsHero />
      <TrainingsGrid />
      <CtaBanner />
    </>
  );
}
