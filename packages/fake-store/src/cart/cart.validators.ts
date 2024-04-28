import { z } from "zod";

import { SharedParamsSchema } from "../_shared/_shared.validators";

const SharedCartParamsSchema = SharedParamsSchema.extend({
  startdate: z.string().date(),
  enddate: z.string().date(),
}).partial();
