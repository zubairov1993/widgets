import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { CurrentCityForecastService, CurrentCityService, FavoriteCitiesService } from '../../services'

@Component({
  selector: 'app-current-city-forecast',
  templateUrl: './current-city-forecast.component.html',
  styleUrls: ['./current-city-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentCityForecastComponent implements OnInit {
  public responseForecast$ = this.forecastService.data$;

  constructor(
    private readonly currentCityService: CurrentCityService,
    private readonly favoriteCitiesService: FavoriteCitiesService,
    private readonly forecastService: CurrentCityForecastService
  ) {}

  public ngOnInit(): void {
    this.currentCityService.init();
    this.favoriteCitiesService.init();
    // FIXME: Add unsubscribe
    this.forecastService.update().subscribe();
  }
}

