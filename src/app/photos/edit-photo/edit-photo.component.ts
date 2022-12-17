import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.scss']
})
export class EditPhotoComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router, private authService: AuthService, private acivatedRoute: ActivatedRoute) {
    
  }

  id = '';

  ngOnInit(): void {
    this.id = this.acivatedRoute.snapshot.params['id'];
  }

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    price: ['', [Validators.required, Validators.min(5)]]
  });

  updatePhotoHandler(): void {
    if (this.form.invalid) {return;}
    const {title, description, price} = this.form.value;
    const _ownerId = this.authService.user?._id;
    const photo = {title, description, price, _ownerId};
   this.apiService.editPhoto(photo, this.id).subscribe({
    next: () => this.router.navigate([`/photos/${this.id}`]),
    error: (err) => console.log(err)
   })
  }
}
