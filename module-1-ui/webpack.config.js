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
      name: "module1",
      library: { type: "var", name: "module1" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Component1": "./src/component",
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
