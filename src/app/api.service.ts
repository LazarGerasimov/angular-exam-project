import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { IPhoto } from './shared/interfaces';
import { getSession } from './shared/session/session';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  loadPhotos() {
    return this.http.get<IPhoto[]>(`${apiUrl}photos`);
  }

  uploadPhoto(data: {}) {
    return this.http.post(`${apiUrl}photos/create`, data);
  }
  // TODO add db requests
}
