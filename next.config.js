/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: 'http://localhost:5240/:path*',
			},
		];
	},
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tailwindui.com',
				pathname: '/img/**/*.{jpg,png,svg}',
			},
		],
	},
};

module.exports = nextConfig;
