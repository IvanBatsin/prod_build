import type webpack from "webpack";
import { type BuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import babelRemovePropsPlugin from "../babel/babelRemovePropsPlugin";

interface BabelLoaderProps extends BuildOptions {
  isTsx?: boolean
}

const buildBabelLoader = (options: BabelLoaderProps): webpack.RuleSetRule => {
  const plugins: any[] = [
    ["@babel/plugin-transform-typescript",
      {
        isTSX: options.isTsx
      }
    ],
    "@babel/plugin-transform-runtime"
  ];

  if (options.isTsx) {
    plugins.push(
      [babelRemovePropsPlugin, { props: ["data-testid"] }]
    );
  }
  return {
    test: options.isTsx ? /\.(?:jsx|tsx)$/ : /\.(?:js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          ["@babel/preset-env"]
        ],
        plugins
      }
    }
  };
};

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const babelLoader: webpack.RuleSetRule = buildBabelLoader({ ...options, isTsx: false });
  const babelTsxLoader: webpack.RuleSetRule = buildBabelLoader({ ...options, isTsx: true });

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

  const scssLoader: webpack.RuleSetRule = buildCssLoaders(options.isDev);

  return [
    scssLoader,
    babelLoader,
    babelTsxLoader,
    svgLoader,
    fileLoader
  ];
};
