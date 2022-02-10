import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptocurrencyComponent } from './cryptocurrency.component';
import { SharedModule } from '@shared';



@NgModule({
  declarations: [
    CryptocurrencyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CryptocurrencyComponent
  ]
})
export class CryptocurrencyModule { }
