import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrls: ['./new-photo.component.scss']
})
export class NewPhotoComponent {

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router, private authService: AuthService) {
    
  }

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    price: ['', [Validators.required, Validators.min(5)]],
    img: ['', [Validators.required]],
  });

  newPhotoHandler(): void {
    if (this.form.invalid) {return;}
    const {title, description, price, img} = this.form.value;
    const _ownerId = this.authService.user?._id;
    const photo = {title, description, price, img, _ownerId};
   this.apiService.uploadPhoto(photo).subscribe({
    next: () => this.router.navigate(['/photos']),
    error: (err) => console.log(err)
   })
  }
}
