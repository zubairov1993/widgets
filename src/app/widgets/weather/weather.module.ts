import { NgModule } from "@angular/core"
import { SharedModule } from "@shared"
import { WeatherComponent } from "./weather.component"
import { PopularCitiesComponent } from "./pages/popular-cities"
import { CurrentCityForecastComponent } from "./pages/current-city-forecast"
import { SearchInputComponent } from "./pages/current-city-forecast/components/search-input"
import { TimeInformationComponent } from "./pages/current-city-forecast/components/time-information"
import { HeaderFavoriteComponent } from "./pages/popular-cities/components/header-favorite"
import { CurrentTemperatureFavoriteComponent } from "./pages/popular-cities/components/current-temperature-favorite"
import { CommonInformationFavoriteComponent } from "./pages/popular-cities/components/common-information-favorite"
import { FavoriteButtonModule, ForecastCardModule } from "./shared"

@NgModule({
  declarations: [
    WeatherComponent,
    SearchInputComponent,
    TimeInformationComponent,
    HeaderFavoriteComponent,
    CurrentTemperatureFavoriteComponent,
    CommonInformationFavoriteComponent,
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
