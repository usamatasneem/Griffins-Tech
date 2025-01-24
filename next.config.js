// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	reactStrictMode: false,
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',  // Ensure it only applies to production
  };
  
  module.exports = nextConfig;
  