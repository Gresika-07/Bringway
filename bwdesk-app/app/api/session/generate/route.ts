import { NextResponse } from "next/server"

export async function POST() {
  // Generate new session ID and password
  const sessionId = Math.floor(Math.random() * 900000000 + 100000000)
    .toString()
    .replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")

  const password = "bwdesk" + Math.floor(Math.random() * 9000 + 1000)

  return NextResponse.json({
    sessionId,
    password,
    timestamp: new Date().toISOString(),
  })
}
