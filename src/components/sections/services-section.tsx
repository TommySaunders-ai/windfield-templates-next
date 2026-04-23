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
    <section className="bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 py-20">
        {/* Top section: kicker+heading left, body+CTA right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-brand tracking-wide mb-3">
              {kicker}
            </span>
            <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-fg leading-[1.15] tracking-tight">
              {heading}
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-fg-muted leading-relaxed mb-8">{body}</p>
            <div>
              <Button href={cta.href}>{cta.label}</Button>
            </div>
          </div>
        </div>

        {/* Service cards 2x2 grid with collapsed borders */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((service, i) => (
            <a
              key={i}
              href={service.href}
              className="group p-8 border border-border -mr-px -mb-px transition-all duration-150 hover:bg-surface hover:-translate-y-px hover:border-border-strong"
            >
              <h3 className="text-xl font-semibold text-fg tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-fg-muted leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand group-hover:gap-2.5 transition-all duration-150">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
