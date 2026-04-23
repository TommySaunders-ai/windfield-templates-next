import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  kicker: string;
  heading: string;
  body: string;
  bullets: string[];
  buttonLabel: string;
  buttonHref: string;
}

export function AboutSection({
  kicker,
  heading,
  body,
  bullets,
  buttonLabel,
  buttonHref,
}: AboutSectionProps) {
  return (
    <section className="bg-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left image */}
          <PlaceholderImage className="aspect-square w-full min-h-[320px]" />

          {/* Right content */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-brand tracking-wide mb-3">
              {kicker}
            </span>
            <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-fg leading-[1.15] tracking-tight">
              {heading}
            </h2>
            <p className="text-fg-muted leading-relaxed mt-5 mb-6">{body}</p>
            <ul className="flex flex-col gap-3 mb-8">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-brand shrink-0" />
                  <span className="text-sm text-fg-muted leading-normal">{bullet}</span>
                </li>
              ))}
            </ul>
            <div>
              <Button variant="outline" href={buttonHref}>
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
