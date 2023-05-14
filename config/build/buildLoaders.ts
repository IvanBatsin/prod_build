import type webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type BuildOptions } from "./types/config";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

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

  const scssLoader: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
          }
        }
      },
      "sass-loader",
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              [
                "autoprefixer"
              ]
            ]
          }
        }
      }
    ]
  };

  return [
    scssLoader,
    babelLoader,
    typescriptLoader,
    svgLoader,
    fileLoader
  ];
};
