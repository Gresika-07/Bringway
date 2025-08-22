"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, Copy, Eye, EyeOff, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SessionManager() {
  const [sessionId, setSessionId] = useState("123 456 789")
  const [password, setPassword] = useState("bwdesk2025")
  const [showPassword, setShowPassword] = useState(false)
  const [remoteId, setRemoteId] = useState("")
  const [isConnecting, setIsConnecting] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const { toast } = useToast()

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
      })
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
      })
    }
  }

  const generateNewSession = () => {
    setIsRefreshing(true)
    // Simulate generating new session
    setTimeout(() => {
      const newId = Math.floor(Math.random() * 900000000 + 100000000)
        .toString()
        .replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")
      const newPassword = "bwdesk" + Math.floor(Math.random() * 9000 + 1000)

      setSessionId(newId)
      setPassword(newPassword)
      setIsRefreshing(false)

      toast({
        title: "New Session Generated",
        description: "Your session ID and password have been updated",
      })
    }, 1000)
  }

  const connectToRemote = () => {
    if (!remoteId) return
    setIsConnecting(true)
    // Simulate connection
    setTimeout(() => {
      setIsConnecting(false)
      toast({
        title: "Connection Established",
        description: `Successfully connected to ${remoteId}`,
      })
    }, 2000)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* This Computer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Monitor className="h-5 w-5 text-yellow-400" />
            <span>This Computer</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Online
            </Badge>
          </CardTitle>
          <CardDescription>Allow others to connect to this computer</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Your BWDesk ID</label>
            <div className="flex items-center space-x-2 mt-1">
              <Input value={sessionId} readOnly className="font-mono" />
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(sessionId, "Session ID")}
                className="hover:bg-yellow-50"
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={generateNewSession}
                disabled={isRefreshing}
                className="hover:bg-yellow-50 bg-transparent"
              >
                <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
              </Button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center space-x-2 mt-1">
              <Input type={showPassword ? "text" : "password"} value={password} readOnly className="font-mono" />
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
                className="hover:bg-yellow-50"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(password, "Password")}
                className="hover:bg-yellow-50"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-sm text-gray-600">
              Share your ID and password with someone you trust to allow them to connect to this computer.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Remote Computer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Smartphone className="h-5 w-5 text-blue-500" />
            <span>Remote Computer</span>
          </CardTitle>
          <CardDescription>Connect to another computer</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Remote BWDesk ID</label>
            <Input
              placeholder="Enter BWDesk ID (e.g., 123 456 789)"
              value={remoteId}
              onChange={(e) => setRemoteId(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={connectToRemote}
              disabled={!remoteId || isConnecting}
              className="bg-yellow-400 hover:bg-yellow-500 text-black"
            >
              {isConnecting ? "Connecting..." : "Connect"}
            </Button>
            <Button variant="outline" disabled={!remoteId}>
              File Transfer
            </Button>
          </div>

          <div className="pt-2">
            <p className="text-sm text-gray-600">Enter the BWDesk ID of the computer you want to connect to.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
