import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IPhoto } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent {

  photo: IPhoto | undefined;
  isAuthor: boolean = false;
  errors: Object | undefined;

  constructor (private apiService: ApiService, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {}

  getPhotoById(): void {
    this.photo = undefined;
    const id = this.activatedRoute.snapshot.params['id'];
    this.apiService.getPhotoById(id).subscribe({
      next: (photo) => {
        this.photo = photo
        if(this.authService.user?._id == photo._ownerId._id){
          this.isAuthor = true
        }else {
          this.isAuthor = false;
        }
      },
      error: (err) => {
        this.errors = err.error?.error
        console.log(err)
      }
    })
  }

}
