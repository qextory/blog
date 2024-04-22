const { createContentlayerPlugin } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

const withContentlayer = createContentlayerPlugin();

module.exports = withContentlayer(nextConfig);
