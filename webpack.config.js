const { VueLoaderPlugin } = require("vue-loader");

const path = require("path");

module.exports = {
  entry: path.resolve(__dirname + "/src/VueLPage.vue"),
  output: {
    path: path.resolve(__dirname + "/dist/"),
    filename: "vue-lpage.js",
    library: "vue-lpage",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
