import { Building2, Users, Shield, Zap, Globe, HeadphonesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise Solutions",
      description: "Scalable remote access for large organizations",
      features: ["Centralized management", "SSO integration", "Advanced analytics", "24/7 support"],
      price: "Custom pricing",
    },
    {
      icon: Users,
      title: "Small Business",
      description: "Perfect for growing teams and small companies",
      features: ["Up to 50 users", "Basic analytics", "Email support", "File transfer"],
      price: "$29/month",
    },
    {
      icon: Shield,
      title: "Government & Healthcare",
      description: "Compliance-ready solutions for regulated industries",
      features: ["HIPAA compliant", "SOC 2 certified", "Audit logs", "Dedicated support"],
      price: "Contact us",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-yellow-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Solutions for Every
              <span className="block text-yellow-400">Business Need</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprise, BWDesk scales with your business requirements
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors">
                  <solution.icon className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{solution.title}</CardTitle>
                <CardDescription className="text-gray-600">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-4">{solution.price}</p>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose BWDesk */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Why Choose BWDesk?</h2>
            <p className="text-xl text-gray-300">The advantages that set us apart</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-300">Sub-second response times</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Ultra Secure</h3>
              <p className="text-gray-300">Bank-level encryption</p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-gray-300">Worldwide server network</p>
            </div>
            <div className="text-center">
              <HeadphonesIcon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-300">Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
