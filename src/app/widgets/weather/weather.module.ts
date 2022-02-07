import { NgModule } from "@angular/core";
import { SharedModule } from "@shared";
import { WeatherService } from "@widgets/weather/services/weather.service";
import { WeatherComponent } from "./weather.component";
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TimeInformationComponent } from './components/time-information/time-information.component';

@NgModule({
  declarations: [
    WeatherComponent,
    SearchInputComponent,
    TimeInformationComponent
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
