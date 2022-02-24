import { NgModule } from "@angular/core"
import { SharedModule } from "@shared"
import { WeatherComponent } from "./weather.component"
import { CurrentCityForecastModule, PopularCitiesModule } from './pages'
import { CitiesApiService, ForecastApiService } from "./api"
import { CitiesService, CurrentCityForecastService, CurrentCityService, FavoriteCitiesService, ForecastService, PopularCitiesService } from "./services"
import { CurrentCityForecastState, CurrentCityState, FavoriteCitiesState, PopularCitiesState } from "./states"

@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    SharedModule,
    CurrentCityForecastModule,
    PopularCitiesModule
  ],
  exports: [
    WeatherComponent
  ],
  providers: [
    CitiesApiService,
    CitiesService,
    CurrentCityForecastService,
    CurrentCityService,
    CurrentCityState,
    FavoriteCitiesService,
    FavoriteCitiesState,
    ForecastService,
    ForecastApiService,
    CurrentCityForecastState,
    PopularCitiesService,
    PopularCitiesState,
  ]
})

export class WeatherModule {}
