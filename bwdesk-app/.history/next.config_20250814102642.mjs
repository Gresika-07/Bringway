/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ⟵ needed for static export to /out
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  trailingSlash: true, // helps Electron load files with file://
  assetPrefix: './'    // relative paths for Electron
};

export default nextConfig;
