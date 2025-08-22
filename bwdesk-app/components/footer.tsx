import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Why BWDesk",
      links: ["Time-saving", "Secure", "All Platforms", "Customizable", "Case Studies", "Features"],
    },
    {
      title: "Solutions",
      links: [
        "Remote Desktop",
        "Remote Support",
        "Remote Work",
        "Remote Access",
        "Mobile Device Support",
        "Cloud vs On-Premises",
      ],
    },
    {
      title: "Buy Now",
      links: ["Downloads", "Pricing", "Enterprise", "Volume Licensing"],
    },
    {
      title: "Support",
      links: ["BWDesk Services", "Customer Success", "Help Center", "my.bwdesk.com", "System Status", "Trust Center"],
    },
    {
      title: "Company",
      links: ["BWDesk Team", "Contact Us", "Open Positions", "Partners", "Press Kit", "Blog"],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold">
                BW<span className="text-yellow-400">Desk</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Secure, fast, and reliable remote desktop access for teams of all sizes. Connect anywhere, anytime with
              BWDesk.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold">Sign up for news, tips and more</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-r-md hover:bg-yellow-500 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>© 2025 BWDesk Software • All rights reserved</span>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  Legal Notice
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
