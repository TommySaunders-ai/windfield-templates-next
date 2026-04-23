import type { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "outline";
  size?: "sm" | "md";
  children: ReactNode;
  href?: string;
  className?: string;
}

const base =
  "inline-flex items-center justify-center font-medium rounded-lg transition-colors cursor-pointer";

const variants = {
  primary: "bg-brand text-brand-fg hover:bg-brand-hover",
  outline:
    "border border-border-strong text-fg hover:bg-surface-hover hover:border-border-strong",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
