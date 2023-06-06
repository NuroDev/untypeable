import { describe, it } from "vitest";

import { RoadsterSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Roadster", () => {
  const client = useTestClient();

  it("GET - /v4/roadster", async ({ expect }) => {
    const roadster = await client("/v4/roadster");

    expect(roadster).toBeDefined();
    expect(roadster).toMatchSnapshot();

    expect(RoadsterSchema.safeParse(roadster).success).toBe(true);
  });
});
