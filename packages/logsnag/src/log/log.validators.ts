import { z } from "zod";

import { SharedLogSnagParamsSchema } from "../_shared.validators";

export const LogSchema = SharedLogSnagParamsSchema.extend({
  /**
   * Channel name
   * example: "waitlist"
   */
  channel: z.string(),
  /**
   * Event description
   * example: "joe@example.com joined waitlist"
   */
  description: z.string().optional(),
  /**
   * Event name
   * example: "User Joined"
   */
  event: z.string(),
  /**
   * Event icon (emoji)
   * must be a single emoji
   * example: "🎉"
   */
  icon: z.string().emoji().optional(),
  /**
   * Send push notification
   */
  notify: z.boolean().optional(),
  /**
   * Parser for description
   */
  parser: z.enum(["markdown", "text"]).optional(),

  /**
   * Event tags
   * example: { username: "mattie" }
   */
  tags: z
    .record(z.string(), z.string().or(z.number()).or(z.boolean()))
    .optional(),
});
