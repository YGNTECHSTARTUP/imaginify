/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [      
      {hostname:'m8amccffy2k8jwbp.public.blob.vercel-storage.com'},
      {
        hostname: 'img.clerk.com',
      },

    ],
  },
  // Add any other necessary Next.js configurations here
};

module.exports = nextConfig;