import { initUntypeable } from "untypeable";

import type { News } from "./news/news.types";
import type { Stock, StocksParams } from "./stocks/stocks.types";
import type { Weather, WeatherParams } from "./weather/weather.types";

const u = initUntypeable();

const router = u.router({
  "/news": u.output<News>(),
  "/stocks": u.input<StocksParams>().output<Stock>(),
  "/weather": u.input<WeatherParams>().output<Weather>(),
});

export type LilRouter = typeof router;
