/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de imágenes remotas si es necesario
  images: {
    remotePatterns: [
      // Agregar dominios de imágenes permitidos
    ],
  },
  // Headers de seguridad
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
