import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { NewPhotoComponent } from './new-photo/new-photo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MostExpensiveComponent } from './most-expensive/most-expensive.component';

@NgModule({
  declarations: [
    MainComponent,
    PhotosListComponent,
    NewPhotoComponent,
    MostExpensiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MainComponent,
    PhotosListComponent,
  ]
})
export class PhotosModule { }
