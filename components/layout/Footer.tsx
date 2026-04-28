import Link from "next/link";
import { FOOTER_LINKS } from "@/components/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-300">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-white"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold">
                A
              </div>
              <span className="text-xl font-bold tracking-tight">
                Accredian
              </span>
            </Link>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Transforming workforces globally through world-class upskilling
              programs. We partner with enterprises to drive growth,
              innovation, and retention.
            </p>

            <SocialLinks />
          </div>

          {/* Link Columns */}
          <FooterColumn title="Programs" links={FOOTER_LINKS.programs} />
          <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
          
          <p className="text-sm text-slate-500">
            © {year} Accredian. All rights reserved.
          </p>

          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

/* ---------------- Subcomponents ---------------- */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLinks() {
  const items = [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "YouTube", href: "#" },
  ];

  return (
    <div className="flex gap-4">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-blue-600 hover:text-white"
        >
          <div className="h-4 w-4 rounded-full border-2 border-current" />
        </a>
      ))}
    </div>
  );
}