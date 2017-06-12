module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { text: /\.js$/, loader: 'ng-annotate!babel', exclude: [/app\/lib/, /node_module/] },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url' },
    ]
  }
}