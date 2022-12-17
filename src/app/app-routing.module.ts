import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { EditPhotoComponent } from './photos/edit-photo/edit-photo.component';
import { MostExpensiveComponent } from './photos/most-expensive/most-expensive.component';
import { MostRecentComponent } from './photos/most-recent/most-recent.component';
import { NewPhotoComponent } from './photos/new-photo/new-photo.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { AuthGuard } from './shared/guards/guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'photos', 
    pathMatch: 'full',
    component: PhotosListComponent,
    canActivate: [AuthGuard],
    data: {
      'guest': false
    }
  },
  {
    path: 'photos/create', 
    pathMatch: 'full',
    component: NewPhotoComponent,
    canActivate: [AuthGuard],
    data: {
      'guest': false
    }
  },
  {
    path: 'photos/most-expensive', 
    pathMatch: 'full',
    component: MostExpensiveComponent,
    canActivate: [AuthGuard],
    data: {
      'guest': false
    }
  },
  {
    path: 'photos/most-recent', 
    pathMatch: 'full',
    component: MostRecentComponent,
    canActivate: [AuthGuard],
    data: {
      'guest': true
    }
  },
  {
    path: `photos/:id`, 
    pathMatch: 'full',
    component: PhotoDetailsComponent,
    canActivate: [AuthGuard],
    data: {
      'guest': false
    }
  },
  {
    path: `photos/edit/:id`, 
    pathMatch: 'full',
    component: EditPhotoComponent,
    canActivate: [AuthGuard],
    data: {
      'guest': false
    }
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
