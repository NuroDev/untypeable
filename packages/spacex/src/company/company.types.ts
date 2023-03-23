import type { z } from "zod";

import type { CompanySchema, HeadquartersSchema } from "./company.validators";

export type Headquarters = z.infer<typeof HeadquartersSchema>;

export type Company = z.infer<typeof CompanySchema>;
