import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { ForecastInterface } from '../../../../interfaces'

@Component({
  selector: 'forecast-card-info',
  templateUrl: './forecast-card-info.component.html',
  styleUrls: ['./forecast-card-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastCardInfoComponent {
  @Input() data: ForecastInterface = null
}
