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
    name: "OmniHealth AI Copilot™",
    category: "Healthcare",
    description: "HIPAA-compliant clinical documentation summarizer and patient triage assistant powered by GenAI.",
    timeToDeploy: "3 Weeks",
    techStack: ["Azure Health Bot", "FHIR API", "GPT-4o"],
    impact: "Saves doctors 2+ hours per day on paperwork"
  },
  {
    id: "acc-5",
    name: "FinRisk Intel™",
    category: "Financial Services",
    description: "Real-time fraud detection and AML compliance engine combining graph analytics with deep learning.",
    timeToDeploy: "4 Weeks",
    techStack: ["Databricks", "Neo4j", "Kafka", "TensorFlow"],
    impact: "99.4% accuracy rate in anomaly detection"
  },
  {
    id: "acc-6",
    name: "SupplyVision Twin™",
    category: "Manufacturing",
    description: "Digital twin platform for supply chain tracking, predictive maintenance, and IoT telemetry monitoring.",
    timeToDeploy: "3 Weeks",
    techStack: ["Azure IoT Central", "React", "Three.js"],
    impact: "Eliminates unplanned equipment downtime by 35%"
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
    client: "Global Fortune 100 Healthcare Network",
    title: "Scaling Autonomous GenAI Triage & Clinical Documentation for 15,000+ Physicians",
    industry: "Healthcare",
    image: "/images/solutions.jpg",
    metrics: [
      { label: "Hours Saved / Doctor / Day", value: "2.4 Hrs" },
      { label: "Triage Accuracy", value: "99.2%" },
      { label: "Annual Operational Savings", value: "$28 Million" }
    ],
    challenge: "Physician burnout from manual EHR entry and slow patient intake processing across 40 hospital campuses.",
    solution: "Deployed Technowera OmniHealth AI Copilot™ integrated with FHIR endpoints and Azure OpenAI infrastructure."
  },
  {
    id: "cs-2",
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
  },
  {
    id: "cs-3",
    client: "Global Retail & Logistics Giant",
    title: "Autonomous Supply Chain Optimization & FinOps Infrastructure Modernization",
    industry: "Retail & Supply Chain",
    image: "/images/global.jpg",
    metrics: [
      { label: "Inventory Accuracy", value: "99.8%" },
      { label: "Cloud Waste Saved", value: "$4.2M" },
      { label: "Peak Cyber Week SLA", value: "100%" }
    ],
    challenge: "Frequent black swan supply bottlenecks and over-provisioned cloud servers incurring millions in wasted monthly spend.",
    solution: "Implemented Technowera CloudFinOps Guard™ and SupplyVision Twin™ to orchestrate real-time inventory and cloud server auto-scaling."
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
  "cloud": "Technowera provides multi-cloud FinOps cost optimization and zero-downtime migration to Azure, AWS, and GCP. Our CloudFinOps Guard™ typically reduces cloud bills by 25-40% within 30 days.",
  "ai": "Our Execution-Led AI services focus on building production-grade autonomous agent workflows, enterprise Copilots, and LangGraph multi-agent orchestration backed by strict security guardrails.",
  "data": "We specialize in Microsoft Fabric, Azure Databricks, and Snowflake unified lakehouses. Our FabricData Sphere™ accelerator speeds up data pipeline deployment by up to 80%.",
  "accelerators": "Technowera holds a library of 65+ pre-built solution accelerators across AI, Cloud, Healthcare, and Finance that slash time-to-market from months to days.",
  "cost": "We offer flexible engagement models: Managed Services SLA, Outcome-Based Project Delivery, and Dedicated Enterprise Squads."
};
