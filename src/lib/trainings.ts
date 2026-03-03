// ─── Training data & helpers ─────────────────────────────────────────────────
// Single source of truth for all training programs used by the homepage section,
// listing page, detail pages, and sitemap.

export interface TrainingModule {
  title: string;
  description: string;
}

export interface Training {
  slug: string;
  category: string;
  title: string;
  description: string;
  hours: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  topics: string[];
  certification: string;
  image: string;

  overview: string;
  prerequisites: string[];
  targetAudience: string[];
  modules: TrainingModule[];
  format: string;
}

// ─── Category styling config ─────────────────────────────────────────────────

export const CATEGORY_GRADIENT: Record<string, string> = {
  Cloud: "from-slate-800/90 to-teal-900/90",
  Security: "from-slate-900/90 to-red-900/90",
  "Big Data": "from-slate-900/90 to-amber-900/90",
  Integration: "from-slate-900/90 to-violet-900/90",
  Management: "from-slate-900/90 to-emerald-900/90",
};

export const CATEGORY_VARIANT: Record<
  string,
  "cloud" | "bigdata" | "integration" | "management"
> = {
  Cloud: "cloud",
  Security: "integration",
  "Big Data": "bigdata",
  Integration: "integration",
  Management: "management",
};

// ─── Program catalogue ──────────────────────────────────────────────────────

