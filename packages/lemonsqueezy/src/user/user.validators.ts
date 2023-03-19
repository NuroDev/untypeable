import { z } from "zod";

import { DataType, defineLemonSqueezySchema } from "../_shared.validators";

/**
 * @docs https://docs.lemonsqueezy.com/api/users#the-user-object
 */
export const UserSchema = defineLemonSqueezySchema(
  z.object({
    attributes: z.object({
      /**
       * A URL to the avatar image for this user. If the user has not uploaded a custom avatar, this will point to their Gravatar URL.
       */
      avatar_url: z.string(),
      /**
       * A randomly generated hex color code for the user. We use this internally as the background color of an avatar if the user has not uploaded a custom avatar.
       */
      color: z.string(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was created.
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      createdAt: z.string().datetime(),
      /**
       * The email address of the user.
       */
      email: z.string(),
      /**
       * Has the value `true` if the user has uploaded a custom avatar image.
       */
      has_custom_avatar: z.boolean(),
      /**
       * The name of the user.
       */
      name: z.string(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was last updated.
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      updatedAt: z.string().datetime(),
    }),
    id: z.string(),
    links: z.object({
      self: z.string(),
    }),
    type: z.literal(DataType.enum.users),
  })
);
