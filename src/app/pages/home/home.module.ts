import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WeatherModule } from "src/app/widgets";
import { SharedModule } from "../../shared/shared.module";
import { CardComponent } from "../card/card.component";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    SharedModule,
    WeatherModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, children: [] }
    ])
  ],
})

export class HomeModule {}
