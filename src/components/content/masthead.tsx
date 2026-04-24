interface MastheadProps {
  seriesLabel: string;
  title: string;
  subtitle: string;
  count: string;
}

export function Masthead({ seriesLabel, title, subtitle, count }: MastheadProps) {
  return (
    <div className="border-b border-border py-8 px-8 text-center bg-[linear-gradient(180deg,rgba(29,185,84,0.04),transparent)]">
      <p className="text-[10px] font-semibold tracking-[.2em] uppercase text-brand mb-4">
        {seriesLabel}
      </p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-fg mb-3">
        {title}
      </h1>
      <p className="text-sm text-fg-muted max-w-[620px] mx-auto leading-relaxed mb-4">
        {subtitle}
      </p>
      <div className="flex items-center gap-3 max-w-[320px] mx-auto">
        <hr className="flex-1 border-t border-border" />
        <span className="text-[11px] text-fg-subtle tracking-[.1em]">{count}</span>
        <hr className="flex-1 border-t border-border" />
      </div>
    </div>
  );
}
