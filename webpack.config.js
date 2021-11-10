const path = require("path");

module.exports = {
  entry: "./app/Main.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "14" } }]],
          },
        },
      },
    ],
  },
  devServer: {
    host: "local-ip",
    hot: true,
    port: 3000,
    open: {
      app: {
        name: "/opt/firefox-84.0b4/firefox/firefox",
        arguments: ["--private-window"],
      },
    },
    static: {
      directory: path.join(__dirname, "app"),
    },
  },
  mode: "development",
  devtool: "eval-source-map",
};
