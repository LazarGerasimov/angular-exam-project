import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // constructor (private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  // form = this.fb.group({
  //   email: ['', [Validators.required]],
  //   password: ['', [Validators.required, Validators.minLength(5)]]
  // });


}