const TRAININGS: Training[] = [
  {
    slug: "aws-solutions-architect",
    category: "Cloud",
    title: "AWS Solutions Architect",
    description:
      "Master the design, deployment, and management of scalable systems on Amazon Web Services with hands-on labs and real-world scenarios.",
    hours: 40,
    level: "Advanced",
    topics: [
      "Cloud architecture & design patterns",
      "EC2, S3, Lambda & serverless",
      "Networking, security & IAM",
      "High availability & disaster recovery",
    ],
    certification: "AWS SAA-C03",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    overview:
      "This comprehensive program prepares you to design and deploy robust, fault-tolerant, and highly available systems on Amazon Web Services. You will gain hands-on experience with core AWS services through real-world labs, case studies, and architecture reviews.\n\nThe curriculum covers everything from foundational cloud concepts to advanced multi-tier architectures, ensuring you can confidently design solutions that meet the demanding requirements of enterprise workloads. By the end of this program, you will be fully prepared to pass the AWS Solutions Architect Associate (SAA-C03) certification exam.",
    prerequisites: [
      "Basic understanding of networking concepts (TCP/IP, DNS, HTTP)",
      "Familiarity with at least one programming or scripting language",
      "General understanding of operating systems (Linux or Windows)",
    ],
    targetAudience: [
      "Cloud engineers looking to formalize their AWS knowledge",
      "Infrastructure architects transitioning to cloud-native design",
      "DevOps engineers seeking to deepen their AWS expertise",
      "IT managers overseeing cloud migration initiatives",
    ],
    modules: [
      {
        title: "Cloud Foundations & AWS Global Infrastructure",
        description:
          "Understand regions, availability zones, edge locations, and the shared responsibility model that underpins every AWS deployment.",
      },
      {
        title: "Compute & Networking",
        description:
          "Deep dive into EC2 instance types, Auto Scaling, Elastic Load Balancing, VPC design, and hybrid connectivity with Direct Connect.",
      },
      {
        title: "Storage & Database Services",
        description:
          "Master S3 storage classes, EBS volumes, RDS, DynamoDB, and data migration strategies for enterprise workloads.",
      },
      {
        title: "Security, Identity & Compliance",
        description:
          "Implement IAM policies, security groups, NACLs, encryption at rest and in transit, and AWS compliance frameworks.",
      },
      {
        title: "Serverless & Application Integration",
        description:
          "Build event-driven architectures with Lambda, API Gateway, SQS, SNS, and Step Functions for modern applications.",
      },
      {
        title: "High Availability & Disaster Recovery",
        description:
          "Design multi-region architectures, implement backup strategies, and plan for disaster recovery with RPO/RTO targets.",
      },
    ],
    format: "Instructor-led, virtual or on-site",
  },
  {
    slug: "splunk-administration",
    category: "Big Data",
    title: "Splunk Administration & Analytics",
    description:
      "Become proficient in deploying, managing, and building powerful dashboards with Splunk for enterprise-scale data analytics and monitoring.",
    hours: 35,
    level: "Intermediate",
    topics: [
      "Splunk deployment & configuration",
      "Search processing language (SPL)",
      "Dashboards & data visualization",
      "Alerting, reporting & app development",
    ],
    certification: "Splunk Core Certified",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    overview:
      "This hands-on program covers end-to-end Splunk administration — from installation and data ingestion to building enterprise dashboards and advanced analytics workflows. You will work with real datasets to develop the skills needed to manage Splunk environments at scale.\n\nWhether you are tasked with maintaining an existing Splunk deployment or building one from scratch, this course gives you the practical expertise to configure forwarders, manage indexes, write efficient SPL queries, and create compelling visualizations that drive business decisions.",
    prerequisites: [
      "Comfortable with command-line interfaces (Linux or Windows)",
      "Basic understanding of log data and system monitoring",
      "Familiarity with networking fundamentals",
    ],
    targetAudience: [
      "System administrators managing log and monitoring infrastructure",
      "Data analysts building operational dashboards",
      "SOC analysts using Splunk for security monitoring",
      "IT operations teams implementing observability platforms",
    ],
    modules: [
      {
        title: "Splunk Architecture & Installation",
        description:
          "Set up single-instance and distributed Splunk deployments, configure licensing, and understand the indexer-forwarder-search head topology.",
      },
      {
        title: "Data Ingestion & Indexing",
        description:
          "Configure universal and heavy forwarders, manage inputs, define index-time field extractions, and optimize data retention policies.",
      },
      {
        title: "Search Processing Language (SPL)",
        description:
          "Master the SPL command pipeline — from basic searches and filters to advanced statistical transformations, subsearches, and lookups.",
      },
      {
        title: "Dashboards & Visualization",
        description:
          "Build interactive dashboards with charts, tables, maps, and drilldowns using Simple XML and the Dashboard Studio framework.",
      },
      {
        title: "Alerting, Reporting & App Development",
        description:
          "Create scheduled reports, configure threshold-based and anomaly alerts, and package custom Splunk apps for distribution.",
      },
    ],
    format: "Instructor-led, virtual or on-site",
  },
  {
    slug: "cybersecurity-professional",
    category: "Security",
    title: "Cybersecurity Professional",
    description:
      "Build a strong foundation in cybersecurity principles, threat analysis, and incident response to protect enterprise infrastructure.",
    hours: 48,
    level: "Advanced",
    topics: [
      "Threat detection & incident response",
      "Network security & penetration testing",
      "Security operations & SIEM tools",
      "Compliance, governance & risk management",
    ],
    certification: "CompTIA Security+",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    overview:
      "This intensive program provides a comprehensive foundation in cybersecurity, covering everything from threat landscapes and vulnerability management to incident response and compliance frameworks. The curriculum is aligned with the CompTIA Security+ certification objectives.\n\nThrough hands-on labs in simulated environments, you will practice threat detection, network security hardening, penetration testing methodologies, and security operations center (SOC) workflows. Graduates leave prepared for both the certification exam and real-world security challenges.",
    prerequisites: [
      "Solid understanding of networking concepts (TCP/IP, firewalls, VPNs)",
      "Basic familiarity with operating systems (Linux and Windows)",
      "Recommended: CompTIA Network+ or equivalent experience",
    ],
    targetAudience: [
      "IT professionals transitioning into cybersecurity roles",
      "Network administrators seeking security specialization",
      "SOC analysts looking to formalize their skills",
      "Compliance officers needing technical security knowledge",
    ],
    modules: [
      {
        title: "Threat Landscape & Security Fundamentals",
        description:
          "Understand the modern threat landscape, attack vectors, threat actors, and the core principles of confidentiality, integrity, and availability.",
      },
      {
        title: "Network Security & Infrastructure Hardening",
        description:
          "Configure firewalls, IDS/IPS systems, VPNs, and network segmentation to protect enterprise infrastructure from intrusion.",
      },
      {
        title: "Vulnerability Management & Penetration Testing",
        description:
          "Conduct vulnerability assessments, use industry-standard scanning tools, and understand ethical penetration testing methodologies.",
      },
      {
        title: "Incident Response & Digital Forensics",
        description:
          "Build incident response plans, practice containment and eradication procedures, and perform basic digital forensic analysis.",
      },
      {
        title: "Security Operations & SIEM",
        description:
          "Operate within a SOC environment, write correlation rules, triage alerts, and use SIEM platforms for continuous monitoring.",
      },
      {
        title: "Governance, Risk & Compliance",
        description:
          "Navigate frameworks like NIST, ISO 27001, and PCI-DSS, and implement risk management processes aligned with business objectives.",
      },
    ],
    format: "Instructor-led, virtual or on-site",
  },
  {
    slug: "mulesoft-developer",
    category: "Integration",
    title: "MuleSoft Developer & Integration",
    description:
      "Learn to build, deploy, and manage APIs and integrations using the MuleSoft Anypoint Platform for seamless enterprise connectivity.",
    hours: 36,
    level: "Intermediate",
    topics: [
      "Anypoint Platform & API lifecycle",
      "Mule 4 flows & connectors",
      "DataWeave transformation language",
      "API-led connectivity & deployment",
    ],
    certification: "MuleSoft Certified Developer",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    overview:
      "This program teaches you to design, build, and manage APIs and integrations using the MuleSoft Anypoint Platform. You will master Mule 4 development from project scaffolding through production deployment, using the API-led connectivity approach that organizations rely on to connect applications, data, and devices.\n\nThe hands-on curriculum covers DataWeave transformations, error handling strategies, connector configuration, and CloudHub deployment — equipping you with the skills to pass the MuleSoft Certified Developer exam and deliver integration projects immediately.",
    prerequisites: [
      "Experience with at least one programming language (Java preferred)",
      "Basic understanding of RESTful APIs and web services",
      "Familiarity with JSON and XML data formats",
    ],
    targetAudience: [
      "Integration developers building enterprise connectivity solutions",
      "Backend engineers working with API-first architectures",
      "Architects evaluating or implementing MuleSoft platforms",
      "Teams migrating from legacy middleware to modern integration",
    ],
    modules: [
      {
        title: "Anypoint Platform Overview",
        description:
          "Navigate the Anypoint Platform, understand API-led connectivity, and set up your development environment with Anypoint Studio.",
      },
      {
        title: "Mule 4 Application Development",
        description:
          "Build Mule applications with flows, connectors, scopes, and routers to orchestrate complex integration patterns.",
      },
      {
        title: "DataWeave Transformations",
        description:
          "Master the DataWeave 2.0 language for transforming data between formats — JSON, XML, CSV, and flat files.",
      },
      {
        title: "Error Handling & Testing",
        description:
          "Implement global and local error handlers, write MUnit tests, and debug Mule applications effectively.",
      },
      {
        title: "API Design & Management",
        description:
          "Design APIs with RAML/OAS, publish to Exchange, apply policies, and manage API versions through the full lifecycle.",
      },
      {
        title: "Deployment & CloudHub Operations",
        description:
          "Deploy applications to CloudHub and on-premise runtimes, configure properties, and monitor application health.",
      },
    ],
    format: "Instructor-led, virtual or on-site",
  },
  {
    slug: "data-science-machine-learning",
    category: "Big Data",
    title: "Data Science & Machine Learning",
    description:
      "Gain practical skills in data analysis, statistical modeling, and machine learning to extract actionable insights from enterprise data.",
    hours: 44,
    level: "Intermediate",
    topics: [
      "Python for data science & analytics",
      "Statistical modeling & hypothesis testing",
      "Supervised & unsupervised learning",
      "Model deployment & ML pipelines",
    ],
    certification: "Program Certificate of Completion",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    overview:
      "This program bridges the gap between theoretical data science concepts and practical, hands-on implementation. Using Python and industry-standard libraries, you will learn to clean and analyze data, build predictive models, and deploy machine learning solutions that solve real business problems.\n\nThe curriculum progresses from exploratory data analysis through advanced ML techniques, with each module reinforced by project-based exercises using real-world datasets. By completion, you will have a portfolio of projects demonstrating your ability to deliver end-to-end data science solutions.",
    prerequisites: [
      "Basic Python programming experience",
      "Foundational understanding of statistics (mean, median, probability)",
      "Comfort working with tabular data (spreadsheets or databases)",
    ],
    targetAudience: [
      "Analysts transitioning into data science roles",
      "Software engineers adding ML capabilities to applications",
      "Business intelligence professionals expanding their toolkit",
      "Teams building in-house data science competency",
    ],
    modules: [
      {
        title: "Python for Data Science",
        description:
          "Set up your data science environment and master NumPy, Pandas, and Matplotlib for data manipulation and visualization.",
      },
      {
        title: "Exploratory Data Analysis & Statistics",
        description:
          "Apply statistical methods, conduct hypothesis tests, and uncover patterns through systematic exploratory analysis.",
      },
      {
        title: "Supervised Learning",
        description:
          "Build and evaluate regression and classification models using scikit-learn — linear regression, decision trees, random forests, and gradient boosting.",
      },
      {
        title: "Unsupervised Learning & Dimensionality Reduction",
        description:
          "Implement clustering algorithms (K-means, DBSCAN), PCA, and anomaly detection for unlabeled data scenarios.",
      },
      {
        title: "Deep Learning Foundations",
        description:
          "Introduction to neural networks with TensorFlow/Keras — build and train models for image classification and NLP tasks.",
      },
      {
        title: "Model Deployment & ML Pipelines",
        description:
          "Package models as APIs, build reproducible ML pipelines, and deploy to production with monitoring and versioning.",
      },
    ],
    format: "Instructor-led, virtual or on-site",
  },
  {
    slug: "agile-scrum-master",
    category: "Management",
    title: "Agile & Scrum Master",
    description:
      "Develop the leadership skills to facilitate agile teams, manage sprints, and deliver projects with speed and predictability.",
    hours: 24,
    level: "Beginner",
    topics: [
      "Agile principles & Scrum framework",
      "Sprint planning & backlog management",
      "Facilitation & team coaching",
      "Scaling agile across the enterprise",
    ],
    certification: "Certified ScrumMaster (CSM)",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    overview:
      "This program provides a thorough grounding in agile principles and the Scrum framework, preparing you to serve as an effective Scrum Master who empowers teams to deliver high-quality products iteratively. The course blends theory with interactive exercises, role-plays, and real-world case studies.\n\nYou will learn to facilitate sprint ceremonies, manage product backlogs, remove impediments, and coach teams toward self-organization. The curriculum also covers scaling patterns (SAFe, LeSS) for organizations running agile at enterprise scale. Graduates are prepared for the Certified ScrumMaster (CSM) examination.",
    prerequisites: [
      "No technical prerequisites — open to all professional backgrounds",
      "Basic familiarity with software development processes is helpful",
    ],
    targetAudience: [
      "Project managers transitioning to agile delivery",
      "Team leads and engineering managers adopting Scrum",
      "Business analysts working within agile teams",
      "Anyone pursuing Certified ScrumMaster certification",
    ],
    modules: [
      {
        title: "Agile Mindset & Principles",
        description:
          "Understand the Agile Manifesto, its twelve principles, and how they translate into daily practices for high-performing teams.",
      },
      {
        title: "The Scrum Framework",
        description:
          "Master the roles (Product Owner, Scrum Master, Developers), events (Sprint, Daily Scrum, Review, Retrospective), and artifacts (Backlog, Increment).",
      },
      {
        title: "Sprint Planning & Execution",
        description:
          "Learn estimation techniques, sprint goal setting, backlog refinement, and how to maintain a sustainable pace for the team.",
      },
      {
        title: "Facilitation & Coaching",
        description:
          "Develop facilitation skills for ceremonies, learn coaching techniques to unlock team potential, and practice conflict resolution.",
      },
      {
        title: "Metrics, Reporting & Continuous Improvement",
        description:
          "Use velocity, burn-down/up charts, and cycle time to drive transparency and continuous improvement through retrospectives.",
      },
      {
        title: "Scaling Agile",
        description:
          "Explore frameworks like SAFe, LeSS, and Nexus for scaling Scrum across multiple teams and large enterprise programs.",
      },
    ],
    format: "Instructor-led, virtual or on-site",
  },
];

// ─── Helper functions ────────────────────────────────────────────────────────

export function getAllTrainings(): Training[] {
  return TRAININGS;
}

export function getTrainingBySlug(slug: string): Training | undefined {
  return TRAININGS.find((t) => t.slug === slug);
}

export function getTrainingSlugs(): string[] {
  return TRAININGS.map((t) => t.slug);
}
