import { Header } from "./components/Header";
import { PainPoints } from "./components/PainPoints";
import { BenefitsAndFeatures } from "./components/BenefitsAndFeatures";
import { OfferSection } from "./components/OfferSection";
import { Footer } from "./components/Footer";

export default function App() {
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
    </div>
  );
}