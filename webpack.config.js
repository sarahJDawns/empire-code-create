const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/_bundle/main.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.pcss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("postcss-import"),
                require("tailwindcss")("./tailwind.config.js"),
                require("autoprefixer"),
                require("cssnano"),
              ],
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"),
    filename: "main.bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/main.css",
    }),
  ],
};
