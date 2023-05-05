import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import webpack from "webpack"
import MiniCssExtractPlugun from 'mini-css-extract-plugin';

export const buildPlugins = (): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../public', 'index.html')
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugun({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
}