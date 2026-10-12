import { useEffect } from 'react';
import { Header } from './components/Header';
import { PainPoints } from './components/PainPoints';
import { BenefitsAndFeatures } from './components/BenefitsAndFeatures';
import { OfferSection } from './components/OfferSection';
import { Footer } from './components/Footer';
import { ConsentBanner } from './components/ConsentBanner';
import { StructuredData } from './components/StructuredData';
import { applyNonProductionNoindex } from './lib/site';

export default function App() {
  useEffect(() => {
    applyNonProductionNoindex();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with solution description */}
      <Header />

      {/* User's pains section (~15% of content) */}
      <PainPoints />

      {/* Benefits and product features (~60% of content) */}
      <BenefitsAndFeatures />

      {/* Offer for the user */}
      <OfferSection />

      {/* Footer */}
      <Footer />

      {/* Search engine structured data (JSON-LD) */}
      <StructuredData />

      {/* Cookie consent; Google Analytics loads only after acceptance */}
      <ConsentBanner />
    </div>
  );
}
