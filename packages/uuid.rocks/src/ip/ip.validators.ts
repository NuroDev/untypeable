import { z } from "zod";

export const IpSchema = z.string().ip();

export const IpJsonSchema = z.object({
  country: z.string(),
  ip: IpSchema,
});
