import path from "path";
import type webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import type { BuildENV, BuildPath } from "./config/build/types/config";

export default (env: BuildENV): webpack.Configuration => {
  const paths: BuildPath = {
    build: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    locales: path.resolve(__dirname, "public", "locales"),
    buildLocales: path.resolve(__dirname, "build", "locales")
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;
  const apiURL = env.apiURL || "http://localhost:8000"

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    isDev,
    paths,
    port: PORT,
    apiURL,
    project: "frontend"
  });

  return config;
};
