import type { WebpackConfiguration } from "webpack-dev-server";
import type { BuildPath } from "../build/types/config";
import path from "path";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";
import { DefinePlugin } from "webpack";

export default ({ config }: { config: WebpackConfiguration }): WebpackConfiguration => {
  const pathConfig: BuildPath = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src")
  };

  config.resolve?.modules?.push(pathConfig.src);
  config.resolve?.extensions?.push(".ts", ".tsx");
  config.module?.rules?.push(buildCssLoaders(true));
  if (config?.module?.rules) {
    config.module.rules = config.module?.rules?.map((rule: any) => {
      if (rule?.test && rule?.test?.toString().includes('svg')) {
        if (rule.test.toString()?.includes("svg")) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      }
      return rule;
    });
  }
  config.module?.rules?.push({
    test: /\.svg$/i,
    use: ["@svgr/webpack"]
  });

  config?.plugins?.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify("")
  }));

  return config;
};
