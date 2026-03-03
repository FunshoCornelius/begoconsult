"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/animations/variants";

const TEAM: {
  name: string;
  title: string;
  bio: string;
  image: string;
}[] = [
  {
    name: "Rajesh Kumar",
    title: "Founder & CEO",
    bio: "15+ years in IT staffing and workforce solutions. Built begoconsult from a two-person startup into a nationwide TaaS provider.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Priya Sharma",
    title: "VP of Training & Delivery",
    bio: "Former AWS certified architect with 10+ years of experience designing enterprise training programs across cloud and security.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Torres",
    title: "Director of Staffing Operations",
    bio: "Specializes in scaling technical recruitment pipelines. Managed placement of 500+ IT professionals across Fortune 500 clients.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Anita Desai",
    title: "Head of Client Success",
    bio: "Drives client retention and satisfaction with a data-driven approach. 8+ years of enterprise account management experience.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
  },
];

/**
 * TeamSection — leadership team in a 2-column grid with professional
 * headshot photos, horizontal card layout on sm+.
 */
export default function TeamSection() {
  return (
    <section className="bg-background py-20 md:py-28" aria-label="Our team">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-14 flex flex-col gap-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Meet Our Team
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            A leadership team averaging 6+ years of global management
            experience, driving results for enterprises nationwide.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
            >
              {/* Headshot photo */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-border shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2 text-center sm:text-left">
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-semibold text-base text-foreground">
                    {member.name}
                  </h3>
                  <span className="text-xs font-medium text-primary">
                    {member.title}
                  </span>
                </div>

                <p className="text-sm text-muted leading-relaxed">
                  {member.bio}
                </p>

                {/* LinkedIn icon */}
                <a
                  href="#"
                  aria-label={`${member.name} on LinkedIn`}
                  className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary-light hover:text-primary text-muted transition-colors duration-150 self-center sm:self-start"
                >
                  <Linkedin size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
