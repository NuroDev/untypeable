import { z } from "zod";

export const HistoryEventSchema = z.object({
  details: z.string().nullable().default(null),
  event_date_unix: z.number().nullable().default(null),
  event_date_utc: z.string().datetime(),
  title: z.string().nullable().default(null),
  links: z.object({
    article: z.string().url().nullable().default(null),
  }),
});

export const HistoryEventsSchema = z.array(HistoryEventSchema);

export const HistoryEventParamsSchema = z.object({
  id: z.string(),
});
