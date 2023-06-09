import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { type BuildOptions } from "./types/config";
import type webpack from "webpack";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
      publicPath: "/"
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options)
  };
};
