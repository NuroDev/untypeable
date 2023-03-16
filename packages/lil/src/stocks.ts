export interface StocksParams {
  symbol: string;
}

export interface Stock {
  current: number;
  high: number;
  low: number;
  name: string | null;
  open: number;
  previous_close: number;
}
