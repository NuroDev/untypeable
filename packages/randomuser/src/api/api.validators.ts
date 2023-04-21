import { z } from "zod";

export const GenderSchema = z.enum(["male", "female"]);

export const FieldSchema = z.enum([
  "cell",
  "dob",
  "email",
  "gender",
  "id",
  "location",
  "login",
  "name",
  "nat",
  "phone",
  "picture",
  "registered",
]);

export const NationalitySchema = z.enum([
  "AU",
  "BR",
  "CA",
  "CH",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "IE",
  "IN",
  "IR",
  "MX",
  "NL",
  "NO",
  "NZ",
  "RS",
  "TR",
  "UA",
  "US",
]);

export const UserSchema = z.object({
  cell: z.string(),
  dob: z.object({
    age: z.number(),
    date: z.string().datetime(),
  }),
  email: z.string().email(),
  gender: GenderSchema,
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
  nat: NationalitySchema,
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

export const ApiInputSchema = z
  .object({
    exc: z.array(FieldSchema),
    format: z.enum(["csv", "json", "prettyjson", "xml", "yaml"]),
    gender: GenderSchema,
    inc: z.array(FieldSchema),
    nat: NationalitySchema,
    noinfo: z.boolean(),
    page: z.number(),
    password: z.array(z.string()),
    results: z.number(),
    seed: z.string(),
    version: z.enum(["1.0", "1.1", "1.2", "1.3", "1.4"]),
  })
  .partial();
