import type { z } from "zod";

import type {
  ForecastSchema,
  WeatherParamsSchema,
  WeatherSchema,
} from "./weather.validators";

export type WeatherParams = z.infer<typeof WeatherParamsSchema>;

export type Forecast = z.infer<typeof ForecastSchema>;

export type Weather = z.infer<typeof WeatherSchema>;
