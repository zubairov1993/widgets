import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ForecastInterface } from '@widgets/weather/interfaces';
import { ForecastService } from '@widgets/weather/services/forecast.service';
import { Observable } from 'rxjs';
import { FavoriteCitiesService } from '../../services';

@Component({
  selector: 'app-favorites-cities',
  templateUrl: './favorites-cities.component.html',
  styleUrls: ['./favorites-cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedCitiesComponent implements OnInit {
  constructor(
    private readonly favoriteCitiesService: FavoriteCitiesService,
    private readonly forecastService: ForecastService
  ) {}

  public cityForecasts$: Observable<ForecastInterface[]> = null

  public ngOnInit(): void {
    this.initCityForecasts()
  }

  public initCityForecasts() {
    this.cityForecasts$ = this.forecastService.getByCities(this.favoriteCitiesService.data)
  }
}
