import type { z } from "zod";

import type {
  AddressSchema,
  CompanySchema,
  CreatedUserParamsSchema,
  CreatedUserSchema,
  GeoSchema,
  UserParamsSchema,
  UserSchema,
  UsersParamsSchema,
  UsersSchema,
} from "./user.validators";

export type Geo = z.infer<typeof GeoSchema>;

export type Address = z.infer<typeof AddressSchema>;

export type Company = z.infer<typeof CompanySchema>;

export type User = z.infer<typeof UserSchema>;

export type Users = z.infer<typeof UsersSchema>;

export type UserParams = z.infer<typeof UserParamsSchema>;

export type UsersParams = z.infer<typeof UsersParamsSchema>;

export type CreatedUser = z.infer<typeof CreatedUserSchema>;

export type CreatedUserParams = z.infer<typeof CreatedUserParamsSchema>;
