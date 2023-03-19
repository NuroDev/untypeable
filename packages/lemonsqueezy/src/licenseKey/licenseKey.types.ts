import type { DataType, LemonSqueezyResponse } from "../_shared/_shared.types";

/**
 * @docs https://docs.lemonsqueezy.com/api/license-keys#the-license-key-object
 */
export type LicenseKey = LemonSqueezyResponse<{
  attributes: {
    /**
     * The activation limit of this license key
     */
    activation_limit: number;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was created
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    created_at: Date;
    /**
     * Has the value `true` if this license key has been disabled
     */
    disabled: number;
    /**
     * An ISO-8601 formatted date-time string indicating when the license key expires
     *
     * Can be null if the license key is perpetual
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    expires_at: Date | null;
    /**
     * A count of the number of instances this license key has been activated on
     */
    instances_count: number;
    /**
     * A “short” representation of the license key, made up of the string “XXXX-” followed by the last 12 characters of the license key
     */
    key_short: string;
    /**
     * The ID of the order associated with this license key
     */
    order_id: number;
    /**
     * The ID of the order item associated with this license key
     */
    order_item_id: number;
    /**
     * The ID of the product associated with this license key
     */
    product_id: number;
    /**
     * The formatted status of the license key
     */
    status_formatted: string;
    /**
     * The status of the license key
     *
     * One of `inactive`, `active`, `expired`, `disabled`
     */
    status: "inactive" | "active" | "expired" | "disabled";
    /**
     * The ID of the store this license key belongs to
     */
    store_id: number;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was last updated
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    updated_at: Date;
    /**
     * The email address of the customer
     */
    user_email: string;
    /**
     * The full name of the customer
     */
    user_name: string;
  };
  type: DataType.license_keys;
  id: string;
}>;

/**
 * @docs https://docs.lemonsqueezy.com/api/license-keys#the-license-key-object
 */
export type LicenseKeys = LemonSqueezyResponse<Array<LicenseKey["data"]>>;

export interface LicenseKeysParams {
  /**
   * Only return license keys belonging to the order with this ID
   */
  order_id?: string;
  /**
   * Only return license keys belonging to the order item with this ID
   */
  order_item_id?: string;
  /**
   * Only return license keys belonging to the product with this ID
   */
  product_id?: string;
  /**
   * Only return license keys belonging to the store with this ID
   */
  store_id?: string;
}

export interface LicenseKeyParams {
  id: string;
}
