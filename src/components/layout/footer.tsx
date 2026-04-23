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
    <footer className="bg-bg-elevated border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 pt-14">
        {/* Top grid: brand 1.5fr + link cols 1fr each + socials 1fr */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-10">
          {/* Brand column */}
          <div className="flex flex-col">
            <a href="/" className="text-lg font-bold text-fg tracking-tight mb-4">
              {logo}
            </a>
            <p className="text-[13px] text-fg-muted mb-3">{newsletterText}</p>
            <form className="flex gap-2 mb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-10 px-3 bg-bg border border-border rounded-md text-[13px] text-fg placeholder:text-fg-faint hover:border-border-strong focus:outline-none focus:border-brand transition-colors duration-150"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-10 px-4 text-[13px] font-semibold text-fg bg-transparent border border-border-strong rounded-md hover:border-fg-subtle hover:bg-surface transition-all duration-150 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[11px] text-fg-faint leading-normal">{disclaimer}</p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col">
              <h4 className="text-[13px] font-semibold text-fg mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-fg-muted hover:text-fg transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials column */}
          <div className="flex flex-col">
            <h4 className="text-[13px] font-semibold text-fg mb-4">Social</h4>
            <ul className="flex flex-col gap-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-[13px] text-fg-muted hover:text-fg transition-colors duration-150 inline-flex items-center gap-2"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 border-t border-border text-xs text-fg-subtle">
          <span>
            &copy; {new Date().getFullYear()} {logo}. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="underline underline-offset-2 hover:text-fg transition-colors duration-150">
              Privacy Policy
            </a>
            <a href="#" className="underline underline-offset-2 hover:text-fg transition-colors duration-150">
              Terms of Service
            </a>
            <a href="#" className="underline underline-offset-2 hover:text-fg transition-colors duration-150">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
