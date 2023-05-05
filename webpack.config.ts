import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildENV, BuildPath } from './config/build/types/config';

export default (env: BuildENV) => {
  const paths: BuildPath = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html')
  };
  
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;
  
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    isDev,
    paths,
    port: PORT
  });

  return config;
} 