import { describe, it } from "vitest";

import { CrewSchema, CrewMemberSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Crew", () => {
  const client = useTestClient();

  it("GET - /v4/crew", async ({ expect }) => {
    const crew = await client("/v4/crew");

    expect(crew).toBeDefined();
    expect(Array.isArray(crew)).toBe(true);
    expect(crew.at(0)).toBeDefined();
    expect(crew.at(0)).toMatchSnapshot();

    expect(CrewSchema.safeParse(crew).success).toBe(true);
  });

  it("GET - /v4/crew/:id", async ({ expect }) => {
    const crewMember = await client("/v4/crew/:id", {
      id: "5ebf1a6e23a9a60006e03a7a",
    });

    expect(crewMember).toBeDefined();
    expect(crewMember).toMatchSnapshot();

    expect(CrewMemberSchema.safeParse(crewMember).success).toBe(true);
  });
});
