var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var config = require('./webpack.base')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var fs = require('fs-extra')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

Object.assign(config.output, {
	filename: './[name].[chunkhash].js',
	chunkFilename: './[id].[chunkhash].js',
	publicPath: '',
	path: path.resolve(__dirname, '../docs')
})

config.module.rules = config.module.rules.concat([
	{
		test: /\.less$/,
		use: ExtractTextPlugin.extract({
			use: [
				'css-loader',
				'postcss-loader',
				'less-loader']
		})
	},
	{
		test: /\.(js|jsx)$/,
		use: ['babel-loader'],
		exclude: /node_modules/
	}
])

config.plugins = (config.plugins || []).concat([
	new webpack.DefinePlugin({
		DEBUG: false,
		'process.env': {
			NODE_ENV: '"production"'
		}
	}),
	new UglifyJSPlugin({
		compress: {
			warnings: false
		}
	}),
	//想看包文件的情况，可以打开
	//new BundleAnalyzerPlugin(),
	new ExtractTextPlugin('./[name].[chunkhash].css'),
	// new CopyWebpackPlugin([{
	// 	from: 'src/static'
	// }]),
	
	new HtmlWebpackPlugin({
		filename: '../docs/index.html',
		template: 'src/index.html'
	})
])

fs.remove(path.resolve(__dirname, '../docs'))
console.log('文件夹docs已删除')
fs.remove(path.resolve(__dirname, '../index.html'))
console.log('index.html已删除')

console.log('正在打包')
var compiler = webpack(config, (err, stats) => {
	console.log(err)
	console.log('打包成功')
	console.log('[webpack]', stats.toString({}))
	updateHtml()
})

function updateHtml () {
	let filePathFrom = path.join(__dirname, '../docs/index.html')
	let filePathTo = path.join(__dirname, '../index.html')
	fs.readFile(filePathFrom, (err, data) => {
		if (err) throw err
		let html = data.toString()
		html = html.replace('src="./app.', 'src="./docs/app.')
		html = html.replace('href="./app.', 'href="./docs/app.')
		fs.writeFile(filePathTo, html, (err) => {
			if (err) throw err
			console.log('index.html生成成功！')
		})
	})
}

