import { z } from "zod";

export const StocksParamsSchema = z.object({
  symbol: z.string(),
});

export const StockSchema = z.object({
  current: z.number(),
  high: z.number(),
  low: z.number(),
  name: z.string().nullable(),
  open: z.number(),
  previous_close: z.number(),
});
