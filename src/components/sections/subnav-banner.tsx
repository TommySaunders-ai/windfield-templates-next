interface SubnavItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SubnavBannerProps {
  items: SubnavItem[];
}

export function SubnavBanner({ items }: SubnavBannerProps) {
  return (
    <section className="bg-bg-elevated border-b border-border">
      <div className="max-w-7xl mx-auto px-10 md:px-6 sm:px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 py-5 px-6 cursor-pointer transition-colors duration-150 hover:bg-surface-hover ${
                i < items.length - 1
                  ? "border-r border-border max-lg:border-r-0"
                  : ""
              } ${i % 2 === 0 && i < items.length - 1 ? "max-sm:border-r-0" : ""} ${
                i < items.length - 2 ? "max-sm:border-b max-sm:border-border" : ""
              } ${i === 0 || i === 1 ? "max-lg:border-b max-lg:border-border lg:border-b-0" : ""}`}
            >
              {/* Icon with green tinted background */}
              <div className="w-6 h-6 rounded-md bg-brand-muted flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-brand [&_svg]:w-3.5 [&_svg]:h-3.5">
                  {item.icon}
                </span>
              </div>
              <div>
                <h3 className="text-[13px] font-semibold text-fg mb-0.5">{item.title}</h3>
                <p className="text-xs text-fg-subtle leading-snug">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
