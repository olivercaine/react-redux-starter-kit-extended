const path = require('path');
const webpackConfig = require('../build/webpack.config')

module.exports = {
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
  },
	module: {
		rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        include: path.resolve(__dirname, '../')
      },
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader',
				options: { limit: 8192 }
			}, {
				test: /\.scss$/,
				loaders: [
					"style-loader", "css-loader", "sass-loader"
				],
				include: path.resolve(__dirname, '../')
			}
		]
	}
};
