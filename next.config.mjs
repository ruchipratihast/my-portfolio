/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'my-portfolio';
const assetPrefix = isProd ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: assetPrefix,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: assetPrefix,
  },
};

export default nextConfig;
