const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractStyles = new ExtractTextPlugin("../css/[name].css")

module.exports = {
  entry: ["./src/js/main.js", "./src/scss/main.scss"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/js"),
    publicPath: "./dist/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: extractStyles.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                url: false,
                minimize: true,
                sourceMap: true
              }
            },
            "postcss-loader",
            "sass-loader"
          ]
        })
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    extractStyles,
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
  ]
}
