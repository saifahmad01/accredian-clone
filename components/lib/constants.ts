export const SITE_CONFIG = {
  name: "Accredian",
  tagline: "Enterprise Learning Solutions",
  description:
    "Transform your workforce with world-class upskilling programs. Accredian partners with leading organizations to deliver impactful learning experiences.",
  url: "https://enterprise.accredian.com",
} as const;

export const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  programs: [
    { label: "Data Science", href: "#" },
    { label: "Product Management", href: "#" },
    { label: "Digital Marketing", href: "#" },
    { label: "Business Analytics", href: "#" },
  ],
  resources: [
    { label: "Case Studies", href: "#" },
    { label: "Whitepapers", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
} as const;

export const HERO_CONTENT = {
  badge: "Trusted by 100+ Enterprises",
  headline: "Upskill Your Workforce with",
  headlineHighlight: "World-Class Programs",
  subheadline:
    "Partner with India's leading EdTech platform to design and deliver customized corporate training programs that drive real business outcomes.",
  primaryCTA: "Get Started",
  secondaryCTA: "Learn More",
  stats: [
    { value: 500, suffix: "+", label: "Corporate Partners" },
    { value: 50, suffix: "K+", label: "Professionals Trained" },
    { value: 95, suffix: "%", label: "Satisfaction Rate" },
    { value: 4.8, suffix: "/5", label: "Average Rating" },
  ],
} as const;

export const SOLUTIONS = [
  {
    icon: "🎓",
    title: "Custom Learning Paths",
    description:
      "Tailored curricula designed around your organization's specific skill gaps and business objectives. Our programs are built with industry experts.",
    color: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-blue-500/20",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: "📊",
    title: "Data-Driven Insights",
    description:
      "Real-time analytics dashboards to track learner progress, engagement metrics, and ROI on your training investment.",
    color: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: "🤝",
    title: "Dedicated Success Team",
    description:
      "A dedicated customer success manager and learning coordinator to ensure smooth program delivery and maximum impact.",
    color: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-500/20",
    iconBg: "bg-violet-500/10",
  },
  {
    icon: "🏆",
    title: "Industry Certifications",
    description:
      "Programs accredited by top universities and industry bodies. Your employees earn recognized certifications upon completion.",
    color: "from-amber-500/10 to-orange-500/10",
    borderColor: "border-amber-500/20",
    iconBg: "bg-amber-500/10",
  },
  {
    icon: "🧠",
    title: "AI-Powered Learning",
    description:
      "Adaptive learning technology that personalizes content delivery based on individual learning pace and style.",
    color: "from-rose-500/10 to-pink-500/10",
    borderColor: "border-rose-500/20",
    iconBg: "bg-rose-500/10",
  },
  {
    icon: "🌐",
    title: "Scalable Delivery",
    description:
      "From small teams to enterprise-wide rollouts — our platform scales effortlessly to accommodate thousands of learners.",
    color: "from-cyan-500/10 to-sky-500/10",
    borderColor: "border-cyan-500/20",
    iconBg: "bg-cyan-500/10",
  },
] as const;

export const TRUST_LOGOS = [
  "Google",
  "Microsoft",
  "Amazon",
  "Flipkart",
  "Infosys",
  "Wipro",
  "TCS",
  "Deloitte",
] as const;