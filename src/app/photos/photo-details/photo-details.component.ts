import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IPhoto } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  photo!: IPhoto | null;
  isOwner: boolean = false;
  errors: Object | undefined;
  hasPhoto: boolean = false;
  token: string | null = localStorage.getItem('token')

  constructor (private apiService: ApiService, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.apiService.getPhotoById(id).subscribe({
      next: (photo) => {
        this.photo = photo
        this.hasPhoto = true;
        if(this.authService.user?._id == photo._ownerId){
          this.isOwner = true
        }else {
          this.isOwner = false;
        }
      },
      error: (err) => {
        this.errors = err.error?.error
        console.log(err)
      }
    })
  }

  deletePhotoHandler(): void {
    if(this.authService.user?._id != this.photo?._ownerId || !this.token){
      this.router.navigate(['**'])
    }
    const id = this.photo?._id;
    this.apiService.deletePhoto(id).subscribe({
      next: () => this.router.navigate(['/photos']),
      error: (err) => {
        console.log(err);
      }
    })
  }

}
