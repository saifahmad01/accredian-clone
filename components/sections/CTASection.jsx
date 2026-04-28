import SectionWrapper from "../ui/SectionWrapper";
import LeadCaptureForm from "../ui/LeadCaptureForm";

const BENEFITS = [
  "Customized learning paths for your team",
  "Dedicated customer success manager",
  "Real-time ROI and progress analytics",
  "Industry-recognized certifications",
];

export default function CTASection() {
  return (
    <SectionWrapper id="contact" bg="gradient">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-2xl shadow-blue-900/5 ring-1 ring-slate-200 lg:p-12">
        
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Ready to upskill your workforce?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Schedule a personalized demo to see how Accredian can help you
              build a culture of continuous learning and drive business outcomes.
            </p>

            <ul className="mt-10 space-y-5">
              {BENEFITS.map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="font-medium text-slate-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Form */}
          <div className="relative rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
            
            {/* Background glow */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-blue-100 to-indigo-100 opacity-50 blur-2xl" />

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Request a Demo
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Fill out the form and our team will reach out shortly.
              </p>
            </div>

            <LeadCaptureForm />
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}

/* ---------------- Small reusable piece ---------------- */

function CheckIcon() {
  return (
    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
}