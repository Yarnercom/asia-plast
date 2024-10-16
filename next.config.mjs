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
    domains: ['gratisography.com'], // Можно позже удалить, картинки проверял по этому домену
  },
}

export default nextConfig
