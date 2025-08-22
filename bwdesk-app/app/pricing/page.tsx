import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Star, Shield, Zap, Users } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Personal",
      price: "Free",
      description: "Perfect for individual use",
      features: ["Up to 3 devices", "Basic remote access", "File transfer", "Community support", "Standard security"],
      popular: false,
      icon: Users,
    },
    {
      name: "Professional",
      price: "$9.99",
      period: "/month",
      description: "Ideal for professionals and small teams",
      features: [
        "Unlimited devices",
        "Advanced remote access",
        "File transfer & sync",
        "Priority support",
        "Enhanced security",
        "Session recording",
        "Mobile apps",
      ],
      popular: true,
      icon: Zap,
    },
    {
      name: "Enterprise",
      price: "$29.99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Advanced admin controls",
        "SSO integration",
        "24/7 phone support",
        "Custom branding",
        "API access",
        "Compliance reports",
      ],
      popular: false,
      icon: Shield,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Simple <span className="text-[#FFC700]">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your remote access needs. All plans include our core features with no hidden
              fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <div
                  key={index}
                  className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "bg-[#FFC700] text-black shadow-2xl scale-105"
                      : "bg-card border-2 border-border shadow-lg hover:shadow-xl"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-black text-[#FFC700] px-4 py-2 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="mb-4">
                      <IconComponent
                        className={`w-12 h-12 mx-auto ${plan.popular ? "text-black" : "text-[#FFC700]"}`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-lg">{plan.period}</span>}
                    </div>
                    <p className={plan.popular ? "text-black" : "text-muted-foreground"}>{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className={`w-5 h-5 mr-3 ${plan.popular ? "text-black" : "text-[#FFC700]"}`} />
                        <span className={plan.popular ? "text-black" : "text-foreground"}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-3 font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-black text-[#FFC700] hover:bg-gray-800"
                        : "bg-[#FFC700] text-black hover:bg-[#FFD700]"
                    }`}
                  >
                    {plan.price === "Free" ? "Get Started" : "Start Free Trial"}
                  </Button>
                </div>
              )
            })}
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                  <p className="text-muted-foreground">
                    All paid plans come with a 30-day free trial. No credit card required.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">
                    We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do you offer discounts for annual billing?</h3>
                  <p className="text-muted-foreground">
                    Yes, save 20% when you pay annually. Contact us for volume discounts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">All plans include a 30-day money-back guarantee</p>
            <p className="text-muted-foreground">
              Need a custom solution?{" "}
              <a href="/contact" className="text-[#FFC700] hover:text-[#FFD700] font-semibold">
                Contact our sales team
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
