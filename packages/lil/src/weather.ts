export interface WeatherParams {
  latitude: number;
  longitude: number;
}

interface Forecast {
  description: string;
  name: string;
  temperature: number;
  unit: "C" | "F";
}

export interface Weather {
  error?: boolean;
  forecast?: Array<Forecast>;
}
