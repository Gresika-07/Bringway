import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-black rounded-sm"></div>
            </div>
            <span className="text-3xl font-bold text-black">
              BW<span className="text-yellow-400">Desk</span>
            </span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <Link href="/signup" className="font-medium text-yellow-600 hover:text-yellow-500">
              create a new account
            </Link>
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  )
}
