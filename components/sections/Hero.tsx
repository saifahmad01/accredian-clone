// =============================================================================
// Hero Section
// High-impact first impression with gradient text, stats, and strong CTAs
// =============================================================================
import { HERO_CONTENT } from "@/components/lib/constants";;
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-blue-100/50 blur-3xl mix-blend-multiply" />
        <div className="absolute top-[20%] right-[-5%] w-[30rem] h-[30rem] rounded-full bg-indigo-100/50 blur-3xl mix-blend-multiply" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Badge */}
        <div className="mx-auto mb-8 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-blue-50 px-4 py-2 ring-1 ring-blue-600/10">
          <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
          <p className="text-sm font-medium text-blue-600">{HERO_CONTENT.badge}</p>
        </div>

        {/* Headlines */}
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          {HERO_CONTENT.headline}{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
            {HERO_CONTENT.headlineHighlight}
          </span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          {HERO_CONTENT.subheadline}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#contact" size="lg" className="w-full sm:w-auto min-w-[200px]">
            {HERO_CONTENT.primaryCTA}
          </Button>
          <Button href="#solutions" variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px]">
            {HERO_CONTENT.secondaryCTA}
          </Button>
        </div>

        {/* Stats Row */}
        <div className="mx-auto mt-20 max-w-5xl rounded-3xl bg-white/60 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm border border-slate-100 ring-1 ring-slate-900/5 lg:p-12">
  <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-4">
    {HERO_CONTENT.stats.map((stat) => (
      <div key={stat.label} className="text-center">
        <h3 className="text-3xl font-bold text-slate-900">
          {stat.value}
          {stat.suffix}
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
