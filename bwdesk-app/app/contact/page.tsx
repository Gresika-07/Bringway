import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-yellow-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about BWDesk? Our team is here to help you get started with remote access solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <Input placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea placeholder="Tell us how we can help..." rows={5} />
                </div>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">support@bwdesk.com</p>
                      <p className="text-gray-600">sales@bwdesk.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Office</h3>
                      <p className="text-gray-600">123 Tech Street</p>
                      <p className="text-gray-600">San Francisco, CA 94105</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM PST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                <h3 className="font-bold text-gray-900 mb-2">Need immediate help?</h3>
                <p className="text-gray-600 mb-4">
                  Check out our comprehensive help center or start a live chat with our support team.
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-black bg-transparent"
                  >
                    Help Center
                  </Button>
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Live Chat</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
