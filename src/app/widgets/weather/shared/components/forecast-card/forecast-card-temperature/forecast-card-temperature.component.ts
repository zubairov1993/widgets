import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { ForecastInterface } from '../../../../interfaces'

@Component({
  selector: 'forecast-card-temperature',
  templateUrl: './forecast-card-temperature.component.html',
  styleUrls: ['./forecast-card-temperature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ForecastCardTemperatureComponent {
  @Input() data: ForecastInterface = null
}
