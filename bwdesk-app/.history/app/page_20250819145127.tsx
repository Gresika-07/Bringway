import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { Footer } from "@/components/footer"
import DownloadButton from "@/components/DownloadButton";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TrustedBySection />
      </main>
      <Footer />
    </div>
  )
}



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to BWDesk</h1>
      <DownloadButton />
    </main>
  );
}

