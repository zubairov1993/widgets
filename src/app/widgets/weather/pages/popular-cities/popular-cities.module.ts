import { NgModule } from "@angular/core"
import { SharedModule } from "@shared"
import { ForecastCardModule } from "@widgets/weather/shared"
import { PopularCitiesComponent } from "."

@NgModule({
  declarations: [
    PopularCitiesComponent
  ],
  imports: [
    SharedModule,
    ForecastCardModule,
  ],
  exports: [
    PopularCitiesComponent
  ]
})

export class PopularCitiesModule {}
