import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { IPhoto } from './shared/interfaces';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  loadPhotos() {
    return this.http.get<IPhoto[]>(`${apiUrl}photos`);
  }
  // TODO add db requests
}
