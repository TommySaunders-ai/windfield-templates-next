interface FAQSectionProps {
  heading: string;
  description: string;
  items: string[];
}

export function FAQSection({ heading, description, items }: FAQSectionProps) {
  return (
    <section className="bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-fg leading-tight">
            {heading}
          </h2>
          <p className="text-fg-muted mt-4">{description}</p>
        </div>

        {/* FAQ grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {items.map((item, i) => {
            const isOdd = i % 2 === 0; // 0-indexed: even index = left column
            return (
              <div
                key={i}
                className={`flex items-center justify-between py-5 ${
                  isOdd
                    ? "pr-6 md:border-r md:border-border"
                    : "md:pl-6"
                } border-b border-border`}
              >
                <span className="text-fg font-medium">{item}</span>
                <svg
                  className="w-5 h-5 text-fg-muted flex-shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
