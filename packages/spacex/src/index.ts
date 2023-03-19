import { initUntypeable } from "untypeable";

const u = initUntypeable();

const router = u.router({});

export type SpaceXRouter = typeof router;
