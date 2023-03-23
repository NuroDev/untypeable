import { initUntypeable } from "untypeable";

import type {
  Capsule,
  CapsuleParams,
  Capsules,
} from "./capsules/capsules.types";

const u = initUntypeable();

const router = u.router({
  "/capsules": u.output<Capsules>(),
  "/capsules/:id": u.input<CapsuleParams>().output<Capsule>(),
});

export type SpaceXRouter = typeof router;
