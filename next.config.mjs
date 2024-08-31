/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["link.storjshare.io"],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /pdf\.worker\.js$/,
      use: { loader: "file-loader" },
    });

    return config;
  },
};

export default nextConfig;
