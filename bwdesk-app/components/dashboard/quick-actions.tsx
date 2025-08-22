"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, FileText, Settings, Shield, Download, Upload, Monitor, Smartphone } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Start Recording",
      description: "Record your session",
      icon: Video,
      color: "bg-red-500 hover:bg-red-600",
      action: () => console.log("Start recording"),
    },
    {
      title: "File Manager",
      description: "Browse files",
      icon: FileText,
      color: "bg-blue-500 hover:bg-blue-600",
      action: () => console.log("Open file manager"),
    },
    {
      title: "Settings",
      description: "Configure BWDesk",
      icon: Settings,
      color: "bg-gray-500 hover:bg-gray-600",
      action: () => console.log("Open settings"),
    },
    {
      title: "Security",
      description: "Security settings",
      icon: Shield,
      color: "bg-green-500 hover:bg-green-600",
      action: () => console.log("Open security"),
    },
    {
      title: "Download Files",
      description: "Download from remote",
      icon: Download,
      color: "bg-purple-500 hover:bg-purple-600",
      action: () => console.log("Download files"),
    },
    {
      title: "Upload Files",
      description: "Upload to remote",
      icon: Upload,
      color: "bg-orange-500 hover:bg-orange-600",
      action: () => console.log("Upload files"),
    },
    {
      title: "Screen Share",
      description: "Share your screen",
      icon: Monitor,
      color: "bg-indigo-500 hover:bg-indigo-600",
      action: () => console.log("Screen share"),
    },
    {
      title: "Mobile Connect",
      description: "Connect mobile device",
      icon: Smartphone,
      color: "bg-pink-500 hover:bg-pink-600",
      action: () => console.log("Mobile connect"),
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 hover:shadow-md transition-shadow bg-transparent"
              onClick={action.action}
            >
              <action.icon className="h-6 w-6 text-gray-600" />
              <div className="text-center">
                <div className="text-sm font-medium">{action.title}</div>
                <div className="text-xs text-gray-500">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
