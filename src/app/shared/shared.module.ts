import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule }  from '@angular/material/autocomplete';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    MatCardModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
    MatInputModule
  ]
})

export class SharedModule {}
