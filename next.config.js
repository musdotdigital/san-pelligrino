/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SUPABASE_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlra3F3Y3ltYXVsaXFkZWNnY29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4OTc4MjYsImV4cCI6MTk4NTQ3MzgyNn0.la_8Xrs-u3kl5xUP_AT6bF4xsa0QmupWxrTeaTX35V4",
  },
};

module.exports = nextConfig;
