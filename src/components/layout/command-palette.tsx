"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { allSeries } from "@/data/series";

function SearchIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setIdx(0);
    }
  }, [open]);

  const items = useMemo(() => {
    const all: { label: string; sub: string; href: string; color: string }[] = [];

    // Home
    all.push({ label: "Home", sub: "Full System Overview", href: "/", color: "#1db954" });

    // Series and articles
    allSeries.forEach((s) => {
      all.push({
        label: s.title,
        sub: `Series ${s.number} · ${s.articles.length} articles`,
        href: `/${s.slug}`,
        color: s.color,
      });
      s.articles.forEach((a) => {
        all.push({
          label: `${s.title} > ${a.title}`,
          sub: `Article ${a.number}`,
          href: `/${s.slug}/${a.slug}`,
          color: s.color,
        });
      });
    });

    if (!query) return all.slice(0, 20);

    const ql = query.toLowerCase();
    return all
      .filter((i) => i.label.toLowerCase().includes(ql) || i.sub.toLowerCase().includes(ql))
      .slice(0, 20);
  }, [query]);

  const onKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setIdx((i) => Math.min(i + 1, items.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        const it = items[idx];
        if (it) {
          window.location.href = it.href;
          onClose();
        }
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [items, idx, onClose]
  );

  if (!open) return null;

  return (
    <div className="io-palette-overlay" onClick={onClose}>
      <div className="io-palette" onClick={(e) => e.stopPropagation()}>
        <div className="io-palette-search">
          <SearchIcon />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setIdx(0); }}
            onKeyDown={onKey}
            placeholder="Jump to any series or article..."
          />
          <kbd>ESC</kbd>
        </div>
        <div className="io-palette-body io-scroll">
          {items.length === 0 && (
            <div style={{ padding: 24, textAlign: "center", color: "var(--iol-text-muted)", fontSize: 13 }}>
              No matches
            </div>
          )}
          {items.map((it, i) => (
            <a
              key={i}
              href={it.href}
              className={`io-palette-item ${i === idx ? "io-palette-item-active" : ""}`}
              onMouseEnter={() => setIdx(i)}
              onClick={onClose}
            >
              <span
                className="io-palette-item-icon"
                style={{
                  background: `${it.color}22`,
                  color: it.color,
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                IO
              </span>
              <span style={{ flex: 1, color: "var(--iol-text)" }}>{it.label}</span>
              <span style={{ fontSize: 11, color: "var(--iol-text-muted)" }}>{it.sub}</span>
            </a>
          ))}
        </div>
        <div className="io-palette-footer">
          <kbd>Up/Down</kbd> <span>Navigate</span>
          <kbd>Enter</kbd> <span>Select</span>
          <div style={{ flex: 1 }} />
          <span>{items.length} results</span>
        </div>
      </div>
    </div>
  );
}
