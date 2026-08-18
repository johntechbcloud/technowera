export const COMPANY_INFO = {
  name: "Technowera",
  tagline: "Autonomous Intelligence & Enterprise Digital Transformation",
  heroSubtitle: "Empowering Fortune 500 & Enterprise Leaders with Agentic AI, Modern Data Fabrics, Multi-Cloud FinOps, and 60+ Solution Accelerators.",
  metrics: [
    { label: "Client ROI & Cost Savings", value: "$180M+", sub: "Delivered across 250+ enterprise deployments" },
    { label: "Accelerators Library", value: "65+", sub: "Pre-built production ready AI & Data frameworks" },
    { label: "Production SLA", value: "99.95%", sub: "Enterprise managed cloud & AI infrastructure" },
    { label: "Global Tech Experts", value: "1,400+", sub: "Across 8 innovation hubs globally" }
  ]
};

export const SERVICES = [
  {
    id: "ai-automation",
    title: "Execution-Led AI & Agentic Automation",
    subtitle: "Move from isolated AI pilots to production-ready enterprise autonomous agent workflows.",
    icon: "Bot",
    gradient: "from-cyan-500 to-blue-600",
    features: [
      "Enterprise Copilot & GenAI System Integration",
      "Multi-Agent Workflow Orchestration (Autogen/LangGraph)",
      "Intelligent Process Mining & Robotic Process Automation (UiPath)",
      "ITSM & AI Customer Service Autonomous Agents",
      "Responsible AI Governance & Guardrails Framework"
    ],
    highlightMetric: "45% reduction in manual enterprise workflow touchpoints"
  },
  {
    id: "data-analytics",
    title: "AI-Ready Data Foundations & Fabric",
    subtitle: "Unify fragmented data silos into real-time, governed intelligence.",
    icon: "Database",
    gradient: "from-blue-600 to-indigo-600",
    features: [
      "Microsoft Fabric & Azure Databricks Unified Lakehouse",
      "Snowflake Data Cloud Architecture & Governance",
      "Real-Time Streaming Pipelines & Vector Databases",
      "Master Data Management (MDM) & Automated Compliance",
      "Predictive Analytics & Executive BI Dashboards"
    ],
    highlightMetric: "3.5x faster query speeds with zero-copy architecture"
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Modernization & Azure MSP",
    subtitle: "High-performance multi-cloud infrastructure with built-in FinOps cost optimization.",
    icon: "Cloud",
    gradient: "from-indigo-600 to-purple-600",
    features: [
      "Azure, AWS & GCP Hybrid Multi-Cloud Migration",
      "Continuous FinOps & AI-Driven Infrastructure Cost Optimization",
      "Zero-Trust Cloud Security & Compliance Automation",
      "Virtual Desktop Infrastructure (AVD / Citrix)",
      "24/7 Managed Cloud Ops & Site Reliability Engineering (SRE)"
    ],
    highlightMetric: "32% average reduction in monthly cloud infrastructure spend"
  },
  {
    id: "security-ai",
    title: "Security.AI & Enterprise Zero Trust",
    subtitle: "Protect your digital core while governing copilots, autonomous agents, and multi-cloud identities.",
    icon: "ShieldCheck",
    gradient: "from-red-500 via-rose-600 to-purple-600",
    features: [
      "Microsoft Defender XDR Suite & Sentinel SIEM/SOAR",
      "Microsoft Intune & SCCM Endpoint Compliance",
      "Microsoft Purview Data Governance, DLP & Insider Risk",
      "Microsoft Security Copilot & Autonomous SecOps",
      "IAM Shield Agent & Zero-Trust Access Architecture",
      "IT Audit & Compliance: ISO 27001, SOC I & II, CMMC"
    ],
    highlightMetric: "65% faster incident MTTR & $1.9M lower average breach costs"
  },
  {
    id: "digital-solutions",
    title: "Digital Product & Cloud Engineering",
    subtitle: "Custom microservices, enterprise web apps, and modern digital experiences.",
    icon: "Code2",
    gradient: "from-purple-600 to-pink-600",
    features: [
      "Cloud-Native Application Architecture (Kubernetes, Serverless)",
      "Legacy Systems Modernization & Monolith Refactoring",
      "Human-Centered UI/UX Design Systems & Micro-frontends",
      "API-First Ecosystem Integration & GraphQL Gateways",
      "DevSecOps Automation & CI/CD Pipeline Engineering"
    ],
    highlightMetric: "60% accelerated time-to-market for enterprise features"
  }
];

