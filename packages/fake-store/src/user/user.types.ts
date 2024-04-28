import type { z } from "zod";

import type {
  CreateUserParamsSchema,
  CreateUserSchema,
  DeleteUserParamsSchema,
  UpdateUserParamsSchema,
  UpdateUserSchema,
  UserParamsSchema,
  UserSchema,
  UsersParamsSchema,
  UsersSchema,
} from "./user.validators";

export type UserParams = z.infer<typeof UserParamsSchema>;
export type User = z.infer<typeof UserSchema>;

export type CreateUserParams = z.infer<typeof CreateUserParamsSchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;

export type UpdateUserParams = z.infer<typeof UpdateUserParamsSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;

export type DeleteUserParams = z.infer<typeof DeleteUserParamsSchema>;

// ------------------------------------------------------------------------

export type UsersParams = z.infer<typeof UsersParamsSchema>;
export type Users = z.infer<typeof UsersSchema>;
