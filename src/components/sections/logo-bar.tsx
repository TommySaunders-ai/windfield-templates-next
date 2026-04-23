interface LogoItem {
  name: string;
}

interface LogoBarProps {
  title: string;
  logos: LogoItem[];
}

export function LogoBar({ title, logos }: LogoBarProps) {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 py-12">
        <p className="text-center text-sm text-fg-subtle mb-7">{title}</p>
        <div className="flex flex-wrap items-center justify-center gap-y-8 gap-x-12">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-fg-faint text-base font-semibold tracking-tight hover:text-fg-muted transition-colors duration-150"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="4" />
              </svg>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
