import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs';
import { CurrentCityForecastService, CurrentCityService, FavoriteCitiesService, PopularCitiesService } from '../../services'

@Component({
  selector: 'app-current-city-forecast',
  templateUrl: './current-city-forecast.component.html',
  styleUrls: ['./current-city-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentCityForecastComponent implements OnInit, OnDestroy {
  public responseForecast$ = this.forecastService.data$
  private subUpdateForecast$: Subscription

  constructor(
    private readonly currentCityService: CurrentCityService,
    private readonly popularCitiesService: PopularCitiesService,
    private readonly forecastService: CurrentCityForecastService
  ) {}

  public ngOnInit(): void {
    this.currentCityService.init();
    this.popularCitiesService.init();
    // FIXME: Add unsubscribe
    this.subUpdateForecast$ = this.forecastService.update().subscribe();
  }

  ngOnDestroy(): void {
    this.subUpdateForecast$.unsubscribe()
  }
}

