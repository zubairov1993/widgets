import { NgModule } from "@angular/core";
import { SharedModule } from "@shared";
import { WeatherService } from "@widgets/services/weather.service";
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
  ],
  providers: [WeatherService]
})

export class WeatherModule {}
