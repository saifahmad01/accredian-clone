import { TRUST_LOGOS } from "@/components/lib/constants";

export default function TrustBanner() {
  return (
    <section className="overflow-hidden border-y border-slate-100 bg-slate-50 py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
          Trusted by teams at
        </p>

        {/* Logos */}
        <ul className="grid grid-cols-2 items-center justify-items-center gap-8 opacity-70 grayscale transition-all duration-500 hover:grayscale-0 md:grid-cols-4 lg:grid-cols-8">
          {TRUST_LOGOS.map((logo) => (
            <li key={logo} className="flex h-12 items-center justify-center">
              <span className="text-lg font-semibold text-slate-700 transition-colors hover:text-blue-600">
                {logo}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}