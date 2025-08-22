"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Monitor, Clock, MapPin, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"

export function RecentSessions() {
  const { toast } = useToast()
  const [sessions, setSessions] = useState([
    {
      id: "987 654 321",
      name: "Office Desktop",
      location: "New York, US",
      duration: "2h 15m",
      status: "completed",
      timestamp: "2 hours ago",
      type: "outgoing",
    },
    {
      id: "456 789 123",
      name: "Home Laptop",
      location: "California, US",
      duration: "45m",
      status: "completed",
      timestamp: "5 hours ago",
      type: "incoming",
    },
    {
      id: "789 123 456",
      name: "Server Room PC",
      location: "Texas, US",
      duration: "1h 30m",
      status: "completed",
      timestamp: "1 day ago",
      type: "outgoing",
    },
    {
      id: "321 654 987",
      name: "Mobile Device",
      location: "Florida, US",
      duration: "20m",
      status: "failed",
      timestamp: "2 days ago",
      type: "incoming",
    },
  ])

  const handleDeleteSession = (sessionId: string) => {
    setSessions((prev) => prev.filter((session) => session.id !== sessionId))
    toast({
      title: "Session Deleted",
      description: "Session has been temporarily removed from history",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "failed":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
      case "active":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <Card className="dark:bg-gray-900/50 dark:border-gray-800">
      <CardHeader>
        <CardTitle className="dark:text-white">Recent Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800/50"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                  <Monitor className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <div className="font-medium dark:text-white">{session.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-4">
                    <span className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {session.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {session.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Badge className={getStatusColor(session.status)}>{session.status}</Badge>
                <Badge
                  variant="outline"
                  className={
                    session.type === "incoming"
                      ? "border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-400"
                      : "border-green-200 text-green-700 dark:border-green-800 dark:text-green-400"
                  }
                >
                  {session.type}
                </Badge>
                <span className="text-sm text-gray-500 dark:text-gray-400">{session.timestamp}</span>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="dark:hover:bg-gray-800">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="dark:bg-gray-900 dark:border-gray-700">
                    <DropdownMenuItem className="dark:hover:bg-gray-800">Reconnect</DropdownMenuItem>
                    <DropdownMenuItem className="dark:hover:bg-gray-800">View Details</DropdownMenuItem>
                    <DropdownMenuItem className="dark:hover:bg-gray-800">Add to Favorites</DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-600 dark:text-red-400 dark:hover:bg-gray-800"
                      onClick={() => handleDeleteSession(session.id)}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
