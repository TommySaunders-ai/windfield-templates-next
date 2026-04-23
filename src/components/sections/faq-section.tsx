interface FAQSectionProps {
  heading: string;
  description: string;
  items: string[];
}

export function FAQSection({ heading, description, items }: FAQSectionProps) {
  return (
    <section className="bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-fg leading-[1.15] tracking-tight">
            {heading}
          </h2>
          <p className="text-fg-muted mt-4 max-w-[640px] mx-auto">{description}</p>
        </div>

        {/* FAQ grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {items.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex items-center justify-between gap-4 py-5 border-b border-border cursor-pointer group ${
                  isLeft
                    ? "pr-8 md:border-r md:border-border"
                    : "md:pl-8"
                }`}
              >
                <span className="text-[15px] font-medium text-fg group-hover:text-brand transition-colors duration-150">
                  {item}
                </span>
                <svg
                  className="w-[18px] h-[18px] text-fg-subtle shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
