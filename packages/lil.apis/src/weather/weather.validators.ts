import { z } from "zod";

export const WeatherParamsSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
});

export const ForecastSchema = z.object({
  description: z.string(),
  name: z.string(),
  temperature: z.number(),
  unit: z.union([z.literal("C"), z.literal("F")]),
});

export const WeatherSchema = z.object({
  error: z.boolean().optional(),
  forecast: z.array(ForecastSchema).optional(),
});