export const SECURITY_AI_DATA = {
  hero: {
    tagline: "Security.AI | Enterprise Defense & Governance",
    title: "Secure the Enterprise. Govern the AI.",
    subtitle: "Unify Zero Trust, AI security, data protection, compliance, and managed defense across identities, cloud environments, applications, endpoints, data, copilots, and autonomous agents.",
    primaryCta: "Request a Security Consultation",
    speedTitle: "Security Must Evolve at the Speed of AI",
    speedDesc1: "AI is changing more than how enterprises operate. It is changing what must be protected. Copilots and autonomous agents introduce new identities, data pathways, permissions, integrations, and actions across the enterprise. At the same time, security teams must continue defending users, endpoints, applications, cloud environments, and sensitive information from increasingly sophisticated threats.",
    speedDesc2: "Technowera helps organizations modernize enterprise security while establishing the controls required to adopt AI responsibly. We connect Zero Trust, AI governance, data protection, threat detection, compliance, and managed operations within one integrated security strategy."
  },
  metrics: [
    { value: "80%+", label: "of Fortune 500 companies use active AI agents." },
    { value: "29%", label: "of employees have used unsanctioned AI agents for work." },
    { value: "63%", label: "of organizations surveyed lacked formal AI governance policies." },
    { value: "$1.9M", label: "lower breach costs with extensive use of AI in security." }
  ],
  pillars: [
    {
      category: "Security Consultation",
      icon: "ShieldAlert",
      description: "Enterprise-grade Microsoft Security implementations, posture reviews, and regulatory certifications.",
      services: [
        { name: "Microsoft Defender Services", desc: "Full XDR across endpoints, identities, cloud apps, and Microsoft 365." },
        { name: "Microsoft Intune Services", desc: "Unified endpoint management, Zero Trust device compliance, and MAM policies." },
        { name: "Microsoft Purview Services", desc: "Automated data classification, DLP, insider risk management, and sensitivity labels." },
        { name: "IT Security Assessments And Workshops", desc: "Threat modeling, Cloud Security Posture (CSPM) gap analysis, and Zero Trust roadmap." },
        { name: "Microsoft SCCM Services", desc: "Modern OS deployment, enterprise patch management, and co-management." },
        { name: "IT Audit & Compliance: ISO, SOC I & II, CMMC Etc", desc: "Continuous compliance readiness, audit evidence collection, and automated controls." }
      ]
    },
    {
      category: "AI Defense & Governance",
      icon: "Cpu",
      description: "Generative AI security accelerators, LLM safety guardrails, and autonomous identity defense.",
      services: [
        { name: "Security Copilot", desc: "AI-assisted incident triage, natural language KQL generation, and rapid threat summaries." },
        { name: "IAM Shield Agent", desc: "Autonomous identity security agent for real-time privilege escalation defense and credential protection." },
        { name: "Agentic AI Guardrails", desc: "Runtime safety barriers, prompt injection defense, and LLM boundary enforcement." },
        { name: "Shadow AI & Model Discovery", desc: "Automated identification of unsanctioned AI tools and risky enterprise prompts." }
      ]
    },
    {
      category: "Security Operations",
      icon: "Activity",
      description: "24/7 Managed SOC, proactive threat hunting, and automated incident orchestration.",
      services: [
        { name: "24/7 Managed SOC & Sentinel", desc: "Microsoft Sentinel cloud-native SIEM/SOAR with sub-15 minute threat response SLAs." },
        { name: "Proactive Threat Hunting", desc: "Adversary simulation, MITRE ATT&CK mapping, and deep forensic investigations." },
        { name: "Incident Response & Containment", desc: "Rapid remediation playbooks and zero-downtime compromise isolation." },
        { name: "Vulnerability Management", desc: "Continuous attack surface scanning and risk-prioritized patch orchestration." }
      ]
    },
    {
      category: "Case Studies",
      icon: "FolderCheck",
      description: "Proven enterprise outcomes across SecOps, AI defense, and regulatory audits.",
      services: [
        { name: "Streamlining IT & SecOps with Beak AIOps", desc: "Remediated 2.1M vulnerabilities and saved 1,000+ hours/year across 700+ enterprise clients." },
        { name: "Enterprise Zero Trust & Purview Rollout", desc: "Protected 50,000+ endpoints with real-time DLP and achieved 100% SOC 2 Type II audit clearance." },
        { name: "FinTech Security Copilot Integration", desc: "Accelerated SOC tier-1 incident triage by 65% with automated investigation playbooks." }
      ]
    }
  ]
};

