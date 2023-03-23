import { initUntypeable } from "untypeable";

import type {
  Capsule,
  CapsuleParams,
  Capsules,
} from "./capsules/capsules.types";
import type { Company } from "./company/company.types";
import type { Core, CoreParams, Cores } from "./cores/cores.types";
import type { Crew, CrewMember, CrewMemberParams } from "./crew/crew.types";
import type { Dragon, DragonParams, Dragons } from "./dragons/dragons.types";

const u = initUntypeable();

const router = u.router({
  "/v4/capsules": u.output<Capsules>(),
  "/v4/capsules/:id": u.input<CapsuleParams>().output<Capsule>(),
  "/v4/company": u.output<Company>(),
  "/v4/cores": u.output<Cores>(),
  "/v4/cores/:id": u.input<CoreParams>().output<Core>(),
  "/v4/crew": u.output<Crew>(),
  "/v4/crew/:id": u.input<CrewMemberParams>().output<CrewMember>(),
  "/v4/dragons": u.output<Dragons>(),
  "/v4/dragons/:id": u.input<DragonParams>().output<Dragon>(),
});

export type SpaceXRouter = typeof router;
