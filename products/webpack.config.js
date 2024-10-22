const htmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  mode: "development",
  devServer: { port: 8081 },
  plugins: [
    //  take all dynamic js fiels coming out from webpack and insert in index.html
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name:"products",
      filename:"remoteEntry.js",
      exposes:{
        "./ProductsIndex":"./src/index"
      }
    })
  ],
};
