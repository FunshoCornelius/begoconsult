import type { Metadata } from "next";
import ContactHero from "@/components/contact-sections/contact-hero";
import ContactSection from "@/components/contact-sections/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with begoconsult for IT staffing, training, and development inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
