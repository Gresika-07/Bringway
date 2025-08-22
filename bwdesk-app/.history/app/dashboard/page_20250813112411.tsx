import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SessionManager } from "@/components/dashboard/session-manager"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { RecentSessions } from "@/components/dashboard/recent-sessions"
import { SystemStatus } from "@/components/dashboard/system-status"
import { ChatBot } from "@/components/dashboard/chat-bot"
import { RecordingControls } from "@/components/dashboard/recording-controls"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { NetworkMonitor } from "@/components/dashboard/network-monitor"
import { InviteSettings } from "@/components/dashboard/invite-settings"
import { SecurityCenter } from "@/components/dashboard/security-center"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <SessionManager />
            <QuickActions />
            <RecordingControls />
            <InviteSettings />
            <RecentSessions />
          </div>

          <div className="space-y-6">
            <SystemStatus />
            <NetworkMonitor />
            <SecurityCenter />
            <ActivityFeed />
            <ChatBot />
          </div>
        </div>
      </main>
    </div>
  )
}
