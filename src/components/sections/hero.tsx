import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  description: string;
  cta: { label: string; href: string };
}

export function Hero({ title, description, cta }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Green radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,185,84,0.12)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-fg leading-tight">
              {title}
            </h1>
            <p className="text-lg text-fg-muted max-w-lg">{description}</p>
            <div>
              <Button href={cta.href}>{cta.label}</Button>
            </div>
          </div>

          {/* Right image */}
          <PlaceholderImage className="aspect-[4/3] w-full" />
        </div>
      </div>
    </section>
  );
}
