import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugun from "mini-css-extract-plugin";
import { type BuildOptions } from "./types/config";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
  const result = [
    new HtmlWebpackPlugin({
      template: options.paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugun({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css"
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev),
      __API__: JSON.stringify(options.apiURL)
    })
  ];

  if (options.isDev) {
    result.push(new ReactRefreshWebpackPlugin());
    result.push(new webpack.HotModuleReplacementPlugin());
    result.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }));
  }

  return result;
};
