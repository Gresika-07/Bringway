"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Monitor, Smartphone, Shield, Zap, Users, CheckCircle } from "lucide-react"

export default function DownloadPage() {
  const [detectedOS, setDetectedOS] = useState<string>("")
  const [downloadStarted, setDownloadStarted] = useState<string>("")

  useEffect(() => {
    const userAgent = navigator.userAgent
    if (userAgent.includes("Windows")) setDetectedOS("Windows")
    else if (userAgent.includes("Mac")) setDetectedOS("macOS")
    else if (userAgent.includes("Linux")) setDetectedOS("Linux")
    else setDetectedOS("Windows") // Default fallback
  }, [])

  const handleDownload = (os: string, version: string) => {
    setDownloadStarted(`${os}-${version}`)
    setTimeout(() => setDownloadStarted(""), 3000)

    // In a real app, this would trigger actual download
    console.log(`Downloading BWDesk for ${os} ${version}`)
  }

  const downloads = [
    {
      os: "Windows",
      icon: Monitor,
      versions: [
        { name: "Windows 11/10 (64-bit)", file: "BWDesk-Setup-x64.exe", size: "45.2 MB", recommended: true },
        { name: "Windows 11/10 (32-bit)", file: "BWDesk-Setup-x86.exe", size: "42.1 MB", recommended: false },
        { name: "Windows 8.1/7 (Legacy)", file: "BWDesk-Legacy-Setup.exe", size: "38.9 MB", recommended: false },
      ],
    },
    {
      os: "macOS",
      icon: Monitor,
      versions: [
        { name: "macOS 12+ (Apple Silicon)", file: "BWDesk-arm64.dmg", size: "52.3 MB", recommended: true },
        { name: "macOS 10.15+ (Intel)", file: "BWDesk-x64.dmg", size: "48.7 MB", recommended: false },
      ],
    },
    {
      os: "Linux",
      icon: Monitor,
      versions: [
        { name: "Ubuntu/Debian (.deb)", file: "BWDesk-amd64.deb", size: "41.2 MB", recommended: true },
        { name: "AppImage (Universal)", file: "BWDesk-x86_64.AppImage", size: "44.8 MB", recommended: false },
        { name: "RPM Package", file: "BWDesk-x86_64.rpm", size: "42.5 MB", recommended: false },
      ],
    },
  ]

  const mobileApps = [
    { name: "iOS App", store: "App Store", icon: Smartphone, available: true },
    { name: "Android App", store: "Google Play", icon: Smartphone, available: true },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Download <span className="text-[#FFC700]">BWDesk</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get BWDesk for your platform and start connecting to remote devices instantly.
            </p>
            {detectedOS && (
              <div className="inline-flex items-center bg-[#FFC700] text-black px-4 py-2 rounded-full font-semibold">
                <CheckCircle className="w-4 h-4 mr-2" />
                Detected: {detectedOS}
              </div>
            )}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Desktop Applications</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {downloads.map((platform) => {
                const IconComponent = platform.icon
                const isRecommended = platform.os === detectedOS

                return (
                  <Card key={platform.os} className={`relative ${isRecommended ? "ring-2 ring-[#FFC700]" : ""}`}>
                    {isRecommended && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFC700] text-black">
                        Recommended for you
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <IconComponent className="w-16 h-16 mx-auto mb-4 text-[#FFC700]" />
                      <CardTitle className="text-2xl">{platform.os}</CardTitle>
                      <CardDescription>Choose your version</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {platform.versions.map((version, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <div className="font-semibold">{version.name}</div>
                            <div className="text-sm text-muted-foreground">{version.size}</div>
                          </div>
                          <Button
                            onClick={() => handleDownload(platform.os, version.name)}
                            disabled={downloadStarted === `${platform.os}-${version.name}`}
                            className={`ml-4 ${version.recommended ? "bg-[#FFC700] hover:bg-[#FFD700] text-black" : ""}`}
                          >
                            {downloadStarted === `${platform.os}-${version.name}` ? (
                              "Downloading..."
                            ) : (
                              <>
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </>
                            )}
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Mobile Applications</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {mobileApps.map((app, index) => {
                const IconComponent = app.icon
                return (
                  <Card key={index}>
                    <CardHeader className="text-center">
                      <IconComponent className="w-16 h-16 mx-auto mb-4 text-[#FFC700]" />
                      <CardTitle>{app.name}</CardTitle>
                      <CardDescription>Available on {app.store}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-[#FFC700] hover:bg-[#FFD700] text-black">
                        <Download className="w-4 h-4 mr-2" />
                        Get from {app.store}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-[#FFC700] mr-3" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-[#FFC700] mr-3" />
                  <span>Lightning-fast connections</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-[#FFC700] mr-3" />
                  <span>Multi-user support</span>
                </div>
                <div className="flex items-center">
                  <Download className="w-6 h-6 text-[#FFC700] mr-3" />
                  <span>File transfer capabilities</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">System Requirements</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <strong>Windows:</strong> Windows 10 or later, 2GB RAM, 100MB disk space
                </div>
                <div>
                  <strong>macOS:</strong> macOS 10.15 or later, 2GB RAM, 100MB disk space
                </div>
                <div>
                  <strong>Linux:</strong> Ubuntu 18.04+, 2GB RAM, 100MB disk space
                </div>
                <div>
                  <strong>Network:</strong> Broadband internet connection recommended
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Need help with installation? Check our{" "}
              <a href="/support" className="text-[#FFC700] hover:underline">
                installation guide
              </a>
            </p>
            <p className="text-sm text-muted-foreground">All downloads are digitally signed and virus-free</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
