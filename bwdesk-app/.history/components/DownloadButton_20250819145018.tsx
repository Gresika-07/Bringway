"use client";
import { useRouter } from "next/navigation";

export default function DownloadButton() {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).electronAPI) {
      // Inside Electron app → open dashboard
      (window as any).electronAPI.openDashboard();
    } else {
      // In browser → download installer and redirect
      const link = document.createElement("a");
      link.href = "/BWDesk-Setup.exe";  // put your installer in /public
      link.download = "BWDesk-Setup.exe";
      link.click();

      router.push("/dashboard");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Download & Open Dashboard
    </button>
  );
}
