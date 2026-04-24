import type { ReactNode } from "react";

interface PullQuoteProps {
  children: ReactNode;
}

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="border-l-[3px] border-brand rounded-r-xl bg-brand/[0.04] px-5 py-5 my-10">
      <div className="text-lg italic leading-relaxed text-fg-muted">{children}</div>
    </blockquote>
  );
}
