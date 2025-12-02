// next.config.js (CommonJS)
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  reactStrictMode: true,
  // enable MDX file extensions so Next treats .mdx pages/components correctly
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // any other config you need
};

module.exports = withMDX(nextConfig);
