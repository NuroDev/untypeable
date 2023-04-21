import { z } from "zod";

export const UserSchema = z.object({
  cell: z.string(),
  dob: z.object({
    age: z.number(),
    date: z.string().datetime(),
  }),
  email: z.string().email(),
  gender: z.enum(["male", "female"]),
  id: z.object({
    name: z.string(),
    value: z.string().nullable(),
  }),
  location: z.object({
    city: z.string(),
    coordinates: z.object({
      latitude: z.string().transform(Number),
      longitude: z.string().transform(Number),
    }),
    country: z.string(),
    postcode: z.string().or(z.number()),
    state: z.string(),
    street: z.object({
      name: z.string(),
      number: z.number(),
    }),
    timezone: z.object({
      description: z.string(),
      offset: z.string(),
    }),
  }),
  login: z.object({
    md5: z.string(),
    password: z.string(),
    salt: z.string(),
    sha1: z.string(),
    sha256: z.string(),
    username: z.string(),
    uuid: z.string().uuid(),
  }),
  name: z.object({
    first: z.string(),
    last: z.string(),
    title: z.string(),
  }),
  nat: z.string().min(2).max(2),
  phone: z.string(),
  picture: z.object({
    large: z.string().url(),
    medium: z.string().url(),
    thumbnail: z.string().url(),
  }),
  registered: z.object({
    age: z.number(),
    date: z.string().datetime(),
  }),
});

export const ApiSchema = z.object({
  info: z.object({
    page: z.number(),
    results: z.number(),
    seed: z.string(),
    version: z.string(),
  }),
  results: z.array(UserSchema),
});
