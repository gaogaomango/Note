const ExtractTextPlugin=require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    js: './src/main.js',
    css: './src/main.css',
  },

  output: {
    path: '/Users/ogaimasataka/Documents/programming/source/React/Note/public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        },
      },
    ],
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "postcss-loader",
          use: "css-loader"
        })
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: [
          require('postcss-easy-import')({ glob: true }),
        ],
      },
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './public/',
    port: 8080,
    inline: true,
    historyApiFallback: true,
    clientLogLevel: "info",
    stats: { colors: true }
  }
};
