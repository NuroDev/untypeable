import { describe, it } from "vitest";

import {
  AskSchema,
  CommentSchema,
  JobSchema,
  PollSchema,
  PollOptSchema,
  StorySchema,
} from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("Hacker News - Items", () => {
  const client = useTestClient();

  it("GET - Story - /v0/item/8863.json", async ({ expect }) => {
    const story = await client("/v0/item/:id.json", {
      id: 8863,
    });

    expect(story).toBeDefined();
    expect(story).toMatchSnapshot({
      by: "dhouston",
      descendants: 71,
      id: 8863,
      kids: [
        9224, 8917, 8952, 8958, 8884, 8887, 8869, 8873, 8940, 8908, 9005, 9671,
        9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125, 8998, 8901,
        8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876,
      ],
      score: 104,
      time: 1175714200,
      title: "My YC app: Dropbox - Throw away your USB drive",
      type: "story",
      url: "http://www.getdropbox.com/u/2/screencast.html",
    });
    expect(StorySchema.safeParse(story).success).toBe(true);
  });

  it("GET - Comment - /v0/item/2921983.json", async ({ expect }) => {
    const comment = await client("/v0/item/:id.json", {
      id: 2921983,
    });

    expect(comment).toBeDefined();
    expect(comment).toMatchSnapshot({
      by: "norvig",
      id: 2921983,
      kids: [2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141],
      parent: 2921506,
      text: "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
      time: 1314211127,
      type: "comment",
    });
    expect(CommentSchema.safeParse(comment).success).toBe(true);
  });

  it("GET - Ask - /v0/item/121003.json", async ({ expect }) => {
    const ask = await client("/v0/item/:id.json", {
      id: 121003,
    });

    expect(ask).toBeDefined();
    expect(ask).toMatchSnapshot({
      by: "tel",
      descendants: 16,
      id: 121003,
      kids: [121016, 121109, 121168],
      score: 25,
      text: "<i>or</i> HN: the Next Iteration<p>I get the impression that with Arc being released a lot of people who never had time for HN before are suddenly dropping in more often. (PG: what are the numbers on this? I'm envisioning a spike.)<p>Not to say that isn't great, but I'm wary of Diggification. Between links comparing programming to sex and a flurry of gratuitous, ostentatious  adjectives in the headlines it's a bit concerning.<p>80% of the stuff that makes the front page is still pretty awesome, but what's in place to keep the signal/noise ratio high? Does the HN model still work as the community scales? What's in store for (++ HN)?",
      time: 1203647620,
      title: "Ask HN: The Arc Effect",
      type: "story",
    });
    expect(AskSchema.safeParse(ask).success).toBe(true);
  });

  it("GET - Job - /v0/item/192327.json", async ({ expect }) => {
    const job = await client("/v0/item/:id.json", {
      id: 192327,
    });

    expect(job).toBeDefined();
    expect(job).toMatchSnapshot({
      by: "justin",
      id: 192327,
      score: 6,
      text: 'Justin.tv is the biggest live video site online. We serve hundreds of thousands of video streams a day, and have supported up to 50k live concurrent viewers. Our site is growing every week, and we just added a 10 gbps line to our colo. Our unique visitors are up 900% since January.<p>There are a lot of pieces that fit together to make Justin.tv work: our video cluster, IRC server, our web app, and our monitoring and search services, to name a few. A lot of our website is dependent on Flash, and we\'re looking for talented Flash Engineers who know AS2 and AS3 very well who want to be leaders in the development of our Flash.<p>Responsibilities<p><pre><code>    * Contribute to product design and implementation discussions\n    * Implement projects from the idea phase to production\n    * Test and iterate code before and after production release \n</code></pre>\nQualifications<p><pre><code>    * You should know AS2, AS3, and maybe a little be of Flex.\n    * Experience building web applications.\n    * A strong desire to work on website with passionate users and ideas for how to improve it.\n    * Experience hacking video streams, python, Twisted or rails all a plus.\n</code></pre>\nWhile we\'re growing rapidly, Justin.tv is still a small, technology focused company, built by hackers for hackers. Seven of our ten person team are engineers or designers. We believe in rapid development, and push out new code releases every week. We\'re based in a beautiful office in the SOMA district of SF, one block from the caltrain station. If you want a fun job hacking on code that will touch a lot of people, JTV is for you.<p>Note: You must be physically present in SF to work for JTV. Completing the technical problem at <a href="http://www.justin.tv/problems/bml" rel="nofollow">http://www.justin.tv/problems/bml</a> will go a long way with us. Cheers!',
      time: 1210981217,
      title: "Justin.tv is looking for a Lead Flash Engineer!",
      type: "job",
      url: "",
    });
    expect(JobSchema.safeParse(job).success).toBe(true);
  });

  it("GET - Poll - /v0/item/126809.json", async ({ expect }) => {
    const poll = await client("/v0/item/:id.json", {
      id: 126809,
    });

    expect(poll).toBeDefined();
    expect(poll).toMatchSnapshot({
      by: "pg",
      descendants: 54,
      id: 126809,
      kids: [
        126822, 126823, 126917, 126993, 126824, 126934, 127411, 126888, 127681,
        126818, 126816, 126854, 127095, 126861, 127313, 127299, 126859, 126852,
        126882, 126832, 127072, 127217, 126889, 126875, 127535,
      ],
      parts: [126810, 126811, 126812],
      score: 47,
      time: 1204403652,
      title:
        "Poll: What would happen if News.YC had explicit support for polls?",
      type: "poll",
    });
    expect(PollSchema.safeParse(poll).success).toBe(true);
  });

  it("GET - Poll Option - /v0/item/160705.json", async ({ expect }) => {
    const pollOpt = await client("/v0/item/:id.json", {
      id: 160705,
    });

    expect(pollOpt).toBeDefined();
    expect(pollOpt).toMatchSnapshot({
      by: "pg",
      id: 160705,
      poll: 160704,
      score: 335,
      text: "Yes, ban them; I'm tired of seeing Valleywag stories on News.YC.",
      time: 1207886576,
      type: "pollopt",
    });
    expect(PollOptSchema.safeParse(pollOpt).success).toBe(true);
  });
});
