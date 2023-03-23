import { initUntypeable } from "untypeable";

import type {
  Capsule,
  CapsuleParams,
  Capsules,
} from "./capsules/capsules.types";
import type { Company } from "./company/company.types";

const u = initUntypeable();

const router = u.router({
  "/capsules": u.output<Capsules>(),
  "/capsules/:id": u.input<CapsuleParams>().output<Capsule>(),
  "/company": u.output<Company>(),
});

export type SpaceXRouter = typeof router;
