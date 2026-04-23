interface AnnouncementBarProps {
  text: string;
  linkText: string;
  linkHref: string;
}

export function AnnouncementBar({ text, linkText, linkHref }: AnnouncementBarProps) {
  return (
    <section className="bg-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center">
        <p className="text-sm text-brand-fg font-medium">
          {text}{" "}
          <a href={linkHref} className="underline hover:opacity-80 transition-opacity">
            {linkText}
          </a>
        </p>
      </div>
    </section>
  );
}
