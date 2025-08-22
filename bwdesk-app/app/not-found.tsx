import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="text-[#FFC700] text-8xl font-bold mb-4">404</div>
          <h1 className="text-3xl font-bold mb-2">Oops! Page not found</h1>
          <p className="text-muted-foreground mb-8">
            Let's get you back to the desk. The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild className="bg-[#FFC700] hover:bg-[#FFD700] text-black">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="javascript:history.back()">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <p>
            Need help?{" "}
            <Link href="/support" className="text-[#FFC700] hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
