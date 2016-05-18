// Import Dependencies
var Webpack = require('webpack'),
	Path = require('path');

// Export the Webpack configuration
module.exports = {
	context: Path.resolve('./src'),
	entry: {
		index: './app.js'
	},

	module: {
		loaders: [
			{ test: /\.woff2?$/, loader: 'file' },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.css$/, exclude: /node_modules/, loader: 'style!css' }
		]
	},

	devServer: {
		port: 8080,
		inline: true,
		compress: true,
		contentBase: 'dist/'
	},

	output: {
		filename: '[name].bundle.js',
		path: '/dist/build',
		publicPath: '/build/'
	}
}