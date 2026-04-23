interface FooterProps {
  logo: string;
  newsletterText: string;
  disclaimer: string;
  columns: { title: string; links: { label: string; href: string }[] }[];
  socials: { label: string; href: string }[];
}

export function Footer({
  logo,
  newsletterText,
  disclaimer,
  columns,
  socials,
}: FooterProps) {
  return (
    <footer className="bg-bg-sunken border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <a href="/" className="text-lg font-bold text-fg">
              {logo}
            </a>
            <p className="text-sm text-fg-muted">{newsletterText}</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm bg-surface border border-border rounded-lg text-fg placeholder:text-fg-faint focus:outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium bg-brand text-brand-fg rounded-lg hover:bg-brand-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-fg-subtle">{disclaimer}</p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-fg">{col.title}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-fg-muted hover:text-fg transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-fg">Social</h4>
            <ul className="flex flex-col gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-sm text-fg-muted hover:text-fg transition-colors"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-fg-subtle">
            &copy; {new Date().getFullYear()} {logo}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-fg-subtle hover:text-fg-muted transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-fg-subtle hover:text-fg-muted transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
