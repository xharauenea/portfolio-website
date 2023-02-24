/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.licdn.com',
				port: '',
				pathname: '/dms/image/**',
			},
		],
	},
};

module.exports = nextConfig
