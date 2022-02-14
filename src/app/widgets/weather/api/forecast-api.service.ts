import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ForecastInterface } from '../interfaces'

@Injectable({
    providedIn: 'root'
})
export class ForecastApiService {
  private readonly API_KEY = '?key=323d5cfed0fd46809ad41945220502&q='
  private readonly domain = 'http://api.weatherapi.com/v1'

  constructor(
    private readonly http: HttpClient
  ) {}

  public getByCity(city: string): Observable<ForecastInterface> {
    return this.http.get<ForecastInterface>(`${this.domain}/forecast.json${this.API_KEY}${city}&days=10&aqi=no&alerts=no&lang=ru`);
  }
}
