var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('../webpack.docs.js')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: './docs',
  stats: {
    modules: false,
    cached: false,
    colors: true,
    chunk: false
  }
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:3000')
})
