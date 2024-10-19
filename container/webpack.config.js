const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: { port: 8080 },
  plugins: [
    //  take all dynamic js fiels coming out from webpack and insert in index.html
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
