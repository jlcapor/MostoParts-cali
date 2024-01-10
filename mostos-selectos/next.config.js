/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
        domains: [
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com'
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "uploadthing.com",
            },
            {
                protocol: "https",
                hostname: "utfs.io",
            },
        ]
    }
}

module.exports = nextConfig
