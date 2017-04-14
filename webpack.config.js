var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		vbtizer: './js/vbtizer.js',
	},
	output: {
		path: path.resolve(__dirname, 'js/build'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};