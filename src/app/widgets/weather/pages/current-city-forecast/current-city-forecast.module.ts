import { NgModule } from "@angular/core"
import { SharedModule } from "@shared"
import { FavoriteButtonModule, ForecastCardModule } from "../../shared"
import { SearchInputComponent, TimeInformationComponent } from "./components"
import { CurrentCityForecastComponent } from "./current-city-forecast.component"

@NgModule({
  declarations: [
    SearchInputComponent,
    TimeInformationComponent,
    CurrentCityForecastComponent
  ],
  imports: [
    SharedModule,
    ForecastCardModule,
    FavoriteButtonModule,
  ],
  exports: [
    CurrentCityForecastComponent
  ]
})

export class CurrentCityForecastModule {}
