import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ForecastInterface } from '@widgets/weather/interfaces';
import { ForecastApiService } from '@widgets/weather/services';
import { forkJoin, Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services';

@Component({
  selector: 'app-favorites-cities',
  templateUrl: './favorites-cities.component.html',
  styleUrls: ['./favorites-cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedCitiesComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
    private forecastApiService: ForecastApiService,
    private cdr: ChangeDetectorRef
  ) {}

  allData: ForecastInterface[] = null

  public ngOnInit(): void {
    this.initCities()
  }

  public initCities() {
    let favoritesCities = this.localStorageService.get('favoritesCities') as string[]

    let arrayRequest: Observable<any>[] = []
    favoritesCities?.forEach((city: string) => {
      arrayRequest.push(this.forecastApiService.getByCity(city))
    })

    forkJoin(arrayRequest).subscribe(val => {
      this.allData = val
      this.cdr.detectChanges()
    })
  }
}
