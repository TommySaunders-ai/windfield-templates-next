interface MastheadProps {
  seriesLabel: string;
  title: string;
  subtitle: string;
  count: string;
}

export function Masthead({ seriesLabel, title, subtitle, count }: MastheadProps) {
  return (
    <div className="relative border-b border-border py-12 md:py-16 px-6 md:px-10 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(29,185,84,0.06) 0%, transparent 50%, rgba(29,185,84,0.03) 100%)",
        }}
      />
      {/* Watermark */}
      <div className="absolute -right-8 -top-4 text-[14rem] font-extrabold text-brand opacity-[0.03] leading-none pointer-events-none select-none tracking-tighter">
        IO
      </div>

      <div className="relative z-10 max-w-[800px]">
        <p className="text-[10px] font-bold tracking-[.25em] uppercase text-brand mb-5">
          {seriesLabel}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-fg mb-4">
          {title}
        </h1>
        <p className="text-sm md:text-base text-fg-muted max-w-[620px] leading-relaxed mb-6">
          {subtitle}
        </p>
        <div className="flex items-center gap-3 max-w-[320px]">
          <hr className="flex-1 border-t border-border" />
          <span className="text-[10px] font-semibold text-fg-subtle tracking-[.12em] uppercase">{count}</span>
          <hr className="flex-1 border-t border-border" />
        </div>
      </div>
    </div>
  );
}
