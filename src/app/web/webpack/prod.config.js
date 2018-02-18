const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
	entry: [
		'babel-polyfill',
		'whatwg-fetch',
		path.join( __dirname, '../index.js' ),
	],
	output: {
		path: path.join( __dirname, '../' ),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: [ "style-loader", "css-loader", "sass-loader" ]
			}, {
				test: /\.json$/,
				loader: "json",
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					presets: [ 'react', 'es2015' ]
				}
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin( {
			'process.env': {
				// Useful to reduce the size of client-side libraries, e.g. react
				NODE_ENV: JSON.stringify( 'production' ),
				PLATFORM_ENV: JSON.stringify( 'web' ),
			},
		} ),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin( {
			compress: {
				warnings: false,
			},
		} ),
	],
};
