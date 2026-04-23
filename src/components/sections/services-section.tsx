import { Button } from "@/components/ui/button";

interface ServiceCard {
  title: string;
  description: string;
  href: string;
}

interface ServicesSectionProps {
  kicker: string;
  heading: string;
  body: string;
  cta: { label: string; href: string };
  services: ServiceCard[];
}

export function ServicesSection({
  kicker,
  heading,
  body,
  cta,
  services,
}: ServicesSectionProps) {
  return (
    <section className="bg-bg-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">
              {kicker}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-fg leading-tight">
              {heading}
            </h2>
          </div>
          <div className="flex flex-col gap-6 justify-center">
            <p className="text-fg-muted">{body}</p>
            <div>
              <Button href={cta.href}>{cta.label}</Button>
            </div>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <a
              key={i}
              href={service.href}
              className="group border border-border rounded-lg p-6 transition-colors hover:bg-surface-hover hover:border-border-strong"
            >
              <h3 className="text-lg font-semibold text-fg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-fg-muted mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-brand group-hover:gap-2 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
