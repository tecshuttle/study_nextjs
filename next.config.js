const path = require('path');
const UnusedWebpackPlugin = require('unused-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  webpack: (config) => {
    // config.plugins.push(
    //   new UnusedWebpackPlugin({
    //     directories: [path.join(__dirname, 'pages')], // Source directories
    //     exclude: ['*.test.js'],  // Exclude patterns
    //     root: __dirname, // Root directory (optional)
    //   }),
    // );
    // console.log(config);
    return config
  }
});
