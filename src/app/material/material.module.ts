import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const materialComponents =[
MatDialogModule,
MatFormFieldModule,
MatInputModule
]

@NgModule({
  imports: [
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }
