import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WeatherModule } from "src/app/widgets";
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    WeatherModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, children: [] }
    ])
  ],
})

export class HomeModule {}
