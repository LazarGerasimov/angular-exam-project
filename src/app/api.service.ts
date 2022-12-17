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

  getMostExpensive() {
    return this.http.get<IPhoto[]>(`${apiUrl}photos/most-expensive`);
  }

  getRecent() {
    return this.http.get<IPhoto[]>(`${apiUrl}photos/most-recent`);
  }

  getPhotoById(id: string) {
    return this.http.get<IPhoto>(`${apiUrl}photos/${id}`)
  }

  updatePhoto(id: string | undefined, photo: {}) {
    return this.http.put<IPhoto>(`${apiUrl}photos/${id}`, photo);
  }

  deletePhoto(id: string | undefined) {
    return this.http.delete(`${apiUrl}photos/${id}`);
  }

  getPhotosByOwner() {
    return this.http.get<IPhoto[]>(`${apiUrl}auth/profile`);
  }
  // TODO add db requests
}
