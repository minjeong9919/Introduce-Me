const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/directory-to-crawl/, (data) => {
      // 여기서 필요한 로직을 작성하여 모듈을 동적으로 로드합니다.
      // data.request는 동적으로 로드되는 모듈의 경로입니다.
      // 예를 들어, 동적으로 로드되는 모듈이 /directory-to-crawl/module1.js일 경우,
      // data.request는 './module1'이 됩니다.
      return /./.test(data.request);
    }),
  ],
};
