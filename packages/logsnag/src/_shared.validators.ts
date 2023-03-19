import { z } from "zod";

export const SharedLogSnagParamsSchema = z.object({
  apiVersion: z.enum(["v1"]).optional(),
  /**
   * Project name
   */
  project: z.string(),
});
