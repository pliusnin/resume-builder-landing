import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, Star, ArrowRight, Gift, TrendingUp, Calendar } from "lucide-react";

export function OfferSection() {
  const allFeatures = [
    "Unlimited resume downloads",
    "10+ ATS-optimized templates",
    "Real-time ATS score checker",
    "Content suggestions",
    "Keyword optimization",
    "PDF format export",
    "24/7 customer support",
    "Mobile-friendly editor",
    "Interview preparation tips",
  ];

  const pricingPlans = [
    {
      name: "Monthly",
      description: "Perfect for quick job searches",
      price: "$2.49",
      period: "first 7 days",
      afterDiscount: "then $24.49/month",
      totalMonthly: "$24.49",
      savings: "Save 90% first week",
      popular: false,
      icon: Calendar,
      highlight: "90% OFF",
      buttonText: "Start with Discount"
    },
    {
      name: "Quarterly",
      description: "Great for active job seekers",
      price: "$49.49",
      period: "per quarter",
      afterDiscount: null,
      totalMonthly: "$16.50",
      savings: "Save 33%",
      popular: true,
      icon: TrendingUp,
      highlight: "Most Popular",
      buttonText: "Get Quarterly Plan"
    },
    {
      name: "Annual",
      description: "Best value for career growth",
      price: "$99.49",
      period: "per year",
      afterDiscount: null,
      totalMonthly: "$8.29",
      savings: "Save 66%",
      popular: false,
      icon: Star,
      highlight: "Best Value",
      buttonText: "Get Annual Plan"
    }
  ];

  return (
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Offer */}
          <div className="text-center space-y-8 mb-16">
            <Badge variant="destructive" className="px-4 py-2 text-sm">
              <Gift className="w-4 h-4 mr-2" />
              Special Launch Pricing
            </Badge>

            <h2 className="text-3xl md:text-5xl">
              Choose Your <span className="text-primary">Success</span> Plan
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start creating winning resumes today. All plans include the same comprehensive features.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {pricingPlans.map((plan, index) => (
                <Card
                    key={index}
                    className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                        plan.popular
                            ? 'border-2 border-primary shadow-2xl scale-105'
                            : 'border hover:border-primary/50'
                    }`}
                >
                  {(plan.popular || plan.highlight) && (
                      <div className={`absolute top-0 left-0 right-0 text-center py-2 ${
                          plan.popular
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-destructive text-destructive-foreground'
                      }`}>
                        <div className="flex items-center justify-center space-x-2">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm">{plan.popular ? 'Most Popular' : plan.highlight}</span>
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                  )}

                  <CardHeader className={`text-center ${plan.popular || plan.highlight ? 'pt-16' : 'pt-8'} pb-8`}>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-primary" />
                    </div>

                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>

                    <div className="py-6">
                      <div className="flex items-baseline justify-center space-x-1">
                        <span className="text-4xl md:text-5xl">{plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period.split(' ')[1] || plan.period.split(' ')[2]}</span>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{plan.period}</div>

                      {plan.afterDiscount && (
                          <div className="mt-2 text-sm text-muted-foreground">
                            {plan.afterDiscount}
                          </div>
                      )}

                      <div className="mt-4 space-y-2">
                        <div className="text-lg">
                          <span className="text-primary">{plan.totalMonthly}</span>
                          <span className="text-muted-foreground text-sm">/month effective</span>
                        </div>

                        {plan.savings && (
                            <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                              {plan.savings}
                            </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pb-8">
                    <Button
                        size="lg"
                        className={`w-full text-base py-6 ${
                            plan.popular
                                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                : ''
                        }`}
                        variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
            ))}
          </div>

          {/* What's Included Section */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl mb-4">
                What's Included in <span className="text-primary">Every</span> Plan
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All plans include the complete Resumint feature set. Choose based on your timeline and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl">⚡</div>
              <div className="font-semibold">Instant Access</div>
              <div className="text-sm text-muted-foreground">
                Start creating resumes immediately after signup
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🔒</div>
              <div className="font-semibold">Secure Payment</div>
              <div className="text-sm text-muted-foreground">
                Protected with enterprise-grade encryption
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">💯</div>
              <div className="font-semibold">Satisfaction Guaranteed</div>
              <div className="text-sm text-muted-foreground">
                30-day money-back guarantee, no questions asked
              </div>
            </div>
          </div>

          {/* Comparison Benefits */}
          <div className="mt-20 bg-white p-8 rounded-3xl shadow-lg border">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl mb-4">
                Why Choose a Longer Plan?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Job searching takes time. Longer plans give you the flexibility to perfect your resume
                and apply to multiple positions without worrying about renewal.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg">Monthly Plan:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>90% discount for first week</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Perfect for quick job searches</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>No long-term commitment</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg">Quarterly Plan:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Perfect for focused job search campaigns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Save 33% compared to monthly billing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Time to tailor resumes for different roles</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg">Annual Plan:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Maximum savings - only $8.29/month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Ideal for career transitions and growth</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>No renewal stress during job search</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-12 rounded-3xl text-center">
            <h3 className="text-2xl md:text-3xl mb-4">
              Ready to Transform Your Job Search?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join 50,000+ professionals who've landed their dream jobs with Resumint.
              Start with 90% off your first week.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-12 py-6">
              Get Started for $2.49
            </Button>
            <div className="mt-4 text-sm opacity-80">
              Cancel anytime • All features included
            </div>
          </div>
        </div>
      </section>
  );
}
