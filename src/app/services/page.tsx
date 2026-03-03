import type { Metadata } from "next";
import ServicesHero from "@/components/service-sections/services-hero";
import ServicesGrid from "@/components/service-sections/services-grid";
import CtaBanner from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "IT Staffing, Corporate Training & App Development solutions tailored for business growth.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <CtaBanner />
    </>
  );
}
