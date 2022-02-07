import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WeatherService } from '@widgets/weather/services/weather.service';
import { Observable } from 'rxjs';
import { ForecastInterface } from './interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherComponent implements OnInit {

  responseForecast$: Observable<ForecastInterface>
  days: string[] = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.responseForecast$ = this.weatherService.getDefaultForecast()
  }

  initForecast(event: Observable<ForecastInterface>): void {
    this.responseForecast$ = event
  }

  getDayOfWeek(date: string): string {
    return this.days[new Date(date).getDay()]
  }
}
