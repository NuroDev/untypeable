import { describe, it } from "vitest";

import { UserSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("Hacker News - Users", () => {
  const client = useTestClient();

  it("GET - User - /v0/user/jl.json", async ({ expect }) => {
    const user = await client("/v0/user/:id.json", {
      id: "jl",
    });

    expect(user).toBeDefined();
    expect(user).toMatchSnapshot();
    expect(UserSchema.safeParse(user).success).toBe(true);
  });
});
