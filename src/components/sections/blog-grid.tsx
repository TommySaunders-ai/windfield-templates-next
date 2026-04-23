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
    <section className="bg-bg-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">
            {kicker}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-fg mt-4 leading-tight">
            {heading}
          </h2>
          <p className="text-fg-muted mt-4">{body}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="border border-border rounded-lg overflow-hidden hover:border-border-strong transition-colors group"
            >
              <PlaceholderImage className="aspect-video w-full rounded-none" />
              <div className="p-6">
                <span className="text-xs font-semibold text-brand uppercase tracking-wider">
                  {card.category}
                </span>
                <h3 className="text-lg font-semibold text-fg mt-2 group-hover:text-brand transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-fg-muted mt-2">{card.excerpt}</p>
                <div className="flex items-center gap-2 mt-4 text-xs text-fg-subtle">
                  <span>{card.author}</span>
                  <span className="w-1 h-1 rounded-full bg-fg-faint" />
                  <span>{card.date}</span>
                  <span className="w-1 h-1 rounded-full bg-fg-faint" />
                  <span>{card.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-10">
          <Button variant="outline" href={viewAllHref}>
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
