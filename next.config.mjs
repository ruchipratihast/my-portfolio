/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  // Set assetPrefix and basePath to your repository name for production
  assetPrefix: isProd ? '/my-portfolio/' : '',
  basePath: isProd ? '/my-portfolio' : '',

};

export default nextConfig;
