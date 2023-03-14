export enum LemonsqueezyDataType {
  checkouts = "checkouts",
  discounts = "discounts",
  files = "files",
  license_key_instances = "license-key-instances",
  license_keys = "license-keys",
  order_items = "order-items",
  orders = "orders",
  products = "products",
  stores = "stores",
  subscriptions = "subscriptions",
  users = "users",
  variants = "variants",
}

export interface LemonSqueezyResponse<
  TData,
  TLinks = {
    self: string;
  }
> {
  data: TData;
  errors?: Array<{
    detail: string;
    status: string | number;
    title: string;
  }>;
  jsonapi: {
    version: string;
  };
  links: TLinks;
}
