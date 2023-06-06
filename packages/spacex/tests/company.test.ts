import { describe, it } from "vitest";

import { CompanySchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Company", () => {
  const client = useTestClient();

  it("GET - /v4/company", async ({ expect }) => {
    const company = await client("/v4/company");

    expect(company).toBeDefined();
    expect(company).toMatchSnapshot();

    expect(CompanySchema.safeParse(company).success).toBe(true);
  });
});
