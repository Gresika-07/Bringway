"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Shield, Download, Upload } from "lucide-react"

export function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: "connection",
      message: "Connected to DESKTOP-ABC123",
      time: "2 minutes ago",
      icon: User,
      status: "success",
    },
    {
      id: 2,
      type: "security",
      message: "Security scan completed",
      time: "5 minutes ago",
      icon: Shield,
      status: "info",
    },
    {
      id: 3,
      type: "download",
      message: "File download completed (2.3 MB)",
      time: "8 minutes ago",
      icon: Download,
      status: "success",
    },
    {
      id: 4,
      type: "upload",
      message: "File upload started",
      time: "12 minutes ago",
      icon: Upload,
      status: "warning",
    },
    {
      id: 5,
      type: "connection",
      message: "Disconnected from LAPTOP-XYZ789",
      time: "15 minutes ago",
      icon: User,
      status: "error",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800"
      case "warning":
        return "bg-yellow-100 text-yellow-800"
      case "error":
        return "bg-red-100 text-red-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="h-5 w-5 mr-2 text-yellow-400" />
          Activity Feed
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64">
          <div className="space-y-3">
            {activities.map((activity) => {
              const IconComponent = activity.icon
              return (
                <div key={activity.id} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50">
                  <div className="flex-shrink-0">
                    <IconComponent className="h-4 w-4 text-gray-500 mt-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <Badge className={`text-xs ${getStatusColor(activity.status)}`}>{activity.status}</Badge>
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
