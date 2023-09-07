import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration  {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true, // позволяет проксировать запросы через index page (прямой доступ к другим страницам кроме главной)
    hot: true,
  }
}
