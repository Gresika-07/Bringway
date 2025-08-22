"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MessageCircle, Book, Video, Mail, Phone, Search, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "How do I install BWDesk?",
          answer:
            "Download the installer from our download page, run it, and follow the setup wizard. The installation typically takes 2-3 minutes.",
        },
        {
          question: "How do I create my first connection?",
          answer:
            "Open BWDesk, enter the remote device's ID in the 'Partner ID' field, and click 'Connect'. The remote user must accept your connection request.",
        },
        {
          question: "What are the system requirements?",
          answer:
            "BWDesk requires Windows 10+, macOS 10.15+, or Ubuntu 18.04+. You'll need at least 2GB RAM and a stable internet connection.",
        },
      ],
    },
    {
      title: "Connection Issues",
      faqs: [
        {
          question: "Why can't I connect to a remote device?",
          answer:
            "Check that both devices are online, the Partner ID is correct, and firewall settings allow BWDesk. Try restarting the application if issues persist.",
        },
        {
          question: "The connection is slow or laggy",
          answer:
            "Reduce the display quality in settings, close unnecessary applications, and ensure both devices have stable internet connections.",
        },
        {
          question: "How do I troubleshoot connection errors?",
          answer:
            "Check the connection log in Settings > Diagnostics. Common solutions include updating BWDesk, checking network settings, and temporarily disabling antivirus software.",
        },
      ],
    },
    {
      title: "Account & Billing",
      faqs: [
        {
          question: "How do I upgrade my plan?",
          answer:
            "Go to Settings > Account > Subscription and select your desired plan. Changes take effect immediately with prorated billing.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer:
            "Yes, you can cancel anytime from your account settings. You'll retain access until the end of your current billing period.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 30-day money-back guarantee for all paid plans. Contact support to process your refund request.",
        },
      ],
    },
  ]

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-background via-muted/20 to-[#FFC700]/10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              We're Here to
              <span className="block text-[#FFC700]">Help You</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get the support you need, when you need it. Our team is ready to assist you 24/7
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-semibold mb-6 text-[#FFC700]">{category.title}</h3>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex
                    return (
                      <Card key={faqIndex} className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardHeader
                          className="pb-4"
                          onClick={() => setExpandedFAQ(expandedFAQ === globalIndex ? null : globalIndex)}
                        >
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                            {expandedFAQ === globalIndex ? (
                              <ChevronUp className="w-5 h-5 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                        </CardHeader>
                        {expandedFAQ === globalIndex && (
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </CardContent>
                        )}
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Support Options */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get Support</h2>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <MessageCircle className="h-8 w-8 text-[#FFC700] mr-4" />
                  <div>
                    <CardTitle>Live Chat</CardTitle>
                    <CardDescription>Get instant help from our support team</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="bg-[#FFC700] hover:bg-[#FFD700] text-black">Start Chat</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <Mail className="h-8 w-8 text-[#FFC700] mr-4" />
                  <div>
                    <CardTitle>Email Support</CardTitle>
                    <CardDescription>Send us a detailed message</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">support@bwdesk.com</p>
                  <p className="text-sm text-muted-foreground mt-1">Response within 2 hours</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <Phone className="h-8 w-8 text-[#FFC700] mr-4" />
                  <div>
                    <CardTitle>Phone Support</CardTitle>
                    <CardDescription>Speak directly with our experts</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground mt-1">Available 24/7</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>

        {/* Resources */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Self-Help Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Book className="h-12 w-12 text-[#FFC700] mx-auto mb-4" />
                <CardTitle>Documentation</CardTitle>
                <CardDescription>Comprehensive guides and tutorials</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Browse Docs</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Video className="h-12 w-12 text-[#FFC700] mx-auto mb-4" />
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>Step-by-step video guides</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Watch Videos</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-[#FFC700] mx-auto mb-4" />
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>Connect with other users</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Join Forum</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
