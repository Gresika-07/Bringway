import { Card, CardContent } from "@/components/ui/card"
import {
  Monitor,
  FileIcon as FileTransfer,
  Video,
  MessageSquare,
  Settings,
  Smartphone,
  Lock,
  Zap,
  Globe,
} from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Monitor,
      title: "Remote Desktop",
      description: "Full desktop access with HD quality and low latency streaming",
    },
    {
      icon: FileTransfer,
      title: "File Transfer",
      description: "Drag & drop files securely between local and remote computers",
    },
    {
      icon: Video,
      title: "Session Recording",
      description: "Record remote sessions for training, compliance, and review",
    },
    {
      icon: MessageSquare,
      title: "Built-in Chat",
      description: "Communicate with remote users through integrated messaging",
    },
    {
      icon: Settings,
      title: "Advanced Controls",
      description: "Granular permissions and session management tools",
    },
    {
      icon: Smartphone,
      title: "Mobile Support",
      description: "Access your computers from iOS and Android devices",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Two-factor authentication and end-to-end encryption",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed with adaptive quality streaming",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Worldwide relay servers for optimal connection quality",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="text-yellow-400"> Remote Access</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            BWDesk combines powerful features with intuitive design to deliver the ultimate remote desktop experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                  <feature.icon className="h-8 w-8 text-yellow-600 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
