import { describe, it, expect } from "vitest";

import { DataType } from "../src/_shared.validators";
import { UserSchema } from "../src/user/user.validators";
import { useTestClient } from "./_client";

describe.concurrent("Lemon Squeezy - User", () => {
  const client = useTestClient();

  it("GET - /users/me", async () => {
    const user = await client("/users/me", "GET");

    expect(user).toBeDefined();
    expect(user.data).toBeDefined();
    expect(user.data.type).toBe(DataType.enum.users);
    expect(user.errors).toBeUndefined();

    expect(UserSchema.safeParse(user).success).toBe(true);
  });
});
