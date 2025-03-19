const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // Entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // Clean 'dist' folder on build
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Resolve these extensions
  },
  module: {
    rules: [
      // TypeScript Loader
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // CSS Loader
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      // Image Loader (png, jpg, jpeg, gif, svg)
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset",
      },
      // Font Loader (woff, woff2, eot, ttf, otf)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML template
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    hot: true, // Enable HMR (Hot Module Replacement)
    historyApiFallback: true, // Support for React Router
  },
  mode: "development",
};
