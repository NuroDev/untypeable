import type { z } from "zod";

import type {
  ApiSchema,
  ApiInputSchema,
  FieldSchema,
  GenderSchema,
  NationalitySchema,
  UserSchema,
} from "./api.validators";

export type Api = z.infer<typeof ApiSchema>;

export type ApiInput = z.infer<typeof ApiInputSchema>;

export type Field = z.infer<typeof FieldSchema>;

export type Gender = z.infer<typeof GenderSchema>;

export type Nationality = z.infer<typeof NationalitySchema>;

export type User = z.infer<typeof UserSchema>;
