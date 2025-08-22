"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Video,
  Square,
  Pause,
  Play,
  Settings,
  Download,
  Trash2,
  Clock,
  HardDrive,
  ChevronDown,
  Mic,
  MicOff,
  Monitor,
  MousePointer,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Recording {
  id: string
  name: string
  duration: string
  size: string
  date: string
  status: "completed" | "processing" | "failed"
}

export function RecordingControls() {
  const [isRecording, setIsRecording] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [cursorTracking, setCursorTracking] = useState(true)
  const [quality, setQuality] = useState("HD")
  const [storageUsed, setStorageUsed] = useState(45)
  const { toast } = useToast()

  const [recordings] = useState<Recording[]>([
    {
      id: "1",
      name: "Remote Session - Office Desktop",
      duration: "15:32",
      size: "245 MB",
      date: "2 hours ago",
      status: "completed",
    },
    {
      id: "2",
      name: "File Transfer Demo",
      duration: "08:15",
      size: "128 MB",
      date: "1 day ago",
      status: "completed",
    },
    {
      id: "3",
      name: "Team Meeting Recording",
      duration: "45:20",
      size: "892 MB",
      date: "3 days ago",
      status: "processing",
    },
  ])

  // Timer effect for recording
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRecording, isPaused])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const startRecording = () => {
    setIsRecording(true)
    setIsPaused(false)
    setRecordingTime(0)
    toast({
      title: "Recording Started",
      description: "Your session is now being recorded",
    })
  }

  const pauseRecording = () => {
    setIsPaused(true)
    toast({
      title: "Recording Paused",
      description: "Recording has been paused",
    })
  }

  const resumeRecording = () => {
    setIsPaused(false)
    toast({
      title: "Recording Resumed",
      description: "Recording has been resumed",
    })
  }

  const stopRecording = () => {
    setIsRecording(false)
    setIsPaused(false)
    toast({
      title: "Recording Stopped",
      description: `Recording saved (${formatTime(recordingTime)})`,
    })
  }

  const downloadRecording = (recording: Recording) => {
    toast({
      title: "Download Started",
      description: `Downloading ${recording.name}`,
    })
  }

  const deleteRecording = (recording: Recording) => {
    toast({
      title: "Recording Deleted",
      description: `${recording.name} has been deleted`,
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Recording Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Video className="h-5 w-5 text-red-500" />
              <span>Session Recording</span>
              {isRecording && (
                <Badge className="bg-red-100 text-red-800 animate-pulse">{isPaused ? "PAUSED" : "RECORDING"}</Badge>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <HardDrive className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">{storageUsed}% used</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Recording Timer */}
          {isRecording && (
            <div className="text-center">
              <div className="text-3xl font-mono font-bold text-red-600 mb-2">{formatTime(recordingTime)}</div>
              <Progress value={(recordingTime / 3600) * 100} className="h-2" />
            </div>
          )}

          {/* Recording Settings */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-2">
                {audioEnabled ? (
                  <Mic className="h-4 w-4 text-green-500" />
                ) : (
                  <MicOff className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm">Audio</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setAudioEnabled(!audioEnabled)}
                className={audioEnabled ? "text-green-600" : "text-red-600"}
              >
                {audioEnabled ? "ON" : "OFF"}
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-2">
                {cursorTracking ? (
                  <MousePointer className="h-4 w-4 text-blue-500" />
                ) : (
                  <MousePointer className="h-4 w-4 text-gray-400" />
                )}
                <span className="text-sm">Cursor</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCursorTracking(!cursorTracking)}
                className={cursorTracking ? "text-blue-600" : "text-gray-600"}
              >
                {cursorTracking ? "ON" : "OFF"}
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-2">
                <Monitor className="h-4 w-4 text-purple-500" />
                <span className="text-sm">Quality</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-purple-600">
                    {quality}
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setQuality("4K")}>4K (Ultra)</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setQuality("HD")}>HD (1080p)</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setQuality("SD")}>SD (720p)</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setQuality("Low")}>Low (480p)</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center justify-center p-3 border rounded-lg">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center space-x-4">
            {!isRecording ? (
              <Button onClick={startRecording} className="bg-red-500 hover:bg-red-600 text-white px-8 py-3" size="lg">
                <Video className="mr-2 h-5 w-5" />
                Start Recording
              </Button>
            ) : (
              <div className="flex space-x-3">
                {isPaused ? (
                  <Button
                    onClick={resumeRecording}
                    className="bg-green-500 hover:bg-green-600 text-white px-6"
                    size="lg"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                ) : (
                  <Button
                    onClick={pauseRecording}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6"
                    size="lg"
                  >
                    <Pause className="mr-2 h-4 w-4" />
                    Pause
                  </Button>
                )}
                <Button
                  onClick={stopRecording}
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-50 px-6 bg-transparent"
                  size="lg"
                >
                  <Square className="mr-2 h-4 w-4" />
                  Stop
                </Button>
              </div>
            )}
          </div>

          {/* Storage Usage */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Storage Usage</span>
              <span className="text-gray-900">{storageUsed}% of 10 GB used</span>
            </div>
            <Progress value={storageUsed} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Recording History */}
      <Card>
        <CardHeader>
          <CardTitle>Recording History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recordings.map((recording) => (
              <div
                key={recording.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Video className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium">{recording.name}</div>
                    <div className="text-sm text-gray-500 flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {recording.duration}
                      </span>
                      <span>{recording.size}</span>
                      <span>{recording.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Badge className={getStatusColor(recording.status)}>{recording.status}</Badge>

                  {recording.status === "completed" && (
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => downloadRecording(recording)}>
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteRecording(recording)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
