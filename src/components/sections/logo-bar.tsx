interface LogoItem {
  name: string;
}

interface LogoBarProps {
  title: string;
  logos: LogoItem[];
}

export function LogoBar({ title, logos }: LogoBarProps) {
  return (
    <section className="bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-center text-sm text-fg-muted mb-10">{title}</p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2 text-fg-subtle">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.3" />
              </svg>
              <span className="text-sm font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
