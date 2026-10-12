import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { links } from '../lib/links';
import {
  initAnalytics,
  onConsentSettingsRequested,
  saveConsent,
  type ConsentState,
} from '../lib/analytics';

/**
 * Cookie consent banner. Mounted on every page; shows itself when no valid decision is stored,
 * and again whenever `openConsentSettings()` is called (footer "Cookie settings" link).
 */
export function ConsentBanner() {
  const [decision, setDecision] = useState<ConsentState | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const state = initAnalytics();
    setDecision(state);
    setOpen(state === null);

    return onConsentSettingsRequested(() => setOpen(true));
  }, []);

  if (!open) {
    return null;
  }

  const choose = (analytics: boolean) => {
    setDecision(saveConsent(analytics));
    setOpen(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6 pointer-events-none">
      <div
        role="dialog"
        aria-modal="false"
        aria-labelledby="consent-title"
        aria-describedby="consent-description"
        className="pointer-events-auto max-w-4xl mx-auto bg-white border border-border rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4"
      >
        <div className="flex-1 space-y-1">
          <p id="consent-title" className="font-semibold">Cookies and analytics</p>
          <p id="consent-description" className="text-sm text-muted-foreground">
            We use Google Analytics to understand how visitors use this website. Its cookies are set only if you accept.
            You can change your choice at any time via “Cookie settings” in the footer.{' '}
            <a href={`${links.privacy}#cookies`} className="underline underline-offset-2 hover:text-foreground">
              Learn more
            </a>
          </p>
          {decision && (
            <p className="text-xs text-muted-foreground">
              Current choice: analytics {decision.analytics ? 'enabled' : 'disabled'}.
            </p>
          )}
        </div>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" onClick={() => choose(false)}>Decline</Button>
          <Button onClick={() => choose(true)}>Accept analytics</Button>
        </div>
      </div>
    </div>
  );
}
