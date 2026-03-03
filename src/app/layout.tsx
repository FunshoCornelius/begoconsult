import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://begoconsult.com"),
  title: {
    default: "begoconsult | Talent-as-a-Service Solutions",
    template: "%s | begoconsult",
  },
  description:
    "Empowering businesses with top-tier IT Staffing, specialized corporate training, and custom application development tailored for growth.",
  keywords: [
    "IT staffing",
    "corporate training",
    "app development",
    "begoconsult",
  ],
  openGraph: {
    title: "begoconsult | Talent-as-a-Service Solutions",
    description:
      "Top-tier IT Staffing, Corporate Training & App Development since 2014.",
    siteName: "begoconsult",
    locale: "en_US",
    type: "website",
  },
};

/**
 * RootLayout — wraps every route with the shared Navbar and Footer.
 *
 * Navbar and Footer live here (not in page.tsx) so all routes
 * (about, services, trainings, contact) inherit them automatically.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
