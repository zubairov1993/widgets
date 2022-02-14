import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WeatherModule, CryptocurrencyModule } from "src/app/widgets";
import { SharedModule } from "../../shared/shared.module";
import { CardComponent } from "./components";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    SharedModule,
    WeatherModule,
    CryptocurrencyModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, children: [] }
    ])
  ],
})

export class HomeModule {}
