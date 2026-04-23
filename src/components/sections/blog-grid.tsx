import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";

interface BlogCard {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
}

interface BlogGridProps {
  kicker: string;
  heading: string;
  body: string;
  cards: BlogCard[];
  viewAllHref: string;
}

export function BlogGrid({ kicker, heading, body, cards, viewAllHref }: BlogGridProps) {
  return (
    <section className="bg-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand tracking-wide">
            {kicker}
          </span>
          <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-fg mt-3 leading-[1.15] tracking-tight">
            {heading}
          </h2>
          <p className="text-fg-muted mt-4">{body}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-xl overflow-hidden cursor-pointer hover:border-border-strong hover:-translate-y-0.5 transition-all duration-150 group"
            >
              <div className="border-b border-border">
                <PlaceholderImage className="aspect-[16/9] w-full rounded-none border-0" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-brand tracking-wide">
                  {card.category}
                </span>
                <h3 className="text-xl font-semibold text-fg mt-2.5 mb-2 tracking-tight leading-tight group-hover:text-brand transition-colors duration-150">
                  {card.title}
                </h3>
                <p className="text-sm text-fg-muted leading-normal mb-4">{card.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-fg-subtle">
                  <span>{card.author}</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-fg-faint" />
                  <span>{card.date}</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-fg-faint" />
                  <span>{card.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center">
          <Button variant="outline" href={viewAllHref}>
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
