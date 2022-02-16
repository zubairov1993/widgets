import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core'
import { ForecastInterface } from '@widgets/weather/interfaces'
import { combineLatest, map, Subscription } from 'rxjs'
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
  private subGetForecast$: Subscription

  public readonly favoriteButtonSelectedState$ = combineLatest([
    this.favoriteCitiesService.data$,
    this.currentCityService.data$
  ]).pipe(
      map(([favoriteCities, currentCity]) => favoriteCities.includes(currentCity))
  )

  constructor(
    private readonly currentCityService: CurrentCityService,
    private readonly popularCitiesService: PopularCitiesService,
    private readonly favoriteCitiesService: FavoriteCitiesService,
    private readonly forecastService: CurrentCityForecastService
  ) {}

  public ngOnInit(): void {
    this.currentCityService.init();
    this.popularCitiesService.init();
    this.favoriteCitiesService.init();
    // FIXME: Add unsubscribe
    this.subUpdateForecast$ = this.forecastService.update().subscribe();
  }


  public onFavoriteButtonSelectedChange(isSelected: boolean) {
    let city
    this.subGetForecast$ = this.responseForecast$.subscribe((response: ForecastInterface) => {
      city = response.location.name.toLocaleLowerCase()
    })

    if(isSelected) {
      this.favoriteCitiesService.add(city)
    } else {
      this.favoriteCitiesService.remove(city)
    }
  }

  ngOnDestroy(): void {
    this.subUpdateForecast$.unsubscribe()
    this.subGetForecast$.unsubscribe()
  }
}

