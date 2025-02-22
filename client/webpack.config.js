const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  /*
    We need to pass complete path relative to root directory here as we are running webpack from root.
    The package.json file is in root directory and hence npm run build runs from there. 
  */
  entry: "./client/src/index.js", 
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/public/index.html",
    })
  ]
}