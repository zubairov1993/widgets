import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ForecastInterface } from '@widgets/weather/interfaces/weather.interface';

@Component({
  selector: 'app-common-information',
  templateUrl: './common-information.component.html',
  styleUrls: ['./common-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonInformationComponent {
  @Input() data: ForecastInterface = null
}
