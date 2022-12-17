import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { NewPhotoComponent } from './new-photo/new-photo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MostExpensiveComponent } from './most-expensive/most-expensive.component';
import { MostRecentComponent } from './most-recent/most-recent.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainComponent,
    PhotosListComponent,
    NewPhotoComponent,
    MostExpensiveComponent,
    MostRecentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MainComponent,
    PhotosListComponent,
  ]
})
export class PhotosModule { }
