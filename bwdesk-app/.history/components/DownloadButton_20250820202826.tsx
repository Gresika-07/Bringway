//"use client";
import { useRouter } from "next/navigation";

export function DownloadButton() {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).electronAPI) {
      // Running inside desktop app → open dashboard
      (window as any).electronAPI.openDashboard();
    } else {
      // Running in browser → download installer + go to dashboard
      const link = document.createElement("a");
      link.href = "/BWDesk-Setup.exe";  // put your installer in /public folder
      link.download = "BWDesk-Setup.exe";
      link.click();

      router.push("/dashboard");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
    >
      Download & Open Dashboard
    </button>
  );
}
