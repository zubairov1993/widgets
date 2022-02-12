import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { CurrentCityForecastService, CurrentCityService } from '@widgets/weather/services'

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
    private readonly forecastService: CurrentCityForecastService
  ) {}

  public ngOnInit(): void {
    this.currentCityService.init();
    // FIXME: Add unsubscribe
    this.forecastService.update().subscribe();
  }
}

