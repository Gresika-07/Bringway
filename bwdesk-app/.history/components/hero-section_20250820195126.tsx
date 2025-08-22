import { useRouter } from "next/navigation"

// inside HeroSection
const router = useRouter()

const handleDownload = async (os: string) => {
  try {
    // build file path (public/downloads)
    const filePath = `/downloads/bwdesk-${os.toLowerCase()}.exe`
    const response = await fetch(filePath)

    if (!response.ok) throw new Error("Download failed")

    // fetch the blob (wait until fully downloaded)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)

    // create <a> for download
    const link = document.createElement("a")
    link.href = url
    link.download = `BWDesk-${os}.exe`
    document.body.appendChild(link)
    link.click()
    link.remove()

    // ✅ after download is complete → open dashboard
    router.push("/dashboard")
  } catch (error) {
    console.error("Error during download:", error)
    alert("Download failed. Please try again.")
  }
}
