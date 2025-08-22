"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X, Globe, Phone } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    {
      title: "Why BWDesk",
      items: [
        { name: "Time-saving", href: "/features/time-saving" },
        { name: "Secure", href: "/features/secure" },
        { name: "All Platforms", href: "/features/platforms" },
        { name: "Customizable", href: "/features/customizable" },
        { name: "Case Studies", href: "/case-studies" },
      ],
    },
    {
      title: "Features",
      items: [
        { name: "Remote Desktop", href: "/features/remote-desktop" },
        { name: "Remote Support", href: "/features/remote-support" },
        { name: "Screen Recording", href: "/features/recording" },
        { name: "File Transfer", href: "/features/file-transfer" },
        { name: "Chat Support", href: "/features/chat" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { name: "Remote Work", href: "/solutions/remote-work" },
        { name: "Remote Access", href: "/solutions/remote-access" },
        { name: "Mobile Support", href: "/solutions/mobile" },
        { name: "Cloud vs On-Premises", href: "/solutions/deployment" },
      ],
    },
    {
      title: "Partners",
      items: [
        { name: "Become a Partner", href: "/partners/join" },
        { name: "Partner Portal", href: "/partners/portal" },
        { name: "Reseller Program", href: "/partners/reseller" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
      ],
    },
    {
      title: "Support",
      items: [
        { name: "Help Center", href: "/support" },
        { name: "Documentation", href: "/docs" },
        { name: "System Status", href: "/status" },
        { name: "Contact Support", href: "/support/contact" },
      ],
    },
  ]

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold text-foreground">
              BW<span className="text-yellow-400">Desk</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-muted-foreground hover:text-yellow-400 hover:bg-accent">
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link href={subItem.href} className="cursor-pointer hover:bg-yellow-50 dark:hover:bg-yellow-950">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1 lg:space-x-2">
            {/* Contact */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden xl:flex items-center text-muted-foreground hover:text-yellow-400 text-xs px-2"
              asChild
            >
              <Link href="/contact">
                <Phone className="h-3 w-3 mr-1" />
                Contact
              </Link>
            </Button>

            {/* Country Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden md:flex items-center text-muted-foreground hover:text-yellow-400 text-xs px-2"
                >
                  <Globe className="h-3 w-3 mr-1" />
                  IN
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>🇮🇳 India</DropdownMenuItem>
                <DropdownMenuItem>🇺🇸 United States</DropdownMenuItem>
                <DropdownMenuItem>🇬🇧 United Kingdom</DropdownMenuItem>
                <DropdownMenuItem>🇩🇪 Germany</DropdownMenuItem>
                <DropdownMenuItem>🇫🇷 France</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ModeToggle />

            {/* Dashboard Link */}
            <Button variant="outline" size="sm" asChild className="hidden lg:inline-flex bg-transparent text-xs px-2">
              <Link href="/dashboard">Dashboard</Link>
            </Button>

            {/* Buy Now Button */}
            <Button
              size="sm"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-xs px-2 lg:px-3"
              asChild
            >
              <Link href="/pricing">Buy Now</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden ml-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.title} className="space-y-1">
                  <div className="font-semibold text-foreground px-3 py-2">{item.title}</div>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-6 py-2 text-muted-foreground hover:text-yellow-400 hover:bg-accent"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
                  <Link href="/contact">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact
                  </Link>
                </Button>
                <div className="flex justify-center py-2">
                  <ModeToggle />
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold" asChild>
                  <Link href="/pricing">Buy Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
