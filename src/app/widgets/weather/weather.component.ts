import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { CurrentCityService } from './services/current-city.service';
import { CurrentCityForecastService } from './services/forecast.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherComponent implements OnInit {
  public responseForecast$ = this.forecastService.data$;

  constructor(
    private readonly currentCityService: CurrentCityService,
    private readonly forecastService: CurrentCityForecastService
  ) {}

  public ngOnInit(): void {
    this.currentCityService.init();
    // FIXME: Add unsubscribe
    this.forecastService.update()
      .subscribe();
  }
}
