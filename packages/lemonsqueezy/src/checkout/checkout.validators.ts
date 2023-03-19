import { z } from "zod";

import {
  DataType,
  defineLemonSqueezySchema,
} from "../_shared/_shared.validators";

export const BillingAddressSchema = z.object({
  /**
   * A pre-filled billing address country in a ISO 3166-1 alpha-2 format
   *
   * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  country: z.string(),
  /**
   * A pre-filled billing address zip/postal code
   */
  zip: z.string(),
});

export const CheckoutDataSchema = z.object({
  billing_address: BillingAddressSchema,
  /**
   * An object containing any custom data to be passed to the checkout
   */
  custom: z.array(z.any()).optional(),
  /**
   * A pre-filled discount code
   */
  discount_code: z.string().optional(),
  /**
   * A pre-filled email address
   */
  email: z.string().email(),
  /**
   * A pre-filled name
   */
  name: z.string(),
  /**
   * A pre-filled tax number
   */
  tax_number: z.string().optional(),
});

export const CheckoutOptionsSchema = z.object({
  /**
   * A custom hex color to use for the checkout button
   */
  button_color: z.string().startsWith("#").optional(),
  /**
   * If `true`, use the dark theme
   */
  dark: z.boolean().optional(),
  /**
   * If `false`, hide the product description
   */
  desc: z.boolean().optional(),
  /**
   * If `false`, hide the discount code field
   */
  discount: z.boolean().optional(),
  /**
   * If `true`, show the checkout overlay
   *
   * @docs https://docs.lemonsqueezy.com/help/checkout/checkout-overlay
   */
  embed: z.boolean().optional(),
  /**
   * If `false`, hide the store logo
   */
  logo: z.boolean().optional(),
  /**
   * If `false`, hide the product media
   */
  media: z.boolean().optional(),
});

export const CheckoutPreviewSchema = z.object({
  currency_rate: z.number(),
  currency: z.string(),
  discount_total_formatted: z.string(),
  discount_total_usd: z.number(),
  discount_total: z.number(),
  subtotal_formatted: z.string(),
  subtotal_usd: z.number(),
  subtotal: z.number(),
  tax_formatted: z.string(),
  tax_usd: z.number(),
  tax: z.number(),
  total_formatted: z.string(),
  total_usd: z.number(),
  total: z.number(),
});

export const ProductParamsSchema = z.object({
  /**
   * A custom description for the product
   */
  description: z.string(),
  /**
   * An array of variant IDs to enable for this checkout. If this is empty, all variants will be enabled
   */
  enabled_variants: z.array(z.string()).optional(),
  /**
   * An array of image URLs to use as the product's media
   */
  media: z.array(z.string()).optional(),
  /**
   * A custom name for the product
   */
  name: z.string(),
  /**
   * A custom text to use for the order receipt email button
   */
  receipt_button_text: z.string(),
  /**
   * A custom URL to use for the order receipt email button
   */
  receipt_link_url: z.string(),
  /**
   * A custom thank you note to use for the order receipt email
   */
  receipt_thank_you_note: z.string(),
  /**
   * A custom URL to redirect to after a successful purchase
   */
  redirect_url: z.string(),
});

/**
 * @docs https://docs.lemonsqueezy.com/api/checkouts#the-checkout-object
 */
