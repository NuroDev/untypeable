import { z } from "zod";

export const SharedOptionsSchema = z.object({
  /**
   * The format of the response.
   */
  print: z.enum(["pretty"]).optional(),
});
