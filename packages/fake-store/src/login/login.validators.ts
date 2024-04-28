import { z } from "zod";

export const LoginParamsSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const LoginSchema = z.object({
  token: z.string(),
});
