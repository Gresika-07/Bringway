"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Cpu, HardDrive, Wifi, Activity, Settings, Trash2, MoreVertical, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SystemStatus() {
  const { toast } = useToast()
  const [systemStats, setSystemStats] = useState({
    cpu: 45,
    memory: 68,
    disk: 32,
    network: 85,
  })
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refreshStats = async () => {
    setIsRefreshing(true)
    // Simulate API call
    setTimeout(() => {
      setSystemStats({
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        disk: Math.floor(Math.random() * 100),
        network: Math.floor(Math.random() * 100),
      })
      setIsRefreshing(false)
      toast({
        title: "System Status Updated",
        description: "Latest system metrics have been refreshed",
      })
    }, 1500)
  }

  const handleDelete = () => {
    toast({
      title: "System Monitor Cleared",
      description: "System monitoring data has been cleared",
      variant: "destructive",
    })
  }

  const handleSettings = () => {
    toast({
      title: "System Settings",
      description: "Opening system monitoring preferences",
    })
  }

  const getStatusColor = (value: number) => {
    if (value < 30) return "text-green-600"
    if (value < 70) return "text-yellow-600"
    return "text-red-600"
  }

  const getProgressColor = (value: number) => {
    if (value < 30) return "bg-green-500"
    if (value < 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFC700]/5 to-transparent" />

      <CardHeader className="relative">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-[#FFC700]" />
            System Status
          </div>
          <div className="flex items-center space-x-2">
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Online</Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={refreshStats} disabled={isRefreshing}>
                  <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                  Refresh Stats
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSettings}>
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete} className="text-red-600">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Data
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-6">
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Cpu className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium">CPU Usage</span>
              </div>
              <span className={`text-sm font-semibold ${getStatusColor(systemStats.cpu)}`}>{systemStats.cpu}%</span>
            </div>
            <div className="relative">
              <Progress value={systemStats.cpu} className="h-3" />
              <div
                className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-500 ${getProgressColor(systemStats.cpu)}`}
                style={{ width: `${systemStats.cpu}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 rounded-full bg-green-100 dark:bg-green-900">
                  <Activity className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm font-medium">Memory</span>
              </div>
              <span className={`text-sm font-semibold ${getStatusColor(systemStats.memory)}`}>
                {systemStats.memory}%
              </span>
            </div>
            <div className="relative">
              <Progress value={systemStats.memory} className="h-3" />
              <div
                className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-500 ${getProgressColor(systemStats.memory)}`}
                style={{ width: `${systemStats.memory}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 rounded-full bg-purple-100 dark:bg-purple-900">
                  <HardDrive className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-medium">Disk Usage</span>
              </div>
              <span className={`text-sm font-semibold ${getStatusColor(systemStats.disk)}`}>{systemStats.disk}%</span>
            </div>
            <div className="relative">
              <Progress value={systemStats.disk} className="h-3" />
              <div
                className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-500 ${getProgressColor(systemStats.disk)}`}
                style={{ width: `${systemStats.disk}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 rounded-full bg-orange-100 dark:bg-orange-900">
                  <Wifi className="h-3 w-3 text-orange-600 dark:text-orange-400" />
                </div>
                <span className="text-sm font-medium">Network</span>
              </div>
              <span className="text-sm font-semibold text-orange-600">{systemStats.network} Mbps</span>
            </div>
            <div className="relative">
              <Progress value={systemStats.network} className="h-3" />
              <div
                className="absolute top-0 left-0 h-3 rounded-full bg-orange-500 transition-all duration-500"
                style={{ width: `${systemStats.network}%` }}
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-3 rounded-lg bg-green-50 dark:bg-green-950/20">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">99.9%</div>
              <div className="text-xs text-muted-foreground font-medium">System Uptime</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24ms</div>
              <div className="text-xs text-muted-foreground font-medium">Network Latency</div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={refreshStats}
            disabled={isRefreshing}
            className="flex-1 bg-transparent"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
            {isRefreshing ? "Refreshing..." : "Refresh"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
