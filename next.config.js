/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true
	},

	images: {
		domains: ['images.vexels.com']
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack', 'url-loader']
		})

		return config
	}
}

module.exports = nextConfig
