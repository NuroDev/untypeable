import type { z } from "zod";

import type {
  HistoryEventParamsSchema,
  HistoryEventSchema,
  HistoryEventsSchema,
} from "./history.validators";

export type HistoryEventParams = z.infer<typeof HistoryEventParamsSchema>;

export type HistoryEvent = z.infer<typeof HistoryEventSchema>;

export type HistoryEvents = z.infer<typeof HistoryEventsSchema>;
