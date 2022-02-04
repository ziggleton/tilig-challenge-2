const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../public"),
  devServer: {
    host: "localhost",
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/index.scss";`,
      },
    },
  },
};
