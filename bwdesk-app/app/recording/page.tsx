import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { RecordingControls } from "@/components/dashboard/recording-controls"

export default function RecordingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Session Recording</h1>
          <p className="text-gray-600 mt-2">
            Record your remote desktop sessions for training, documentation, or review purposes.
          </p>
        </div>

        <RecordingControls />
      </main>
    </div>
  )
}
