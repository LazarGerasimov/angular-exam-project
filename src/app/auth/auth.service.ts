import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  user!: IUser[] | null;

  get isLoggedIn() {
    return this.user !== null;
  }

  register(email: string, password: string) {
    return this.http.post<IUser>('/auth/register', { email, password });
  }

  login(email: string, password: string) {
    return this.http.post<any>('/auth/login', { email, password });
  }

  logout() {
    return this.http.post<void>('/auth/logout', {});
  }
}
