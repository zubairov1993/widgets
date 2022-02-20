import { NgModule } from "@angular/core"
import { SharedModule } from "@shared"
import { FavoriteButtonModule, ForecastCardModule } from "@widgets/weather/shared"
import { CurrentCityForecastComponent, SearchInputComponent, TimeInformationComponent } from "."

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
