import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { setSession } from 'src/app/shared/session/session';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) { }

  // loginHandler(form: NgForm): void {
  //   if (form.invalid) { return; }

  //  const {email, password} = form.value;

  //   this.authService.login(email!, password!).subscribe((user) => {
  //     this.authService.user = user;
  //     this.router.navigate(['/']);
  //   })
  // }

  form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) { }

  errors: string | undefined = undefined

  loginHandler(): void {
    if (this.form.invalid) {return;}
    const { email, password } = this.form.value

    this.authService.login(email!, password!).subscribe({
      next: (user) => {
        setSession(user)
        this.authService.setLoginInfo(user, true)
        this.router.navigate(['/'])
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

}
