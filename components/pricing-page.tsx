"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"

export function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with newsletter partnerships",
      icon: Star,
      features: [
        "5 matches per month",
        "Basic message templates",
        "Email support",
        "Partnership tracking",
        "Basic analytics",
      ],
      limitations: ["Limited AI message generation", "No priority support", "Basic match scoring"],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Advanced features for serious newsletter creators",
      icon: Zap,
      features: [
        "Unlimited matches",
        "AI-powered message generation",
        "Advanced match scoring",
        "Priority support",
        "Detailed analytics",
        "Custom templates",
        "Partnership CRM",
        "Success tracking",
      ],
      limitations: [],
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For agencies and large newsletter operations",
      icon: Crown,
      features: [
        "Everything in Pro",
        "Team collaboration",
        "White-label options",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced reporting",
        "Custom match algorithms",
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ]

  return (
    <div className="p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Scale your newsletter partnerships with the right plan for your needs
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-indigo-500 scale-105" : ""}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-indigo-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
            )}

            <CardHeader className="text-center pb-8">
              <div
                className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 ${
                  plan.popular ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600"
                }`}
              >
                <plan.icon className="w-6 h-6" />
              </div>

              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-2">/{plan.period}</span>
              </div>
              <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <Button
                className={`w-full ${
                  plan.buttonVariant === "default"
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                }`}
                variant={plan.buttonVariant}
              >
                {plan.buttonText}
              </Button>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">What's included:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-center text-gray-500">
                          <span className="w-4 h-4 mr-3 flex-shrink-0">•</span>
                          <span className="text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
                cycle.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial for Pro?</h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial for the Pro plan. No credit card required to start.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
