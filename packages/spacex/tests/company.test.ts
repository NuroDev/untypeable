import { describe, it } from "vitest";

import { CompanySchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Company", () => {
  const client = useTestClient();

  it("GET - /company", async ({ expect }) => {
    const company = await client("/company");

    expect(company).toBeDefined();
    expect(company).toMatchSnapshot({
      ceo: "Elon Musk",
      coo: "Gwynne Shotwell",
      cto_propulsion: "Tom Mueller",
      cto: "Elon Musk",
      employees: 9500,
      founded: 2002,
      founder: "Elon Musk",
      headquarters: {
        address: "Rocket Road",
        city: "Hawthorne",
        state: "California",
      },
      id: "5eb75edc42fea42237d7f3ed",
      launch_sites: 3,
      links: {
        elon_twitter: "https://twitter.com/elonmusk",
        flickr: "https://www.flickr.com/photos/spacex/",
        twitter: "https://twitter.com/SpaceX",
        website: "https://www.spacex.com/",
      },
      name: "SpaceX",
      summary:
        "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.",
      test_sites: 3,
      valuation: 74000000000,
      vehicles: 4,
    });

    expect(CompanySchema.safeParse(company).success).toBe(true);
  });
});
