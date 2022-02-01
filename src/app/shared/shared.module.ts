import { NgModule } from "@angular/core";
import { WeatherComponent } from "../widgets/components/weather/weather.component";
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [WeatherComponent],
  exports: [WeatherComponent],
  imports: [
    MatCardModule
  ],
  providers: [],
  bootstrap: []
})

export class SharedModule {}
