// =============================================================================
// Reusable Button component with variant support
// Uses a discriminated union pattern for type safety across variants
// =============================================================================

import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

// If `href` is provided, render as a Link; otherwise render as a <button>
type ButtonProps = ButtonBaseProps &
  (
    | ({ href: string } & Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "className"
      >)
    | ({ href?: never } & Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        "className"
      >)
  );

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98]",
  secondary:
    "bg-white text-slate-900 shadow-md hover:shadow-lg border border-slate-200 hover:border-slate-300 active:scale-[0.98]",
  outline:
    "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:scale-[0.98]",
  ghost:
    "text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={combinedStyles} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
