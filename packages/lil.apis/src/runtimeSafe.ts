import { initUntypeable } from "untypeable";

import { NewsSchema } from "./news/news.validators";
import { StockSchema, StocksParamsSchema } from "./stocks/stocks.validators";
import {
  WeatherSchema,
  WeatherParamsSchema,
} from "./weather/weather.validators";

const u = initUntypeable();

export const lilSafeRouter = u.router({
  "/news": u.output(NewsSchema),
  "/stocks": u.input(StocksParamsSchema).output(StockSchema),
  "/weather": u.input(WeatherParamsSchema).output(WeatherSchema),
});
