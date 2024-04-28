import { z } from "zod";

export const StatsSchema = z.object({
  stats_viewed_count: z.number(),
  uuids_generated: z.number(),
});
