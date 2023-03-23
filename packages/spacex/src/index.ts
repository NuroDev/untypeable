import { initUntypeable } from "untypeable";

import type {
  Capsule,
  CapsuleParams,
  Capsules,
} from "./capsules/capsules.types";
import type { Company } from "./company/company.types";
import type { Core, CoreParams, Cores } from "./cores/cores.types";

const u = initUntypeable();

const router = u.router({
  "/v4/capsules": u.output<Capsules>(),
  "/v4/capsules/:id": u.input<CapsuleParams>().output<Capsule>(),
  "/v4/company": u.output<Company>(),
  "/v4/cores": u.output<Cores>(),
  "/v4/cores/:id": u.input<CoreParams>().output<Core>(),
});

export type SpaceXRouter = typeof router;
