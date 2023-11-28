import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return ({
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')), // применяем модульный подход только к файлам (".module.") - а остальные файлы как обычно
            localIdentName: isDev ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      // "css-loader",
      'sass-loader',
    ],
  });
}
