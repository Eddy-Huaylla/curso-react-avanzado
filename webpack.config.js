const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const path = require('path')

module.exports = {
	mode   : 'development',
	output : {
		filename : 'app.bundle.js',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin( {
			template : "src/index.html"
		} ),
		new WebpackPwaManifestPlugin( {
			filename: 'manifest.webmanifest',
			name: 'IntaPlatzi',
			description: 'Tu app preferida para encontrar esas mascotas que tanto te encantan',
			orientation: 'portrait',
			display: 'standalone',
			start_url: '/',
			scope: '/',
			background_color: '#456BD9',
			theme_color: '#456BD9',
			icons: [
				{
					src: path.resolve(__dirname, 'src/assets/icon.png'),
					sizes: [96, 128, 144, 192, 256, 384, 512, 1024, 1024],
					destination: path.join('Icons'),
					ios: true,
					purpose: 'any maskable'
				},
			]
		} ),
		new WorkboxWebpackPlugin.GenerateSW( {
			maximumFileSizeToCacheInBytes: 5000000,
			runtimeCaching: [
				{
					urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
					handler: 'CacheFirst',
					options: {
						cacheName: 'images'
					}
				},
				{
					urlPattern: new RegExp('https://petgram-server-jhe-eddy-huaylla.vercel.app'),
					handler: 'NetworkFirst',
					options: {
						cacheName: 'api'
					}
				}
			]
		} )
	],
	module : {
		rules : [
			{
				test    : /\.js$/,
				exclude : /node_modules/,
				use     : {
					loader  : "babel-loader",
					options : {
						presets : [
							"@babel/preset-env",
							"@babel/preset-react"
						]
					}
				}
			},
			{
				test: /\.(graphql|gql)$/,
				exclude: /node_modules/,
				loader: 'graphql-tag/loader',
			}
		]
	}
}
