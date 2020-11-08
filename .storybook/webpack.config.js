const path = require('path');
const webpackConfig = require('../build/webpack.config')

module.exports = {
	resolve: {
		extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader',
				options: { limit: 8192 }
			}, {
				test: /\.(sass|scss|css)$/,
				loaders: [
					"style-loader", "css-loader", "sass-loader"
				],
				include: path.resolve(__dirname, '../')
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loaders: ['file-loader'],
				include: path.resolve(__dirname, '../')
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'awesome-typescript-loader'],
			}
		]
	}
};
