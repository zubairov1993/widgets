import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ForecastInterface } from './interfaces/weather.interface'
import { CurrentCityForecastService } from './services/forecast.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherComponent implements OnInit {

  public responseForecast$: Observable<ForecastInterface>

  constructor(private readonly forecastService: CurrentCityForecastService) {}

  public ngOnInit(): void {
    this.responseForecast$ = this.forecastService.getDefaultForecast()
  }

  public getForecast(event: string): void {
    this.responseForecast$ = this.forecastService.getForecast(event)
  }
}
