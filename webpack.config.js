// Requires
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

// System Variables
const paths = {
  src: {
    js: "./src/js/",
    sass: "./src/sass/",
    img: "./src/img/",
    html: "./src/html/",
    data: "./src/data/",
  },
  dist: {
    js: "./js/",
    css: "./css/",
    img: "./img/",
    html: "./",
    data: "./data/",
  },
};

module.exports = {
  mode: "development", // TODO set to production when publishing
  entry: {
    global: [paths.src.js + "global.js", paths.src.sass + "styles.scss"],
    // [filename]: paths.src.views + '[filename].js'
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: paths.dist.js + "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "./src/.htaccess",
          to: "./",
        },
        {
          from: paths.src.html,
          to: paths.dist.html,
        },
        {
          from: paths.src.img,
          to: paths.dist.img,
        },
        {
          from: paths.src.data,
          to: paths.dist.data,
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: paths.dist.css + "/styles.css",
    }),
    new CleanWebpackPlugin(),
  ],
};
