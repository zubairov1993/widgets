import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { SearchInterface } from "../interfaces/weather.interface"

@Injectable()
export class CitiesService {
  private readonly API_KEY = '?key=323d5cfed0fd46809ad41945220502&q='
  private readonly domain = 'http://api.weatherapi.com/v1'

  constructor(private readonly http: HttpClient) {}

  searchCity(value: string): Observable<SearchInterface[]> {
    return this.http.get<SearchInterface[]>(`${this.domain}/search.json${this.API_KEY}${value}`)
  }
}
