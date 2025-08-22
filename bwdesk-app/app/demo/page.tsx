"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, Maximize, RotateCcw } from "lucide-react"
import { Header } from "@/components/header"

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            BWDesk <span className="text-yellow-400">Demo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how BWDesk makes remote desktop access simple, secure, and lightning-fast. See all features in action
            in this comprehensive demo.
          </p>
        </div>

        {/* Video Player */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
          <div className="relative aspect-video bg-black">
            <img src="/remote-desktop-demo.png" alt="BWDesk Demo Video" className="w-full h-full object-cover" />

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full w-20 h-20 shadow-2xl"
              >
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
              </Button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:text-yellow-400"
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                  <span className="text-sm">2:34 / 8:45</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-white hover:text-yellow-400">
                    <Volume2 className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:text-yellow-400">
                    <RotateCcw className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:text-yellow-400">
                    <Maximize className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Setup</h3>
            <p className="text-gray-600 mb-4">
              See how easy it is to set up BWDesk and connect to any device in under 2 minutes.
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              Watch Setup Demo
            </Button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">File Transfer</h3>
            <p className="text-gray-600 mb-4">
              Learn how to securely transfer files between devices with drag-and-drop simplicity.
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              View File Transfer
            </Button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Recording Session</h3>
            <p className="text-gray-600 mb-4">
              Discover how to record your remote sessions for training and documentation.
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              See Recording Demo
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
