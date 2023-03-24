import type { z } from "zod";

import type {
  ShipParamsSchema,
  ShipSchema,
  ShipsSchema,
} from "./ships.validators";

export type Ship = z.infer<typeof ShipSchema>;

export type Ships = z.infer<typeof ShipsSchema>;

export type ShipParams = z.infer<typeof ShipParamsSchema>;
