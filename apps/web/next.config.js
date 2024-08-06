const withMDX = require("@next/mdx")();
const withPWA = require("next-pwa")({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.convex.cloud",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.thetaspaces.fun",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.r2.cloudflarestorage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "r2.thetaspace.fun",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/shop",
        destination: "/crystals",
        permanent: true,
      },
      {
        source: "/empty-canvas",
        destination: "https://emptycanvas.art/",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/9BxwbfjXZC",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "https://docs.thetaspace.fun",
        permanent: true,
      },
      {
        source: "/affiliate",
        destination: "https://tally.so/r/3jPAVR",
        permanent: true,
      },
      {
        source: "/content-rules",
        destination: "/safety",
        permanent: true,
      },
    ];
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = withPWA(withMDX(nextConfig));
