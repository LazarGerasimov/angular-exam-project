import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
import { getSession, logoutSession } from '../shared/session/session';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  user: IUser | null = null;

  isLogged: boolean = false;

  get isLoggedIn() {
    return this.user !== null;
  }

  // register(email: string, password: string) {
  //   return this.http.post<IUser>('/auth/register', { email, password });
  // }

  register(email: string, password: string) {
    return this.http.post<IUser>(`${apiUrl}auth/register`, { email, password })
    // .pipe(
    //   tap((user) => {
    //     this.user = user
    //   })
    // )
  }

  login(email: string, password: string) {
    return this.http.post<IUser>(`${apiUrl}auth/login`, {email, password});
  }

  logout() {
    if (!getSession()) { return }
    logoutSession()
    this.setLoginInfo(null, false)
    this.router.navigate(['/'])
  }

  setLoginInfo(user: IUser | null, status: boolean) {
    return (
      this.user = user,
      this.isLogged = status
    );
  }
}
