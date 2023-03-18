import type { z } from "zod";

import type { StockSchema, StocksParamsSchema } from "./stocks.validators";

export type StocksParams = z.infer<typeof StocksParamsSchema>;

export type Stock = z.infer<typeof StockSchema>;
