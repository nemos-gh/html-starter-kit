const webpack = require("webpack");
const common = require("./webpack.common.js");
const merge = require("webpack-merge");

module.exports = merge(common, {
  devtool: "source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]
})