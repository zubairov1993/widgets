import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ForecastInterface, SearchInterface } from '@widgets/weather/interfaces/weather.interface';
import { WeatherService } from '@widgets/weather/services/weather.service';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchInputComponent {
  // FIXME: Добавить интерфейс
  @Output() newItemEvent = new EventEmitter<any>()
  citySearchValues$: Observable<SearchInterface[]>

  // В потоке citySearchValues$ сразу должна быть логика отслеживания нажатия
  // citySearchValues$ = this.searchKeyDown$.pipe(
  // Затем, мы после нажатий юзаем debounceTime.
  // Затем, switchMap'ом мы мапим проходящее событие нажатие на запрос на подгрузку айтемов.
  // В конце получаем SearchInterface[]
  // )

  // Example
  // private readonly searchKeyDown$ = new Subject();

  constructor(private weatherService: WeatherService) { }

  public searchCity(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
 
    if(inputElement.value.length > 2) {
      // this.searchKeyDown$.next(PRESSED KEY)
      this.citySearchValues$ = this.weatherService.searchCity(inputElement.value).pipe(distinctUntilChanged(), debounceTime(500))
    }
  }

  public getAndEmitForecast(name: string): void {
    // FIXME: Заменить на обычный объект/примитив
    this.newItemEvent.emit(this.weatherService.getForecast(name.toLocaleLowerCase()))
  }
}
