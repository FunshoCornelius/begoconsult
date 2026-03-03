import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Suspense } from "react";
import { CurrentYear } from "./current-year";

const LINKS = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Training", href: "/trainings" },
    // { label: "Careers", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "IT Staffing", href: "/services" },
    { label: "Corporate Training", href: "/trainings" },
    { label: "App Development", href: "/services" },
  ],
};

const SOCIAL = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@begoconsult.com" },
];

/**
 * Footer — Server Component (no client-side interactivity needed).
 * Provides sitemap-style link columns, social icons, and legal copy.
 */
export default function Footer() {
  return (
    <footer className="bg-foreground text-white" aria-label="Site footer">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* ── Top row ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="begoconsult"
                width={30}
                height={30}
                className="rounded-full brightness-0 invert"
              />
              <span className="font-bold text-base">begoconsult</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Talent-as-a-Service solutions powering businesses since 2014.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(!href.startsWith("mailto:") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center
                             hover:bg-primary transition-colors duration-150"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">
                {group}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>hello@begoconsult.com</li>
              <li>+1 (800) 000-0000</li>
              <li className="leading-relaxed">
                123 Business Ave,
                <br />
                Suite 100, New York, NY
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom row ──────────────────────────────────────────── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            &copy;{" "}
            <Suspense
              fallback={
                <span className="w-8 h-3 bg-gray-200 rounded-md animate-pulse"></span>
              }
            >
              <CurrentYear />
            </Suspense>{" "}
            begoconsult. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
