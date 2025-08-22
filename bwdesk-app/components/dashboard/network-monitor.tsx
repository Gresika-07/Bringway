"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wifi, TrendingUp, TrendingDown } from "lucide-react"

export function NetworkMonitor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Wifi className="h-5 w-5 mr-2 text-yellow-400" />
          Network Monitor
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Bandwidth Usage</span>
            <span className="text-sm text-gray-500">75%</span>
          </div>
          <Progress value={75} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <TrendingUp className="h-5 w-5 text-green-600 mx-auto mb-1" />
            <div className="text-sm font-semibold text-green-800">Upload</div>
            <div className="text-xs text-green-600">2.3 MB/s</div>
          </div>

          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <TrendingDown className="h-5 w-5 text-blue-600 mx-auto mb-1" />
            <div className="text-sm font-semibold text-blue-800">Download</div>
            <div className="text-xs text-blue-600">5.7 MB/s</div>
          </div>
        </div>

        <div className="text-xs text-gray-500 text-center">Latency: 12ms | Packet Loss: 0%</div>
      </CardContent>
    </Card>
  )
}
