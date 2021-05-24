const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    historyApiFallback: true,
    inline: false,
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-react-loader",
      },
      {
        test: /\.tsx$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
