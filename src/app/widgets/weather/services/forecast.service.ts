import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { ForecastInterface } from "../interfaces/weather.interface"

@Injectable()
export class CurrentCityForecastService {
  private readonly API_KEY = '?key=323d5cfed0fd46809ad41945220502&q='
  private readonly domain = 'http://api.weatherapi.com/v1'

  constructor(private readonly http: HttpClient) {}

  getForecast(city: string): Observable<ForecastInterface> {
    // FIXME: Move to another place
    localStorage.setItem('defaultCity', JSON.stringify(city))
    return this.http.get<ForecastInterface>(`${this.domain}/forecast.json${this.API_KEY}${city}&days=10&aqi=no&alerts=no&lang=ru`)
  }

  getDefaultForecast(): Observable<ForecastInterface> {
    let city = localStorage.getItem('defaultCity') ? localStorage.getItem('defaultCity') : 'kiev'
    return this.http.get<ForecastInterface>(`${this.domain}/forecast.json${this.API_KEY}${city}&days=10&aqi=no&alerts=no&lang=ru`)
  }
}