export const CheckoutSchema = defineLemonSqueezySchema(
  z.object({
    attributes: z.object({
      /**
       * An object containing any prefill or custom data to be used in the checkout
       *
       * @docs https://docs.lemonsqueezy.com/help/checkout/prefilling-checkout-fields
       * @docs https://docs.lemonsqueezy.com/help/checkout/passing-custom-data
       */
      checkout_data: CheckoutDataSchema,
      /**
       * An object containing checkout options for this checkout
       */
      checkout_options: CheckoutOptionsSchema,
      /**
       * An ISO-8601 formatted date-time string indicating when the object was created
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      created_at: z.string().datetime(),
      /**
       * If the value is not `null`, this represents a positive integer in cents representing the custom price of the variant
       */
      custom_price: z.number().nullable(),
      /**
       * An ISO-8601 formatted date-time string indicating when the checkout expires
       *
       * Can be `null` if the checkout is perpetual
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      expires_at: z.string().datetime().nullable(),
      preview: CheckoutPreviewSchema.or(z.literal(false)),
      /**
       * An object containing any overridden product options for this checkout
       */
      product_options: ProductParamsSchema,
      /**
       * The ID of the store this checkout belongs to
       */
      store_id: z.number(),
      /**
       * A boolean indicating if the returned checkout object was created within test mode
       */
      test_mode: z.boolean(),
      /**
       * An ISO-8601 formatted date-time string indicating when the object was last updated
       *
       * @see https://en.wikipedia.org/wiki/ISO_8601
       */
      updated_at: z.string().datetime(),
      /**
       * The unique URL to access the checkout
       *
       * Note: for security reasons, download URLs are signed
       *
       * If the checkout `expires_at` is set, the URL will expire after the specified time
       */
      url: z.string().url(),
      /**
       * The ID of the variant associated with this checkout
       */
      variant_id: z.number().transform(Number),
    }),
    type: z.literal(DataType.enum.checkouts),
    id: z.string(),
  })
);

/**
 * @docs https://docs.lemonsqueezy.com/api/checkouts#the-checkout-object
 */
export const CheckoutsSchema = defineLemonSqueezySchema(
  z.array(CheckoutSchema.shape.data)
);

export const CreateCheckoutParamsSchema = z.object({
  /**
   * An object containing any prefill or custom data to be used in the checkout
   *
   * @docs https://docs.lemonsqueezy.com/help/checkout/prefilling-checkout-fields
   * @docs https://docs.lemonsqueezy.com/help/checkout/passing-custom-data
   */
  checkout_data: CheckoutDataSchema,
  /**
   * An object containing checkout options for this checkout
   */
  checkout_options: CheckoutOptionsSchema.optional(),
  /**
   * A positive integer in cents representing the custom price of the variant.
   *
   * Note: If the product purchased is a subscription, this custom price is used
   * for all renewal payments. If the subscription's variant changes in the
   * future (i.e. the customer is moved to a different subscription "tier") the
   * new variant's price will be used from that moment forward.
   */
  custom_price: z.number(),
  /**
   * An ISO-8601 formatted date-time string indicating when the checkout expires
   *
   * Can be `null` if the checkout is perpetual
   *
   * @see https://en.wikipedia.org/wiki/ISO_8601
   */
  expires_at: z.string().datetime().nullish(),
  /**
   * A boolean indicating whether to return a preview of the checkout.
   *
   * If `true`, the checkout will include a `preview` object with the checkout preview data.
   */
  preview: z.boolean().optional(),
  /**
   * An object containing any overridden product options for this checkout.
   */
  product_options: ProductParamsSchema,
  /**
   * The ID of the store this checkout belongs to.
   */
  store: z.string(),
  /**
   * The ID of the variant associated with this checkout.
   *
   * Note: by default, all variants of the related product will be shown in the checkout, with
   * your selected variant highlighted. If you want hide to other variants, you can utilise
   * the `product_options.enabled_variants` option to determine which variant(s) are
   * displayed in the checkout.
   */
  variant: z.string(),
});

export const CreateCheckoutBodySchema = z.object({
  data: z.object({
    type: z.literal(DataType.enum.checkouts),
    attributes: CreateCheckoutParamsSchema.omit({
      store: true,
      variant: true,
    }),
    relationships: z.object({
      store: z.object({
        data: z.object({
          id: z.string(),
          type: z.literal(DataType.enum.stores),
        }),
      }),
      variant: z.object({
        data: z.object({
          id: z.string(),
          type: z.literal(DataType.enum.variants),
        }),
      }),
    }),
  }),
});

export const CheckoutsParamsSchema = z.object({
  /**
   * Only return checkouts belonging to the store with this ID
   */
  store_id: z.string().optional(),
  /**
   * Only return checkouts belonging to the variant with this ID
   */
  variant_id: z.string().optional(),
});

export const CheckoutParamsSchema = z.object({
  id: z.string(),
});
