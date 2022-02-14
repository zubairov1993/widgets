import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ForecastInterface } from '../../interfaces';
import { ForecastService, PopularCitiesService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-popular-cities',
  templateUrl: './popular-cities.component.html',
  styleUrls: ['./popular-cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularCitiesComponent {
  constructor(
    private readonly popularCitiesService: PopularCitiesService,
    private readonly forecastService: ForecastService
  ) {}

  public cityForecasts$: Observable<ForecastInterface[]> = null

  public ngOnInit(): void {
    this.initCityForecasts()
  }

  public initCityForecasts() {
    this.cityForecasts$ = this.forecastService.getByCities(this.popularCitiesService.data)
  }

}
