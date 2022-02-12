import { NgModule } from "@angular/core"
import { SharedModule } from "@shared"
import { WeatherComponent } from "./weather.component"
import { PopularCitiesComponent } from "./pages/popular-cities"
import { FeaturedCitiesComponent } from "./pages/favorites-cities"
import { CurrentCityForecastComponent } from "./pages/current-city-forecast"
import { SearchInputComponent } from "./pages/current-city-forecast/components/search-input"
import { TimeInformationComponent } from "./pages/current-city-forecast/components/time-information"
import { HeaderComponent } from "./pages/current-city-forecast/components/header"
import { CurrentTemperatureComponent } from "./pages/current-city-forecast/components/current-temperature"
import { CommonInformationComponent } from "./pages/current-city-forecast/components/common-information"
import { HeaderFavoriteComponent } from "./pages/favorites-cities/components/header-favorite"
import { CurrentTemperatureFavoriteComponent } from "./pages/favorites-cities/components/current-temperature-favorite"
import { CommonInformationFavoriteComponent } from "./pages/favorites-cities/components/common-information-favorite"

@NgModule({
  declarations: [
    WeatherComponent,
    SearchInputComponent,
    TimeInformationComponent,
    HeaderComponent,
    HeaderFavoriteComponent,
    CurrentTemperatureComponent,
    CurrentTemperatureFavoriteComponent,
    CommonInformationComponent,
    CommonInformationFavoriteComponent,
    PopularCitiesComponent,
    FeaturedCitiesComponent,
    CurrentCityForecastComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    WeatherComponent
  ]
})

export class WeatherModule {}
