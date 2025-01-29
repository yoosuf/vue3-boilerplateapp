const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("webpack"); // ✅ Import DefinePlugin
const dotenv = require('dotenv');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(process.env.VUE_OPTIONS_API === 'true'),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(process.env.VUE_PROD_DEVTOOLS === 'true'),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(process.env.VUE_PROD_HYDRATION_MISMATCH_DETAILS === 'true'),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
