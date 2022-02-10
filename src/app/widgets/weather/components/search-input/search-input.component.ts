import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'
import { SearchInterface } from '@widgets/weather/interfaces/weather.interface'
import { CitiesService } from '@widgets/weather/services/cities.service'
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchInputComponent {
  // FIXME: Добавить интерфейс
  @Output() newItemEvent = new EventEmitter<string>()
  citySearchValues$: Observable<SearchInterface[]>

  // В потоке citySearchValues$ сразу должна быть логика отслеживания нажатия
  // citySearchValues$ = this.searchKeyDown$.pipe(
  // Затем, мы после нажатий юзаем debounceTime.
  // Затем, switchMap'ом мы мапим проходящее событие нажатие на запрос на подгрузку айтемов.
  // В конце получаем SearchInterface[]
  // )

  // Example
  private readonly searchKeyDown$ = new Subject();

  constructor(private citiesService: CitiesService) { }

  public searchCity(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    if(inputElement.value.length > 2) {
      // this.searchKeyDown$.next(inputElement.value)

      // this.citySearchValues$ = this.searchKeyDown$.pipe(
      //   debounceTime(500),
      //   switchMap((value: any) => this.citiesService.searchCity(value))
      // )

      this.citySearchValues$ = this.citiesService.searchCity(inputElement.value).pipe(distinctUntilChanged(), debounceTime(500))
    }
  }

  public emitCityName(name: string): void {
    this.newItemEvent.emit(name.toLocaleLowerCase())
  }
}
