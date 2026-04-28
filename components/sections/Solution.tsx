import { SOLUTIONS } from "../lib/constants";
import SectionWrapper from "../ui/SectionWrapper";

export default function Solutions() {
  return (
    <SectionWrapper id="solutions" bg="white">
      
      {/* Section Header */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Everything you need to upskill your team
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Our comprehensive enterprise solution provides end-to-end management
          of your corporate learning initiatives.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((item) => (
          <SolutionCard key={item.title} item={item} />
        ))}
      </div>

    </SectionWrapper>
  );
}

/* ---------------- Card Component ---------------- */

function SolutionCard({
  item,
}: {
  item: (typeof SOLUTIONS)[number];
}) {
  return (
    <div className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl">
      
      {/* Hover Gradient */}
      <div
        className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      {/* Icon */}
      <div
        className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border text-3xl shadow-sm ${item.iconBg} ${item.borderColor}`}
      >
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-semibold text-slate-900">
        {item.title}
      </h3>

      {/* Description */}
      <p className="leading-relaxed text-slate-600">
        {item.description}
      </p>
    </div>
  );
}