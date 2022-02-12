import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { ForecastInterface } from '@widgets/weather/interfaces'

@Component({
  selector: 'app-common-information-favorite',
  templateUrl: './common-information-favorite.component.html',
  styleUrls: ['./common-information-favorite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonInformationFavoriteComponent {
  @Input() data: ForecastInterface = null
}
