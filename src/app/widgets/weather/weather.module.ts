import { NgModule } from "@angular/core";
import { SharedModule } from "@shared";
import { WeatherComponent } from "./weather.component";

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    WeatherComponent
  ]
})

export class WeatherModule {}
