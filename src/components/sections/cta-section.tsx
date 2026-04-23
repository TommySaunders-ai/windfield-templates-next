import { Button } from "@/components/ui/button";

interface CTASectionProps {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export function CTASection({
  heading,
  description,
  buttonLabel,
  buttonHref,
}: CTASectionProps) {
  return (
    <section className="bg-bg-elevated border-y border-border">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-fg leading-tight">
          {heading}
        </h2>
        <p className="text-fg-muted mt-4">{description}</p>
        <div className="mt-8">
          <Button variant="outline" href={buttonHref}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
