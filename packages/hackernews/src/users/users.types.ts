import type { z } from "zod";

import type { UserSchema, UserParamsSchema } from "./users.validators";

export type User = z.infer<typeof UserSchema>;

export type UserParams = z.infer<typeof UserParamsSchema>;
