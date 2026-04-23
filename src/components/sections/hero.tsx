import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  description: string;
  cta: { label: string; href: string };
}

export function Hero({ title, description, cta }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-bg)_0%,#0d1a0f_50%,var(--color-bg)_100%)]">
      {/* Green radial glow accent */}
      <div className="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(29,185,84,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-10 md:px-6 sm:px-5 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <h1 className="text-[52px] lg:text-[52px] md:text-[40px] sm:text-4xl font-extrabold text-fg leading-[1.05] tracking-tight mb-5">
              {title}
            </h1>
            <p className="text-base text-fg-muted leading-relaxed max-w-[480px] mb-8">
              {description}
            </p>
            <Button href={cta.href}>{cta.label}</Button>
          </div>

          {/* Right image */}
          <PlaceholderImage className="aspect-[4/3] w-full min-h-[320px]" />
        </div>
      </div>
    </section>
  );
}
