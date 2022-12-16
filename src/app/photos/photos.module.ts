import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PhotosListComponent } from './photos-list/photos-list.component';

@NgModule({
  declarations: [
    MainComponent,
    PhotosListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent,
    PhotosListComponent
  ]
})
export class PhotosModule { }
