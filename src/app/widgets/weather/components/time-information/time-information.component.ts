import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { HourInForecastDayInterface } from '@widgets/weather/interfaces/weather.interface';

@Component({
  selector: 'app-time-information',
  templateUrl: './time-information.component.html',
  styleUrls: ['./time-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TimeInformationComponent {
  @Input() itemsHour: HourInForecastDayInterface[] = null
  @Input() mainHour: string = null

  constructor() { }

  getMainHourNumber(time: string): number {
    return new Date(time).getHours()
  }

}
