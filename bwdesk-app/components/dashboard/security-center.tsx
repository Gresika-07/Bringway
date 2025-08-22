"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, AlertTriangle, CheckCircle, Lock, Eye, Wifi } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SecurityCenter() {
  const { toast } = useToast()
  const [securityScore] = useState(85)

  const securityChecks = [
    { name: "Two-Factor Authentication", status: "enabled", icon: Lock },
    { name: "End-to-End Encryption", status: "enabled", icon: Shield },
    { name: "Session Recording", status: "disabled", icon: Eye },
    { name: "IP Whitelist", status: "warning", icon: Wifi },
  ]

  const handleSecurityAction = (action: string) => {
    toast({
      title: "Security Action",
      description: `${action} has been initiated`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="w-5 h-5 mr-2 text-[#FFC700]" />
          Security Center
        </CardTitle>
        <CardDescription>Monitor and manage your security settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Security Score</span>
            <Badge variant={securityScore >= 80 ? "default" : "destructive"}>{securityScore}%</Badge>
          </div>
          <Progress value={securityScore} className="h-2" />
        </div>

        <div className="space-y-3">
          {securityChecks.map((check, index) => {
            const IconComponent = check.icon
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <IconComponent className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{check.name}</span>
                </div>
                {check.status === "enabled" && <CheckCircle className="w-4 h-4 text-green-500" />}
                {check.status === "disabled" && <AlertTriangle className="w-4 h-4 text-red-500" />}
                {check.status === "warning" && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
              </div>
            )
          })}
        </div>

        <div className="space-y-2 pt-2 border-t">
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-transparent"
            onClick={() => handleSecurityAction("Security scan")}
          >
            Run Security Scan
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-transparent"
            onClick={() => handleSecurityAction("Security report")}
          >
            Generate Report
          </Button>
        </div>

        <div className="bg-muted/50 p-3 rounded-lg">
          <p className="text-xs text-muted-foreground">Last security check: 2 hours ago</p>
        </div>
      </CardContent>
    </Card>
  )
}
