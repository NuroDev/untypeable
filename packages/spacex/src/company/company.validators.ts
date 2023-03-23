import { z } from "zod";

export const HeadquartersSchema = z.object({
  address: z.string(),
  city: z.string(),
  state: z.string(),
});

export const CompanySchema = z.object({
  ceo: z.string(),
  coo: z.string(),
  cto_propulsion: z.string(),
  cto: z.string(),
  employees: z.number(),
  founded: z.number(),
  founder: z.string(),
  headquarters: HeadquartersSchema,
  id: z.string(),
  launch_sites: z.number(),
  links: z.object({
    elon_twitter: z.string().url(),
    flickr: z.string().url(),
    twitter: z.string().url(),
    website: z.string().url(),
  }),
  name: z.string(),
  summary: z.string(),
  test_sites: z.number(),
  valuation: z.number(),
  vehicles: z.number(),
});
