/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  reactStrictMode: true,
  images: {
    domains: ["app.merlins.zone"],
  },
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});
