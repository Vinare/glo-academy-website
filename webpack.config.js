const path = require("path");

module.exports = {
  cache: false,
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "js"),
    clean: true,
  },
  devtool: "inline-source-map",
};
