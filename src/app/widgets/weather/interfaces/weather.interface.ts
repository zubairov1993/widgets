export interface SearchInterface {
  country: string
  id: number
  lat: number
  lon: number
  name: string
  region: string
  url: string
}

export interface ForecastInterface {
  current: CurrentInterface
  forecast: ForecastInForecastInterface
  location: LocationInterface
}

interface CurrentInterface {
  cloud: number
  condition: ConditionInterface
  feelslike_c: number
  feelslike_f: number
  gust_kph: number
  gust_mph: number
  humidity: number
  is_day: number
  last_updated: string
  last_updated_epoch: number
  precip_in: number
  precip_mm: number
  pressure_in: number
  pressure_mb: number
  temp_c: number
  temp_f: number
  uv: number
  vis_km: number
  vis_miles: number
  wind_degree: number
  wind_dir: string
  wind_kph: number
  wind_mph: number
}

interface ForecastInForecastInterface {
  forecastday: ForecastDayInForecastInterface[]
}

interface LocationInterface {
  country: string
  lat: number
  localtime: string
  localtime_epoch: number
  lon: number
  name: string
  region: string
  tz_id: string
}

interface ForecastDayInForecastInterface {
  astro: AstroInterface
  date: string
  date_epoch: number
  day: DayInForecastDayInterface
  hour: HourInForecastDayInterface[]
}

interface AstroInterface {
  moon_illumination: string
  moon_phase: string
  moonrise: string
  moonset: string
  sunrise: string
  sunset: string
}

interface DayInForecastDayInterface {
  avghumidity: number
  avgtemp_c: number
  avgtemp_f: number
  avgvis_km: number
  avgvis_miles: number
  condition: ConditionInterface
  daily_chance_of_rain: number
  daily_chance_of_snow: number
  daily_will_it_rain: number
  daily_will_it_snow: number
  maxtemp_c: number
  maxtemp_f: number
  maxwind_kph: number
  maxwind_mph: number
  mintemp_c: number
  mintemp_f: number
  totalprecip_in: number
  totalprecip_mm: number
  uv: number
}

export interface HourInForecastDayInterface {
  chance_of_rain: number
  chance_of_snow: number
  cloud: number
  condition: ConditionInterface
  dewpoint_c: number
  dewpoint_f: number
  feelslike_c: number
  feelslike_f: number
  gust_kph: number
  gust_mph: number
  heatindex_c: number
  heatindex_f: number
  humidity: number
  is_day: number
  precip_in: number
  precip_mm: number
  pressure_in: number
  pressure_mb: number
  temp_c: number
  temp_f: number
  time: string
  time_epoch: number
  uv: number
  vis_km: number
  vis_miles: number
  will_it_rain: number
  will_it_snow: number
  wind_degree: number
  wind_dir: string
  wind_kph: number
  wind_mph: number
  windchill_c: number
  windchill_f: number
}

interface ConditionInterface {
  text: string
  icon: string
  code: number
}

