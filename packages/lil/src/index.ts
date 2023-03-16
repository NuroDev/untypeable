import { initUntypeable } from "untypeable";

import type { News } from "./news";
import type { Stock, StocksParams } from "./stocks";
import type { Weather, WeatherParams } from "./weather";

const u = initUntypeable();

const router = u.router({
  "/news": u.output<News>(),
  "/stocks": u.input<StocksParams>().output<Stock>(),
  "/weather": u.input<WeatherParams>().output<Weather>(),
});

export type LilRouter = typeof router;
