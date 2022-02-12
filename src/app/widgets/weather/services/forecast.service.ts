import { Injectable } from "@angular/core"
import { forkJoin, Observable } from "rxjs"
import { ForecastApiService } from "../api"
import { ForecastInterface } from "../interfaces"

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor(
    private readonly forecastApi: ForecastApiService,
  ) {}

  public getByCities(cities: string[]): Observable<ForecastInterface[]> {
    let forecastRequests: Observable<any>[] = cities
      .map((city) => this.forecastApi.getByCity(city));

    return forkJoin(forecastRequests);
  }
}
