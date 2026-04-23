interface AnnouncementBarProps {
  text: string;
  linkText: string;
  linkHref: string;
}

export function AnnouncementBar({ text, linkText, linkHref }: AnnouncementBarProps) {
  return (
    <section className="bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-10 md:px-6 sm:px-5 py-2.5 text-center">
        <p className="text-[13px] text-fg-muted">
          {text}{" "}
          <a
            href={linkHref}
            className="text-brand underline underline-offset-2 hover:text-brand-hover transition-colors duration-150"
          >
            {linkText}
          </a>
        </p>
      </div>
    </section>
  );
}
