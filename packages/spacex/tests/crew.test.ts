import { describe, it } from "vitest";

import { CrewSchema, CrewMemberSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Crew", () => {
  const client = useTestClient();

  it("GET - /crew", async ({ expect }) => {
    const crew = await client("/v4/crew");

    expect(crew).toBeDefined();
    expect(Array.isArray(crew)).toBe(true);
    expect(crew.at(0)).toBeDefined();
    expect(crew.at(0)).toMatchSnapshot({
      agency: "NASA",
      id: "5ebf1a6e23a9a60006e03a7a",
      image: "https://imgur.com/0smMgMH.png",
      launches: ["5eb87d46ffd86e000604b388"],
      name: "Robert Behnken",
      status: "active",
      wikipedia: "https://en.wikipedia.org/wiki/Robert_L._Behnken",
    });

    expect(CrewSchema.safeParse(crew).success).toBe(true);
  });

  it("GET - /crew/:id", async ({ expect }) => {
    const crewMember = await client("/v4/crew/:id", {
      id: "5ebf1a6e23a9a60006e03a7a",
    });

    expect(crewMember).toBeDefined();
    expect(crewMember).toMatchSnapshot({
      agency: "NASA",
      id: "5ebf1a6e23a9a60006e03a7a",
      image: "https://imgur.com/0smMgMH.png",
      launches: ["5eb87d46ffd86e000604b388"],
      name: "Robert Behnken",
      status: "active",
      wikipedia: "https://en.wikipedia.org/wiki/Robert_L._Behnken",
    });

    expect(CrewMemberSchema.safeParse(crewMember).success).toBe(true);
  });
});
