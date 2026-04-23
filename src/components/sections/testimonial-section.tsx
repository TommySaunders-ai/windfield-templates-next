import { PlaceholderImage } from "@/components/ui/placeholder-image";

interface TestimonialSectionProps {
  kicker: string;
  heading: string;
  quote: string;
  authorName: string;
  authorPosition: string;
  brandName: string;
}

export function TestimonialSection({
  kicker,
  heading,
  quote,
  authorName,
  authorPosition,
  brandName,
}: TestimonialSectionProps) {
  return (
    <section className="bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">
            {kicker}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-fg mt-4 leading-tight">
            {heading}
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left media */}
            <div className="relative">
              <PlaceholderImage className="aspect-video lg:aspect-auto lg:h-full w-full rounded-none" />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand/90 flex items-center justify-center hover:bg-brand transition-colors cursor-pointer">
                  <svg className="w-6 h-6 text-brand-fg ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center gap-6">
              {/* 5 stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-fg leading-relaxed">
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-fg">{authorName}</p>
                  <p className="text-sm text-fg-muted">{authorPosition}</p>
                </div>
                <div className="flex items-center gap-2 text-fg-subtle">
                  <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.3" />
                  </svg>
                  <span className="text-sm font-medium">{brandName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="flex gap-2">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className={`w-2.5 h-2.5 rounded-full ${
                  dot === 0 ? "bg-brand" : "bg-border-strong"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-fg-muted hover:text-fg hover:border-border-strong transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-fg-muted hover:text-fg hover:border-border-strong transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
