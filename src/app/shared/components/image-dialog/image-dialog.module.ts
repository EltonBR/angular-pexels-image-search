import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDialogComponent } from './image-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    ImageDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    LazyLoadImageModule
  ]
})
export class ImageDialogModule { }
