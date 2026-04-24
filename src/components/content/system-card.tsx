import type { ReactNode } from "react";

interface SystemCardProps {
  label: string;
  title: string;
  children: ReactNode;
}

export function SystemCard({ label, title, children }: SystemCardProps) {
  return (
    <div className="border border-border rounded-xl p-5 my-7 bg-surface hover:border-brand/30 hover:shadow-[0_0_20px_rgba(29,185,84,0.05)] transition">
      <p className="text-[9.5px] font-bold tracking-[.2em] uppercase text-brand opacity-70 mb-3">
        {label}
      </p>
      <h3 className="text-lg font-semibold text-fg mb-3">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
