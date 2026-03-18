"use client";

import { useMemo, useState } from "react";
import type { ServiceCategory } from "@/app/lib/services";

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export function Services({ categories }: { categories: ServiceCategory[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const q = normalize(query);

  const filtered = useMemo(() => {
    if (!q) return categories;
    return categories
      .map((c) => ({
        ...c,
        items: c.items.filter((it) => normalize(it).includes(q)),
      }))
      .filter((c) => c.items.length > 0);
  }, [categories, q]);

  return (
    <div className="rounded-3xl border bg-surface/70 p-5 shadow-(--shadow) backdrop-blur sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted">Services We Offer</p>
          <h2 className="mt-2 font-(--font-display) text-2xl leading-tight tracking-tight sm:text-3xl">
            Hair, nails, and beauty—curated with precision
          </h2>
        </div>
        <div className="w-full sm:w-[320px]">
          <label className="text-xs font-medium text-muted" htmlFor="serviceSearch">
            Search services
          </label>
          <input
            id="serviceSearch"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “color”, “wig”, “pedicure”…"
            className="mt-2 w-full rounded-2xl border bg-background/60 px-4 py-3 text-sm outline-none ring-0 placeholder:text-muted/70 focus:border-brand"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.map((cat) => {
          const isOpen = open[cat.title] ?? false;
          const shown = isOpen ? cat.items : cat.items.slice(0, 6);
          const canToggle = cat.items.length > 6;

          return (
            <section
              key={cat.title}
              className="rounded-3xl border bg-background/50 p-5"
            >
              <header className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium tracking-tight">{cat.title}</h3>
                  {cat.subtitle ? (
                    <p className="mt-1 text-sm text-muted">{cat.subtitle}</p>
                  ) : null}
                </div>
                {canToggle ? (
                  <button
                    type="button"
                    onClick={() =>
                      setOpen((prev) => ({ ...prev, [cat.title]: !isOpen }))
                    }
                    className="shrink-0 rounded-full border bg-surface px-3 py-1.5 text-xs font-medium text-foreground/90 hover:bg-background"
                  >
                    {isOpen ? "Show less" : "Show all"}
                  </button>
                ) : null}
              </header>

              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {shown.map((it) => (
                  <li
                    key={it}
                    className="rounded-2xl border bg-surface/70 px-3 py-2 text-sm text-foreground/90"
                  >
                    {it}
                  </li>
                ))}
              </ul>

              {cat.items.length === 0 ? (
                <p className="mt-4 text-sm text-muted">No matches.</p>
              ) : null}

              {canToggle && !isOpen ? (
                <p className="mt-3 text-xs text-muted">
                  Showing 6 of {cat.items.length}
                </p>
              ) : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}

