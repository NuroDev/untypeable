import { z } from "zod";

import { SharedOptionsSchema } from "../_shared/_shared.validators";

export const UserSchema = z.object({
  /**
   * The user's optional self-description.
   *
   * HTML
   */
  about: z.string({
    description: "The user's optional self-description. HTML",
  }),
  /**
   * Creation date of the user, in Unix Time
   */
  created: z.number({ description: "Creation date of the user, in Unix Time" }),
  delay: z.number().optional(),
  /**
   * The user's unique username.
   *
   * Case-sensitive
   */
  id: z.string({ description: "The user's unique username. Case-sensitive" }),
  /**
   * The user's karma
   */
  karma: z.number({ description: "The user's karma" }),
  /**
   * List of the user's stories, polls and comments
   */
  submitted: z.array(z.number(), {
    description: "List of the user's stories, polls and comments",
  }),
});

export const UserParamsSchema = z
  .object({
    /**
     * The user's unique username.
     *
     * Case-sensitive
     */
    id: z.string({
      description: "The user's unique username. Case-sensitive",
    }),
  })
  .and(SharedOptionsSchema.partial());
