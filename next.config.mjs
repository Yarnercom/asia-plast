/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*/",
        destination: "https://tare-zavod-api-e96b18c77ef7.herokuapp.com/:path*/",
      },
    ]
  },
  images: {
    domains: [
      'example.com',
      'www.hubspot.com',
      'gratisography.com',
      'cdn.prod.website-files.com',
      'marketplace.canva.com'
    ],
  },
};

export default nextConfig
