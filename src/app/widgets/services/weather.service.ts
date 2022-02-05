import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable()
export class WeatherService {
  API_KEY = '?key=323d5cfed0fd46809ad41945220502&q='
  domain = 'http://api.weatherapi.com/v1'


  constructor(private http: HttpClient) {}


  searchCity(value: string) {
    return this.http.get(`${this.domain}/search.json${this.API_KEY}${value}`)
  }

  getCurretWeather(value: string) {
    return this.http.get(`${this.domain}/current.json${this.API_KEY}${value}&aqi=no`)
  }

  getForecast(value: string) {
    return this.http.get(`${this.domain}/forecast.json${this.API_KEY}${value}&days=4&aqi=no&alerts=no&lang=ru`)
  }
}

