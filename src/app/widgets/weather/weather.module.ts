import { NgModule } from "@angular/core";
import { SharedModule } from "@shared";
import { WeatherComponent } from "./weather.component";
import { CurrentCityForecastService } from "./services/forecast.service";
import { CitiesService } from "./services/cities.service";
import { PopularCitiesComponent } from "./pages/popular-cities";
import { FeaturedCitiesComponent } from "./pages/favorites-cities";
import { TimeInformationComponent } from "./components/time-information";
import { CurrentTemperatureComponent } from "./components/current-temperature";
import { CommonInformationComponent } from "./components/common-information";
import { SearchInputComponent } from "./components/search-input";
import { HeaderComponent } from "./components/header";

@NgModule({
  declarations: [
    WeatherComponent,
    SearchInputComponent,
    TimeInformationComponent,
    HeaderComponent,
    CurrentTemperatureComponent,
    CommonInformationComponent,
    PopularCitiesComponent,
    FeaturedCitiesComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    WeatherComponent
  ]
})

export class WeatherModule {}
