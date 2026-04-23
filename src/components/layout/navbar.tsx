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
    <nav className="sticky top-0 z-50 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10">
        <div className="flex items-center h-16 gap-8">
          {/* Logo */}
          <a href="/" className="text-lg font-bold text-fg tracking-tight shrink-0">
            {logo}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7 flex-1 min-w-0">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm whitespace-nowrap transition-colors duration-150 ${
                  link.active
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {phone && (
              <a
                href="tel:1888123456"
                className="text-[13px] text-fg-muted border border-border rounded-lg px-4 py-2 hover:border-border-strong hover:text-fg transition-all duration-150"
              >
                {phone}
              </a>
            )}
            {cta && (
              <Button href={cta.href} size="sm">
                {cta.label}
              </Button>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto p-2 text-fg hover:text-fg transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <div className="px-5 py-5 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-2.5 text-sm rounded-lg transition-colors duration-150 ${
                  link.active
                    ? "text-fg bg-surface"
                    : "text-fg-muted hover:text-fg hover:bg-surface-hover"
                }`}
              >
                {link.label}
              </a>
            ))}
            {phone && (
              <span className="px-3 py-2.5 text-sm text-fg-muted">{phone}</span>
            )}
            {cta && (
              <div className="px-3 pt-3">
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
