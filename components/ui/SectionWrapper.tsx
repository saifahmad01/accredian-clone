import { ReactNode } from "react";

type SectionBackground = "white" | "gray" | "dark" | "gradient";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
  bg?: SectionBackground;
}

const BACKGROUND_STYLES: Record<SectionBackground, string> = {
  white: "bg-white",
  gray: "bg-slate-50",
  dark: "bg-slate-900 text-white",
  gradient: "bg-gradient-to-br from-blue-50 via-white to-indigo-50",
};

const CONTAINER_CLASS =
  "mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24";

export default function SectionWrapper({
  id,
  className,
  children,
  bg = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${BACKGROUND_STYLES[bg]} ${className ?? ""}`}
    >
      <div className={CONTAINER_CLASS}>{children}</div>
    </section>
  );
}