import { Configuration } from "webpack";

export const webpackConfig: Configuration = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};

export default webpackConfig;
