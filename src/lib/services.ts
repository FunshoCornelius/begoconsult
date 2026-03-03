// ─── Service data & helpers ──────────────────────────────────────────────────
// Single source of truth for all services used by the homepage section,
// listing page, detail pages, and sitemap.

export interface ServiceHighlight {
  label: string;
  value: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;

  overview: string;
  highlights: ServiceHighlight[];
  features: ServiceFeature[];
  process: ServiceStep[];
  benefits: string[];
}

// ─── Icon mapping (slug → Lucide icon name) ──────────────────────────────────

export const SERVICE_ICON: Record<string, "Users" | "GraduationCap" | "Code2"> =
  {
    "it-staffing": "Users",
    "corporate-training": "GraduationCap",
    "app-development": "Code2",
  };

// ─── Service catalogue ──────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    slug: "it-staffing",
    title: "IT Staffing",
    tagline:
      "The right talent, right now — vetted professionals ready to deliver from day one.",
    description:
      "Connecting you with vetted professionals for contract, contract-to-hire, and direct placement roles across all tech stacks.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80",
    overview:
      "Finding the right technology talent shouldn't slow your business down. Our IT Staffing service connects you with rigorously vetted professionals who are ready to contribute from day one — whether you need a single specialist or an entire project team.\n\nWe support contract, contract-to-hire, and direct placement models across every major technology stack, from cloud engineering and DevOps to software development and data analytics. Our recruiting engine combines deep technical screening with cultural-fit assessments, ensuring every placement is a long-term success.\n\nWith a nationwide delivery model and an average time-to-fill of under 72 hours, we help you keep projects on track without compromising on quality.",
    highlights: [
      { label: "Placement Types", value: "Contract, C2H, Direct" },
      { label: "Avg. Time-to-Fill", value: "48–72 Hours" },
      { label: "Industries Served", value: "15+" },
      { label: "Candidate Retention", value: "95%" },
    ],
    features: [
      {
        title: "Technical Screening & Vetting",
        description:
          "Multi-stage evaluation including coding assessments, system design interviews, and reference verification to ensure only top-tier candidates reach your team.",
      },
      {
        title: "Contract & Contract-to-Hire",
        description:
          "Flexible engagement models that let you scale your team up or down based on project demands, with the option to convert top performers to full-time.",
      },
      {
        title: "Direct Placement",
        description:
          "End-to-end permanent hiring support — from role profiling and candidate sourcing to offer negotiation and onboarding assistance.",
      },
      {
        title: "Dedicated Account Management",
        description:
          "A single point of contact who understands your technology landscape, team dynamics, and hiring goals for seamless communication.",
      },
      {
        title: "Nationwide Talent Network",
        description:
          "Access to a curated pool of pre-screened professionals across the United States, covering every major technology domain and seniority level.",
      },
      {
        title: "Compliance & Onboarding",
        description:
          "We handle background checks, I-9 verification, benefits administration, and payroll so you can focus on what matters — delivering results.",
      },
    ],
    process: [
      {
        title: "Discovery & Role Profiling",
        description:
          "We start with a deep-dive consultation to understand your technical requirements, team culture, project timeline, and success criteria.",
      },
      {
        title: "Sourcing & Screening",
        description:
          "Our recruiters tap into our vetted talent network, conduct technical assessments, and shortlist candidates who match your exact specifications.",
      },
      {
        title: "Interview & Selection",
        description:
          "We coordinate interviews, gather feedback, and facilitate the selection process to help you make confident hiring decisions quickly.",
      },
      {
        title: "Onboarding & Support",
        description:
          "Once selected, we handle all onboarding logistics and provide ongoing support throughout the engagement to ensure satisfaction on both sides.",
      },
    ],
    benefits: [
      "Reduce time-to-hire by up to 60% with our pre-vetted talent pipeline",
      "Eliminate bad hires through rigorous multi-stage technical screening",
      "Scale teams flexibly with contract, contract-to-hire, and direct models",
      "Access specialized talent across cloud, DevOps, data, security, and more",
      "Dedicated account managers for personalized, responsive service",
      "Nationwide coverage with local market expertise in every major metro",
    ],
  },
  {
    slug: "corporate-training",
    title: "Corporate Training",
    tagline:
      "Upskill your workforce with industry-recognized certification programs led by experts.",
    description:
      "Industry-leading training programs in AWS, Splunk, MuleSoft, and Data Science designed to upskill your workforce.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80",
    overview:
      "Technology moves fast, and your team needs to keep pace. Our Corporate Training programs are designed to close skill gaps, prepare professionals for industry certifications, and build the technical capabilities your organization needs to compete.\n\nWe offer instructor-led courses in high-demand domains including AWS, Splunk, MuleSoft, Cybersecurity, Data Science, and Agile methodologies. Every program combines structured curriculum with hands-on labs, real-world case studies, and mentorship from certified practitioners.\n\nWhether you need to train a single team or roll out an enterprise-wide upskilling initiative, our flexible delivery options — virtual, on-site, or hybrid — make it easy to fit training into your schedule without disrupting operations.",
    highlights: [
      { label: "Programs Offered", value: "6+ Certifications" },
      { label: "Delivery Format", value: "Virtual, On-site, Hybrid" },
      { label: "Completion Rate", value: "94%" },
      { label: "Satisfaction Score", value: "4.8 / 5.0" },
    ],
    features: [
      {
        title: "Certification-Aligned Curriculum",
        description:
          "Programs mapped directly to industry certification objectives — AWS, Splunk, CompTIA, MuleSoft, and Scrum Alliance — so your team is exam-ready on completion.",
      },
      {
        title: "Hands-On Labs & Projects",
        description:
          "Every course includes practical exercises using real-world datasets, cloud sandboxes, and simulated environments to reinforce learning through doing.",
      },
      {
        title: "Expert Instructors",
        description:
          "Learn from certified professionals with years of hands-on industry experience who bring real-world context to every lesson.",
      },
      {
        title: "Flexible Delivery Options",
        description:
          "Choose instructor-led virtual sessions, on-site workshops at your facility, or hybrid formats that combine the best of both worlds.",
      },
      {
        title: "Custom Training Programs",
        description:
          "We tailor content, pace, and focus areas to your team's existing skill level and organizational goals for maximum relevance and impact.",
      },
      {
        title: "Progress Tracking & Reporting",
        description:
          "Detailed dashboards and completion reports give managers visibility into team progress, assessment scores, and certification outcomes.",
      },
    ],
    process: [
      {
        title: "Needs Assessment",
        description:
          "We evaluate your team's current skill levels, identify gaps, and recommend the right programs and certifications to meet your business objectives.",
      },
      {
        title: "Program Design",
        description:
          "We customize curriculum, schedule, and delivery format based on your team size, availability, and learning goals.",
      },
      {
        title: "Training Delivery",
        description:
          "Expert instructors deliver engaging, hands-on sessions with real-world labs, assessments, and interactive exercises.",
      },
      {
        title: "Certification & Follow-Up",
        description:
          "We support exam preparation, track certification outcomes, and provide post-training resources to ensure long-term knowledge retention.",
      },
    ],
    benefits: [
      "Close critical skill gaps with targeted, certification-aligned training",
      "Improve employee retention by investing in professional development",
      "Reduce onboarding time for new technologies and platforms",
      "Flexible scheduling options that minimize disruption to daily operations",
      "Measurable outcomes with detailed progress tracking and reporting",
      "Enterprise volume discounts for organization-wide training rollouts",
    ],
  },
  {
    slug: "app-development",
    title: "App Development",
    tagline:
      "Custom software solutions engineered to solve real business problems at scale.",
    description:
      "Custom software solutions, from mobile apps to enterprise platforms, tailored to your unique business requirements.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80",
    overview:
      "Off-the-shelf software rarely fits perfectly. Our App Development service delivers custom solutions — from mobile applications and web platforms to enterprise integrations and data pipelines — engineered to match your exact business requirements.\n\nWe follow an agile development methodology with transparent sprint cycles, continuous delivery, and close collaboration at every stage. Our engineering teams are proficient across modern technology stacks including React, Next.js, Node.js, Python, cloud-native architectures, and mobile frameworks.\n\nFrom initial concept and UX design through development, testing, deployment, and ongoing maintenance, we own the full lifecycle so you get a production-ready product that scales with your business.",
    highlights: [
      { label: "Methodology", value: "Agile / Scrum" },
      { label: "Platforms", value: "Web, Mobile, Cloud" },
      { label: "Tech Stacks", value: "React, Node, Python +" },
      { label: "Support", value: "Full Lifecycle" },
    ],
    features: [
      {
        title: "Discovery & UX Design",
        description:
          "We start with stakeholder workshops, user research, and wireframing to define the product vision, user flows, and information architecture before writing a single line of code.",
      },
      {
        title: "Full-Stack Web Development",
        description:
          "Modern, responsive web applications built with React, Next.js, and Node.js — optimized for performance, accessibility, and SEO.",
      },
      {
        title: "Mobile App Development",
        description:
          "Native and cross-platform mobile applications for iOS and Android using React Native, delivering a seamless experience across devices.",
      },
      {
        title: "API & Integration Development",
        description:
          "RESTful and GraphQL APIs, third-party integrations, and middleware solutions that connect your systems and eliminate data silos.",
      },
      {
        title: "Cloud-Native Architecture",
        description:
          "Scalable, resilient applications built on AWS, Azure, or GCP with containerization, serverless functions, and CI/CD pipelines.",
      },
      {
        title: "Maintenance & Support",
        description:
          "Post-launch support including bug fixes, performance monitoring, feature enhancements, and infrastructure management to keep your product running smoothly.",
      },
    ],
    process: [
      {
        title: "Discovery & Planning",
        description:
          "We define project scope, technical architecture, user stories, and a sprint roadmap through collaborative workshops with your stakeholders.",
      },
      {
        title: "Design & Prototyping",
        description:
          "Our designers create high-fidelity mockups and interactive prototypes, validated through user testing before development begins.",
      },
      {
        title: "Agile Development",
        description:
          "Engineering teams deliver working software in 2-week sprint cycles with continuous integration, code reviews, and demo sessions.",
      },
      {
        title: "Testing & QA",
        description:
          "Comprehensive testing — unit, integration, performance, and security — ensures your product meets quality standards before every release.",
      },
      {
        title: "Deployment & Ongoing Support",
        description:
          "We handle production deployment, monitoring setup, and provide ongoing maintenance and feature development as your product evolves.",
      },
    ],
    benefits: [
      "Get a product built to your exact specifications — not a one-size-fits-all template",
      "Transparent agile process with sprint demos and continuous stakeholder feedback",
      "Full-stack expertise across web, mobile, cloud, and integration technologies",
      "Production-ready code with automated testing, CI/CD, and monitoring from day one",
      "Scalable architecture designed to grow with your user base and business needs",
      "Single partner for the full lifecycle — design, build, deploy, and maintain",
    ],
  },
];

// ─── Helper functions ────────────────────────────────────────────────────────

export function getAllServices(): Service[] {
  return SERVICES;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
