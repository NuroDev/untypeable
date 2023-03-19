import type { z } from "zod";

import type { UserSchema } from "~/user/user.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/users#the-user-object
 */
export type User = z.infer<typeof UserSchema>;
