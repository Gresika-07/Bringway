import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // In a real application, you would integrate with email service
    console.log("Newsletter subscription:", {
      email,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        message: "Successfully subscribed to newsletter!",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 })
  }
}
