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
		rules: [
			{
				test: /\.scss$/,
				loaders: [ "style-loader", "css-loader", "sass-loader" ]
			}, {
				test: /\.json$/,
				loader: "json",
			}, {
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
				NODE_ENV: JSON.stringify( 'development' ),
				PLATFORM_ENV: JSON.stringify( 'web' ),
			},
		} ),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
};
