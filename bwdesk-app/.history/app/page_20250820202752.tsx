import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { Footer } from "@/components/footer"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      <main>
        <HeroSection />
        <div className="flex justify-center my-6">   {/* 👇 add button below Hero */}
          <DownloadButton />
        </div>
        <FeaturesSection />
        <TrustedBySection />
      </main>
      <Footer />
    </div>
  )
}
