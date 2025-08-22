import { NextResponse } from "next/server"

export async function POST() {
  // In a real app, this would clear session tokens, cookies, etc.
  return NextResponse.json({
    success: true,
    message: "Successfully signed out",
  })
}
