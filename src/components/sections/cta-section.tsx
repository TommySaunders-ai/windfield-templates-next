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
    <section className="bg-bg py-20">
      <div className="max-w-3xl mx-auto px-10 md:px-6 sm:px-5 text-center">
        <h2 className="text-[32px] md:text-[26px] font-bold text-fg leading-[1.2] tracking-tight mb-3">
          {heading}
        </h2>
        <p className="text-fg-muted mb-7">{description}</p>
        <Button variant="outline" href={buttonHref}>
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
