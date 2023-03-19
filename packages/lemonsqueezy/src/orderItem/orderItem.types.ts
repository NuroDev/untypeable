import type { DataType, LemonSqueezyResponse } from "../_shared/_shared.types";

/**
 * @docs https://docs.lemonsqueezy.com/api/order-items#the-order-item-object
 */
export type OrderItem = LemonSqueezyResponse<{
  attributes: {
    /**
     * An ISO-8601 formatted date-time string indicating when the object was created
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    created_at: Date;
    /**
     * The ID of the order this order item belongs to
     */
    order_id: number;
    /**
     * A positive integer in cents representing the price of this order item (in the order currency)
     *
     * Note, for “pay what you want” products the price will be whatever the customer entered at checkout
     */
    price: number;
    /**
     * The ID of the product associated with this order item
     */
    product_id: number;
    /**
     * The name of the product
     */
    product_name: string;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was last updated
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    updated_at: Date;
    /**
     * The ID of the variant associated with this order item
     */
    variant_id: number;
    /**
     * The name of the variant
     */
    variant_name: string;
  };
  type: DataType.order_items;
  id: string;
}>;

/**
 * @docs https://docs.lemonsqueezy.com/api/order-items#the-order-item-object
 */
export type OrderItems = LemonSqueezyResponse<Array<OrderItem["data"]>>;

export interface OrderItemParams {
  /**
   * Only return order items belonging to the order with this ID
   */
  order_id?: string;
  /**
   * Only return order items belonging to the product with this ID
   */
  product_id?: string;
  /**
   * Only return order items belonging to the variant with this ID
   */
  variant_id?: string;
}

export interface OrderItemsParams {
  id: string;
}
