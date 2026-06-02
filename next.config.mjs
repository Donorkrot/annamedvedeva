/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1440, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    qualities: [75, 85, 90, 95, 100],
  },
  // Страница /first-stage ещё не готова — на проде (env NEXT_PUBLIC_HIDE_FIRST_STAGE=1)
  // редиректим её на главную. На локалхосте/тесте без этой переменной — доступна.
  async redirects() {
    if (process.env.NEXT_PUBLIC_HIDE_FIRST_STAGE !== '1') return [];
    return [
      { source: '/first-stage', destination: '/', permanent: false },
    ];
  },
};

export default nextConfig;
