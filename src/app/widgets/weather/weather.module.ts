import { NgModule } from "@angular/core"
import { SharedModule } from "@shared"
import { WeatherComponent } from "./weather.component"
import { FavoriteButtonModule, ForecastCardModule } from "./shared"
import { CurrentCityForecastComponent, PopularCitiesComponent, SearchInputComponent, TimeInformationComponent } from './pages'

@NgModule({
  declarations: [
    WeatherComponent,
    SearchInputComponent,
    TimeInformationComponent,
    PopularCitiesComponent,
    CurrentCityForecastComponent
  ],
  imports: [
    SharedModule,
    FavoriteButtonModule,
    ForecastCardModule
  ],
  exports: [
    WeatherComponent
  ]
})

export class WeatherModule {}
