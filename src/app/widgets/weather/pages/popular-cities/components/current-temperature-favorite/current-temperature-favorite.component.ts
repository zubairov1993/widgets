import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { ForecastInterface } from '../../../../interfaces'

@Component({
  selector: 'app-current-temperature-favorite',
  templateUrl: './current-temperature-favorite.component.html',
  styleUrls: ['./current-temperature-favorite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CurrentTemperatureFavoriteComponent {
  @Input() data: ForecastInterface = null
}
