import { describe, it } from "vitest";

import { FilmSchema, FilmsSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SWAPI - Films", () => {
  const client = useTestClient();

  it("GET - /films", async ({ expect }) => {
    const films = await client("/films");

    expect(films).toBeDefined();
    expect(films.count).toBeDefined();
    expect(films.next).toBeDefined();
    expect(films.previous).toBeDefined();
    expect(Array.isArray(films.results)).toBe(true);
    expect(films.results.length).toBeGreaterThan(0);
    expect(films.results.at(0)).toBeDefined();

    expect(FilmsSchema.safeParse(films).success).toBe(true);
  });

  it("GET - /films/:id", async ({ expect }) => {
    const film = await client("/films/:id", {
      id: 1,
    });

    expect(film).toBeDefined();
    expect(film).toMatchSnapshot({
      title: "A New Hope",
      episode_id: 4,
      opening_crawl:
        "It is a period of civil war.\r\n" +
        "Rebel spaceships, striking\r\n" +
        "from a hidden base, have won\r\n" +
        "their first victory against\r\n" +
        "the evil Galactic Empire.\r\n" +
        "\r\n" +
        "During the battle, Rebel\r\n" +
        "spies managed to steal secret\r\n" +
        "plans to the Empire's\r\n" +
        "ultimate weapon, the DEATH\r\n" +
        "STAR, an armored space\r\n" +
        "station with enough power\r\n" +
        "to destroy an entire planet.\r\n" +
        "\r\n" +
        "Pursued by the Empire's\r\n" +
        "sinister agents, Princess\r\n" +
        "Leia races home aboard her\r\n" +
        "starship, custodian of the\r\n" +
        "stolen plans that can save her\r\n" +
        "people and restore\r\n" +
        "freedom to the galaxy....",
      director: "George Lucas",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      characters: [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/3/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/5/",
        "https://swapi.dev/api/people/6/",
        "https://swapi.dev/api/people/7/",
        "https://swapi.dev/api/people/8/",
        "https://swapi.dev/api/people/9/",
        "https://swapi.dev/api/people/10/",
        "https://swapi.dev/api/people/12/",
        "https://swapi.dev/api/people/13/",
        "https://swapi.dev/api/people/14/",
        "https://swapi.dev/api/people/15/",
        "https://swapi.dev/api/people/16/",
        "https://swapi.dev/api/people/18/",
        "https://swapi.dev/api/people/19/",
        "https://swapi.dev/api/people/81/",
      ],
      planets: [
        "https://swapi.dev/api/planets/1/",
        "https://swapi.dev/api/planets/2/",
        "https://swapi.dev/api/planets/3/",
      ],
      starships: [
        "https://swapi.dev/api/starships/2/",
        "https://swapi.dev/api/starships/3/",
        "https://swapi.dev/api/starships/5/",
        "https://swapi.dev/api/starships/9/",
        "https://swapi.dev/api/starships/10/",
        "https://swapi.dev/api/starships/11/",
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/13/",
      ],
      vehicles: [
        "https://swapi.dev/api/vehicles/4/",
        "https://swapi.dev/api/vehicles/6/",
        "https://swapi.dev/api/vehicles/7/",
        "https://swapi.dev/api/vehicles/8/",
      ],
      species: [
        "https://swapi.dev/api/species/1/",
        "https://swapi.dev/api/species/2/",
        "https://swapi.dev/api/species/3/",
        "https://swapi.dev/api/species/4/",
        "https://swapi.dev/api/species/5/",
      ],
      created: "2014-12-10T14:23:31.880000Z",
      edited: "2014-12-20T19:49:45.256000Z",
      url: "https://swapi.dev/api/films/1/",
    });

    expect(FilmSchema.safeParse(film).success).toBe(true);
  });
});
