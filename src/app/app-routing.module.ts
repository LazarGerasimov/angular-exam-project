import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { NewPhotoComponent } from './photos/new-photo/new-photo.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'photos', 
    pathMatch: 'full',
    component: PhotosListComponent
  },
  {
    path: 'photos/create', 
    pathMatch: 'full',
    component: NewPhotoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
