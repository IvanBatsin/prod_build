import type webpack from "webpack";
import { type BuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoaders";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const babelLoader: webpack.RuleSetRule = {
    test: /\.(?:js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          ["@babel/preset-env"]
        ]
      }
    }
  };

  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/i,
    use: ["@svgr/webpack"]
  };

  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader"
      }
    ]
  };

  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/
  };

  const scssLoader: webpack.RuleSetRule = buildCssLoaders(options.isDev);

  return [
    scssLoader,
    babelLoader,
    typescriptLoader,
    svgLoader,
    fileLoader
  ];
};
