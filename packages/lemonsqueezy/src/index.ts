import { initUntypeable } from "untypeable";

import type { User } from "./user";
import type { Variant, VariantParams, Variants } from "./variant";

const u = initUntypeable();

const router = u.router({
  "/users/me": u.output<User>(),
  "/variants": u.output<Variants>(),
  "/variants/:id": u.input<VariantParams>().output<Variant>(),
});

export type LemonSqueezyRouter = typeof router;

export { DataType } from "./_shared";
export { Interval } from "./variant";
