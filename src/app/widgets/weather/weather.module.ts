import { NgModule } from "@angular/core"
import { SharedModule } from "@shared"
import { WeatherComponent } from "./weather.component"
import { CurrentCityForecastModule, PopularCitiesModule } from './pages'

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
  ]
})

export class WeatherModule {}
