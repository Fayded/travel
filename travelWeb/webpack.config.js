module.exports = {
		entry: "./app/components/Main.js",
		output: {
			filename: "public/bundle.js"
		},
		module: {
			loader: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			}]
		}
}