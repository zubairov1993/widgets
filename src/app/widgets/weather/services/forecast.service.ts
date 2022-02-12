import { Injectable } from "@angular/core"
import { Observable, tap } from "rxjs"
import { ForecastApiService } from "."
import { ForecastInterface } from "../interfaces"
import { CurrentCityForecastState, CurrentCityState } from "../states"

@Injectable({
  providedIn: 'root'
})
export class CurrentCityForecastService {
  public get data$(): Observable<ForecastInterface> {
    return this.currentCityForecastState.data$;
  }

  public get data(): ForecastInterface {
    return this.currentCityForecastState.data;
  }

  constructor(
    private readonly forecastApi: ForecastApiService,
    private readonly currentCityForecastState: CurrentCityForecastState,
    private readonly currentCityState: CurrentCityState,
  ) {}

  public update(): Observable<ForecastInterface> {
    const city = this.currentCityState.data;

    return this.forecastApi.getByCity(city)
      .pipe(
        tap((forecast) => this.currentCityForecastState.set(forecast))
      )
  }
}
