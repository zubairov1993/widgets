import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CommonInformationComponent } from './common-information';
import { CurrentTemperatureComponent } from './current-temperature';
import { HeaderComponent } from './header';
import { FavoriteButtonModule } from '../favorite-button';

@NgModule({
  declarations: [
    CommonInformationComponent,
    CurrentTemperatureComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    FavoriteButtonModule
  ],
  exports: [
    CommonInformationComponent,
    CurrentTemperatureComponent,
    HeaderComponent
  ]
})
export class ForecastCardModule {}
