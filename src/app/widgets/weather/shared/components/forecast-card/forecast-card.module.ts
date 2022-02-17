import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CommonInformationComponent } from './common-information';
import { CurrentTemperatureComponent } from './current-temperature';
import { HeaderComponent } from './header';

@NgModule({
  declarations: [
    CommonInformationComponent,
    CurrentTemperatureComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CommonInformationComponent,
    CurrentTemperatureComponent,
    HeaderComponent
  ]
})
export class ForecastCardModule {}
