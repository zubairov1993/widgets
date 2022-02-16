import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FavoriteButtonComponent } from './favorite-button.component';

@NgModule({
  declarations: [
    FavoriteButtonComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FavoriteButtonComponent
  ]
})
export class FavoriteButtonModule {}
