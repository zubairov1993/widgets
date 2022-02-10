import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ForecastInterface } from '@widgets/weather/interfaces/weather.interface';

@Component({
  selector: 'app-current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CurrentTemperatureComponent {
  @Input() data: ForecastInterface = null
}