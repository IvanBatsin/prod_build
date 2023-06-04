import type { WebpackConfiguration } from "webpack-dev-server";
import { BuildPath } from "../build/types/config";
import path from "path";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";

export default ({config}: {config: WebpackConfiguration}) => {
  const pathConfig: BuildPath = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config.resolve?.modules?.push(pathConfig.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(buildCssLoaders(true));
  config.module!.rules = config.module?.rules?.map((rule: any) => {
    if (/svg/.test(rule.test as string) && rule.test) {
      return { ...rule, exclude: /\.svg$/i};
    }
    return rule;
  });
  config.module?.rules?.push({
    test: /\.svg$/i,
    use: ["@svgr/webpack"]
  });

  return config;
}