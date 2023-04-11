import { z } from "zod";

import { SharedOptionsSchema } from "../_shared/_shared.validators";

const BaseItemSchema = z.object({
  /**
   * The username of the item's author
   */
  by: z.string({
    description: "The username of the item's author",
  }),
  /**
   * `true` if the item is dead
   */
  dead: z.boolean({
    description: "`true` if the item is dead",
  }),
  /**
   * `true` if the item is deleted
   */
  deleted: z.boolean({
    description: "`true` if the item is deleted",
  }),
  /**
   * In the case of stories or polls, the total comment count
   */
  descendants: z.number({
    description: "In the case of stories or polls, the total comment count",
  }),
  /**
   * The item's unique id
   */
  id: z.number({
    description: "The item's unique id",
  }),
  /**
   * The ids of the item's comments, in ranked display order
   */
  kids: z.array(z.number(), {
    description: "The ids of the item's comments, in ranked display order",
  }),
  /**
   * The comment's parent: either another comment or the relevant story
   */
  parent: z.unknown({
    description:
      "The comment's parent: either another comment or the relevant story",
  }),
  /**
   * A list of related pollopts, in display order
   */
  parts: z.unknown({
    description: "A list of related pollopts, in display order",
  }),
  /**
   * The pollopt's associated poll
   */
  poll: z.unknown({
    description: "The pollopt's associated poll",
  }),
  /**
   * The story's score, or the votes for a pollopt
   */
  score: z.number({
    description: "The story's score, or the votes for a pollopt",
  }),
  /**
   * The comment, story or poll text. HTML
   */
  text: z.string({
    description: "The comment, story or poll text. HTML",
  }),
  /**
   * Creation date of the item, in Unix Time
   */
  time: z.number({
    description: "Creation date of the item, in Unix Time",
  }),
  /**
   * The title of the story, poll or job. HTML
   */
  title: z.string({
    description: "The title of the story, poll or job. HTML",
  }),
  /**
   * The type of item. One of "job", "story", "comment", "poll", or "pollopt"
   */
  type: z.enum(["comment", "job", "poll", "pollopt", "story"], {
    description:
      'The type of item. One of "job", "story", "comment", "poll", or "pollopt"',
  }),
  /**
   * The URL of the story
   */
  url: z
    .string({
      description: "The URL of the story",
    })
    .url()
    .or(z.literal("")),
});

export const StorySchema = BaseItemSchema.pick({
  by: true,
  descendants: true,
  id: true,
  kids: true,
  score: true,
  time: true,
  title: true,
  type: true,
  url: true,
});

export const CommentSchema = BaseItemSchema.pick({
  by: true,
  id: true,
  kids: true,
  parent: true,
  text: true,
  time: true,
  type: true,
});

export const AskSchema = BaseItemSchema.pick({
  by: true,
  descendants: true,
  id: true,
  kids: true,
  score: true,
  text: true,
  time: true,
  title: true,
  type: true,
});

export const JobSchema = BaseItemSchema.pick({
  by: true,
  id: true,
  score: true,
  text: true,
  time: true,
  title: true,
  type: true,
  url: true,
});

export const PollSchema = BaseItemSchema.pick({
  by: true,
  descendants: true,
  id: true,
  kids: true,
  parts: true,
  score: true,
  time: true,
  title: true,
  type: true,
}).and(
  BaseItemSchema.pick({
    text: true,
  }).partial()
);

export const PollOptSchema = BaseItemSchema.pick({
  by: true,
  id: true,
  poll: true,
  score: true,
  text: true,
  time: true,
  type: true,
});

export const ItemSchema = StorySchema.or(CommentSchema)
  .or(AskSchema)
  .or(JobSchema)
  .or(PollSchema)
  .or(PollOptSchema);

export const ItemParamsSchema = z
  .object({
    /**
     * The item's unique id
     */
    id: z.number({
      description: "The item's unique id",
    }),
  })
  .and(SharedOptionsSchema.partial());
