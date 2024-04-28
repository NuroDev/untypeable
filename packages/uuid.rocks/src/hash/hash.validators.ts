import { z } from "zod";

export const HashParamsSchema = z.object({
  algo: z.union([z.literal("md5"), z.literal("sha1"), z.literal("sha256")]),
  data: z.string().min(1),
});

export const HashSchema = z.string();
