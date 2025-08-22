export function TrustedBySection() {
  const trustedCompanies = [
    { name: "Microsoft", logo: "/microsoft-logo.png" },
    { name: "Google", logo: "/google-logo.png" },
    { name: "Amazon", logo: "/amazon-logo.png" },
    { name: "IBM", logo: "/ibm-logo.png" },
    { name: "Oracle", logo: "/oracle-logo-abstract.png" },
    { name: "Salesforce", logo: "/salesforce-logo.png" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-yellow-400">10,000+</span> Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, BWDesk powers remote work across the globe
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center mb-16">
          {trustedCompanies.map((company, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={company.logo || "/placeholder.svg?height=60&width=120&query=company logo"}
                alt={`${company.name} logo`}
                className="h-16 w-auto opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
              99.9%
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Uptime Guarantee</div>
            <div className="text-gray-600">Always available when you need it</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
              50M+
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Sessions Monthly</div>
            <div className="text-gray-600">Trusted by millions of users</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
              150+
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Countries Served</div>
            <div className="text-gray-600">Global reach and reliability</div>
          </div>
        </div>
      </div>
    </section>
  )
}
