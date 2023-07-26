/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  // Your existing Next.js configuration goes here...
  nextConfig,
  async headers() {
    return [
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://fonts.googleapis.com", // Allow requests from the Google Fonts domain
          },
        ],
      },
    ];
  },
};
