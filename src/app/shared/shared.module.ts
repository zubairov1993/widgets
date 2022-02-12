import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule }  from '@angular/material/autocomplete';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { FavoriteButtonComponent } from "./favorite-button";

@NgModule({
  imports: [
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule
  ],
  exports: [
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FavoriteButtonComponent,
    MatTabsModule
  ],
  declarations: [
    FavoriteButtonComponent
  ]
})

export class SharedModule {}
