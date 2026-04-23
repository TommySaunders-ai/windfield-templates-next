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
    <section className="bg-bg-elevated border-t border-border border-b">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand tracking-wide">
            {kicker}
          </span>
          <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-fg mt-3 leading-[1.15] tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="max-w-[960px] mx-auto bg-surface border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left media */}
            <div className="relative bg-bg-sunken aspect-square flex items-center justify-center">
              <PlaceholderImage className="w-full h-full rounded-none border-0" />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:scale-105 transition-all duration-150 cursor-pointer">
                  <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right content */}
            <div className="p-10 lg:p-12 flex flex-col justify-center gap-5">
              {/* 5 stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brand">
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base text-fg leading-[1.65] italic">
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-fg">{authorName}</p>
                  <p className="text-[13px] text-fg-subtle">{authorPosition}</p>
                </div>
                <div className="flex items-center gap-1.5 text-fg-muted text-sm font-semibold">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                  {brandName}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-between max-w-[960px] mx-auto mt-7">
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((dot) => (
              <span
                key={dot}
                className={`w-2 h-2 rounded-full transition-colors duration-150 cursor-pointer ${
                  dot === 0 ? "bg-brand" : "bg-fg-faint"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center text-fg-muted hover:border-fg-subtle hover:text-fg transition-all duration-150">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center text-fg-muted hover:border-fg-subtle hover:text-fg transition-all duration-150">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
