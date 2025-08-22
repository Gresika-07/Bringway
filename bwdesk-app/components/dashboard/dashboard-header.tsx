"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
import { Bell, Settings, User, LogOut, ChevronDown, Mail, CreditCard, Shield } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export function DashboardHeader() {
  const [notifications, setNotifications] = useState(3)
  const { toast } = useToast()

  const handleNotificationClick = () => {
    setNotifications(0)
    toast({
      title: "Notifications",
      description: "You have 3 new notifications: 2 connection requests, 1 system update",
    })
  }

  const handleSettingsClick = () => {
    toast({
      title: "Settings",
      description: "Opening system settings...",
    })
  }

  const handleSignOut = () => {
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out",
    })
    // In a real app, this would clear auth tokens and redirect
    setTimeout(() => {
      window.location.href = "/"
    }, 1500)
  }

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#FFC700] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold">
              BW<span className="text-[#FFC700]">Desk</span>
            </span>
          </Link>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <ModeToggle />

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative" onClick={handleNotificationClick}>
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                  {notifications}
                </Badge>
              )}
            </Button>

            {/* Settings */}
            <Button variant="ghost" size="sm" onClick={handleSettingsClick}>
              <Settings className="h-5 w-5" />
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#FFC700] to-[#FFD700] rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-black" />
                  </div>
                  <span className="hidden md:block">John Doe</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-3 py-2 border-b">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                  <p className="text-xs text-muted-foreground">Premium Plan</p>
                </div>
                <DropdownMenuItem>
                  <User className="h-4 w-4 mr-2" />
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Account & Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Shield className="h-4 w-4 mr-2" />
                  Security Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Mail className="h-4 w-4 mr-2" />
                  Support
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
