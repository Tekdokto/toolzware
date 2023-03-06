// import { NextConfig } = require=('next');

const nextConfig = {
    // Set the source directory to 'src'
  srcDir: 'src',
  // Enable TypeScript
  typescript: {
    // Enable type checking on production builds
    // (recommended to improve app reliability)
    ignoreBuildErrors: false,
  },

  // Enable CSS modules
  // (see https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)
  cssModules: true,
};

module.exports = nextConfig;
