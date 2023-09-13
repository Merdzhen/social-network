import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true, // позволяет проксировать запросы через index page (прямой доступ к другим страницам кроме главной)
    hot: true,
  };
}
