// =============================================================================
// Main Layout Component: Footer
// Multi-column layout, branding, and legal links
// =============================================================================
import Link from "next/link"; 
import { FOOTER_LINKS } from "@/components/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-xl">
                A
              </div>
              <span className="text-xl font-bold tracking-tight">Accredian</span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Transforming workforces globally through world-class upskilling programs. We partner with enterprises to drive growth, innovation, and retention.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-blue-600 hover:text-white"
                  aria-label={`Social link ${i}`}
                >
                  <div className="h-4 w-4 rounded-full border-2 border-current" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Programs
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.programs.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Accredian. All rights reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-500 hover:text-white transition-colors"
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
