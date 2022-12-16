import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  user!: IUser | null;

  get isLoggedIn() {
    return this.user !== null;
  }

  // register(email: string, password: string) {
  //   return this.http.post<IUser>('/auth/register', { email, password });
  // }

  register(data: {}) {
    return this.http.post<IUser>(`${apiUrl}auth/register`, data).pipe(
      tap((user) => {
        this.user = user
      })
    )
  }

  login(email: string, password: string) {
    return this.http.post<IUser>(`${apiUrl}auth/login`, { email, password });
  }

  // logout() {
  //   return this.http.post<void>('/auth/logout', {});
  // }
}
