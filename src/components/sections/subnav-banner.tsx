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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 py-6 sm:px-6 first:sm:pl-0 last:sm:pr-0">
              <div className="flex-shrink-0 text-brand">{item.icon}</div>
              <div>
                <h3 className="text-sm font-semibold text-fg">{item.title}</h3>
                <p className="text-xs text-fg-muted mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
