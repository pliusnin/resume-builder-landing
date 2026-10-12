import { useEffect, type ReactNode } from 'react';
import { Footer } from '../Footer';
import { ConsentBanner } from '../ConsentBanner';
import { links } from '../../lib/links';
import { legal } from '../../legal/config';
import { applyNonProductionNoindex } from '../../lib/site';

export interface TocEntry {
  id: string;
  title: string;
}

interface LegalLayoutProps {
  title: string;
  description: string;
  toc: TocEntry[];
  children: ReactNode;
}

const legalNav = [
  { href: links.privacy, label: 'Privacy Policy' },
  { href: links.terms, label: 'Terms of Service' },
  { href: links.refund, label: 'Refund Policy' },
];

export function LegalLayout({ title, description, toc, children }: LegalLayoutProps) {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  // The page is client-rendered, so the browser's own fragment scroll can run before the target
  // section exists (e.g. when arriving from the footer's "Contact Us" link). Scroll once mounted.
  useEffect(() => {
    applyNonProductionNoindex();

    const id = window.location.hash.slice(1);
    if (!id) {
      return;
    }
    document.getElementById(decodeURIComponent(id))?.scrollIntoView();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border">
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <a href={links.home} className="flex items-center space-x-2" aria-label="Resumint home">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">R</span>
            </div>
            <span className="text-xl font-bold text-primary">{legal.productName}</span>
          </a>

          <div className="hidden md:flex items-center space-x-6 text-sm">
            {legalNav.map((item) => {
              const active = currentPath.replace(/\/+$/, '') === item.href.replace(/\/+$/, '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={active ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground transition-colors'}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a href={links.home} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to {legal.productName}
          </a>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="space-y-4 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
          <p className="text-sm text-muted-foreground">
            Effective date: <span className="text-foreground">{legal.effectiveDate}</span>
          </p>
        </div>

        <nav aria-label="Table of contents" className="rounded-xl border border-border bg-white p-5 mb-12">
          <div className="font-semibold text-foreground mb-3">Contents</div>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            {toc.map((entry) => (
              <li key={entry.id}>
                <a href={`#${entry.id}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {entry.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-12">{children}</div>

        <div className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground space-y-1">
          <p>Related: {legalNav.map((item, index) => (
            <span key={item.href}>
              {index > 0 && ' · '}
              <a href={item.href} className="hover:text-foreground transition-colors underline underline-offset-2">{item.label}</a>
            </span>
          ))}</p>
        </div>
      </main>

      <Footer />
      <ConsentBanner />
    </div>
  );
}
