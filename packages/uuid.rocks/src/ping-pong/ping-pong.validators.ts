import { z } from "zod";

export const PingPongSchema = z.union([z.literal("ping"), z.literal("pong")]);

export const PingPongJsonSchema = z.object({
  country: z.string(),
  ip: z.string().ip({ version: "v4" }),
  ping: PingPongSchema,
});
