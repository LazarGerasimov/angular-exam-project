import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IPhoto } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  photosList: IPhoto[] | null = null;


  constructor(private apiService: ApiService, private authService: AuthService) { }

  get user() {
    const { email } = this.authService.user!;
    return {
      email
    };
  }

  ngOnInit(): void {
    this.apiService.getPhotosByOwner().subscribe({
      next: (value) => {
        this.photosList = value
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
