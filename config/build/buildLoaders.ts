import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  // если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')), // применяем модульный подход только к файлам (".module.") - а остальные файлы как обычно
            localIdentName: isDev ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:8]',
          }
        },
      },
      // "css-loader",
      "sass-loader",
    ],
  };

  return [
    typescriptLoader, cssLoader,
  ]
}
