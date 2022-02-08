import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { SearchInterface } from '@widgets/weather/interfaces/weather.interface';
import { WeatherService } from '@widgets/weather/services/weather.service';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchInputComponent {
  @Output() newItemEvent = new EventEmitter<any>()
  citySearchValues$: Observable<SearchInterface[]>

  constructor(private weatherService: WeatherService) { }

  public searchCity(event: any): void {
    if(event.target.value.length > 2) {
      this.citySearchValues$ = this.weatherService.searchCity(event.target.value).pipe(distinctUntilChanged(), debounceTime(500))
    }
  }

  public getAndEmitForecast(name: string): void {
    this.newItemEvent.emit(this.weatherService.getForecast(name.toLocaleLowerCase()))
  }

}