export const ACCELERATORS = [
  {
    id: "acc-1",
    name: "AgenticOps Hub™",
    category: "AI & Automation",
    description: "Plug-and-play framework for deploying autonomous multi-agent IT operations and automated incident resolution.",
    timeToDeploy: "2 Weeks",
    techStack: ["LangChain", "Azure OpenAI", "Python", "Docker"],
    impact: "70% faster MTTR for P2/P3 incidents"
  },
  {
    id: "acc-2",
    name: "FabricData Sphere™",
    category: "Data & AI",
    description: "Automated Microsoft Fabric lakehouse ingestion blueprint with pre-built data quality rules and compliance guardrails.",
    timeToDeploy: "10 Days",
    techStack: ["Microsoft Fabric", "PySpark", "Delta Lake"],
    impact: "Reduces data onboarding time by 80%"
  },
  {
    id: "acc-3",
    name: "CloudFinOps Guard™",
    category: "Cloud Modernization",
    description: "AI engine that continuously scans multi-cloud workloads, identifies idle resources, and auto-tunes reserved instances.",
    timeToDeploy: "1 Week",
    techStack: ["Terraform", "AWS Cost Explorer", "Azure Cost Management"],
    impact: "Immediate 25-40% cloud billing savings"
  },
  {
    id: "acc-4",
    name: "IAM Shield Guard™",
    category: "Security.AI",
    description: "Autonomous identity protection and zero-trust conditional access agent for Microsoft Entra ID and cloud workloads.",
    timeToDeploy: "1 Week",
    techStack: ["Microsoft Sentinel", "Entra ID", "Security Copilot", "Python"],
    impact: "90% reduction in privileged credential exposure"
  },
  {
    id: "acc-5",
    name: "OmniHealth AI Copilot™",
    category: "Healthcare",
    description: "HIPAA-compliant clinical documentation summarizer and patient triage assistant powered by GenAI.",
    timeToDeploy: "3 Weeks",
    techStack: ["Azure Health Bot", "FHIR API", "GPT-4o"],
    impact: "Saves doctors 2+ hours per day on paperwork"
  },
  {
    id: "acc-6",
    name: "FinRisk Intel™",
    category: "Financial Services",
    description: "Real-time fraud detection and AML compliance engine combining graph analytics with deep learning.",
    timeToDeploy: "4 Weeks",
    techStack: ["Databricks", "Neo4j", "Kafka", "TensorFlow"],
    impact: "99.4% accuracy rate in anomaly detection"
  }
];

export const INDUSTRIES = [
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: "HeartPulse",
    tagline: "Accelerating patient care & clinical intelligence with HIPAA-compliant AI.",
    stats: "120+ Healthcare Projects | 99.9% HIPAA Compliance",
    description: "We help health networks, pharmaceutical giants, and medical device makers build interoperable FHIR data foundations, AI clinical assistants, and automated claims workflows.",
    highlights: ["Patient Intake AI Automation", "Clinical Decision Support Systems", "R&D Data Lake Modernization"]
  },
  {
    id: "financial",
    name: "Financial Services & Banking",
    icon: "Building2",
    tagline: "Modernizing core banking, fraud detection, and wealth management platforms.",
    stats: "$400B+ Managed Assets Tech | Zero-Trust Certified",
    description: "Empowering global banks, fintechs, and insurance providers with real-time risk scoring, automated loan underwriting, and cloud-native core banking architectures.",
    highlights: ["Real-Time Fraud Prevention", "Automated Underwriting Engine", "Wealth Management AI Advisory"]
  },
  {
    id: "retail",
    name: "Retail & CPG",
    icon: "ShoppingBag",
    tagline: "Hyper-personalized customer journeys and AI-driven inventory forecasting.",
    stats: "45M+ Monthly Active Shoppers | 4.8/5 CSAT Score",
    description: "Transforming omnichannel commerce through dynamic AI pricing engines, visual search, demand forecasting, and cloud supply chain visibility.",
    highlights: ["Hyper-Personalized Recommendation AI", "Demand Forecasting & Inventory Optimization", "Headless Commerce Architecture"]
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Smart Mobility",
    icon: "Factory",
    tagline: "Industry 4.0 IoT analytics, digital twins, and predictive shop floor operations.",
    stats: "300+ Connected Factories | 30% OEE Boost",
    description: "Connecting shop floor IoT sensors with enterprise ERPs to enable zero-downtime predictive maintenance and supply chain resiliency.",
    highlights: ["IoT Telemetry Digital Twins", "Predictive Equipment Maintenance", "Smart Quality Inspection Computer Vision"]
  }
];

