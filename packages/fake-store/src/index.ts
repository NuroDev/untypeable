import { initUntypeable } from "untypeable";

const u = initUntypeable();

const router = u.router({});

export type FakeStoreRouter = typeof router;
