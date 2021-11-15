const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";
const path = require("path");

module.exports = {
  entry: "./app/index.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app"),
    filename: "bundle.js",
  },
  mode: isDevelopment ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "14" } }]],
              plugins: [isDevelopment && require.resolve("react-refresh/babel")].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
  devServer: {
    host: "local-ip",
    hot: true,
    liveReload: false,
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
  devtool: "eval-source-map",
};
