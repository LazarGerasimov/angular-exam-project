import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IPhoto } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.scss']
})
export class EditPhotoComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router, private authService: AuthService, private acivatedRoute: ActivatedRoute) {

  }

  id: string = '';
  photo: IPhoto | null = null;
  token: string | null = localStorage.getItem('token')

  ngOnInit(): void {
    this.id = this.acivatedRoute.snapshot.params['id'];
    this.apiService.getPhotoById(this.id).subscribe({
      next: (photo) => {
        this.photo = photo;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    price: ['', [Validators.required, Validators.min(5)]]
  });

  updatePhotoHandler(): void {
    if (this.form.invalid) { return; }
    const { title, description, price } = this.form.value;
    // const _ownerId = this.authService.user?._id;
    // this.id = this.acivatedRoute.snapshot.params['id'];
    const photo = { title, description, price};
    this.apiService.updatePhoto(this.id, photo).subscribe({
      next: () => this.router.navigate([`/photos/${this.id}`]),
      error: (err) => console.log(err)
    })
  }

  
}
