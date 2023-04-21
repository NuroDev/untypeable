import type { z } from "zod";

import type { ApiSchema, UserSchema } from "./api.validators";

export type User = z.infer<typeof UserSchema>;

export type Api = z.infer<typeof ApiSchema>;
