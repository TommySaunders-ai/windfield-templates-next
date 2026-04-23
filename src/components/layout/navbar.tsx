"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  logo: string;
  links: { label: string; href: string; active?: boolean }[];
  phone?: string;
  cta?: { label: string; href: string };
}

export function Navbar({ logo, links, phone, cta }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-lg font-bold text-fg">
            {logo}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  link.active
                    ? "text-fg bg-surface"
                    : "text-fg-muted hover:text-fg hover:bg-surface-hover"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-4">
            {phone && (
              <span className="text-sm text-fg-muted">{phone}</span>
            )}
            {cta && (
              <Button href={cta.href} size="sm">
                {cta.label}
              </Button>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-fg-muted hover:text-fg transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <div className="px-4 py-4 flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  link.active
                    ? "text-fg bg-surface"
                    : "text-fg-muted hover:text-fg hover:bg-surface-hover"
                }`}
              >
                {link.label}
              </a>
            ))}
            {phone && (
              <span className="px-3 py-2 text-sm text-fg-muted">{phone}</span>
            )}
            {cta && (
              <div className="px-3 pt-2">
                <Button href={cta.href} size="sm" className="w-full">
                  {cta.label}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
