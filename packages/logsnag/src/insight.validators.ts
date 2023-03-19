import { z } from "zod";

import { SharedLogSnagParamsSchema } from "./_shared.validators";

export const InsightSchema = SharedLogSnagParamsSchema.extend({
  /**
   * Event icon (emoji)
   * must be a single emoji
   * example: "👨"
   */
  icon: z.string().optional(),
  /**
   * Insight title
   * example: "User Count"
   */
  title: z.string(),
  /**
   * Insight value
   * example: 100
   */
  value: z.string().or(z.boolean()).or(z.number()),
});
