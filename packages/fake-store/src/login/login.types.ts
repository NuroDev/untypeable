import type { z } from "zod";

import type { LoginParamsSchema, LoginSchema } from "./login.validators";

export type LoginParams = z.infer<typeof LoginParamsSchema>;

export type Login = z.infer<typeof LoginSchema>;
