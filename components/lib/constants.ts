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