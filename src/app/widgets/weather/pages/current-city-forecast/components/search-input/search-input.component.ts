import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { SearchInterface } from '@widgets/weather/interfaces'
import { CitiesService, CurrentCityForecastService, CurrentCityService } from '@widgets/weather/services'
import { debounceTime, Observable, Subject, switchMap } from 'rxjs'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchInputComponent implements OnInit {
  public citySearchValues$: Observable<SearchInterface[]>

  private readonly searchKeyDown$ = new Subject<string>()

  constructor(
    private readonly currentCityService: CurrentCityService,
    private readonly citiesService: CitiesService,
    private readonly currentCityForecastService: CurrentCityForecastService
  ) {}

  public ngOnInit(): void {
    this.initCitySearchValuesObservable()
  }

  public searchCity(event: Event): void {
    const inputElement = event.target as HTMLInputElement

    this.searchKeyDown$.next(inputElement.value)
  }

  public onAutocompleteItemClick(name: string): void {
    const cityName = name.toLocaleLowerCase();

    this.currentCityService.apply(cityName);
    // FIXME: Add unsubscribe
    this.currentCityForecastService.update().subscribe();
  }

  private initCitySearchValuesObservable(): void {
    this.citySearchValues$ = this.searchKeyDown$
      .pipe(
        debounceTime(500),
        switchMap((searchString) => this.citiesService.searchCity(searchString))
      )
  }
}
