import { z } from "zod";

export const GeoSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});

export const AddressSchema = z.object({
  city: z.string(),
  geo: GeoSchema,
  street: z.string(),
  suite: z.string(),
  zipcode: z.string(),
});

export const CompanySchema = z.object({
  name: z.string(),
  catchPhrase: z.string(),
  bs: z.string(),
});

export const UserSchema = z.object({
  address: AddressSchema,
  company: CompanySchema,
  email: z.string().email(),
  id: z.number(),
  name: z.string(),
  phone: z.string(),
  username: z.string(),
  website: z.string().url(),
});

export const UsersSchema = z.array(UserSchema);

export const UserParamsSchema = z.object({
  id: z.number(),
});

export const UsersParamsSchema = UserSchema.partial();
