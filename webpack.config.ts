import path from 'path'
import { Configuration, DefinePlugin } from 'webpack'
import 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const webpackConfig = (): Configuration => ({
	entry: './src/index.tsx',
	...(process.env.production || !process.env.development ? {} : { devtool: 'eval-source-map' }),

	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
	},
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'build.js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
				exclude: /build/,
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		port: 3000,
		open: true,
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, 'public'),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			// HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
			template: './public/index.html',
		}),
		// DefinePlugin allows you to create global constants which can be configured at compile time
		new DefinePlugin({
			'process.env': process.env.production || !process.env.development,
		}),
		new ForkTsCheckerWebpackPlugin({
			// Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)
			eslint: {
				files: './src/**/*.{ts,tsx,js,jsx}',
			},
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'public',
					globOptions: {
						ignore: ['**/index.html'],
					},
				},
				// Copy index.html from repo
				{
					from: 'public/repo/index.html',
					to: 'repo/index.html',
				},
			],
		}),
	],
})

export default webpackConfig
