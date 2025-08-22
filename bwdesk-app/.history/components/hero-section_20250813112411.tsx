"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Shield, Zap, Globe, Users, Play, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"

export function HeroSection() {
  const [selectedOS, setSelectedOS] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselImages = [
    {
      src: "/remote-desktop-connection.png",
      alt: "Remote Desktop Connection",
      title: "Seamless Remote Access",
    },
    {
      src: "/secure-file-transfer-interface.png",
      alt: "Secure File Transfer",
      title: "Fast File Transfer",
    },
    {
      src: "/remote-team-collaboration.png",
      alt: "Team Collaboration",
      title: "Team Collaboration",
    },
    {
      src: "/bwdesk-remote-desktop.png",
      alt: "BWDesk Dashboard",
      title: "Powerful Dashboard",
    },
  ]

  const handleDownload = (os: string) => {
    setSelectedOS(os)
    const link = document.createElement("a")
    link.href = `/downloads/bwdesk-${os.toLowerCase()}.exe`
    link.download = `BWDesk-${os}.exe`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 sm:pt-20 pb-16 sm:pb-32">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-80 h-48 sm:h-80 bg-black rounded-full opacity-3 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-10 text-center lg:text-left">
            {/* Main Headline */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-xs sm:text-sm font-medium text-yellow-800 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-700">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                "The fastest way to connect anywhere, anytime"
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                Remote Access
                <span className="block text-yellow-400">Redefined</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience lightning-fast remote connections with military-grade security. BWDesk makes remote work feel
                local.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-lg">Bank-Level Security</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">End-to-end encryption</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-lg">Lightning Fast</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Sub-second response</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-lg">Cross-Platform</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Windows, Mac, Linux</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-lg">Team Ready</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Unlimited connections</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
                  >
                    <Download className="mr-2 sm:mr-3 h-4 w-4 sm:h-6 sm:w-6" />
                    Download Free
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md mx-4">
                  <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl font-bold">Download BWDesk</DialogTitle>
                    <DialogDescription className="text-base sm:text-lg">Choose your operating system</DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-6">
                    <Button
                      onClick={() => handleDownload("Windows")}
                      className="justify-start h-12 sm:h-14 bg-blue-600 hover:bg-blue-700 text-sm sm:text-lg"
                    >
                      <Download className="mr-3 sm:mr-4 h-4 w-4 sm:h-6 sm:w-6" />
                      Windows (64-bit)
                    </Button>
                    <Button
                      onClick={() => handleDownload("Mac")}
                      className="justify-start h-12 sm:h-14 bg-gray-800 hover:bg-gray-900 text-sm sm:text-lg"
                    >
                      <Download className="mr-3 sm:mr-4 h-4 w-4 sm:h-6 sm:w-6" />
                      macOS (Intel & Apple Silicon)
                    </Button>
                    <Button
                      onClick={() => handleDownload("Linux")}
                      className="justify-start h-12 sm:h-14 bg-orange-600 hover:bg-orange-700 text-sm sm:text-lg"
                    >
                      <Download className="mr-3 sm:mr-4 h-4 w-4 sm:h-6 sm:w-6" />
                      Linux (Ubuntu/Debian)
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                <Link href="/login" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-600 dark:text-yellow-400 text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold bg-transparent w-full sm:w-auto"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/signup" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold bg-transparent w-full sm:w-auto"
                  >
                    Sign In
                  </Button>
                </Link>

                <Button
                  variant="ghost"
                  size="lg"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold w-full sm:w-auto"
                  asChild
                >
                  <Link href="/demo">
                    <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div className="relative mt-8 lg:mt-0 lg:pl-8">
            <div className="relative z-10">
              <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl p-3 sm:p-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {carouselImages.map((image, index) => (
                      <div key={index} className="w-full h-full flex-shrink-0 relative">
                        <img
                          src={image.src || "/placeholder.svg?height=400&width=600&query=remote desktop interface"}
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl sm:rounded-2xl"></div>
                        <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white">
                          <h3 className="font-bold text-sm sm:text-xl mb-1 sm:mb-2">{image.title}</h3>
                          <p className="text-xs sm:text-sm opacity-90">Experience seamless remote connectivity</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Carousel Controls */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 sm:p-2 shadow-lg transition-all"
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 sm:p-2 shadow-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" />
                  </button>

                  {/* Carousel Indicators */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex space-x-1 sm:space-x-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                          index === currentSlide ? "bg-yellow-400" : "bg-white bg-opacity-60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards - Hidden on mobile for cleaner look */}
            <div className="hidden sm:block absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 border border-gray-100 dark:border-gray-700 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Live Connection</span>
              </div>
            </div>

            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 border border-gray-100 dark:border-gray-700 z-20">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">256-bit Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
