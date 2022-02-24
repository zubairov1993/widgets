import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ForecastCardInfoComponent } from './forecast-card-info';
import { ForecastCardTemperatureComponent } from './forecast-card-temperature';
import { ForecastCardHeaderComponent } from './forecast-card-header';

@NgModule({
  declarations: [
    ForecastCardInfoComponent,
    ForecastCardTemperatureComponent,
    ForecastCardHeaderComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ForecastCardInfoComponent,
    ForecastCardTemperatureComponent,
    ForecastCardHeaderComponent
  ]
})
export class ForecastCardModule {}
