import type { ReactNode } from 'react';
import { isPlaceholder } from '../../legal/config';

/** A numbered policy section with an anchor for the table of contents. */
export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 space-y-3">
      <h2 className="text-xl md:text-2xl font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-base font-semibold text-foreground pt-2">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-base leading-relaxed text-muted-foreground">{children}</p>;
}

export function Ul({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 space-y-1.5 text-base leading-relaxed text-muted-foreground">{children}</ul>;
}

export function Ol({ children }: { children: ReactNode }) {
  return <ol className="list-decimal pl-6 space-y-1.5 text-base leading-relaxed text-muted-foreground">{children}</ol>;
}

export function Li({ children }: { children: ReactNode }) {
  return <li>{children}</li>;
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className="text-primary underline underline-offset-2 hover:opacity-80"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

/** Highlighted callout for the key facts of a section. */
export function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 space-y-2">
      {title && <div className="font-semibold text-foreground">{title}</div>}
      <div className="text-base leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

/** Simple two-plus column table used for data categories and processors. */
export function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm text-left">
        <thead className="bg-muted/60 text-foreground">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="px-4 py-3 font-semibold align-top">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-border align-top">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 leading-relaxed">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Renders a value from `legal/config.ts`. Placeholders ("[LIKE THIS]") are highlighted in
 * development builds so they cannot be overlooked; production renders them as plain text.
 */
export function Var({ value }: { value: string }) {
  if (import.meta.env.DEV && isPlaceholder(value)) {
    return (
      <mark className="rounded bg-yellow-200 px-1 text-foreground" title="Placeholder – fill in src/legal/config.ts">
        {value}
      </mark>
    );
  }

  return <>{value}</>;
}

/** Email rendered as a mailto link once a real address is configured. */
export function Email({ value }: { value: string }) {
  if (isPlaceholder(value)) {
    return <Var value={value} />;
  }

  return <A href={`mailto:${value}`}>{value}</A>;
}
