import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, tap } from "rxjs"
import { ForecastInterface } from "../interfaces/weather.interface"
import { CurrentCityForecastState } from "../states/current-city-forecast-state.service"
import { CurrentCityState } from "../states/current-city-state.service"
import { ForecastApiService } from "./forecast-api.service"

@Injectable({
  providedIn: 'root'
})
export class CurrentCityForecastService {
  public get data$(): Observable<ForecastInterface> {
    return this.forecastState.data$;
  }

  public get data(): ForecastInterface {
    return this.forecastState.data;
  }

  constructor(
    private readonly forecastApi: ForecastApiService,
    private readonly forecastState: CurrentCityForecastState,
    private readonly currentCityState: CurrentCityState,
  ) {}

  public update(): Observable<ForecastInterface> {
    const city = this.currentCityState.data;

    return this.forecastApi.getByCity(city)
      .pipe(
        tap((forecast) => this.forecastState.set(forecast))
      )
  }
}