export const CASE_STUDIES = [
  {
    id: "cs-1",
    client: "Global Technology & Consulting Firm",
    title: "Streamlining IT & SecOps with Beak AIOps Platform",
    industry: "Security.AI & Cloud Operations",
    image: "/images/security-ai.jpg",
    metrics: [
      { label: "Vulnerabilities Remediated", value: "2.1M" },
      { label: "Hours Saved / Year", value: "1,000+" },
      { label: "Client Assets Protected", value: "19K+" }
    ],
    challenge: "Disparate monitoring tools, lack of asset visibility across 19K+ endpoints, and slow vulnerability remediation causing operational risk.",
    solution: "Deployed Beak AIOps platform with AI-driven auto-remediation, real-time security posture dashboards, and automated incident triage."
  },
  {
    id: "cs-2",
    client: "Global Fortune 100 Healthcare Network",
    title: "Scaling Autonomous GenAI Triage & Zero-Trust Clinical Documentation for 15,000+ Physicians",
    industry: "Healthcare & AI Security",
    image: "/images/solutions.jpg",
    metrics: [
      { label: "Hours Saved / Doctor / Day", value: "2.4 Hrs" },
      { label: "Triage Accuracy", value: "99.2%" },
      { label: "Annual Operational Savings", value: "$28 Million" }
    ],
    challenge: "Physician burnout from manual EHR entry and slow patient intake processing across 40 hospital campuses.",
    solution: "Deployed Technowera OmniHealth AI Copilot™ with Microsoft Purview DLP and FHIR security endpoints."
  },
  {
    id: "cs-3",
    client: "Top Tier Multinational Bank",
    title: "Migrating Legacy Data Warehouse to Unified Microsoft Fabric & Databricks Architecture",
    industry: "Financial Services",
    image: "/images/hero.jpg",
    metrics: [
      { label: "Analytics Query Speedup", value: "4.5x" },
      { label: "Annual Cloud Cost Cut", value: "38%" },
      { label: "Compliance Processing", value: "Real-Time" }
    ],
    challenge: "Silod legacy Oracle and Teradata databases preventing real-time fraud analysis and multi-currency reporting.",
    solution: "Built a zero-downtime data migration engine and FabricData Sphere™ blueprint serving 3,000+ quantitative analysts."
  }
];

export const PARTNERS = [
  { name: "Microsoft Azure", badge: "Azure Expert MSP & Partner of the Year", icon: "Cloud" },
  { name: "AWS", badge: "Premier Tier Consulting Partner", icon: "Server" },
  { name: "Databricks", badge: "Elite Solutions Partner", icon: "Database" },
  { name: "Snowflake", badge: "Premier Data Cloud Partner", icon: "Zap" },
  { name: "UiPath", badge: "Diamond Automation Partner", icon: "Cpu" }
];

export const LOCATIONS = [
  { city: "Seattle, WA (Global HQ)", address: "800 Fifth Avenue, Suite 3900", email: "seattle@technowera.com", phone: "+1 (800) 555-0199" },
  { city: "London, UK", address: "1 Canada Square, Canary Wharf", email: "london@technowera.com", phone: "+44 20 7946 0912" },
  { city: "Frankfurt, Germany", address: "Mainzer Landstraße 50", email: "frankfurt@technowera.com", phone: "+49 69 1234 5678" },
  { city: "Pune, India (Delivery Center)", address: "Tech Park Phase III, Hinjawadi", email: "pune@technowera.com", phone: "+91 20 6711 0000" },
  { city: "Singapore", address: "Marina Bay Financial Centre Tower 2", email: "singapore@technowera.com", phone: "+65 6789 0123" }
];

export const AGENT_SIMULATOR_FAQ = {
  "security": "Technowera's Security.AI practice provides end-to-end Microsoft Security (Defender XDR, Intune, Purview, Sentinel), Security Copilot AI enablement, IAM Shield Agent, and Zero-Trust architecture to govern autonomous AI agents and defend the enterprise perimeter.",
  "defender": "We implement Microsoft Defender XDR across Endpoints, Identities, Cloud Apps, and Office 365 with automated remediation playbooks and 24/7 Managed SOC coverage.",
  "purview": "Microsoft Purview services by Technowera unify data governance, sensitivity labeling, data loss prevention (DLP), and insider risk management across multi-cloud and on-prem repositories.",
  "intune": "Technowera provides Microsoft Intune and SCCM/MECM migration for seamless zero-touch device management, automated OS patch management, and strict conditional access policies.",
  "cloud": "Technowera provides multi-cloud FinOps cost optimization and zero-downtime migration to Azure, AWS, and GCP. Our CloudFinOps Guard™ typically reduces cloud bills by 25-40% within 30 days.",
  "ai": "Our Execution-Led AI services focus on building production-grade autonomous agent workflows, enterprise Copilots, and LangGraph multi-agent orchestration backed by strict security guardrails.",
  "data": "We specialize in Microsoft Fabric, Azure Databricks, and Snowflake unified lakehouses. Our FabricData Sphere™ accelerator speeds up data pipeline deployment by up to 80%.",
  "accelerators": "Technowera holds a library of 65+ pre-built solution accelerators across Security.AI, Agentic AI, Cloud Modernization, Healthcare, and Finance.",
  "cost": "We offer flexible engagement models: Managed Services SLA, Outcome-Based Project Delivery, and Dedicated Enterprise Squads."
};
