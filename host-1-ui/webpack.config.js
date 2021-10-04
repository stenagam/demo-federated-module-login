const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
  entry: path.resolve("src/index.js"),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("src/index.html"),
    }),
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        module1: "module1@http://localhost:5001/remoteEntry.js",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
}
