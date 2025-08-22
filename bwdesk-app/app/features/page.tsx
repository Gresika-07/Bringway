import { Shield, Zap, Globe, Users, Video, FileIcon as FileTransfer, Lock, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "End-to-end encryption with AES-256 bit security protocols",
      details: "Your connections are protected with military-grade encryption",
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Sub-second response times with optimized data compression",
      details: "Experience real-time remote control with minimal latency",
    },
    {
      icon: Globe,
      title: "Cross-Platform Support",
      description: "Works seamlessly across Windows, Mac, Linux, iOS, and Android",
      details: "Connect from any device to any device, anywhere in the world",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multiple users can connect simultaneously for team projects",
      details: "Built-in chat, screen sharing, and collaborative tools",
    },
    {
      icon: Video,
      title: "Session Recording",
      description: "Record your remote sessions for training and compliance",
      details: "High-quality video recording with playback controls",
    },
    {
      icon: FileTransfer,
      title: "Secure File Transfer",
      description: "Transfer files of any size with resume capability",
      details: "Drag and drop files between local and remote computers",
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Granular permissions and access management",
      details: "Control who can access what with role-based permissions",
    },
    {
      icon: Monitor,
      title: "Multi-Monitor Support",
      description: "Full support for multiple monitors and displays",
      details: "Switch between monitors seamlessly during remote sessions",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-yellow-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="block text-yellow-400">Remote Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BWDesk combines cutting-edge technology with user-friendly design to deliver the ultimate remote desktop
              experience
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors">
                  <feature.icon className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">{feature.description}</CardDescription>
                <p className="text-sm text-gray-500">{feature.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Experience BWDesk?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who trust BWDesk for their remote work needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-4">
                Try Dashboard
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-10 py-4 bg-transparent"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
