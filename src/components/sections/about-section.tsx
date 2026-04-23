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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <PlaceholderImage className="aspect-square w-full" />

          {/* Right content */}
          <div className="flex flex-col gap-6">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">
              {kicker}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-fg leading-tight">
              {heading}
            </h2>
            <p className="text-fg-muted">{body}</p>
            <ul className="flex flex-col gap-3">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-brand flex-shrink-0" />
                  <span className="text-fg-muted">{bullet}</span>
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
