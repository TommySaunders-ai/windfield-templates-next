import type { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "outline";
  size?: "sm" | "md";
  children: ReactNode;
  href?: string;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-lg whitespace-nowrap transition-all duration-150 cursor-pointer";

const variants = {
  primary: "bg-brand text-brand-fg border border-transparent hover:bg-brand-hover",
  outline:
    "bg-transparent text-fg border border-border-strong hover:border-fg-subtle hover:bg-surface",
};

const sizes = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
