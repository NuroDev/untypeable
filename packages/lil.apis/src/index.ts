import { initUntypeable } from "untypeable";

import type { News } from "./news.types";
import type { Stock, StocksParams } from "./stocks.types";
import type { Weather, WeatherParams } from "./weather.types";

const u = initUntypeable();

const router = u.router({
  "/news": u.output<News>(),
  "/stocks": u.input<StocksParams>().output<Stock>(),
  "/weather": u.input<WeatherParams>().output<Weather>(),
});

export type LilRouter = typeof router;

export type { Article, News } from "./news.types";
export type { Stock, StocksParams } from "./stocks.types";
export type { Forecast, Weather, WeatherParams } from "./weather.types";
